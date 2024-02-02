
const puppeteer = require('puppeteer');
const express = require('express');
const fs = require('fs');
const path = require('path');

// Configure and start an Express server to serve images
const app = express();
const port = 3000; // Choose an available port
const imagesDirectory = path.join(__dirname, 'screenshots');
app.use('/screenshots', express.static(imagesDirectory));

const server = app.listen(port, () => console.log(`Server running on http://localhost:${port}`));

function generateHtmlForImages(images) {
  let imagesHtml = '';
  images.forEach((img, index) => {
    const imageName = path.basename(img, path.extname(img)); // Remove file extension from the name
    // Open a new div.page for every group of 6 images
    if (index % 6 === 0) imagesHtml += '<div class="page">';
    imagesHtml += `
      <div class="image-container">
        <img src="http://localhost:${port}/screenshots/${img}" alt="${imageName}">
        <p class="caption">${imageName}</p>
      </div>`;
    // Close the div.page every 6 images or at the last image
    if ((index + 1) % 6 === 0 || index === images.length - 1) imagesHtml += '</div>';
  });

  return `
    <html>
    <head>
      <style>
        body {
          margin: 0;
          padding: 0;
          font-family: monospace;
        }
        .page {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-around;
          align-content: start;
          page-break-after: always;
          padding: 20px;
        }
        .image-container {
          width: 48%;
          box-sizing: border-box;
          padding: 10px;
          text-align: center;
        }
        img {
          max-width: 100%;
          max-height: 140mm; /* Scale images while maintaining proportions */
          margin-bottom: 5px;
        }
        .caption {
          font-size: 8pt;
        }
      </style>
    </head>
    <body>
      ${imagesHtml}
    </body>
    </html>
  `;
}

async function generatePDF() {
  const browser = await puppeteer.launch({ headless: false }); // or headless: true, depending on your needs
  const page = await browser.newPage();

  const allImages = fs.readdirSync(imagesDirectory).filter(file => file.endsWith('.png'));
  // Generate HTML for all images, each image in a .page div to force a new page
  const html = generateHtmlForImages(allImages);
  await page.setContent(html, { waitUntil: 'networkidle0' });

  const pdfOptions = {
    path: path.join(__dirname, 'SketchesPreview.pdf'),
    format: 'A4',
    printBackground: true
  };

  await page.pdf(pdfOptions);

  await browser.close();
  server.close(); // Close the server after generating the PDF
  console.log(`PDF generated at: ${pdfOptions.path}`);
}

generatePDF().catch(console.error);
