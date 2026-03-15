"use client"

import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

const categories = [
  {
    name: "Sportswear",
    description: "Professional athletic wear for peak performance",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=1000&fit=crop",
    href: "/shop?category=sportswear",
    count: "12+ Products",
  },
  {
    name: "Streetwear",
    description: "Urban fashion meets athletic comfort",
    image: "https://images.unsplash.com/photo-1523398002811-999ca8dec234?w=800&h=1000&fit=crop",
    href: "/shop?category=streetwear",
    count: "11+ Products",
  },
  {
    name: "Gloves",
    description: "Specialized gloves for every sport",
    image: "https://images.unsplash.com/photo-1599058917765-a780eda07a3e?w=800&h=1000&fit=crop",
    href: "/shop?category=gloves",
    count: "10+ Products",
  },
]

export function CategoriesSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block text-xs tracking-[0.3em] text-primary mb-4"
          >
            SHOP BY CATEGORY
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold tracking-tight"
          >
            Explore Our Collections
          </motion.h2>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <Link href={category.href} className="group block relative">
                <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                  
                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <span className="text-xs text-primary/80 tracking-wider mb-2">
                      {category.count}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold mb-2">
                      {category.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {category.description}
                    </p>
                    <div className="flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-4 transition-all">
                      <span>Explore</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
