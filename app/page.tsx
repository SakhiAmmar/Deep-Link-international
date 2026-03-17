import { HeroSection } from "@/components/home/hero-section"
import { BrandSection } from "@/components/home/brand-section"
import { FeaturedProducts } from "@/components/home/featured-products"
import { CategoriesSection } from "@/components/home/categories-section"
import { GallerySection } from "@/components/home/gallery-section"
import { FAQSection } from "@/components/home/faq-section"
import { CTASection } from "@/components/home/cta-section"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <BrandSection />
      <FeaturedProducts />
      <CategoriesSection />
      <GallerySection />
      <FAQSection />
      <CTASection />
    </>
  )
}
