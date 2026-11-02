"""Inline the images into landing.src.html -> landing.html (Gumroad's landing page must be one self-contained file).

Usage: python3 gumroad/build.py   (images in gumroad/img/, referenced as {{name}})
"""
import base64, pathlib, re

here = pathlib.Path(__file__).parent
src = (here / 'landing.src.html').read_text()
uri = lambda m: 'data:image/jpeg;base64,' + base64.b64encode((here / 'img' / f'{m[1]}.jpg').read_bytes()).decode()
out = re.sub(r'\{\{([\w-]+)\}\}', uri, src)
(here / 'landing.html').write_text(out)
print(f'landing.html {len(out) / 1024:.0f} KB')
