#!/bin/bash

# List of files to convert
files=("discernible.png")

# Loop through each file
for file in "${files[@]}"; do
  # Get the filename without the extension
  filename="${file%.*}"
  
  # Convert the file to WebP format
  convert "$file" "$filename.webp"
  
  echo "Converted $file to $filename.webp"
done
