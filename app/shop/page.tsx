"use client"

import { useState, useMemo, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { motion } from "framer-motion"
import { Search, Filter, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ProductCard } from "@/components/product-card"
import { products, categories } from "@/lib/products"

function ShopContent() {
  const searchParams = useSearchParams()
  const initialCategory = searchParams.get("category") || ""
  const initialSubcategory = searchParams.get("subcategory") || ""

  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState(initialCategory)
  const [selectedSubcategory, setSelectedSubcategory] = useState(initialSubcategory)
  const [showFilters, setShowFilters] = useState(false)
  const [displayCount, setDisplayCount] = useState(12)

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesCategory = !selectedCategory || product.category === selectedCategory
      const matchesSubcategory =
        !selectedSubcategory || product.subcategory === selectedSubcategory
      return matchesSearch && matchesCategory && matchesSubcategory
    })
  }, [searchQuery, selectedCategory, selectedSubcategory])

  const displayedProducts = filteredProducts.slice(0, displayCount)

  const currentSubcategories = selectedCategory
    ? categories[selectedCategory as keyof typeof categories]?.subcategories || []
    : []

  const clearFilters = () => {
    setSearchQuery("")
    setSelectedCategory("")
    setSelectedSubcategory("")
  }

  const hasActiveFilters = searchQuery || selectedCategory || selectedSubcategory

  return (
    <div className="pt-20 lg:pt-24">
      {/* Hero */}
      <section className="py-12 lg:py-20 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-xs tracking-[0.3em] text-primary">OUR COLLECTION</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mt-4">
              Shop Products
            </h1>
            <p className="text-muted-foreground mt-4 text-lg">
              Explore our premium sportswear, streetwear, and specialized gloves
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 lg:px-8 py-12">
        {/* Search and Filter Bar */}
        <div className="flex flex-col lg:flex-row gap-4 mb-8">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-secondary rounded-lg border border-border focus:border-primary focus:outline-none transition-colors"
            />
          </div>

          {/* Category Select */}
          <div className="relative">
            <select
              value={selectedCategory}
              onChange={(e) => {
                setSelectedCategory(e.target.value)
                setSelectedSubcategory("")
              }}
              className="appearance-none w-full lg:w-48 px-4 py-3 pr-10 bg-secondary rounded-lg border border-border focus:border-primary focus:outline-none cursor-pointer"
            >
              <option value="">All Categories</option>
              {Object.entries(categories).map(([key, category]) => (
                <option key={key} value={key}>
                  {category.name}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
          </div>

          {/* Subcategory Select */}
          {selectedCategory && (
            <div className="relative">
              <select
                value={selectedSubcategory}
                onChange={(e) => setSelectedSubcategory(e.target.value)}
                className="appearance-none w-full lg:w-56 px-4 py-3 pr-10 bg-secondary rounded-lg border border-border focus:border-primary focus:outline-none cursor-pointer"
              >
                <option value="">All {categories[selectedCategory as keyof typeof categories]?.name}</option>
                {currentSubcategories.map((sub) => (
                  <option key={sub} value={sub}>
                    {sub}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
            </div>
          )}

          {/* Clear Filters */}
          {hasActiveFilters && (
            <Button variant="outline" onClick={clearFilters} className="shrink-0">
              <X className="w-4 h-4 mr-2" />
              Clear Filters
            </Button>
          )}

          {/* Mobile Filter Toggle */}
          <Button
            variant="outline"
            onClick={() => setShowFilters(!showFilters)}
            className="lg:hidden"
          >
            <Filter className="w-4 h-4 mr-2" />
            Filters
          </Button>
        </div>

        {/* Results count */}
        <p className="text-sm text-muted-foreground mb-6">
          Showing {displayedProducts.length} of {filteredProducts.length} product{filteredProducts.length !== 1 ? "s" : ""}
          {hasActiveFilters && " with active filters"}
        </p>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
              {displayedProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>

            {/* Show More Button */}
            {displayCount < filteredProducts.length && (
              <div className="flex justify-center mt-12">
                <motion.button
                  onClick={() => setDisplayCount(displayCount + 12)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300"
                >
                  Show More Products
                </motion.button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-20">
            <p className="text-xl text-muted-foreground">No products found</p>
            <p className="text-sm text-muted-foreground mt-2">
              Try adjusting your search or filter criteria
            </p>
            <Button onClick={clearFilters} className="mt-6">
              Clear All Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}

export default function ShopPage() {
  return (
    <Suspense fallback={
      <div className="pt-20 lg:pt-24 min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    }>
      <ShopContent />
    </Suspense>
  )
}
