// Direct upload to Cloudinary (unsigned)
export async function uploadToCloudinary(file: File): Promise<string> {
  const formData = new FormData()
  formData.append('file', file)
  formData.append('upload_preset', 'qqzka6lx') // Make sure this exists in Cloudinary
  formData.append('folder', 'aslot-blog')

  try {
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
      {
        method: 'POST',
        body: formData,
      }
    )

    const data = await response.json()
    
    if (data.error) {
      throw new Error(data.error.message)
    }

    return data.secure_url
  } catch (error) {
    console.error('Upload error:', error)
    throw new Error('Failed to upload image')
  }
}

// Upload multiple images
export async function uploadMultipleImages(files: File[]): Promise<string[]> {
  const uploadPromises = files.map(file => uploadToCloudinary(file))
  return Promise.all(uploadPromises)
}