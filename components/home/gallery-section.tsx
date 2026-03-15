"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600&h=800&fit=crop",
    alt: "Athlete training",
  },
  {
    src: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=600&h=400&fit=crop",
    alt: "Sports equipment",
  },
  {
    src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop",
    alt: "Gym workout",
  },
  {
    src: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&h=800&fit=crop",
    alt: "Fitness training",
  },
  {
    src: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&h=400&fit=crop",
    alt: "Running athlete",
  },
  {
    src: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=600&h=400&fit=crop",
    alt: "Team sports",
  },
]

export function GallerySection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section ref={sectionRef} className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block text-xs tracking-[0.3em] text-primary mb-4"
          >
            LIFESTYLE GALLERY
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold tracking-tight"
          >
            Performance in Action
          </motion.h2>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.05 * index }}
              className={`relative overflow-hidden rounded-lg ${
                index === 0 || index === 3 ? "row-span-2" : ""
              }`}
            >
              <div className={`relative ${index === 0 || index === 3 ? "aspect-[3/4]" : "aspect-square"}`}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-primary/0 hover:bg-primary/20 transition-colors duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
