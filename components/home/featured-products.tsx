"use client"

import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getFeaturedProducts } from "@/lib/products"

export function FeaturedProducts() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const featuredProducts = getFeaturedProducts()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  }

  return (
    <section ref={sectionRef} className="py-32 lg:py-48 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header - Dramatic Typography */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 lg:mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="h-1 w-24 bg-accent mb-6 origin-left"
          />
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-tight mb-6 text-balance">
            <span className="block mb-3">Premium</span>
            <motion.span
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-accent"
            >
              Collections
            </motion.span>
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl text-foreground/70 max-w-2xl"
          >
            Experience our handpicked selection of premium sportswear, designed for athletes who demand the best.
          </motion.p>
        </motion.div>

        {/* Featured Product - Hero Style */}
        {featuredProducts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-20 lg:mb-32"
          >
            <Link href={`/product/${featuredProducts[0].id}`} className="group block">
              <div className="relative aspect-video lg:aspect-auto lg:h-96 rounded-2xl overflow-hidden bg-secondary border-2 border-accent/20 hover:border-accent/50 transition-all duration-500">
                <Image
                  src="https://images.unsplash.com/photo-1556906781-9a412961c28c?w=1400&h=600&fit=crop"
                  alt={featuredProducts[0].name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  priority
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/20 to-transparent" />
                
                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-between p-6 lg:p-12">
                  <motion.span
                    className="inline-flex w-fit text-xs tracking-[0.3em] text-accent font-bold uppercase px-4 py-2 border border-accent/40 rounded-full backdrop-blur-sm bg-background/30"
                    animate={{ x: [0, 10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    Featured Now
                  </motion.span>
                  
                  <div>
                    <h3 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-white mb-3 leading-tight">
                      {featuredProducts[0].name}
                    </h3>
                    <p className="text-white/80 text-lg max-w-lg mb-6">
                      {featuredProducts[0].description}
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.05, gap: "1rem" }}
                      className="inline-flex items-center gap-2 px-8 py-3 bg-accent text-background font-bold rounded-lg hover:bg-accent/90 transition-all"
                    >
                      Explore Now
                      <ArrowRight className="w-5 h-5" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        )}

        {/* Products Grid - Bold Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {featuredProducts.slice(1, 7).map((product, index) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
            >
              <Link href={`/product/${product.id}`} className="group block h-full">
                <div className="relative overflow-hidden rounded-xl h-full">
                  {/* Image Container */}
                  <div className="relative aspect-[3/4] bg-secondary">
                    <Image
                      src={`https://images.unsplash.com/photo-${
                        index % 3 === 0
                          ? "1556906781-9a412961c28c"
                          : index % 3 === 1
                          ? "1571902943202-507ec2618e8f"
                          : "1517836357463-d25dfeac3438"
                      }?w=600&h=800&fit=crop`}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-125 transition-transform duration-700 ease-out"
                    />

                    {/* Bold Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Badge */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileHover={{ opacity: 1, y: 0 }}
                      className="absolute top-4 right-4 px-4 py-2 bg-accent text-background text-xs font-black rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      SHOP NOW
                    </motion.div>
                  </div>

                  {/* Info Card - Bold Typography */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-background via-background/95 to-transparent">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileHover={{ opacity: 1, y: -5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <span className="text-xs tracking-[0.2em] text-accent font-bold uppercase block mb-2">
                        {product.subcategory}
                      </span>
                      <h3 className="text-xl font-black tracking-tight leading-tight text-white mb-2 group-hover:text-accent transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-sm text-foreground/70 line-clamp-2 group-hover:text-foreground/90 transition-colors">
                        {product.description}
                      </p>
                    </motion.div>
                  </div>

                  {/* Border accent */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex justify-center mt-16 lg:mt-20"
        >
          <Button asChild size="lg" className="group text-base font-bold">
            <Link href="/shop" className="flex items-center gap-3">
              View All Products
              <motion.div
                animate={{ x: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
