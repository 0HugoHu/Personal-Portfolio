import os
import subprocess

# Check if ImageMagick is installed
if not subprocess.call(["where", "convert"], stdout=subprocess.PIPE, stderr=subprocess.PIPE) == 0:
    print("ImageMagick is not installed. Please install it first.")
    input("Press Enter to exit...")
    exit(1)

# Loop through all JPEG files in the current directory
for filename in os.listdir():
    if filename.lower().endswith(".jpg") and os.path.isfile(filename):
        # Calculate the target size (2MB in bytes)
        target_size_bytes = 2 * 1024 * 1024

        # Resize width and height to 70%
        subprocess.call(["convert", filename, "-resize", "70%", filename])

        # Get the current file size
        file_size_bytes = os.path.getsize(filename)

        # If it's still larger than the target size, lower the quality to 80%
        if file_size_bytes > target_size_bytes:
            # Set the quality to 80%
            quality = 80

            # Compress with the fixed quality
            subprocess.call(["convert", filename, "-quality", f"{quality}%", filename])

            # Check the size of the resized image
            resized_size_bytes = os.path.getsize(filename)

            print(f"Resized {filename} to {resized_size_bytes / (1024 * 1024):.2f} MB with quality {quality}%.")
        else:
            print(f"{filename} is already under {target_size_bytes / (1024 * 1024):.2f} MB after resizing to 70%.")

print("Resizing and compression complete. Original files have been updated.")
input("Press Enter to exit...")
