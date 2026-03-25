"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { gsap } from "gsap"
import { ArrowRight, ChevronDown, Volume2, VolumeX } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isMuted, setIsMuted] = useState(true)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-bg",
        { scale: 1.2 },
        {
          scale: 1,
          duration: 2,
          ease: "power2.out",
        }
      )
    }, heroRef)

    return () => ctx.revert()
  }, [])

  const toggleMute = () => {
    setIsMuted(!isMuted)
  }

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    })
  }

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Video */}
      <div className="hero-bg absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted={isMuted}
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="https://pub-84133523cf2e46d48181cea0a18cb13a.r2.dev/DLI_Hero_Video_Production_Request.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-transparent to-background/90" />
        
        {/* Animated accent shapes */}
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
          animate={{ y: [0, 50, 0], x: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-72 h-72 bg-accent/5 rounded-full blur-3xl"
          animate={{ y: [0, -40, 0], x: [0, -25, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Mute/Unmute Button */}
      <motion.button
        onClick={toggleMute}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="absolute top-8 right-8 z-20 p-3 rounded-full bg-background/20 backdrop-blur-md border border-accent/30 hover:border-accent hover:bg-background/40 transition-all duration-300"
        title={isMuted ? "Unmute video" : "Mute video"}
      >
        <motion.div
          animate={{ scale: isMuted ? 0.8 : 1 }}
          transition={{ duration: 0.3 }}
        >
          {isMuted ? (
            <VolumeX className="w-5 h-5 text-accent" />
          ) : (
            <Volume2 className="w-5 h-5 text-accent" />
          )}
        </motion.div>
      </motion.button>

      {/* Content */}
      <div ref={textRef} className="relative z-10 container mx-auto px-4 lg:px-8 py-20">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="inline-block px-4 py-2 text-xs tracking-[0.3em] text-accent border border-accent/50 rounded-full mb-6 font-bold">
              REDEFINING PERFORMANCE
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-8 text-balance leading-tight"
          >
            Performance
            <br />
            <span className="text-accent">Without Compromise</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto mb-10 text-pretty font-medium"
          >
            Premium sportswear engineered for champions. From professional athletes to ambitious brands, we deliver excellence in every stitch.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button asChild size="lg" className="group text-base bg-accent hover:bg-accent/90 text-background font-bold">
                <Link href="/shop">
                  Explore Collection
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button asChild variant="outline" size="lg" className="text-base border-accent/50 hover:border-accent hover:bg-accent/10 font-bold">
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Stats preview */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row justify-center gap-12 text-foreground/70"
          >
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-accent mb-1">50+</div>
              <div className="text-sm">Countries Served</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-accent mb-1">1000+</div>
              <div className="text-sm">Products Shipped</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-accent mb-1">100%</div>
              <div className="text-sm">Quality Assured</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-accent hover:text-accent/80 transition-colors"
      >
        <span className="text-xs tracking-widest font-bold">EXPLORE</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.button>
    </section>
  )
}
