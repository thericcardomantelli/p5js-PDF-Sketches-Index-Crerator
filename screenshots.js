
const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // Read links from the file
  const links = fs.readFileSync('links.txt', 'utf-8').split('\n').filter(Boolean);

  for (let link of links) {
    try {
      await page.goto(link, {waitUntil: 'networkidle2'});
      await page.waitForTimeout(10000); // Wait for 10 seconds
      const fileName = link.replace(/[^a-zA-Z]/g, '_') + '.png'; // Safe file name
      await page.screenshot({path: path.join(__dirname, 'screenshots', fileName)});
      console.log(`Screenshot saved for ${link}`);
    } catch (error) {
      console.error(`Error capturing ${link}:`, error);
    }
  }

  await browser.close();
})();