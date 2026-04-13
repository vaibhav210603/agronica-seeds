import urllib.request
import os

base_url = "https://agronicaseeds.com/"
images = [
  "Image/bt-2.jpg", "Image/pros1.jpg", "Image/rct2.jpg", 
  "Image/bt-1.jpg", "Image/bt-4.jpg", "Image/pros5.jpg", "Image/rct1.jpg", 
  "Image/pros4.jpg", "Image/pros2.jpg", "Image/bt-3.jpg", "Image/pros6.jpg", 
  "Image/pros3.jpg", "Image/prodcts-main.jpg"
]

os.makedirs(os.path.join("public", "images", "products_dl"), exist_ok=True)
for img in images:
    url = base_url + img
    filepath = os.path.join("public", "images", "products_dl", os.path.basename(img))
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req) as response, open(filepath, 'wb') as out_file:
            data = response.read()
            out_file.write(data)
        print("Downloaded", img)
    except Exception as e:
        print("Failed", img, e)
