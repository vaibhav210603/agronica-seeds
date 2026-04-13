import urllib.request
from html.parser import HTMLParser
import os
import json

class ImageParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.images = []

    def handle_starttag(self, tag, attrs):
        if tag == 'img':
            attrs = dict(attrs)
            if 'src' in attrs:
                self.images.append(attrs['src'])
            if 'data-src' in attrs:
                self.images.append(attrs['data-src'])
            if 'data-lazy-src' in attrs:
                self.images.append(attrs['data-lazy-src'])

try:
    url = "https://agronicaseeds.com/"
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
    html = urllib.request.urlopen(req).read().decode('utf-8')
    parser = ImageParser()
    parser.feed(html)
    
    print(json.dumps(list(set(parser.images)), indent=2))
except Exception as e:
    print("Error:", e)
