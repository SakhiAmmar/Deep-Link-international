"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { ArrowRight, Award, Globe, Users, Factory, Truck, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"

const timeline = [
  {
    year: "2009",
    title: "Company Founded",
    description: "Deep Link International was established with a vision to revolutionize sportswear manufacturing.",
  },
  {
    year: "2012",
    title: "First International Client",
    description: "Expanded operations to serve international brands, marking our entry into the global market.",
  },
  {
    year: "2015",
    title: "Manufacturing Expansion",
    description: "Opened our state-of-the-art manufacturing facility with advanced sublimation technology.",
  },
  {
    year: "2018",
    title: "50+ Countries Reached",
    description: "Our products now reach over 50 countries, serving professional teams and brands worldwide.",
  },
  {
    year: "2021",
    title: "Streetwear Launch",
    description: "Expanded our product line to include premium streetwear and lifestyle apparel.",
  },
  {
    year: "2024",
    title: "Continued Growth",
    description: "Celebrating 15 years of excellence with 1000+ products delivered to satisfied clients.",
  },
]

const values = [
  {
    icon: Award,
    title: "Quality Excellence",
    description: "Every product undergoes rigorous quality control to ensure premium standards.",
  },
  {
    icon: Factory,
    title: "Advanced Manufacturing",
    description: "State-of-the-art facilities with cutting-edge sublimation and printing technology.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Skilled designers and craftspeople with decades of combined experience.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Serving clients across 50+ countries with reliable international shipping.",
  },
  {
    icon: Truck,
    title: "On-Time Delivery",
    description: "Committed to meeting deadlines without compromising on quality.",
  },
  {
    icon: Shield,
    title: "Customer Trust",
    description: "Building long-term partnerships through transparency and reliability.",
  },
]

export default function AboutPage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)
  const isHeroInView = useInView(heroRef, { once: true })
  const isTimelineInView = useInView(timelineRef, { once: true, margin: "-100px" })

  return (
    <div className="pt-20 lg:pt-24">
      {/* Hero */}
      <section ref={heroRef} className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isHeroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs tracking-[0.3em] text-primary">ABOUT US</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mt-4 text-balance">
                Crafting Excellence Since 2009
              </h1>
              <p className="text-muted-foreground mt-6 text-lg leading-relaxed">
                Deep Link International is a leading sportswear manufacturing company
                dedicated to producing high-quality athletic wear, streetwear, and
                specialized gloves for brands and teams worldwide.
              </p>
              <p className="text-muted-foreground mt-4 leading-relaxed">
                With over 15 years of experience, we combine cutting-edge technology
                with traditional craftsmanship to deliver products that meet the
                demanding standards of professional athletes and fashion-forward
                consumers.
              </p>
              <Button asChild className="mt-8" size="lg">
                <Link href="/contact">
                  Get in Touch
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isHeroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop"
                  alt="Manufacturing facility"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-lg">
                <div className="text-4xl font-bold">15+</div>
                <div className="text-sm opacity-90">Years of Excellence</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs tracking-[0.3em] text-primary">OUR VALUES</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mt-4">
              What Sets Us Apart
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section ref={timelineRef} className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs tracking-[0.3em] text-primary">OUR JOURNEY</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mt-4">
              Milestones & Achievements
            </h2>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 30 }}
                animate={isTimelineInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex items-start gap-8 mb-12 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div className={`flex-1 pl-8 md:pl-0 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <span className="text-primary font-bold text-lg">{item.year}</span>
                  <h3 className="text-xl font-semibold mt-1">{item.title}</h3>
                  <p className="text-muted-foreground mt-2">{item.description}</p>
                </div>

                {/* Dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full -translate-x-1/2 mt-1" />

                {/* Empty space for alternating layout */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Ready to Partner with Us?
            </h2>
            <p className="text-muted-foreground mt-4 text-lg">
              Whether you{"'"}re a brand looking for a manufacturing partner or need
              custom sportswear solutions, we{"'"}re here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button asChild size="lg">
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/shop">Explore Products</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
