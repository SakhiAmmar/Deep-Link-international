"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import {
  ChevronLeft,
  ShoppingBag,
  MessageCircle,
  Check,
  ZoomIn,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { ProductCard } from "@/components/product-card"
import { useCart } from "@/lib/cart-context"
import { Product } from "@/lib/products"

interface ProductPageClientProps {
  product: Product
  productImages: string[]
  relatedProducts: Product[]
}

export function ProductPageClient({
  product,
  productImages,
  relatedProducts,
}: ProductPageClientProps) {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0])
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)
  const [showZoom, setShowZoom] = useState(false)
  const [added, setAdded] = useState(false)
  const { addItem } = useCart()

  const handleAddToCart = () => {
    addItem(
      {
        id: product.id,
        name: product.name,
        category: product.category,
        image: productImages[0],
        size: selectedSize,
      },
      quantity
    )
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  const whatsappMessage = encodeURIComponent(
    `Hi, I'm interested in:\n\nProduct: ${product.name}\nSize: ${selectedSize}\nQuantity: ${quantity}\n\nPlease provide more details.`
  )

  const images = productImages.slice(0, 3)

  return (
    <div className="pt-20 lg:pt-24 pb-16">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Breadcrumb */}
        <nav className="py-4 flex items-center gap-2 text-sm">
          <Link href="/shop" className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
            <ChevronLeft className="w-4 h-4" />
            Back to Shop
          </Link>
          <span className="text-muted-foreground">/</span>
          <span className="text-muted-foreground capitalize">{product.category}</span>
          <span className="text-muted-foreground">/</span>
          <span>{product.name}</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 mt-4">
          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Main Image */}
            <div
              className="relative aspect-[4/5] bg-secondary rounded-xl overflow-hidden cursor-zoom-in group"
              onClick={() => setShowZoom(true)}
            >
              <Image
                src={images[selectedImage]}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-background/20">
                <span className="p-3 bg-background/90 rounded-full">
                  <ZoomIn className="w-6 h-6" />
                </span>
              </div>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-3 mt-4">
              {images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative aspect-square w-20 rounded-lg overflow-hidden border-2 transition-colors ${
                    selectedImage === index ? "border-primary" : "border-transparent"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`${product.name} ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="text-xs tracking-[0.2em] text-primary uppercase">
              {product.subcategory}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 tracking-tight">
              {product.name}
            </h1>

            <p className="text-muted-foreground mt-4 text-lg leading-relaxed">
              {product.description}
            </p>

            {/* Features */}
            <div className="mt-8">
              <h3 className="font-semibold mb-3">Features</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {product.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <span className="w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Size Selection */}
            <div className="mt-8">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold">Select Size</h3>
                <button className="text-sm text-primary hover:underline">
                  Size Guide
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`min-w-[48px] px-4 py-2 text-sm rounded-lg border-2 font-medium transition-colors ${
                      selectedSize === size
                        ? "bg-primary text-primary-foreground border-primary"
                        : "border-border hover:border-primary"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-8">
              <h3 className="font-semibold mb-3">Quantity</h3>
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-border rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-2 hover:bg-secondary transition-colors"
                    aria-label="Decrease quantity"
                  >
                    -
                  </button>
                  <span className="px-4 py-2 min-w-[48px] text-center font-medium">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-2 hover:bg-secondary transition-colors"
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button
                onClick={handleAddToCart}
                size="lg"
                className="flex-1 text-base"
                disabled={added}
              >
                {added ? (
                  <>
                    <Check className="w-5 h-5 mr-2" />
                    Added to Inquiry
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-5 h-5 mr-2" />
                    Add to Inquiry
                  </>
                )}
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base">
                <a
                  href={`https://wa.me/923367320089?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp Inquiry
                </a>
              </Button>
            </div>

            {/* Note */}
            <p className="mt-6 text-sm text-muted-foreground">
              * This is a B2B catalog. No direct purchase available. Contact us
              for pricing and bulk orders.
            </p>
          </motion.div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mt-20 lg:mt-32">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">
              Related Products
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          </section>
        )}
      </div>

      {/* Image Zoom Modal */}
      {showZoom && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-background/95 flex items-center justify-center p-4"
          onClick={() => setShowZoom(false)}
        >
          <button
            className="absolute top-4 right-4 p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
            onClick={() => setShowZoom(false)}
            aria-label="Close zoom"
          >
            <ChevronLeft className="w-6 h-6 rotate-45" />
          </button>
          <div className="relative w-full max-w-4xl aspect-[4/5]">
            <Image
              src={images[selectedImage]}
              alt={product.name}
              fill
              className="object-contain"
            />
          </div>
        </motion.div>
      )}
    </div>
  )
}
