# Create images directory if it doesn't exist
$imageDir = ".\public\images"
if (-not (Test-Path -Path $imageDir)) {
    New-Item -ItemType Directory -Path $imageDir -Force | Out-Null
}

# List of screenshot URLs (replace with actual URLs from Google Play Store)
$screenshotUrls = @(
    "https://play-lh.googleusercontent.com/.../screenshot1.png",
    "https://play-lh.googleusercontent.com/.../screenshot2.png",
    "https://play-lh.googleusercontent.com/.../screenshot3.png",
    "https://play-lh.googleusercontent.com/.../screenshot4.png",
    "https://play-lh.googleusercontent.com/.../screenshot5.png"
)

# Download each screenshot
for ($i = 0; $i -lt $screenshotUrls.Count; $i++) {
    $url = $screenshotUrls[$i]
    $outputFile = "$imageDir\screenshot$($i + 1).webp"
    
    Write-Host "Downloading $url to $outputFile"
    
    # Download the image and convert to WebP using curl and ffmpeg
    try {
        # First download the image
        $tempFile = [System.IO.Path]::GetTempFileName() + ".png"
        Invoke-WebRequest -Uri $url -OutFile $tempFile
        
        # Convert to WebP using ffmpeg if available, otherwise just move the file
        if (Get-Command ffmpeg -ErrorAction SilentlyContinue) {
            & ffmpeg -i $tempFile -vf "scale=1080:-1" -q:v 80 $outputFile -y
            Remove-Item $tempFile
        } else {
            Move-Item -Path $tempFile -Destination $outputFile -Force
        }
        
        Write-Host "Successfully downloaded and processed $outputFile"
    } catch {
        Write-Host "Error downloading $url : $_"
    }
}

Write-Host "All screenshots have been downloaded and processed!"
