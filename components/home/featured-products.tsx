"use client"

import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { ArrowRight, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getFeaturedProducts } from "@/lib/products"

export function FeaturedProducts() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const featuredProducts = getFeaturedProducts()

  return (
    <section ref={sectionRef} className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-block text-xs tracking-[0.3em] text-primary mb-4"
            >
              FEATURED COLLECTION
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold tracking-tight"
            >
              Sportswear Essentials
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Button asChild variant="outline" className="group">
              <Link href="/shop">
                View All Products
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {featuredProducts.slice(0, 6).map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <Link href={`/product/${product.id}`} className="group block">
                <div className="relative aspect-[4/5] bg-secondary rounded-lg overflow-hidden mb-4">
                  <Image
                    src={`https://images.unsplash.com/photo-${
                      index % 2 === 0 ? "1556906781-9a412961c28c" : "1571902943202-507ec2618e8f"
                    }?w=600&h=750&fit=crop`}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="px-6 py-3 bg-primary text-primary-foreground rounded-full text-sm font-medium flex items-center gap-2">
                      <Eye className="w-4 h-4" />
                      Quick View
                    </span>
                  </div>
                </div>
                <div>
                  <span className="text-xs text-primary tracking-wide uppercase">
                    {product.subcategory}
                  </span>
                  <h3 className="text-lg font-semibold mt-1 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                    {product.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
