"use client"

import { useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Award, Globe, Zap, Shield } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const stats = [
  { icon: Globe, value: "50+", label: "Countries Served" },
  { icon: Award, value: "15+", label: "Years Experience" },
  { icon: Zap, value: "1000+", label: "Products Delivered" },
  { icon: Shield, value: "100%", label: "Quality Assured" },
]

export function BrandSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".brand-text",
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="brand-text inline-block text-xs tracking-[0.3em] text-primary mb-4"
          >
            WHO WE ARE
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="brand-text text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-balance"
          >
            Elevating Athletic Excellence
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="brand-text text-lg text-muted-foreground leading-relaxed text-pretty"
          >
            Deep Link International is a premier sportswear manufacturing company
            dedicated to producing high-quality athletic wear, streetwear, and
            specialized gloves. We combine cutting-edge technology with traditional
            craftsmanship to deliver products that meet the demanding standards of
            professional athletes and brands worldwide.
          </motion.p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="text-center"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
