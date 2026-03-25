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
    <section ref={sectionRef} className="py-24 lg:py-32 bg-gradient-to-br from-background via-background to-accent/5 relative overflow-hidden">
      {/* Background decoration */}
      <motion.div
        className="absolute -top-40 -right-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block text-xs tracking-[0.3em] text-accent mb-4 font-bold"
          >
            SHOP BY CATEGORY
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter text-balance"
          >
            Collections That <span className="text-accent">Define Excellence</span>
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
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border-2 border-accent/20 hover:border-accent transition-all duration-500">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                  
                  {/* Overlay on hover */}
                  <motion.div
                    className="absolute inset-0 bg-accent/0 group-hover:bg-accent/10 transition-all duration-500"
                    whileHover={{ opacity: 1 }}
                  />
                  
                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-between p-8">
                    {/* Count badge */}
                    <motion.span
                      className="self-start text-xs font-bold tracking-[0.2em] text-accent bg-background/40 backdrop-blur px-4 py-2 rounded-full"
                      whileHover={{ scale: 1.1 }}
                    >
                      {category.count}
                    </motion.span>
                    
                    {/* Bottom content */}
                    <div>
                      <h3 className="text-3xl md:text-4xl font-black mb-2 text-balance">
                        {category.name}
                      </h3>
                      <p className="text-sm text-foreground/70 mb-6 font-medium">
                        {category.description}
                      </p>
                      <motion.div
                        className="flex items-center gap-3 text-sm font-bold text-accent group-hover:gap-5 transition-all"
                        whileHover={{ x: 5 }}
                      >
                        <span>EXPLORE NOW</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </motion.div>
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
