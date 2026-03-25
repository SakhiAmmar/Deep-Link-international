"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Alex Johnson",
    role: "Brand Director, Premier Athletics",
    content: "Deep Link's quality and attention to detail is unmatched. Our performance line exceeded all expectations.",
    rating: 5,
    image: "🏃‍♂️",
  },
  {
    name: "Maria Chen",
    role: "Head of Operations, Elite Sports Co.",
    content: "Working with Deep Link transformed our product quality. The turnaround time and professionalism is outstanding.",
    rating: 5,
    image: "🎯",
  },
  {
    name: "David Rodriguez",
    role: "CEO, Urban Gear Collective",
    content: "Premium manufacturing at competitive prices. We've partnered with Deep Link for 3 years and never looked back.",
    rating: 5,
    image: "⚡",
  },
  {
    name: "Sophie Lambert",
    role: "Founder, NextGen Activewear",
    content: "The customization options and quality control are exceptional. Deep Link is a true partner in success.",
    rating: 5,
    image: "✨",
  },
]

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-gradient-to-b from-accent/5 to-background relative overflow-hidden">
      {/* Background elements */}
      <motion.div
        className="absolute -top-40 -left-40 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.1, 1] }}
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
            CLIENT TESTIMONIALS
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl font-black tracking-tighter text-balance"
          >
            Trusted by <span className="text-accent">Industry Leaders</span>
          </motion.h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="group relative"
            >
              <div className="relative p-8 rounded-2xl bg-gradient-to-br from-accent/10 to-accent/5 border-2 border-accent/30 hover:border-accent transition-all duration-500 overflow-hidden">
                {/* Accent line */}
                <div className="absolute top-0 left-0 h-1 w-0 group-hover:w-full bg-accent transition-all duration-500" />
                
                {/* Star rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ delay: i * 0.1, duration: 2, repeat: Infinity }}
                    >
                      <Star className="w-4 h-4 fill-accent text-accent" />
                    </motion.div>
                  ))}
                </div>

                {/* Content */}
                <p className="text-lg font-medium mb-6 text-foreground leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="text-4xl">{testimonial.image}</div>
                  <div>
                    <div className="font-black text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-foreground/60 font-medium">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
