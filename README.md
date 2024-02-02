# p5js-PDF-Sketches-Index-Crerator
Effortlessly organize your p5.js sketches. Capture screenshots, create an HTML index, and generate a sleek PDF for quick reference. Python script for URL updates included.
Certo, ecco il testo formattato in Markdown per il tuo README:

# p5.js Sketch Index PDF Generator

This repository contains a set of tools to generate a PDF index of your p5.js sketches. These tools capture screenshots of your sketches, create an HTML page with these screenshots, and convert it into a PDF for easy reference. Additionally, there's a Python script for updating and converting sketch URLs to the p5.js editor's "full" view URLs.

## Installation

### Node.js Dependencies

Make sure you have Node.js installed on your system. You can download it from [nodejs.org](https://nodejs.org/).

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/yourusername/p5js-sketch-index.git
   cd p5js-sketch-index
   ```

2. Install the Node.js dependencies using npm:

   ```bash
   npm install
   ```

### Python Dependencies

1. Make sure you have Python 3.x installed on your system. You can download it from [python.org](https://www.python.org/downloads/).

2. Install the required Python packages using pip:

   ```bash
   pip install -r requirements.txt
   ```

## Usage

### Capture Screenshots of Sketches

1. Edit the `links.txt` file to include the URLs of your p5.js sketches, one URL per line.

2. Run the following command to capture screenshots:

   ```bash
   node screenshots.js
   ```

   Screenshots will be saved in the `screenshots` directory.

### Generate PDF Index

1. After capturing screenshots, you can generate a PDF index with the following command:

   ```bash
   node PDF.js
   ```

   The generated PDF will be named `SketchesPreview.pdf`.

### Update Sketch URLs (Python)

1. Edit the `xlinks.py` file and replace `yourusername` with your actual username.

2. Run the following command to update and convert sketch URLs:

   ```bash
   python xlinks.py
   ```

   Updated URLs will be printed in the console.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```
