import os
import sys
import json

dir = "./"

collections = []

for filename in os.listdir(dir):
	if os.path.isdir(filename):
		collections.append({"name": filename, "photos": os.listdir(os.path.join(dir, filename))})

with open("manifest.json", "w") as manifest:
	manifest.write(str(json.dumps(collections)))

print("Done Manifest Update!")