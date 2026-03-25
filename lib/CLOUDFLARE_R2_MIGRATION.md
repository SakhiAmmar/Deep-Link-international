/**
 * MIGRATION HELPER - Update All Products to Use Cloudflare R2
 * 
 * This script helps you migrate all product images from local paths to Cloudflare R2.
 * 
 * STEPS TO USE:
 * 1. Update NEXT_PUBLIC_R2_BUCKET_URL in your .env.local
 *    Example: NEXT_PUBLIC_R2_BUCKET_URL=https://pub-xxxxx.r2.dev
 * 
 * 2. Upload all product images to your R2 bucket in /products folder
 * 
 * 3. Replace all remaining product definitions in products.ts using getProductImageUrls()
 * 
 * EXAMPLE TRANSFORMATION:
 * 
 * BEFORE (local path):
 * -----
 * { 
 *   id: "tracksuit-1", 
 *   name: "Performance Tracksuit",
 *   images: ["/products/tracksuit-1.jpg"]
 * }
 * 
 * AFTER (R2 URL):
 * -----
 * { 
 *   id: "tracksuit-1", 
 *   name: "Performance Tracksuit",
 *   images: getProductImageUrls(["tracksuit-1.jpg"])
 * }
 * 
 * QUICK FIND & REPLACE:
 * Open products.ts and use these regex patterns in your code editor:
 * 
 * FIND:    images: \["/products/([^"]+)"\]
 * REPLACE: images: getProductImageUrls(["$1"])
 * 
 * This will convert all local image paths to R2 URLs automatically.
 * 
 * ENVIRONMENT SETUP:
 * Add to .env.local:
 * NEXT_PUBLIC_R2_BUCKET_URL=https://pub-xxxxxxxxxxxxx.r2.dev
 * 
 * Then all product images will automatically use the R2 bucket!
 */

// Example of how to use the helper:
export const MIGRATION_EXAMPLE = {
  before: {
    id: "tracksuit-1",
    images: ["/products/tracksuit-1.jpg"],
  },
  after: {
    id: "tracksuit-1",
    // After importing getProductImageUrls from r2-config:
    images: "getProductImageUrls(['tracksuit-1.jpg'])",
  },
}

console.log(`
╔════════════════════════════════════════════════════════════════╗
║         CLOUDFLARE R2 MIGRATION GUIDE                          ║
╚════════════════════════════════════════════════════════════════╝

1. SET ENVIRONMENT VARIABLE
   Add to .env.local:
   NEXT_PUBLIC_R2_BUCKET_URL=https://pub-xxxxx.r2.dev

2. UPLOAD IMAGES TO R2
   - Login to Cloudflare R2
   - Create or use existing bucket
   - Upload all images to /products folder

3. UPDATE PRODUCTS.TS
   - Replace local paths with getProductImageUrls() calls
   - Use Find & Replace with regex:
   
   FIND:    images: \\["/products/([^"]+)"\\]
   REPLACE: images: getProductImageUrls(["$1"])

4. VERIFY
   - Check that images load on the site
   - Monitor R2 bandwidth usage

═══════════════════════════════════════════════════════════════════
`)
