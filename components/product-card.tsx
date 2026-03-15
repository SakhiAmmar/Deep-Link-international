"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Eye, ShoppingBag, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/lib/cart-context"
import type { Product } from "@/lib/products"

interface ProductCardProps {
  product: Product
  index?: number
}

const productImages = [
  "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=600&h=750&fit=crop",
  "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600&h=750&fit=crop",
  "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&h=750&fit=crop",
  "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=600&h=750&fit=crop",
  "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=750&fit=crop",
  "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&h=750&fit=crop",
]

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const [showQuickView, setShowQuickView] = useState(false)
  const [selectedSize, setSelectedSize] = useState(product.sizes[0])
  const { addItem } = useCart()

  const imageUrl = productImages[index % productImages.length]

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      category: product.category,
      image: imageUrl,
      size: selectedSize,
    })
    setShowQuickView(false)
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.05 }}
        className="group"
      >
        <Link href={`/product/${product.id}`} className="block">
          <div className="relative aspect-[4/5] bg-secondary rounded-lg overflow-hidden mb-4">
            <Image
              src={imageUrl}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Quick actions */}
            <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button
                onClick={(e) => {
                  e.preventDefault()
                  setShowQuickView(true)
                }}
                className="p-3 bg-background/90 backdrop-blur-sm rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Quick view"
              >
                <Eye className="w-5 h-5" />
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault()
                  handleAddToCart()
                }}
                className="p-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors"
                aria-label="Add to inquiry cart"
              >
                <ShoppingBag className="w-5 h-5" />
              </button>
            </div>
          </div>
        </Link>

        <div>
          <span className="text-xs text-primary tracking-wide uppercase">
            {product.subcategory}
          </span>
          <h3 className="text-lg font-semibold mt-1 group-hover:text-primary transition-colors">
            <Link href={`/product/${product.id}`}>{product.name}</Link>
          </h3>
          <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
            {product.description}
          </p>
        </div>
      </motion.div>

      {/* Quick View Modal */}
      <AnimatePresence>
        {showQuickView && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={() => setShowQuickView(false)}
          >
            <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-card border border-border rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-auto"
            >
              <button
                onClick={() => setShowQuickView(false)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Image */}
                <div className="relative aspect-square md:aspect-[4/5]">
                  <Image
                    src={imageUrl}
                    alt={product.name}
                    fill
                    className="object-cover rounded-t-xl md:rounded-l-xl md:rounded-tr-none"
                  />
                </div>

                {/* Details */}
                <div className="p-6">
                  <span className="text-xs text-primary tracking-wide uppercase">
                    {product.subcategory}
                  </span>
                  <h3 className="text-2xl font-bold mt-2">{product.name}</h3>
                  <p className="text-muted-foreground mt-3">{product.description}</p>

                  {/* Features */}
                  <div className="mt-4">
                    <h4 className="text-sm font-semibold mb-2">Features:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {product.features.slice(0, 3).map((feature) => (
                        <li key={feature} className="flex items-center gap-2">
                          <span className="w-1 h-1 bg-primary rounded-full" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Size Selection */}
                  <div className="mt-6">
                    <h4 className="text-sm font-semibold mb-2">Select Size:</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.sizes.map((size) => (
                        <button
                          key={size}
                          onClick={() => setSelectedSize(size)}
                          className={`px-3 py-1.5 text-sm rounded-md border transition-colors ${
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

                  {/* Actions */}
                  <div className="mt-6 flex gap-3">
                    <Button onClick={handleAddToCart} className="flex-1">
                      <ShoppingBag className="w-4 h-4 mr-2" />
                      Add to Inquiry
                    </Button>
                    <Button asChild variant="outline">
                      <Link href={`/product/${product.id}`}>View Details</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
