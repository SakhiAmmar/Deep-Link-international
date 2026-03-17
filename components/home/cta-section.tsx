"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { ArrowRight, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CTASection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section
      ref={sectionRef}
      className="py-24 lg:py-32 relative overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-accent/10" />
      
      {/* Animated dots background */}
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
        animate={{
          backgroundPosition: ["0px 0px", "40px 40px"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Animated shapes */}
      <motion.div
        className="absolute top-10 left-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl"
        animate={{ y: [0, 50, 0], x: [0, 25, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-60 h-60 bg-accent/5 rounded-full blur-3xl"
        animate={{ y: [0, -50, 0], x: [0, -25, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.span
            variants={itemVariants}
            className="inline-block text-xs tracking-[0.3em] text-accent mb-4 font-semibold"
          >
            READY TO GET STARTED?
          </motion.span>
          
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-balance"
          >
            Let{"'"}s Create Something <span className="text-accent">Extraordinary</span> Together
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-lg text-foreground/60 mb-10 text-pretty"
          >
            Whether you{"'"}re a brand looking for a manufacturing partner or an
            individual seeking premium sportswear, we{"'"}re here to help bring your
            vision to life.
          </motion.p>
          
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button asChild size="lg" className="group text-base w-full sm:w-auto bg-accent hover:bg-accent/90">
                <Link href="/contact">
                  Send Inquiry
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </motion.div>
                </Link>
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button asChild variant="outline" size="lg" className="text-base w-full sm:w-auto border-accent/50 hover:border-accent hover:bg-accent/10">
                <a
                  href="https://wa.me/923367320089?text=Hi%2C%20I%27m%20interested%20in%20your%20products"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <MessageCircle className="mr-2 w-4 h-4" />
                  </motion.div>
                  WhatsApp Us
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
