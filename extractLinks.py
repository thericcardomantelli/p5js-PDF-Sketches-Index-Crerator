
import re

# Simulate an html_text variable that contains your HTML
html_text = """...your p5js HTML sketch summary page """  # Your HTML goes here

# Pattern to search for hrefs starting with /username/sketches/
pattern = r'href="(/username/sketches/[^"]*)"'

# Search in the text using the regular expression
matches = re.findall(pattern, html_text)

# Function to replace the initial pattern with the new domain
def replace_pattern(url):
    return re.sub(r'^/username/', 'https://editor.p5js.org/username/full/', url)

# Apply the replacement to all found URLs
updated_urls = list(map(replace_pattern, matches))

# Print all updated URLs
for url in updated_urls:
    print(url)