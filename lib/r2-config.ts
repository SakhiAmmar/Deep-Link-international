// Cloudflare R2 Configuration
// Update these values with your R2 bucket information

const R2_CONFIG = {
  // Your R2 bucket URL (without trailing slash)
  // Example: https://pub-xxxxxxxxxxxxxx.r2.dev
  bucketUrl: process.env.NEXT_PUBLIC_R2_BUCKET_URL || 'https://pub-84133523cf2e46d48181cea0a18cb13a.r2.dev',
  
  // Folder path in R2 where product images are stored
  // Example: /products or /deep-link/products
  productsFolder: '/products',
}

/**
 * Generates a Cloudflare R2 image URL
 * @param imageName - The image filename (e.g., 'soccer-1.jpg')
 * @returns Full R2 URL
 * 
 * Example usage:
 * getR2ImageUrl('soccer-1.jpg') 
 * => 'https://pub-xxxxx.r2.dev/products/soccer-1.jpg'
 */
export function getR2ImageUrl(imageName: string): string {
  const cleanName = imageName.replace(/^\//, '') // Remove leading slash if present
  return `${R2_CONFIG.bucketUrl}${R2_CONFIG.productsFolder}/${cleanName}`
}

/**
 * Converts local image paths to R2 URLs
 * @param localPath - Local path like '/products/soccer-1.jpg'
 * @returns R2 URL
 * 
 * Example:
 * convertToR2Url('/products/soccer-1.jpg')
 * => 'https://pub-xxxxx.r2.dev/products/soccer-1.jpg'
 */
export function convertToR2Url(localPath: string): string {
  // Extract filename from path
  const filename = localPath.split('/').pop() || localPath
  return getR2ImageUrl(filename)
}

/**
 * Converts an array of local paths to R2 URLs
 * @param paths - Array of local image paths
 * @returns Array of R2 URLs
 */
export function convertPathsToR2Urls(paths: string[]): string[] {
  return paths.map(convertToR2Url)
}

/**
 * Quick helper to get full image URLs for a product
 * @param imageNames - Array of image filenames
 * @returns Array of full R2 URLs
 */
export function getProductImageUrls(imageNames: string[]): string[] {
  return imageNames.map(getR2ImageUrl)
}

export default R2_CONFIG
