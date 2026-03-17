'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FileText, Download } from 'lucide-react'

interface Catalogue {
  id: string
  name: string
  url: string
  uploadedDate: string
  size: string
}

export default function CataloguePage() {
  const [catalogues, setCatalogues] = useState<Catalogue[]>([
    {
      id: '1',
      name: 'Winter Collection 2024',
      url: '#',
      uploadedDate: '2024-01-15',
      size: '12.5 MB'
    },
    {
      id: '2',
      name: 'Sportswear Catalogue',
      url: '#',
      uploadedDate: '2024-01-10',
      size: '8.3 MB'
    },
  ])

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
    <main className="min-h-screen bg-background pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Our <span className="text-accent">Catalogues</span>
          </h1>
          <p className="text-foreground/60 text-lg max-w-2xl">
            Download our latest product catalogues featuring our complete sportswear, streetwear, and gloves collections.
          </p>
        </motion.div>

        {/* Catalogues Grid */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">Available Catalogues</h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {catalogues.map((catalogue) => (
              <motion.div
                key={catalogue.id}
                variants={itemVariants}
                whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(30, 144, 255, 0.15)' }}
                transition={{ duration: 0.3 }}
                className="group p-6 rounded-lg bg-card border border-border hover:border-accent/50 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <motion.div
                    className="p-3 bg-accent/10 rounded-lg"
                    whileHover={{ rotate: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FileText className="w-6 h-6 text-accent" />
                  </motion.div>
                </div>

                <h3 className="font-semibold text-lg mb-2 line-clamp-2">{catalogue.name}</h3>

                <div className="space-y-2 text-sm text-foreground/60 mb-4">
                  <p>📅 {new Date(catalogue.uploadedDate).toLocaleDateString()}</p>
                  <p>📦 {catalogue.size}</p>
                </div>

                <motion.a
                  href={catalogue.url}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center gap-2 w-full py-2 px-4 bg-accent text-background font-semibold rounded-lg hover:bg-accent/90 transition-all duration-300"
                >
                  <Download className="w-4 h-4" />
                  Download
                </motion.a>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            { label: 'Total Collections', value: catalogues.length },
            { label: 'Product Categories', value: '3' },
            { label: 'Total Products', value: '300+' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="p-6 rounded-lg bg-card border border-border text-center"
            >
              <motion.div
                className="text-3xl font-bold text-accent mb-2"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                {stat.value}
              </motion.div>
              <p className="text-foreground/60">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  )
}
