import os
import json

# Function to get a list of image files in a folder
def get_image_files(folder_path):
    image_files = []
    for filename in os.listdir(folder_path):
        if filename.lower().endswith((".jpg", ".jpeg")):
            image_files.append(filename)
    return image_files

# Iterate through folders in the current directory
for folder_name in os.listdir():
    if os.path.isdir(folder_name):
        folder_path = os.path.join(os.getcwd(), folder_name)
        image_files = get_image_files(folder_path)

        if image_files:
            # Create images.json in the folder and write the list of image filenames
            json_file_path = os.path.join(folder_path, "images.json")
            with open(json_file_path, "w") as json_file:
                json.dump(image_files, json_file, indent=4)
                print(f"Created images.json in {folder_name}")
