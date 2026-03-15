"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import {
  ShoppingBag,
  Trash2,
  Plus,
  Minus,
  ArrowRight,
  Mail,
  MessageCircle,
  CheckCircle,
  ShoppingCart,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/lib/cart-context"

export default function CartPage() {
  const { items, removeItem, updateQuantity, clearCart, totalItems } = useCart()
  const [showEmailForm, setShowEmailForm] = useState(false)
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    await new Promise((resolve) => setTimeout(resolve, 1000))

    const productsList = items
      .map((item) => `- ${item.name} (Size: ${item.size || "N/A"}, Qty: ${item.quantity})`)
      .join("\n")

    const emailBody = `Name: ${formState.name}
Email: ${formState.email}

Products Requested:
${productsList}

Additional Message:
${formState.message}`

    const mailtoLink = `mailto:info@deeplinkinternational.com?subject=${encodeURIComponent(
      "Product Inquiry from Website"
    )}&body=${encodeURIComponent(emailBody)}`

    window.location.href = mailtoLink

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const handleWhatsAppCheckout = () => {
    const productsList = items
      .map((item) => `• ${item.name} (Size: ${item.size || "N/A"}, Qty: ${item.quantity})`)
      .join("\n")

    const message = `Hi, I'm interested in the following products:\n\n${productsList}\n\nPlease provide pricing and availability.`

    window.open(
      `https://wa.me/923367320089?text=${encodeURIComponent(message)}`,
      "_blank"
    )
  }

  if (items.length === 0) {
    return (
      <div className="pt-20 lg:pt-24 min-h-screen">
        <div className="container mx-auto px-4 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-md mx-auto"
          >
            <div className="w-24 h-24 mx-auto bg-secondary rounded-full flex items-center justify-center mb-6">
              <ShoppingCart className="w-12 h-12 text-muted-foreground" />
            </div>
            <h1 className="text-3xl font-bold mb-4">Your Inquiry Cart is Empty</h1>
            <p className="text-muted-foreground mb-8">
              Browse our products and add items to your inquiry cart to request
              pricing and availability.
            </p>
            <Button asChild size="lg">
              <Link href="/shop">
                <ShoppingBag className="w-4 h-4 mr-2" />
                Browse Products
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-20 lg:pt-24 min-h-screen">
      {/* Header */}
      <section className="py-8 lg:py-12 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold">Inquiry Cart</h1>
            <p className="text-muted-foreground mt-2">
              {totalItems} item{totalItems !== 1 ? "s" : ""} in your inquiry cart
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-8 lg:py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              <AnimatePresence mode="popLayout">
                {items.map((item) => (
                  <motion.div
                    key={`${item.id}-${item.size}`}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    className="flex gap-4 p-4 bg-card border border-border rounded-xl"
                  >
                    {/* Image */}
                    <div className="relative w-24 h-24 md:w-32 md:h-32 bg-secondary rounded-lg overflow-hidden shrink-0">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between gap-4">
                        <div>
                          <Link
                            href={`/product/${item.id}`}
                            className="font-semibold hover:text-primary transition-colors line-clamp-1"
                          >
                            {item.name}
                          </Link>
                          <p className="text-sm text-muted-foreground capitalize">
                            {item.category}
                          </p>
                          {item.size && (
                            <p className="text-sm text-muted-foreground">
                              Size: {item.size}
                            </p>
                          )}
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="p-2 text-muted-foreground hover:text-destructive transition-colors shrink-0"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>

                      {/* Quantity */}
                      <div className="flex items-center gap-3 mt-4">
                        <span className="text-sm text-muted-foreground">Qty:</span>
                        <div className="flex items-center border border-border rounded-lg">
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                            className="p-2 hover:bg-secondary transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="px-3 py-1 min-w-[40px] text-center font-medium">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            className="p-2 hover:bg-secondary transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              {/* Clear cart button */}
              <div className="flex justify-end pt-4">
                <Button variant="ghost" onClick={clearCart} className="text-muted-foreground">
                  <Trash2 className="w-4 h-4 mr-2" />
                  Clear Cart
                </Button>
              </div>
            </div>

            {/* Checkout Panel */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="sticky top-24 p-6 bg-card border border-border rounded-xl"
              >
                <h2 className="text-xl font-bold mb-4">Send Inquiry</h2>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Total Items</span>
                    <span className="font-medium">{totalItems}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Products</span>
                    <span className="font-medium">{items.length}</span>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mb-6">
                  This is an inquiry-based catalog. Submit your cart to receive
                  pricing and availability information.
                </p>

                <div className="space-y-3">
                  <Button
                    onClick={() => setShowEmailForm(!showEmailForm)}
                    className="w-full"
                    variant={showEmailForm ? "secondary" : "default"}
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    {showEmailForm ? "Hide Form" : "Email Inquiry"}
                  </Button>

                  <Button
                    onClick={handleWhatsAppCheckout}
                    variant="outline"
                    className="w-full"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp Inquiry
                  </Button>
                </div>

                {/* Email Form */}
                <AnimatePresence>
                  {showEmailForm && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      {isSubmitted ? (
                        <div className="pt-6 text-center">
                          <CheckCircle className="w-12 h-12 mx-auto text-primary mb-3" />
                          <p className="font-medium">Email Prepared!</p>
                          <p className="text-sm text-muted-foreground mt-1">
                            Check your email client to send the inquiry.
                          </p>
                        </div>
                      ) : (
                        <form onSubmit={handleEmailSubmit} className="pt-6 space-y-4">
                          <div>
                            <label
                              htmlFor="cart-name"
                              className="block text-sm font-medium mb-1"
                            >
                              Your Name *
                            </label>
                            <input
                              type="text"
                              id="cart-name"
                              required
                              value={formState.name}
                              onChange={(e) =>
                                setFormState({ ...formState, name: e.target.value })
                              }
                              className="w-full px-3 py-2 bg-secondary rounded-lg border border-border focus:border-primary focus:outline-none text-sm"
                              placeholder="John Doe"
                            />
                          </div>
                          <div>
                            <label
                              htmlFor="cart-email"
                              className="block text-sm font-medium mb-1"
                            >
                              Email *
                            </label>
                            <input
                              type="email"
                              id="cart-email"
                              required
                              value={formState.email}
                              onChange={(e) =>
                                setFormState({ ...formState, email: e.target.value })
                              }
                              className="w-full px-3 py-2 bg-secondary rounded-lg border border-border focus:border-primary focus:outline-none text-sm"
                              placeholder="john@company.com"
                            />
                          </div>
                          <div>
                            <label
                              htmlFor="cart-message"
                              className="block text-sm font-medium mb-1"
                            >
                              Additional Message
                            </label>
                            <textarea
                              id="cart-message"
                              rows={3}
                              value={formState.message}
                              onChange={(e) =>
                                setFormState({ ...formState, message: e.target.value })
                              }
                              className="w-full px-3 py-2 bg-secondary rounded-lg border border-border focus:border-primary focus:outline-none text-sm resize-none"
                              placeholder="Any specific requirements..."
                            />
                          </div>
                          <Button
                            type="submit"
                            className="w-full"
                            disabled={isSubmitting}
                          >
                            {isSubmitting ? (
                              <>
                                <div className="w-4 h-4 mr-2 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                                Preparing...
                              </>
                            ) : (
                              <>
                                Send Inquiry
                                <ArrowRight className="w-4 h-4 ml-2" />
                              </>
                            )}
                          </Button>
                        </form>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
