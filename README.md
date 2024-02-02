# p5.js Sketch Index PDF Generator Nodejs & Python

This repository contains a set of tools to generate a PDF index of your p5.js sketches. These tools capture screenshots of your sketches, create an HTML page with these screenshots, and convert it into a PDF for easy reference. Additionally, there's a Python script for updating and converting sketch URLs to the p5.js editor's "full" view URLs.

## Installation

### Node.js Dependencies

Make sure you have Node.js installed on your system. You can download it from [nodejs.org](https://nodejs.org/).

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/thericcardomantelli/p5js-sketch-index.git
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

### Update Sketch URLs (Python)

1. Go to your https://editor.p5js.org/yourusername/sketches inspect with chrome or favourite browser and copy the all the contents of tbody html tag.
2. Edit the `extractLinks.py` file and paste the code inside the extractLinks.py line 5 > html_text = """...your p5js HTML sketch summary page """  
3. Edit the `extractLinks.py` file and replace `yourusername` with your actual username.
4. Run the following command to update and convert sketch URLs:

   ```bash
   python extractLinks.py >links.txt
   ```
   Updated URLs will be listed inside links.txt

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


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```
