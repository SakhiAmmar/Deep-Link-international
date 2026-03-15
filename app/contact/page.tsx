"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
  const formRef = useRef<HTMLDivElement>(null)
  const isFormInView = useInView(formRef, { once: true })
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Create mailto link
    const mailtoLink = `mailto:info@deeplinkinternational.com?subject=${encodeURIComponent(
      formState.subject || "Inquiry from Website"
    )}&body=${encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\nCompany: ${formState.company}\n\nMessage:\n${formState.message}`
    )}`

    window.location.href = mailtoLink

    setIsSubmitting(false)
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormState({ ...formState, [e.target.name]: e.target.value })
  }

  return (
    <div className="pt-20 lg:pt-24">
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-xs tracking-[0.3em] text-primary">CONTACT US</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mt-4">
              Get in Touch
            </h1>
            <p className="text-muted-foreground mt-6 text-lg">
              Have questions about our products or want to discuss a partnership?
              We{"'"}d love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-1 space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <p className="text-muted-foreground">
                  Reach out to us through any of these channels. We typically respond
                  within 24 hours.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a
                      href="mailto:info@deeplinkinternational.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      info@deeplinkinternational.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">WhatsApp</h3>
                    <a
                      href="https://wa.me/923367320089"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +92 336 7320089
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Location</h3>
                    <p className="text-muted-foreground">Pakistan</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Business Hours</h3>
                    <p className="text-muted-foreground">Mon - Sat: 9:00 AM - 6:00 PM (PKT)</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="p-6 bg-primary/5 rounded-xl border border-primary/10">
                <h3 className="font-semibold mb-2">Quick Response via WhatsApp</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  For faster response, reach us directly on WhatsApp.
                </p>
                <Button asChild className="w-full">
                  <a
                    href="https://wa.me/923367320089?text=Hi%2C%20I%27m%20interested%20in%20your%20products"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Chat on WhatsApp
                  </a>
                </Button>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              ref={formRef}
              initial={{ opacity: 0, x: 20 }}
              animate={isFormInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="bg-card border border-border rounded-xl p-6 lg:p-8">
                <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 text-center"
                  >
                    <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <CheckCircle className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Message Prepared!</h3>
                    <p className="text-muted-foreground">
                      Your email client should open with the message. If not, please
                      contact us directly at info@deeplinkinternational.com
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium mb-2"
                        >
                          Your Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formState.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-secondary rounded-lg border border-border focus:border-primary focus:outline-none transition-colors"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium mb-2"
                        >
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formState.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-secondary rounded-lg border border-border focus:border-primary focus:outline-none transition-colors"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="company"
                          className="block text-sm font-medium mb-2"
                        >
                          Company Name
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formState.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-secondary rounded-lg border border-border focus:border-primary focus:outline-none transition-colors"
                          placeholder="Your Company"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="subject"
                          className="block text-sm font-medium mb-2"
                        >
                          Subject *
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          required
                          value={formState.subject}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-secondary rounded-lg border border-border focus:border-primary focus:outline-none transition-colors cursor-pointer"
                        >
                          <option value="">Select a subject</option>
                          <option value="Product Inquiry">Product Inquiry</option>
                          <option value="Bulk Order">Bulk Order</option>
                          <option value="Custom Manufacturing">Custom Manufacturing</option>
                          <option value="Partnership">Partnership</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium mb-2"
                      >
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formState.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-secondary rounded-lg border border-border focus:border-primary focus:outline-none transition-colors resize-none"
                        placeholder="Tell us about your requirements..."
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full md:w-auto"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 mr-2 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                          Preparing...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
