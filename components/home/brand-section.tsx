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
    <section ref={sectionRef} className="py-24 lg:py-32 bg-gradient-to-r from-accent/5 via-background to-accent/5 relative overflow-hidden">
      {/* Background elements */}
      <motion.div
        className="absolute top-1/2 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
        animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-block text-xs tracking-[0.3em] text-accent mb-4 font-bold"
            >
              ABOUT DEEP LINK
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl font-black tracking-tighter mb-8 text-balance"
            >
              Elevating <span className="text-accent">Performance</span> Standards
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-foreground/70 mb-8 leading-relaxed font-medium"
            >
              Deep Link International is dedicated to manufacturing world-class sportswear, streetwear, and specialized performance gear. With 15+ years of expertise, we combine cutting-edge technology with exceptional craftsmanship to deliver products that exceed expectations.
            </motion.p>

            {/* Stats Grid */}
            <motion.div
              className="grid grid-cols-2 gap-6 mb-8"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.1, delayChildren: 0.3 },
                },
              }}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  className="p-4 bg-accent/10 rounded-xl border border-accent/30 hover:border-accent transition-all"
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(30, 144, 255, 0.15)" }}
                >
                  <div className="text-2xl font-black text-accent mb-1">{stat.value}</div>
                  <div className="text-xs font-bold text-foreground/60 uppercase tracking-wider">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Main card */}
            <div className="relative rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 p-1 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-transparent rounded-2xl" />
              
              <div className="relative aspect-square rounded-2xl bg-background/50 backdrop-blur flex items-center justify-center overflow-hidden">
                {/* Animated background */}
                <motion.div
                  className="absolute inset-0"
                  animate={{
                    backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
                  }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  style={{
                    backgroundImage: "linear-gradient(135deg, rgba(30, 144, 255, 0.1) 0%, rgba(30, 144, 255, 0) 100%)",
                    backgroundSize: "400% 400%",
                  }}
                />
                
                {/* Content */}
                <div className="relative z-10 text-center">
                  <motion.div
                    animate={{ y: [-10, 10, -10] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="text-7xl font-black text-accent mb-4"
                  >
                    🏆
                  </motion.div>
                  <h3 className="text-3xl font-black mb-2">PREMIUM QUALITY</h3>
                  <p className="text-foreground/60 font-medium">Award-winning manufacturing excellence</p>
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <motion.div
              className="absolute -top-6 -right-6 px-6 py-3 bg-accent text-background font-bold rounded-full text-sm"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
            >
              Since 2009
            </motion.div>
            <motion.div
              className="absolute -bottom-6 -left-6 px-6 py-3 bg-accent/20 border border-accent font-bold rounded-full text-sm"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.8 }}
            >
              Global Leader
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
