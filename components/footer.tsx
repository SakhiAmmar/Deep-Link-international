"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter, Linkedin } from "lucide-react"

const footerLinks = {
  quickLinks: [
    { href: "/", label: "Home" },
    { href: "/shop", label: "Shop" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
    { href: "/cart", label: "Inquiry Cart" },
  ],
  categories: [
    { href: "/shop?category=sportswear", label: "Sportswear" },
    { href: "/shop?category=streetwear", label: "Streetwear" },
    { href: "/shop?category=gloves", label: "Gloves" },
  ],
  sportswear: [
    { href: "/shop?subcategory=Soccer+Kits", label: "Soccer Kits" },
    { href: "/shop?subcategory=Tracksuits", label: "Tracksuits" },
    { href: "/shop?subcategory=Rugby", label: "Rugby" },
    { href: "/shop?subcategory=American+Football", label: "American Football" },
  ],
}

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
]

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block">
              <h3 className="text-2xl font-bold tracking-tight">DEEP LINK</h3>
              <p className="text-xs tracking-widest text-muted-foreground">
                INTERNATIONAL
              </p>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Premium sportswear manufacturing with a commitment to quality,
              innovation, and performance excellence.
            </p>
            <div className="flex gap-3 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 tracking-wide">QUICK LINKS</h4>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold mb-4 tracking-wide">CATEGORIES</h4>
            <ul className="space-y-3">
              {footerLinks.categories.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h4 className="font-semibold mt-6 mb-4 tracking-wide">SPORTSWEAR</h4>
            <ul className="space-y-3">
              {footerLinks.sportswear.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 tracking-wide">CONTACT US</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a
                    href="mailto:info@deeplinkinternational.com"
                    className="text-sm hover:text-primary transition-colors"
                  >
                    info@deeplinkinternational.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground">WhatsApp</p>
                  <a
                    href="https://wa.me/923367320089"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm hover:text-primary transition-colors"
                  >
                    +92 336 7320089
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="text-sm">Pakistan</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Deep Link International. All rights
              reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Built by{" "}
              <span className="text-primary font-medium">Ammar Mughal</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
