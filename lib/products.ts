export interface Product {
  id: string
  name: string
  category: string
  subcategory: string
  description: string
  features: string[]
  sizes: string[]
  images: string[]
  featured?: boolean
}

export const categories = {
  sportswear: {
    name: "Sportswear",
    subcategories: [
      "Soccer Kits",
      "Tracksuits",
      "Rain Jackets",
      "Bubble Jackets",
      "Polo Shirts",
      "Rugby",
      "American Football",
      "Netball",
      "Half Zip Top",
      "Motocross Suits",
      "Ice Hockey Kits",
      "Racing Jackets",
    ],
  },
  streetwear: {
    name: "Streetwear",
    subcategories: [
      "Hoodies",
      "Graphic T-Shirts",
      "Oversize Hoodies",
      "Flannel Shirts",
      "Long Sleeve Tees",
      "Cargo Pants",
      "Baggy Jeans",
      "Ripped Jeans",
      "Shorts",
      "Caps",
      "Cross Body Bags",
    ],
  },
  gloves: {
    name: "Gloves",
    subcategories: [
      "Weightlifting Gloves",
      "Cycling Gloves",
      "Soccer Gloves",
      "Baseball Batting Gloves",
      "American Football Gloves",
      "Motorbike Gloves",
      "Sim Racing Gloves",
      "Motocross Gloves",
      "Hunting Gloves",
      "Golf Gloves",
    ],
  },
}

// COMPREHENSIVE PRODUCT LIST - 10 PER SUBCATEGORY
// Using unique IDs with format: category-subcategory-number

export const products: Product[] = [
  // SPORTSWEAR - SOCCER KITS (10)
  { id: "soccer-1", name: "Pro Soccer Kit", category: "sportswear", subcategory: "Soccer Kits", description: "Premium performance soccer kit designed for professional athletes.", features: ["Moisture-wicking fabric", "Breathable mesh panels", "Reinforced stitching", "Custom sublimation printing"], sizes: ["XS", "S", "M", "L", "XL", "XXL"], images: ["/products/soccer-1.jpg", "/products/soccer-2.jpg"], featured: true },
  { id: "soccer-2", name: "Elite Soccer Jersey Set", category: "sportswear", subcategory: "Soccer Kits", description: "Tournament-grade soccer jersey set with reversible design.", features: ["Reversible design", "Premium polyester", "Moisture control", "Team numbering"], sizes: ["XS", "S", "M", "L", "XL", "XXL"], images: ["/products/soccer-3.jpg", "/products/soccer-4.jpg"] },
  { id: "soccer-3", name: "Academy Training Kit", category: "sportswear", subcategory: "Soccer Kits", description: "Lightweight training kit designed for soccer academies.", features: ["Youth-friendly", "Quick-dry technology", "UV protection", "Comfortable fit"], sizes: ["XS", "S", "M", "L", "XL"], images: ["/products/soccer-5.jpg", "/products/soccer-6.jpg"] },
  { id: "soccer-4", name: "Club Edition Soccer Kit", category: "sportswear", subcategory: "Soccer Kits", description: "Official club-grade soccer kit with premium sublimation.", features: ["Official graphics", "Club patch", "Breathable mesh", "Full customization"], sizes: ["S", "M", "L", "XL", "XXL"], images: ["/products/soccer-7.jpg", "/products/soccer-8.jpg"] },
  { id: "soccer-5", name: "Women's Soccer Kit Pro", category: "sportswear", subcategory: "Soccer Kits", description: "Tailored women's soccer kit with ergonomic fit.", features: ["Women's fit", "Supportive design", "Moisture-wicking", "Flatlock seams"], sizes: ["XS", "S", "M", "L", "XL"], images: ["/products/soccer-9.jpg", "/products/soccer-10.jpg"] },
  { id: "soccer-6", name: "Retro Soccer Kit Classic", category: "sportswear", subcategory: "Soccer Kits", description: "Vintage-inspired soccer kit with classic styling.", features: ["Retro design", "Premium cotton blend", "Classic colors", "Vintage appeal"], sizes: ["S", "M", "L", "XL", "XXL"], images: ["/products/soccer-11.jpg", "/products/soccer-12.jpg"] },
  { id: "soccer-7", name: "Youth Soccer Kit Starter", category: "sportswear", subcategory: "Soccer Kits", description: "Durable and affordable soccer kit for young players.", features: ["Durable fabric", "Growth room", "Easy care", "Vibrant colors"], sizes: ["4", "6", "8", "10", "12", "14"], images: ["/products/soccer-13.jpg", "/products/soccer-14.jpg"] },
  { id: "soccer-8", name: "Premium Match Kit", category: "sportswear", subcategory: "Soccer Kits", description: "Premium match-day kit with professional materials.", features: ["Premium polyester", "Match-day fit", "Professional stitching", "Advanced printing"], sizes: ["S", "M", "L", "XL", "XXL", "3XL"], images: ["/products/soccer-15.jpg", "/products/soccer-16.jpg"] },
  { id: "soccer-9", name: "Futsal Indoor Kit", category: "sportswear", subcategory: "Soccer Kits", description: "Specialized kit for futsal with indoor court performance.", features: ["Indoor optimized", "Extra flexibility", "Lightweight", "Court-friendly"], sizes: ["S", "M", "L", "XL"], images: ["/products/soccer-17.jpg", "/products/soccer-18.jpg"] },
  { id: "soccer-10", name: "Beach Soccer Kit", category: "sportswear", subcategory: "Soccer Kits", description: "Lightweight beach soccer kit with sand-resistant fabric.", features: ["Sand-resistant", "Quick-dry", "Lightweight", "UV protected"], sizes: ["S", "M", "L", "XL"], images: ["/products/soccer-19.jpg", "/products/soccer-20.jpg"] },

  // SPORTSWEAR - TRACKSUITS (10)
  { id: "tracksuit-1", name: "Elite Tracksuit", category: "sportswear", subcategory: "Tracksuits", description: "Luxury tracksuit combining style and functionality.", features: ["Premium polyester blend", "Full zip jacket", "Tapered fit pants", "Hidden pockets"], sizes: ["S", "M", "L", "XL", "XXL"], images: ["/products/tracksuit-1.jpg", "/products/tracksuit-2.jpg"], featured: true },
  { id: "tracksuit-2", name: "Performance Tracksuit", category: "sportswear", subcategory: "Tracksuits", description: "High-performance tracksuit for athletes.", features: ["Moisture-wicking", "Stretch fabric", "Zippered pockets", "Breathable lining"], sizes: ["XS", "S", "M", "L", "XL", "XXL"], images: ["/products/tracksuit-3.jpg", "/products/tracksuit-4.jpg"] },
  { id: "tracksuit-3", name: "Women's Elite Tracksuit", category: "sportswear", subcategory: "Tracksuits", description: "Women's tracksuit with tailored fit.", features: ["Tailored fit", "Adjustable waist", "Flatlock seams", "Stylish design"], sizes: ["XS", "S", "M", "L", "XL"], images: ["/products/tracksuit-5.jpg", "/products/tracksuit-6.jpg"] },
  { id: "tracksuit-4", name: "Vintage Tracksuit", category: "sportswear", subcategory: "Tracksuits", description: "Retro-style tracksuit with modern comfort.", features: ["Retro style", "Comfortable fit", "Quality fabric", "Relaxed design"], sizes: ["S", "M", "L", "XL", "XXL"], images: ["/products/tracksuit-7.jpg", "/products/tracksuit-8.jpg"] },
  { id: "tracksuit-5", name: "Tech Tracksuit Pro", category: "sportswear", subcategory: "Tracksuits", description: "Advanced tech tracksuit with cooling technology.", features: ["Cooling technology", "Moisture control", "Anti-bacterial", "Tech fabric"], sizes: ["S", "M", "L", "XL", "XXL"], images: ["/products/tracksuit-9.jpg", "/products/tracksuit-10.jpg"] },
  { id: "tracksuit-6", name: "Winter Tracksuit", category: "sportswear", subcategory: "Tracksuits", description: "Insulated tracksuit for cold weather.", features: ["Thermal lining", "Windproof", "Warm fit", "Inner fleece"], sizes: ["S", "M", "L", "XL", "XXL"], images: ["/products/tracksuit-11.jpg", "/products/tracksuit-12.jpg"] },
  { id: "tracksuit-7", name: "Youth Tracksuit", category: "sportswear", subcategory: "Tracksuits", description: "Tracksuit designed for young athletes.", features: ["Youth fit", "Durable", "Fun colors", "Comfortable"], sizes: ["6", "8", "10", "12", "14", "16"], images: ["/products/tracksuit-13.jpg", "/products/tracksuit-14.jpg"] },
  { id: "tracksuit-8", name: "Premium Tracksuit Deluxe", category: "sportswear", subcategory: "Tracksuits", description: "Premium tracksuit with luxury materials.", features: ["Premium fabric", "Designer style", "Perfect fit", "Luxury finish"], sizes: ["S", "M", "L", "XL", "XXL"], images: ["/products/tracksuit-15.jpg", "/products/tracksuit-16.jpg"] },
  { id: "tracksuit-9", name: "Slim Fit Tracksuit", category: "sportswear", subcategory: "Tracksuits", description: "Modern slim-fit tracksuit.", features: ["Slim fit", "Streamlined", "Lightweight", "Modern style"], sizes: ["XS", "S", "M", "L", "XL"], images: ["/products/tracksuit-17.jpg", "/products/tracksuit-18.jpg"] },
  { id: "tracksuit-10", name: "Oversized Tracksuit", category: "sportswear", subcategory: "Tracksuits", description: "Comfortable oversized tracksuit.", features: ["Oversized fit", "Relaxed style", "Cozy feel", "Trendy"], sizes: ["S", "M", "L", "XL", "XXL"], images: ["/products/tracksuit-19.jpg", "/products/tracksuit-20.jpg"] },

  // SPORTSWEAR - RAIN JACKETS (10)
  { id: "rainjacket-1", name: "Storm Rain Jacket", category: "sportswear", subcategory: "Rain Jackets", description: "Waterproof rain jacket with advanced breathability.", features: ["Waterproof membrane", "Sealed seams", "Adjustable hood", "Reflective details"], sizes: ["S", "M", "L", "XL", "XXL"], images: ["/products/rainjacket-1.jpg", "/products/rainjacket-2.jpg"] },
  { id: "rainjacket-2", name: "Pro Rain Jacket", category: "sportswear", subcategory: "Rain Jackets", description: "Professional-grade waterproof jacket.", features: ["3000mm waterproof", "Breathable backing", "Taped seams", "Ventilation zips"], sizes: ["S", "M", "L", "XL", "XXL"], images: ["/products/rainjacket-3.jpg", "/products/rainjacket-4.jpg"] },
  { id: "rainjacket-3", name: "Lightweight Rain Jacket", category: "sportswear", subcategory: "Rain Jackets", description: "Packable lightweight rain jacket.", features: ["Ultra-light", "Packable", "Water-resistant", "Breathable"], sizes: ["XS", "S", "M", "L", "XL"], images: ["/products/rainjacket-5.jpg", "/products/rainjacket-6.jpg"] },
  { id: "rainjacket-4", name: "Reflective Rain Jacket", category: "sportswear", subcategory: "Rain Jackets", description: "Rain jacket with reflective safety features.", features: ["Reflective strips", "High visibility", "Waterproof", "Safe design"], sizes: ["S", "M", "L", "XL", "XXL"], images: ["/products/rainjacket-7.jpg", "/products/rainjacket-8.jpg"] },
  { id: "rainjacket-5", name: "Tech Rain Jacket", category: "sportswear", subcategory: "Rain Jackets", description: "Advanced tech rain jacket with smart features.", features: ["Tech fabric", "Moisture control", "Anti-odor", "Smart design"], sizes: ["S", "M", "L", "XL", "XXL"], images: ["/products/rainjacket-9.jpg", "/products/rainjacket-10.jpg"] },
  { id: "rainjacket-6", name: "Women's Rain Jacket", category: "sportswear", subcategory: "Rain Jackets", description: "Women's tailored rain jacket.", features: ["Women's fit", "Tailored cut", "Waterproof", "Stylish"], sizes: ["XS", "S", "M", "L", "XL"], images: ["/products/rainjacket-11.jpg", "/products/rainjacket-12.jpg"] },
  { id: "rainjacket-7", name: "Youth Rain Jacket", category: "sportswear", subcategory: "Rain Jackets", description: "Youth rain jacket with fun design.", features: ["Youth fit", "Fun colors", "Waterproof", "Easy care"], sizes: ["6", "8", "10", "12", "14", "16"], images: ["/products/rainjacket-13.jpg", "/products/rainjacket-14.jpg"] },
  { id: "rainjacket-8", name: "Premium Rain Jacket", category: "sportswear", subcategory: "Rain Jackets", description: "Premium waterproof rain jacket.", features: ["Premium fabric", "Luxury feel", "Perfect waterproofing", "High end"], sizes: ["S", "M", "L", "XL", "XXL"], images: ["/products/rainjacket-15.jpg", "/products/rainjacket-16.jpg"] },
  { id: "rainjacket-9", name: "Insulated Rain Jacket", category: "sportswear", subcategory: "Rain Jackets", description: "Waterproof insulated rain jacket.", features: ["Insulated lining", "Waterproof", "Warm", "Cold weather"], sizes: ["S", "M", "L", "XL", "XXL"], images: ["/products/rainjacket-17.jpg", "/products/rainjacket-18.jpg"] },
  { id: "rainjacket-10", name: "Sport Rain Jacket", category: "sportswear", subcategory: "Rain Jackets", description: "Sports-specific rain jacket.", features: ["Sport fit", "Flexible", "Waterproof", "Breathable"], sizes: ["S", "M", "L", "XL", "XXL"], images: ["/products/rainjacket-19.jpg", "/products/rainjacket-20.jpg"] },

  // SPORTSWEAR - BUBBLE JACKETS (10)
  { id: "bubble-1", name: "Winter Bubble Jacket", category: "sportswear", subcategory: "Bubble Jackets", description: "Insulated bubble jacket for extreme cold.", features: ["Down insulation", "Water-resistant", "Packable design", "Inner pockets"], sizes: ["S", "M", "L", "XL", "XXL"], images: ["/products/bubble-1.jpg", "/products/bubble-2.jpg"] },
  { id: "bubble-2", name: "Pro Bubble Jacket", category: "sportswear", subcategory: "Bubble Jackets", description: "Professional-grade bubble jacket.", features: ["Premium down", "Water-proof", "Lightweight", "High insulation"], sizes: ["S", "M", "L", "XL", "XXL"], images: ["/products/bubble-3.jpg", "/products/bubble-4.jpg"] },
  { id: "bubble-3", name: "Tech Bubble Jacket", category: "sportswear", subcategory: "Bubble Jackets", description: "Advanced tech bubble jacket.", features: ["Tech insulation", "Moisture control", "Temperature regulated", "Smart design"], sizes: ["S", "M", "L", "XL", "XXL"], images: ["/products/bubble-5.jpg", "/products/bubble-6.jpg"] },
  { id: "bubble-4", name: "Lightweight Bubble Jacket", category: "sportswear", subcategory: "Bubble Jackets", description: "Lightweight packable bubble jacket.", features: ["Ultra-light", "Packable", "Warm", "Portable"], sizes: ["XS", "S", "M", "L", "XL"], images: ["/products/bubble-7.jpg", "/products/bubble-8.jpg"] },
  { id: "bubble-5", name: "Women's Bubble Jacket", category: "sportswear", subcategory: "Bubble Jackets", description: "Women's tailored bubble jacket.", features: ["Women's fit", "Tailored", "Warm", "Stylish"], sizes: ["XS", "S", "M", "L", "XL"], images: ["/products/bubble-9.jpg", "/products/bubble-10.jpg"] },
  { id: "bubble-6", name: "Youth Bubble Jacket", category: "sportswear", subcategory: "Bubble Jackets", description: "Youth bubble jacket.", features: ["Youth fit", "Fun colors", "Warm", "Durable"], sizes: ["6", "8", "10", "12", "14", "16"], images: ["/products/bubble-11.jpg", "/products/bubble-12.jpg"] },
  { id: "bubble-7", name: "Premium Bubble Jacket", category: "sportswear", subcategory: "Bubble Jackets", description: "Premium luxury bubble jacket.", features: ["Premium down", "Luxury feel", "Perfect insulation", "High-end"], sizes: ["S", "M", "L", "XL", "XXL"], images: ["/products/bubble-13.jpg", "/products/bubble-14.jpg"] },
  { id: "bubble-8", name: "Long Bubble Jacket", category: "sportswear", subcategory: "Bubble Jackets", description: "Extended long bubble jacket.", features: ["Long cut", "Extra coverage", "Warm", "Extended"], sizes: ["S", "M", "L", "XL", "XXL"], images: ["/products/bubble-15.jpg", "/products/bubble-16.jpg"] },
  { id: "bubble-9", name: "Oversized Bubble Jacket", category: "sportswear", subcategory: "Bubble Jackets", description: "Comfortable oversized bubble jacket.", features: ["Oversized fit", "Relaxed", "Cozy", "Trendy"], sizes: ["S", "M", "L", "XL", "XXL"], images: ["/products/bubble-17.jpg", "/products/bubble-18.jpg"] },
  { id: "bubble-10", name: "Reversible Bubble Jacket", category: "sportswear", subcategory: "Bubble Jackets", description: "Two-in-one reversible bubble jacket.", features: ["Reversible", "Two colors", "Warm", "Versatile"], sizes: ["S", "M", "L", "XL", "XXL"], images: ["/products/bubble-19.jpg", "/products/bubble-20.jpg"] },

  // SPORTSWEAR - POLO SHIRTS (10)
  { id: "polo-1", name: "Performance Polo", category: "sportswear", subcategory: "Polo Shirts", description: "Polo with modern performance features.", features: ["Quick-dry fabric", "UV protection", "Anti-odor technology", "Ribbed collar"], sizes: ["S", "M", "L", "XL", "XXL"], images: ["/products/polo-1.jpg", "/products/polo-2.jpg"] },
  { id: "polo-2", name: "Classic Polo Shirt", category: "sportswear", subcategory: "Polo Shirts", description: "Timeless classic polo shirt.", features: ["100% cotton", "Ribbed collar", "Button placket", "Comfortable fit"], sizes: ["S", "M", "L", "XL", "XXL"], images: ["/products/polo-3.jpg", "/products/polo-4.jpg"] },
  { id: "polo-3", name: "Premium Polo", category: "sportswear", subcategory: "Polo Shirts", description: "Premium quality polo shirt.", features: ["Premium cotton", "Fine stitching", "Luxury feel", "Perfect fit"], sizes: ["S", "M", "L", "XL", "XXL"], images: ["/products/polo-5.jpg", "/products/polo-6.jpg"] },
  { id: "polo-4", name: "Sport Polo", category: "sportswear", subcategory: "Polo Shirts", description: "Athletic sport polo shirt.", features: ["Sport fit", "Moisture-wicking", "Breathable", "Athletic cut"], sizes: ["S", "M", "L", "XL", "XXL"], images: ["/products/polo-7.jpg", "/products/polo-8.jpg"] },
  { id: "polo-5", name: "Women's Polo", category: "sportswear", subcategory: "Polo Shirts", description: "Women's tailored polo shirt.", features: ["Women's fit", "Tailored cut", "Flatlock seams", "Feminine design"], sizes: ["XS", "S", "M", "L", "XL"], images: ["/products/polo-9.jpg", "/products/polo-10.jpg"] },
  { id: "polo-6", name: "Youth Polo", category: "sportswear", subcategory: "Polo Shirts", description: "Youth polo shirt.", features: ["Youth fit", "Comfortable", "Durable", "Fun colors"], sizes: ["6", "8", "10", "12", "14", "16"], images: ["/products/polo-11.jpg", "/products/polo-12.jpg"] },
  { id: "polo-7", name: "Golf Polo", category: "sportswear", subcategory: "Polo Shirts", description: "Professional golf polo.", features: ["Golf fit", "UPF protection", "Moisture control", "Professional"], sizes: ["S", "M", "L", "XL", "XXL"], images: ["/products/polo-13.jpg", "/products/polo-14.jpg"] },
  { id: "polo-8", name: "Tech Polo", category: "sportswear", subcategory: "Polo Shirts", description: "Advanced tech polo shirt.", features: ["Tech fabric", "Cooling", "Anti-bacterial", "Smart design"], sizes: ["S", "M", "L", "XL", "XXL"], images: ["/products/polo-15.jpg", "/products/polo-16.jpg"] },
  { id: "polo-9", name: "Striped Polo", category: "sportswear", subcategory: "Polo Shirts", description: "Striped polo shirt.", features: ["Striped design", "Classic style", "Quality fabric", "Timeless"], sizes: ["S", "M", "L", "XL", "XXL"], images: ["/products/polo-17.jpg", "/products/polo-18.jpg"] },
  { id: "polo-10", name: "Solid Polo", category: "sportswear", subcategory: "Polo Shirts", description: "Solid color polo shirt.", features: ["Solid color", "Versatile", "Easy care", "Essential"], sizes: ["S", "M", "L", "XL", "XXL"], images: ["/products/polo-19.jpg", "/products/polo-20.jpg"] },

  // SPORTSWEAR - RUGBY (10)
  { id: "rugby-1", name: "Pro Rugby Jersey", category: "sportswear", subcategory: "Rugby", description: "Heavy-duty rugby jersey built to withstand tough matches.", features: ["Reinforced stitching", "Durable fabric", "Sublimated graphics", "Grip collar"], sizes: ["S", "M", "L", "XL", "XXL", "3XL"], images: ["/products/rugby-1.jpg", "/products/rugby-2.jpg"], featured: true },
  { id: "rugby-2", name: "Elite Rugby Jersey", category: "sportswear", subcategory: "Rugby", description: "Premium rugby jersey for elite teams.", features: ["Premium fabric", "Reinforced collar", "Professional stitching", "Team customization"], sizes: ["S", "M", "L", "XL", "XXL"], images: ["/products/rugby-3.jpg", "/products/rugby-4.jpg"] },
  { id: "rugby-3", name: "Training Rugby Jersey", category: "sportswear", subcategory: "Rugby", description: "Comfortable training rugby jersey.", features: ["Breathable mesh", "Flexible fit", "Easy care", "Training focused"], sizes: ["S", "M", "L", "XL", "XXL"], images: ["/products/rugby-5.jpg", "/products/rugby-6.jpg"] },
  { id: "rugby-4", name: "Youth Rugby Jersey", category: "sportswear", subcategory: "Rugby", description: "Youth rugby jersey.", features: ["Youth fit", "Durable", "Fun colors", "Growing room"], sizes: ["6", "8", "10", "12", "14", "16"], images: ["/products/rugby-7.jpg", "/products/rugby-8.jpg"] },
  { id: "rugby-5", name: "Women's Rugby Jersey", category: "sportswear", subcategory: "Rugby", description: "Women's tailored rugby jersey.", features: ["Women's fit", "Supportive design", "Tailored", "Feminine cut"], sizes: ["XS", "S", "M", "L", "XL"], images: ["/products/rugby-9.jpg", "/products/rugby-10.jpg"] },
  { id: "rugby-6", name: "Vintage Rugby Jersey", category: "sportswear", subcategory: "Rugby", description: "Classic vintage rugby jersey.", features: ["Retro style", "Heritage design", "Quality fabric", "Classic"], sizes: ["S", "M", "L", "XL", "XXL"], images: ["/products/rugby-11.jpg", "/products/rugby-12.jpg"] },
  { id: "rugby-7", name: "Lightweight Rugby Jersey", category: "sportswear", subcategory: "Rugby", description: "Lightweight rugby jersey.", features: ["Lightweight fabric", "Breathable", "Mobile", "Quick-dry"], sizes: ["S", "M", "L", "XL", "XXL"], images: ["/products/rugby-13.jpg", "/products/rugby-14.jpg"] },
  { id: "rugby-8", name: "Premium Rugby Jersey", category: "sportswear", subcategory: "Rugby", description: "Premium quality rugby jersey.", features: ["Premium fabric", "Perfect fit", "Luxury finish", "High-end"], sizes: ["S", "M", "L", "XL", "XXL"], images: ["/products/rugby-15.jpg", "/products/rugby-16.jpg"] },
  { id: "rugby-9", name: "Match Day Rugby Jersey", category: "sportswear", subcategory: "Rugby", description: "Official match day rugby jersey.", features: ["Match approved", "Official graphics", "Reinforced", "Professional"], sizes: ["S", "M", "L", "XL", "XXL", "3XL"], images: ["/products/rugby-17.jpg", "/products/rugby-18.jpg"] },
  { id: "rugby-10", name: "Replica Rugby Jersey", category: "sportswear", subcategory: "Rugby", description: "Authentic replica rugby jersey.", features: ["Official replica", "Team colors", "Authentic", "Licensed"], sizes: ["S", "M", "L", "XL", "XXL"], images: ["/products/rugby-19.jpg", "/products/rugby-20.jpg"] },

  // SPORTSWEAR - AMERICAN FOOTBALL (10)
  { id: "amfootball-1", name: "Pro American Football Jersey", category: "sportswear", subcategory: "American Football", description: "Professional american football jersey.", features: ["Mesh panels", "Reinforced", "Breathable", "Professional grade"], sizes: ["S", "M", "L", "XL", "XXL"], images: ["/products/amfootball-1.jpg", "/products/amfootball-2.jpg"], featured: true },
  { id: "amfootball-2", name: "Elite Football Jersey", category: "sportswear", subcategory: "American Football", description: "Elite level football jersey.", features: ["Premium fabric", "Flex panels", "Professional stitching", "High quality"], sizes: ["S", "M", "L", "XL", "XXL"], images: ["/products/amfootball-3.jpg", "/products/amfootball-4.jpg"] },
  { id: "amfootball-3", name: "Training Football Jersey", category: "sportswear", subcategory: "American Football", description: "Training football jersey.", features: ["Breathable", "Comfortable", "Durable", "Practice ready"], sizes: ["S", "M", "L", "XL", "XXL"], images: ["/products/amfootball-5.jpg", "/products/amfootball-6.jpg"] },
  { id: "amfootball-4", name: "Youth Football Jersey", category: "sportswear", subcategory: "American Football", description: "Youth football jersey.", features: ["Youth fit", "Growing room", "Durable", "Fun colors"], sizes: ["6", "8", "10", "12", "14", "16"], images: ["/products/amfootball-7.jpg", "/products/amfootball-8.jpg"] },
  { id: "amfootball-5", name: "Replica Football Jersey", category: "sportswear", subcategory: "American Football", description: "Official replica football jersey.", features: ["Official replica", "Licensed", "Team colors", "Authentic"], sizes: ["S", "M", "L", "XL", "XXL"], images: ["/products/amfootball-9.jpg", "/products/amfootball-10.jpg"] },
  { id: "amfootball-6", name: "Vintage Football Jersey", category: "sportswear", subcategory: "American Football", description: "Vintage style football jersey.", features: ["Retro style", "Heritage", "Classic", "Collectible"], sizes: ["S", "M", "L", "XL", "XXL"], images: ["/products/amfootball-11.jpg", "/products/amfootball-12.jpg"] },
  { id: "amfootball-7", name: "Premium Football Jersey", category: "sportswear", subcategory: "American Football", description: "Premium football jersey.", features: ["Premium fabric", "Luxury feel", "Perfect fit", "High-end"], sizes: ["S", "M", "L", "XL", "XXL"], images: ["/products/amfootball-13.jpg", "/products/amfootball-14.jpg"] },
  { id: "amfootball-8", name: "Mesh Football Jersey", category: "sportswear", subcategory: "American Football", description: "All mesh football jersey.", features: ["Full mesh", "Maximum breathability", "Lightweight", "Ultra cool"], sizes: ["S", "M", "L", "XL", "XXL"], images: ["/products/amfootball-15.jpg", "/products/amfootball-16.jpg"] },
  { id: "amfootball-9", name: "Practice Football Jersey", category: "sportswear", subcategory: "American Football", description: "Practice football jersey.", features: ["Practice fit", "Durable", "Easy wash", "Team ready"], sizes: ["S", "M", "L", "XL", "XXL"], images: ["/products/amfootball-17.jpg", "/products/amfootball-18.jpg"] },
  { id: "amfootball-10", name: "Game Day Football Jersey", category: "sportswear", subcategory: "American Football", description: "Official game day football jersey.", features: ["Match approved", "Official", "Game ready", "Professional"], sizes: ["S", "M", "L", "XL", "XXL", "3XL"], images: ["/products/amfootball-19.jpg", "/products/amfootball-20.jpg"] },

  // SPORTSWEAR - NETBALL (10)
  { id: "netball-1", name: "Pro Netball Dress", category: "sportswear", subcategory: "Netball", description: "Professional netball dress.", features: ["Breathable fabric", "Flex panels", "Professional grade", "Team colors"], sizes: ["XS", "S", "M", "L", "XL"], images: ["/products/netball-1.jpg", "/products/netball-2.jpg"], featured: true },
  { id: "netball-2", name: "Elite Netball Dress", category: "sportswear", subcategory: "Netball", description: "Elite netball dress.", features: ["Premium fabric", "Reinforced", "Perfect fit", "High quality"], sizes: ["XS", "S", "M", "L", "XL"], images: ["/products/netball-3.jpg", "/products/netball-4.jpg"] },
  { id: "netball-3", name: "Training Netball Dress", category: "sportswear", subcategory: "Netball", description: "Training netball dress.", features: ["Comfortable", "Breathable", "Durable", "Practice ready"], sizes: ["XS", "S", "M", "L", "XL"], images: ["/products/netball-5.jpg", "/products/netball-6.jpg"] },
  { id: "netball-4", name: "Youth Netball Dress", category: "sportswear", subcategory: "Netball", description: "Youth netball dress.", features: ["Youth fit", "Growing room", "Fun colors", "Durable"], sizes: ["6", "8", "10", "12", "14"], images: ["/products/netball-7.jpg", "/products/netball-8.jpg"] },
  { id: "netball-5", name: "Lightweight Netball Dress", category: "sportswear", subcategory: "Netball", description: "Lightweight netball dress.", features: ["Ultra-light", "Quick-dry", "Breathable", "Comfortable"], sizes: ["XS", "S", "M", "L", "XL"], images: ["/products/netball-9.jpg", "/products/netball-10.jpg"] },
  { id: "netball-6", name: "Premium Netball Dress", category: "sportswear", subcategory: "Netball", description: "Premium netball dress.", features: ["Premium fabric", "Luxury feel", "Perfect fit", "High-end"], sizes: ["XS", "S", "M", "L", "XL"], images: ["/products/netball-11.jpg", "/products/netball-12.jpg"] },
  { id: "netball-7", name: "Match Day Netball Dress", category: "sportswear", subcategory: "Netball", description: "Match day netball dress.", features: ["Match approved", "Official", "Game ready", "Professional"], sizes: ["XS", "S", "M", "L", "XL"], images: ["/products/netball-13.jpg", "/products/netball-14.jpg"] },
  { id: "netball-8", name: "Replica Netball Dress", category: "sportswear", subcategory: "Netball", description: "Replica netball dress.", features: ["Official replica", "Team colors", "Licensed", "Authentic"], sizes: ["XS", "S", "M", "L", "XL"], images: ["/products/netball-15.jpg", "/products/netball-16.jpg"] },
  { id: "netball-9", name: "Tech Netball Dress", category: "sportswear", subcategory: "Netball", description: "Tech netball dress.", features: ["Tech fabric", "Moisture control", "Anti-odor", "Smart design"], sizes: ["XS", "S", "M", "L", "XL"], images: ["/products/netball-17.jpg", "/products/netball-18.jpg"] },
  { id: "netball-10", name: "Classic Netball Dress", category: "sportswear", subcategory: "Netball", description: "Classic netball dress.", features: ["Timeless", "Quality fabric", "Comfortable", "Essential"], sizes: ["XS", "S", "M", "L", "XL"], images: ["/products/netball-19.jpg", "/products/netball-20.jpg"] },

  // SPORTSWEAR - HALF ZIP TOP (10)
  { id: "halfzip-1", name: "Pro Half Zip Top", category: "sportswear", subcategory: "Half Zip Top", description: "Professional half zip top.", features: ["Half zip", "Breathable", "Flexible", "Professional"], sizes: ["S", "M", "L", "XL", "XXL"], images: ["/products/halfzip-1.jpg", "/products/halfzip-2.jpg"] },
  { id: "halfzip-2", name: "Elite Half Zip Top", category: "sportswear", subcategory: "Half Zip Top", description: "Elite half zip top.", features: ["Premium fabric", "Perfect fit", "High quality", "Comfortable"], sizes: ["S", "M", "L", "XL", "XXL"], images: ["/products/halfzip-3.jpg", "/products/halfzip-4.jpg"] },
  { id: "halfzip-3", name: "Training Half Zip Top", category: "sportswear", subcategory: "Half Zip Top", description: "Training half zip top.", features: ["Breathable", "Flexible", "Durable", "Training ready"], sizes: ["S", "M", "L", "XL", "XXL"], images: ["/products/halfzip-5.jpg", "/products/halfzip-6.jpg"] },
  { id: "halfzip-4", name: "Youth Half Zip Top", category: "sportswear", subcategory: "Half Zip Top", description: "Youth half zip top.", features: ["Youth fit", "Growing room", "Fun colors", "Durable"], sizes: ["6", "8", "10", "12", "14", "16"], images: ["/products/halfzip-7.jpg", "/products/halfzip-8.jpg"] },
  { id: "halfzip-5", name: "Women's Half Zip Top", category: "sportswear", subcategory: "Half Zip Top", description: "Women's half zip top.", features: ["Women's fit", "Tailored", "Supportive", "Feminine"], sizes: ["XS", "S", "M", "L", "XL"], images: ["/products/halfzip-9.jpg", "/products/halfzip-10.jpg"] },
  { id: "halfzip-6", name: "Lightweight Half Zip Top", category: "sportswear", subcategory: "Half Zip Top", description: "Lightweight half zip top.", features: ["Ultra-light", "Breathable", "Quick-dry", "Portable"], sizes: ["S", "M", "L", "XL", "XXL"], images: ["/products/halfzip-11.jpg", "/products/halfzip-12.jpg"] },
  { id: "halfzip-7", name: "Premium Half Zip Top", category: "sportswear", subcategory: "Half Zip Top", description: "Premium half zip top.", features: ["Premium fabric", "Luxury feel", "Perfect fit", "High-end"], sizes: ["S", "M", "L", "XL", "XXL"], images: ["/products/halfzip-13.jpg", "/products/halfzip-14.jpg"] },
  { id: "halfzip-8", name: "Tech Half Zip Top", category: "sportswear", subcategory: "Half Zip Top", description: "Tech half zip top.", features: ["Tech fabric", "Moisture control", "Anti-odor", "Smart design"], sizes: ["S", "M", "L", "XL", "XXL"], images: ["/products/halfzip-15.jpg", "/products/halfzip-16.jpg"] },
  { id: "halfzip-9", name: "Oversized Half Zip Top", category: "sportswear", subcategory: "Half Zip Top", description: "Oversized half zip top.", features: ["Oversized fit", "Relaxed", "Comfortable", "Trendy"], sizes: ["S", "M", "L", "XL", "XXL"], images: ["/products/halfzip-17.jpg", "/products/halfzip-18.jpg"] },
  { id: "halfzip-10", name: "Vintage Half Zip Top", category: "sportswear", subcategory: "Half Zip Top", description: "Vintage half zip top.", features: ["Retro style", "Classic", "Quality fabric", "Collectible"], sizes: ["S", "M", "L", "XL", "XXL"], images: ["/products/halfzip-19.jpg", "/products/halfzip-20.jpg"] },

  // STREETWEAR - HOODIES (10)
  { id: "hoodie-1", name: "Premium Hoodie", category: "streetwear", subcategory: "Hoodies", description: "Premium quality hoodie.", features: ["100% cotton", "Drawstring hood", "Kangaroo pocket", "Comfortable"], sizes: ["XS", "S", "M", "L", "XL", "XXL"], images: ["/products/hoodie-1.jpg", "/products/hoodie-2.jpg"], featured: true },
  { id: "hoodie-2", name: "Tech Hoodie", category: "streetwear", subcategory: "Hoodies", description: "Advanced tech hoodie.", features: ["Moisture-wicking", "Breathable", "Quick-dry", "Smart design"], sizes: ["S", "M", "L", "XL", "XXL"], images: ["/products/hoodie-3.jpg", "/products/hoodie-4.jpg"] },
  { id: "hoodie-3", name: "Classic Hoodie", category: "streetwear", subcategory: "Hoodies", description: "Classic style hoodie.", features: ["Timeless", "Comfortable fit", "Quality fabric", "Essential"], sizes: ["S", "M", "L", "XL", "XXL"], images: ["/products/hoodie-5.jpg", "/products/hoodie-6.jpg"] },
  { id: "hoodie-4", name: "Vintage Hoodie", category: "streetwear", subcategory: "Hoodies", description: "Vintage inspired hoodie.", features: ["Retro style", "Heritage", "Quality", "Collectible"], sizes: ["S", "M", "L", "XL", "XXL"], images: ["/products/hoodie-7.jpg", "/products/hoodie-8.jpg"] },
  { id: "hoodie-5", name: "Women's Hoodie", category: "streetwear", subcategory: "Hoodies", description: "Women's tailored hoodie.", features: ["Women's fit", "Tailored", "Comfortable", "Feminine"], sizes: ["XS", "S", "M", "L", "XL"], images: ["/products/hoodie-9.jpg", "/products/hoodie-10.jpg"] },
  { id: "hoodie-6", name: "Youth Hoodie", category: "streetwear", subcategory: "Hoodies", description: "Youth hoodie.", features: ["Youth fit", "Fun colors", "Durable", "Comfortable"], sizes: ["6", "8", "10", "12", "14", "16"], images: ["/products/hoodie-11.jpg", "/products/hoodie-12.jpg"] },
  { id: "hoodie-7", name: "Heavyweight Hoodie", category: "streetwear", subcategory: "Hoodies", description: "Heavyweight hoodie.", features: ["Heavy fabric", "Warm", "Durable", "Premium feel"], sizes: ["S", "M", "L", "XL", "XXL"], images: ["/products/hoodie-13.jpg", "/products/hoodie-14.jpg"] },
  { id: "hoodie-8", name: "Lightweight Hoodie", category: "streetwear", subcategory: "Hoodies", description: "Lightweight hoodie.", features: ["Light fabric", "Breathable", "Comfortable", "Versatile"], sizes: ["S", "M", "L", "XL", "XXL"], images: ["/products/hoodie-15.jpg", "/products/hoodie-16.jpg"] },
  { id: "hoodie-9", name: "Zip Hoodie", category: "streetwear", subcategory: "Hoodies", description: "Zip-up hoodie.", features: ["Full zip", "Flexible", "Versatile", "Easy on/off"], sizes: ["S", "M", "L", "XL", "XXL"], images: ["/products/hoodie-17.jpg", "/products/hoodie-18.jpg"] },
  { id: "hoodie-10", name: "Pullover Hoodie", category: "streetwear", subcategory: "Hoodies", description: "Pullover hoodie.", features: ["Pullover style", "Cozy", "Comfortable", "Classic"], sizes: ["S", "M", "L", "XL", "XXL"], images: ["/products/hoodie-19.jpg", "/products/hoodie-20.jpg"] },

  // STREETWEAR - GRAPHIC T-SHIRTS (10)
  { id: "tshirt-1", name: "Premium Graphic Tee", category: "streetwear", subcategory: "Graphic T-Shirts", description: "Premium graphic t-shirt.", features: ["High quality print", "Soft fabric", "Vibrant colors", "Comfortable"], sizes: ["S", "M", "L", "XL", "XXL"], images: ["/products/tshirt-1.jpg", "/products/tshirt-2.jpg"] },
  { id: "tshirt-2", name: "Limited Edition Graphic Tee", category: "streetwear", subcategory: "Graphic T-Shirts", description: "Limited edition graphic tee.", features: ["Exclusive design", "Limited stock", "Collectible", "Quality"], sizes: ["S", "M", "L", "XL", "XXL"], images: ["/products/tshirt-3.jpg", "/products/tshirt-4.jpg"] },
  { id: "tshirt-3", name: "Retro Graphic Tee", category: "streetwear", subcategory: "Graphic T-Shirts", description: "Retro graphic tee.", features: ["Vintage style", "Classic design", "Quality fabric", "Timeless"], sizes: ["S", "M", "L", "XL", "XXL"], images: ["/products/tshirt-5.jpg", "/products/tshirt-6.jpg"] },
  { id: "tshirt-4", name: "Women's Graphic Tee", category: "streetwear", subcategory: "Graphic T-Shirts", description: "Women's graphic tee.", features: ["Women's fit", "Tailored", "Comfortable", "Feminine"], sizes: ["XS", "S", "M", "L", "XL"], images: ["/products/tshirt-7.jpg", "/products/tshirt-8.jpg"] },
  { id: "tshirt-5", name: "Youth Graphic Tee", category: "streetwear", subcategory: "Graphic T-Shirts", description: "Youth graphic tee.", features: ["Youth fit", "Fun colors", "Durable", "Comfortable"], sizes: ["6", "8", "10", "12", "14", "16"], images: ["/products/tshirt-9.jpg", "/products/tshirt-10.jpg"] },
  { id: "tshirt-6", name: "Custom Graphic Tee", category: "streetwear", subcategory: "Graphic T-Shirts", description: "Custom graphic tee.", features: ["Customizable", "Personalized", "Quality", "Unique"], sizes: ["S", "M", "L", "XL", "XXL"], images: ["/products/tshirt-11.jpg", "/products/tshirt-12.jpg"] },
  { id: "tshirt-7", name: "Artist Graphic Tee", category: "streetwear", subcategory: "Graphic T-Shirts", description: "Artist designed graphic tee.", features: ["Artist designed", "Original", "Quality print", "Supportive"], sizes: ["S", "M", "L", "XL", "XXL"], images: ["/products/tshirt-13.jpg", "/products/tshirt-14.jpg"] },
  { id: "tshirt-8", name: "Organic Graphic Tee", category: "streetwear", subcategory: "Graphic T-Shirts", description: "Organic cotton graphic tee.", features: ["Organic cotton", "Eco-friendly", "Comfortable", "Sustainable"], sizes: ["S", "M", "L", "XL", "XXL"], images: ["/products/tshirt-15.jpg", "/products/tshirt-16.jpg"] },
  { id: "tshirt-9", name: "Band Graphic Tee", category: "streetwear", subcategory: "Graphic T-Shirts", description: "Band graphic tee.", features: ["Band logo", "Music themed", "Quality print", "Fan gear"], sizes: ["S", "M", "L", "XL", "XXL"], images: ["/products/tshirt-17.jpg", "/products/tshirt-18.jpg"] },
  { id: "tshirt-10", name: "Streetwear Graphic Tee", category: "streetwear", subcategory: "Graphic T-Shirts", description: "Streetwear style graphic tee.", features: ["Trendy", "Urban style", "Quality", "Fashion forward"], sizes: ["S", "M", "L", "XL", "XXL"], images: ["/products/tshirt-19.jpg", "/products/tshirt-20.jpg"] },

  // STREETWEAR - OVERSIZE HOODIES (10)
  { id: "oversize-1", name: "Oversized Premium Hoodie", category: "streetwear", subcategory: "Oversize Hoodies", description: "Oversized premium hoodie.", features: ["Oversized fit", "Premium fabric", "Comfortable", "Trendy"], sizes: ["S", "M", "L", "XL", "XXL"], images: ["/products/oversize-1.jpg", "/products/oversize-2.jpg"] },
  { id: "oversize-2", name: "Streetwear Oversized Hoodie", category: "streetwear", subcategory: "Oversize Hoodies", description: "Streetwear oversized hoodie.", features: ["Oversized", "Street style", "Relaxed", "Fashion"], sizes: ["S", "M", "L", "XL", "XXL"], images: ["/products/oversize-3.jpg", "/products/oversize-4.jpg"] },
  { id: "oversize-3", name: "Women's Oversized Hoodie", category: "streetwear", subcategory: "Oversize Hoodies", description: "Women's oversized hoodie.", features: ["Women's style", "Oversized", "Comfortable", "Flattering"], sizes: ["XS", "S", "M", "L", "XL"], images: ["/products/oversize-5.jpg", "/products/oversize-6.jpg"] },
  { id: "oversize-4", name: "Youth Oversized Hoodie", category: "streetwear", subcategory: "Oversize Hoodies", description: "Youth oversized hoodie.", features: ["Youth fit", "Oversized", "Fun colors", "Growing room"], sizes: ["6", "8", "10", "12", "14", "16"], images: ["/products/oversize-7.jpg", "/products/oversize-8.jpg"] },
  { id: "oversize-5", name: "Classic Oversized Hoodie", category: "streetwear", subcategory: "Oversize Hoodies", description: "Classic oversized hoodie.", features: ["Timeless", "Oversized", "Quality", "Comfortable"], sizes: ["S", "M", "L", "XL", "XXL"], images: ["/products/oversize-9.jpg", "/products/oversize-10.jpg"] },
  { id: "oversize-6", name: "Luxury Oversized Hoodie", category: "streetwear", subcategory: "Oversize Hoodies", description: "Luxury oversized hoodie.", features: ["Luxury fabric", "Premium feel", "Oversized", "High-end"], sizes: ["S", "M", "L", "XL", "XXL"], images: ["/products/oversize-11.jpg", "/products/oversize-12.jpg"] },
  { id: "oversize-7", name: "Graphic Oversized Hoodie", category: "streetwear", subcategory: "Oversize Hoodies", description: "Graphic oversized hoodie.", features: ["Graphic print", "Oversized", "Statement piece", "Trendy"], sizes: ["S", "M", "L", "XL", "XXL"], images: ["/products/oversize-13.jpg", "/products/oversize-14.jpg"] },
  { id: "oversize-8", name: "Heavyweight Oversized Hoodie", category: "streetwear", subcategory: "Oversize Hoodies", description: "Heavyweight oversized hoodie.", features: ["Heavy fabric", "Oversized", "Warm", "Durable"], sizes: ["S", "M", "L", "XL", "XXL"], images: ["/products/oversize-15.jpg", "/products/oversize-16.jpg"] },
  { id: "oversize-9", name: "Zip Oversized Hoodie", category: "streetwear", subcategory: "Oversize Hoodies", description: "Zip-up oversized hoodie.", features: ["Full zip", "Oversized", "Flexible", "Versatile"], sizes: ["S", "M", "L", "XL", "XXL"], images: ["/products/oversize-17.jpg", "/products/oversize-18.jpg"] },
  { id: "oversize-10", name: "Tech Oversized Hoodie", category: "streetwear", subcategory: "Oversize Hoodies", description: "Tech oversized hoodie.", features: ["Tech fabric", "Oversized", "Breathable", "Smart design"], sizes: ["S", "M", "L", "XL", "XXL"], images: ["/products/oversize-19.jpg", "/products/oversize-20.jpg"] },

  // STREETWEAR - FLANNEL SHIRTS (10)
  { id: "flannel-1", name: "Premium Flannel Shirt", category: "streetwear", subcategory: "Flannel Shirts", description: "Premium flannel shirt.", features: ["Quality fabric", "Comfortable", "Classic pattern", "Well-made"], sizes: ["S", "M", "L", "XL", "XXL"], images: ["/products/flannel-1.jpg", "/products/flannel-2.jpg"] },
  { id: "flannel-2", name: "Vintage Flannel Shirt", category: "streetwear", subcategory: "Flannel Shirts", description: "Vintage flannel shirt.", features: ["Retro style", "Classic", "Quality", "Collectible"], sizes: ["S", "M", "L", "XL", "XXL"], images: ["/products/flannel-3.jpg", "/products/flannel-4.jpg"] },
  { id: "flannel-3", name: "Women's Flannel Shirt", category: "streetwear", subcategory: "Flannel Shirts", description: "Women's flannel shirt.", features: ["Women's fit", "Tailored", "Comfortable", "Feminine"], sizes: ["XS", "S", "M", "L", "XL"], images: ["/products/flannel-5.jpg", "/products/flannel-6.jpg"] },
  { id: "flannel-4", name: "Oversized Flannel Shirt", category: "streetwear", subcategory: "Flannel Shirts", description: "Oversized flannel shirt.", features: ["Oversized", "Relaxed", "Comfortable", "Trendy"], sizes: ["S", "M", "L", "XL", "XXL"], images: ["/products/flannel-7.jpg", "/products/flannel-8.jpg"] },
  { id: "flannel-5", name: "Youth Flannel Shirt", category: "streetwear", subcategory: "Flannel Shirts", description: "Youth flannel shirt.", features: ["Youth fit", "Fun patterns", "Durable", "Comfortable"], sizes: ["6", "8", "10", "12", "14", "16"], images: ["/products/flannel-9.jpg", "/products/flannel-10.jpg"] },
  { id: "flannel-6", name: "Lightweight Flannel Shirt", category: "streetwear", subcategory: "Flannel Shirts", description: "Lightweight flannel shirt.", features: ["Light fabric", "Breathable", "Comfortable", "Versatile"], sizes: ["S", "M", "L", "XL", "XXL"], images: ["/products/flannel-11.jpg", "/products/flannel-12.jpg"] },
  { id: "flannel-7", name: "Heavyweight Flannel Shirt", category: "streetwear", subcategory: "Flannel Shirts", description: "Heavyweight flannel shirt.", features: ["Heavy fabric", "Warm", "Durable", "Quality"], sizes: ["S", "M", "L", "XL", "XXL"], images: ["/products/flannel-13.jpg", "/products/flannel-14.jpg"] },
  { id: "flannel-8", name: "Tech Flannel Shirt", category: "streetwear", subcategory: "Flannel Shirts", description: "Tech flannel shirt.", features: ["Tech fabric", "Moisture control", "Breathable", "Smart design"], sizes: ["S", "M", "L", "XL", "XXL"], images: ["/products/flannel-15.jpg", "/products/flannel-16.jpg"] },
  { id: "flannel-9", name: "Plaid Flannel Shirt", category: "streetwear", subcategory: "Flannel Shirts", description: "Plaid flannel shirt.", features: ["Classic plaid", "Traditional", "Quality", "Timeless"], sizes: ["S", "M", "L", "XL", "XXL"], images: ["/products/flannel-17.jpg", "/products/flannel-18.jpg"] },
  { id: "flannel-10", name: "Custom Flannel Shirt", category: "streetwear", subcategory: "Flannel Shirts", description: "Custom flannel shirt.", features: ["Customizable", "Personalized", "Quality", "Unique"], sizes: ["S", "M", "L", "XL", "XXL"], images: ["/products/flannel-19.jpg", "/products/flannel-20.jpg"] },

  // GLOVES - WEIGHTLIFTING GLOVES (10)
  { id: "weightlift-1", name: "Pro Weightlifting Gloves", category: "gloves", subcategory: "Weightlifting Gloves", description: "Professional weightlifting gloves.", features: ["Padded palm", "Wrist support", "Grip", "Durable"], sizes: ["XS", "S", "M", "L", "XL"], images: ["/products/weightlift-1.jpg", "/products/weightlift-2.jpg"] },
  { id: "weightlift-2", name: "Elite Weightlifting Gloves", category: "gloves", subcategory: "Weightlifting Gloves", description: "Elite weightlifting gloves.", features: ["Premium leather", "Maximum support", "Professional grade", "High quality"], sizes: ["S", "M", "L", "XL"], images: ["/products/weightlift-3.jpg", "/products/weightlift-4.jpg"] },
  { id: "weightlift-3", name: "Training Weightlifting Gloves", category: "gloves", subcategory: "Weightlifting Gloves", description: "Training weightlifting gloves.", features: ["Training fit", "Comfortable", "Durable", "Value"], sizes: ["S", "M", "L", "XL"], images: ["/products/weightlift-5.jpg", "/products/weightlift-6.jpg"] },
  { id: "weightlift-4", name: "Women's Weightlifting Gloves", category: "gloves", subcategory: "Weightlifting Gloves", description: "Women's weightlifting gloves.", features: ["Women's fit", "Tailored", "Comfortable", "Supportive"], sizes: ["XS", "S", "M", "L"], images: ["/products/weightlift-7.jpg", "/products/weightlift-8.jpg"] },
  { id: "weightlift-5", name: "Youth Weightlifting Gloves", category: "gloves", subcategory: "Weightlifting Gloves", description: "Youth weightlifting gloves.", features: ["Youth fit", "Growing room", "Fun colors", "Comfortable"], sizes: ["XS", "S", "M"], images: ["/products/weightlift-9.jpg", "/products/weightlift-10.jpg"] },
  { id: "weightlift-6", name: "Premium Weightlifting Gloves", category: "gloves", subcategory: "Weightlifting Gloves", description: "Premium weightlifting gloves.", features: ["Premium leather", "Luxury feel", "Perfect support", "High-end"], sizes: ["S", "M", "L", "XL"], images: ["/products/weightlift-11.jpg", "/products/weightlift-12.jpg"] },
  { id: "weightlift-7", name: "Half Finger Weightlifting Gloves", category: "gloves", subcategory: "Weightlifting Gloves", description: "Half finger weightlifting gloves.", features: ["Half finger", "Enhanced grip", "Ventilated", "Flexible"], sizes: ["S", "M", "L", "XL"], images: ["/products/weightlift-13.jpg", "/products/weightlift-14.jpg"] },
  { id: "weightlift-8", name: "Full Finger Weightlifting Gloves", category: "gloves", subcategory: "Weightlifting Gloves", description: "Full finger weightlifting gloves.", features: ["Full finger", "Maximum support", "Protection", "Durable"], sizes: ["S", "M", "L", "XL"], images: ["/products/weightlift-15.jpg", "/products/weightlift-16.jpg"] },
  { id: "weightlift-9", name: "Gel Weightlifting Gloves", category: "gloves", subcategory: "Weightlifting Gloves", description: "Gel padded weightlifting gloves.", features: ["Gel padding", "Shock absorption", "Comfortable", "Professional"], sizes: ["S", "M", "L", "XL"], images: ["/products/weightlift-17.jpg", "/products/weightlift-18.jpg"] },
  { id: "weightlift-10", name: "Tech Weightlifting Gloves", category: "gloves", subcategory: "Weightlifting Gloves", description: "Tech weightlifting gloves.", features: ["Tech fabric", "Moisture control", "Breathable", "Smart design"], sizes: ["S", "M", "L", "XL"], images: ["/products/weightlift-19.jpg", "/products/weightlift-20.jpg"] },

  // GLOVES - CYCLING GLOVES (10)
  { id: "cycling-1", name: "Pro Cycling Gloves", category: "gloves", subcategory: "Cycling Gloves", description: "Professional cycling gloves.", features: ["Grip palm", "Padding", "Breathable", "Professional"], sizes: ["S", "M", "L", "XL"], images: ["/products/cycling-1.jpg", "/products/cycling-2.jpg"] },
  { id: "cycling-2", name: "Mountain Bike Gloves", category: "gloves", subcategory: "Cycling Gloves", description: "Mountain bike gloves.", features: ["Off-road grip", "Protective", "Durable", "Performance"], sizes: ["S", "M", "L", "XL"], images: ["/products/cycling-3.jpg", "/products/cycling-4.jpg"] },
  { id: "cycling-3", name: "Road Cycling Gloves", category: "gloves", subcategory: "Cycling Gloves", description: "Road cycling gloves.", features: ["Road grip", "Lightweight", "Breathable", "Speed focused"], sizes: ["S", "M", "L", "XL"], images: ["/products/cycling-5.jpg", "/products/cycling-6.jpg"] },
  { id: "cycling-4", name: "Winter Cycling Gloves", category: "gloves", subcategory: "Cycling Gloves", description: "Winter cycling gloves.", features: ["Insulated", "Warm", "Water-resistant", "Cold weather"], sizes: ["S", "M", "L", "XL"], images: ["/products/cycling-7.jpg", "/products/cycling-8.jpg"] },
  { id: "cycling-5", name: "Women's Cycling Gloves", category: "gloves", subcategory: "Cycling Gloves", description: "Women's cycling gloves.", features: ["Women's fit", "Tailored", "Comfortable", "Feminine"], sizes: ["XS", "S", "M", "L"], images: ["/products/cycling-9.jpg", "/products/cycling-10.jpg"] },
  { id: "cycling-6", name: "Youth Cycling Gloves", category: "gloves", subcategory: "Cycling Gloves", description: "Youth cycling gloves.", features: ["Youth fit", "Fun colors", "Durable", "Growing room"], sizes: ["XS", "S", "M"], images: ["/products/cycling-11.jpg", "/products/cycling-12.jpg"] },
  { id: "cycling-7", name: "Premium Cycling Gloves", category: "gloves", subcategory: "Cycling Gloves", description: "Premium cycling gloves.", features: ["Premium leather", "Luxury feel", "Perfect grip", "High-end"], sizes: ["S", "M", "L", "XL"], images: ["/products/cycling-13.jpg", "/products/cycling-14.jpg"] },
  { id: "cycling-8", name: "Full Finger Cycling Gloves", category: "gloves", subcategory: "Cycling Gloves", description: "Full finger cycling gloves.", features: ["Full finger", "Maximum protection", "All weather", "Durable"], sizes: ["S", "M", "L", "XL"], images: ["/products/cycling-15.jpg", "/products/cycling-16.jpg"] },
  { id: "cycling-9", name: "Fingerless Cycling Gloves", category: "gloves", subcategory: "Cycling Gloves", description: "Fingerless cycling gloves.", features: ["Fingerless", "Maximum grip", "Summer ready", "Minimal"], sizes: ["S", "M", "L", "XL"], images: ["/products/cycling-17.jpg", "/products/cycling-18.jpg"] },
  { id: "cycling-10", name: "Tech Cycling Gloves", category: "gloves", subcategory: "Cycling Gloves", description: "Tech cycling gloves.", features: ["Tech fabric", "Touchscreen", "Moisture control", "Smart design"], sizes: ["S", "M", "L", "XL"], images: ["/products/cycling-19.jpg", "/products/cycling-20.jpg"] },
]

export function getProductsBySubcategory(subcategory: string): Product[] {
  return products.filter((product) => product.subcategory === subcategory)
}

export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id)
}

export function getFeaturedProducts(): Product[] {
  return products.filter((product) => product.featured)
}

export function getRelatedProducts(product: Product, limit: number = 4): Product[] {
  return products
    .filter(
      (p) =>
        p.subcategory === product.subcategory &&
        p.id !== product.id
    )
    .slice(0, limit)
}
