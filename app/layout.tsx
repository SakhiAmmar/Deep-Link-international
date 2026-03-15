import type { Metadata, Viewport } from "next"
import { Inter, Oswald } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { CartProvider } from "@/lib/cart-context"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { LoadingScreen } from "@/components/loading-screen"
import "./globals.css"

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
})

const oswald = Oswald({ 
  subsets: ["latin"],
  variable: "--font-oswald",
})

export const metadata: Metadata = {
  title: "Deep Link International | Premium Sportswear Manufacturing",
  description:
    "Deep Link International - Your trusted partner for premium sportswear, streetwear, and gloves manufacturing. Performance without limits.",
  keywords: [
    "sportswear",
    "manufacturing",
    "custom sportswear",
    "athletic wear",
    "streetwear",
    "gloves",
    "soccer kits",
    "tracksuits",
  ],
  authors: [{ name: "Ammar Mughal" }],
  openGraph: {
    title: "Deep Link International | Premium Sportswear Manufacturing",
    description:
      "Premium sportswear, streetwear, and gloves manufacturing. Performance without limits.",
    type: "website",
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${oswald.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <CartProvider>
            <LoadingScreen />
            <Navbar />
            <main className="min-h-screen">{children}</main>
            <Footer />
          </CartProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
