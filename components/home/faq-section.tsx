'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: "What is Deep Link International?",
    answer: "Deep Link International is a premier luxury sportswear brand specializing in high-quality athletic apparel, streetwear, and professional sports equipment for athletes and enthusiasts worldwide."
  },
  {
    question: "How long does shipping typically take?",
    answer: "We offer worldwide shipping with delivery times ranging from 5-15 business days depending on your location. Express shipping options are available upon request."
  },
  {
    question: "What is your return policy?",
    answer: "We offer a 30-day return policy for all unworn items in original packaging. Returns are free within Pakistan, while international returns may incur shipping costs."
  },
  {
    question: "Do you offer bulk orders or custom designs?",
    answer: "Yes! We specialize in custom orders for teams, businesses, and large quantities. Contact our sales team at info@deeplinkinternational.com for bulk pricing and customization options."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, bank transfers, and mobile payment options. For inquiries, WhatsApp +92 336 7320089 for payment arrangements."
  },
  {
    question: "Are your products certified/authentic?",
    answer: "All our sportswear products meet international quality standards. We provide authentic, high-performance gear suitable for professional athletes and casual wear."
  }
]

export function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-background/50">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Frequently Asked <span className="text-accent">Questions</span>
          </h2>
          <p className="text-foreground/60 text-lg">Everything you need to know about Deep Link International</p>
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          className="space-y-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full px-6 py-4 rounded-lg bg-card border border-border hover:border-accent/50 transition-all duration-300 text-left hover:shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-foreground pr-4">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: activeIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="w-5 h-5 text-accent" />
                  </motion.div>
                </div>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 py-4 bg-card/50 border-l-2 border-accent/50 rounded-b-lg">
                      <p className="text-foreground/70 leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <p className="text-foreground/60 mb-4">Still have questions?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="mailto:info@deeplinkinternational.com"
              className="px-8 py-3 bg-accent text-background font-semibold rounded-lg hover:bg-accent/90 transition-all duration-300"
            >
              Email Us
            </a>
            <a
              href="https://wa.me/923367320089"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border border-accent text-accent font-semibold rounded-lg hover:bg-accent/10 transition-all duration-300"
            >
              WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
