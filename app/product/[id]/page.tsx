import { notFound } from "next/navigation"
import { getProductById, getRelatedProducts, products } from "@/lib/products"
import { ProductPageClient } from "./product-page-client"

const productImages = [
  "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=800&h=1000&fit=crop",
  "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&h=1000&fit=crop",
  "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=1000&fit=crop",
  "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=800&h=1000&fit=crop",
]

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }))
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const product = getProductById(id)

  if (!product) {
    notFound()
  }

  const relatedProducts = getRelatedProducts(product)

  return (
    <ProductPageClient
      product={product}
      productImages={productImages}
      relatedProducts={relatedProducts}
    />
  )
}
