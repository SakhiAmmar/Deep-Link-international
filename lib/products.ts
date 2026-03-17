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
      "Winter Gloves",
      "Cycling Gloves",
      "Leather Gloves",
      "Fingerless Gloves",
    ],
  },
}

export const products: Product[] = [
  // SPORTSWEAR - SOCCER KITS (5 products)
  { id: "soccer-1", name: "Pro Soccer Kit", category: "sportswear", subcategory: "Soccer Kits", description: "Premium performance soccer kit designed for professional athletes.", features: ["Moisture-wicking", "Breathable mesh", "Reinforced stitching", "Custom sublimation"], sizes: ["S", "M", "L", "XL", "XXL"], images: ["/products/soccer-1.jpg"], featured: true },
  { id: "soccer-2", name: "Elite Soccer Jersey Set", category: "sportswear", subcategory: "Soccer Kits", description: "Tournament-grade soccer jersey with reversible design.", features: ["Reversible", "Premium polyester", "Moisture control", "Team numbering"], sizes: ["S", "M", "L", "XL"], images: ["/products/soccer-2.jpg"] },
  { id: "soccer-3", name: "Academy Training Kit", category: "sportswear", subcategory: "Soccer Kits", description: "Lightweight training kit for academies and youth teams.", features: ["Youth-friendly", "Quick-dry", "UV protection", "Comfortable fit"], sizes: ["S", "M", "L", "XL"], images: ["/products/soccer-3.jpg"] },
  { id: "soccer-4", name: "Club Edition Soccer Kit", category: "sportswear", subcategory: "Soccer Kits", description: "Official club-grade soccer kit with premium sublimation.", features: ["Official graphics", "Club patch", "Breathable mesh", "Full customization"], sizes: ["M", "L", "XL", "XXL"], images: ["/products/soccer-4.jpg"] },
  { id: "soccer-5", name: "Women's Soccer Kit Pro", category: "sportswear", subcategory: "Soccer Kits", description: "Tailored women's soccer kit with ergonomic fit.", features: ["Women's fit", "Supportive design", "Moisture-wicking", "Flatlock seams"], sizes: ["XS", "S", "M", "L"], images: ["/products/soccer-5.jpg"] },

  // SPORTSWEAR - TRACKSUITS (5 products)
  { id: "tracksuit-1", name: "Performance Tracksuit", category: "sportswear", subcategory: "Tracksuits", description: "Full tracksuit for training and warm-up.", features: ["Breathable", "Moisture-wicking", "Tapered fit", "Reflective strips"], sizes: ["S", "M", "L", "XL"], images: ["/products/tracksuit-1.jpg"] },
  { id: "tracksuit-2", name: "Premium Athletic Tracksuit", category: "sportswear", subcategory: "Tracksuits", description: "Premium tracksuit for athletes and teams.", features: ["Premium fabric", "Ergonomic design", "Ventilation panels", "Custom fit"], sizes: ["M", "L", "XL", "XXL"], images: ["/products/tracksuit-2.jpg"] },
  { id: "tracksuit-3", name: "Women's Performance Tracksuit", category: "sportswear", subcategory: "Tracksuits", description: "Women's tailored performance tracksuit.", features: ["Women's fit", "Contoured design", "Breathable", "Stretchy fabric"], sizes: ["XS", "S", "M", "L"], images: ["/products/tracksuit-3.jpg"] },
  { id: "tracksuit-4", name: "Lightweight Training Tracksuit", category: "sportswear", subcategory: "Tracksuits", description: "Lightweight tracksuit for warm weather training.", features: ["Lightweight", "Quick-dry", "Breathable mesh", "Comfortable"], sizes: ["S", "M", "L", "XL"], images: ["/products/tracksuit-4.jpg"] },
  { id: "tracksuit-5", name: "Premium Winter Tracksuit", category: "sportswear", subcategory: "Tracksuits", description: "Winter-grade tracksuit with thermal lining.", features: ["Thermal lining", "Water-resistant", "Warm", "Premium material"], sizes: ["M", "L", "XL", "XXL"], images: ["/products/tracksuit-5.jpg"] },

  // SPORTSWEAR - RAIN JACKETS (5 products)
  { id: "rainjacket-1", name: "Premium Rain Jacket", category: "sportswear", subcategory: "Rain Jackets", description: "Waterproof rain jacket for outdoor activities.", features: ["Waterproof", "Breathable", "Sealed seams", "Packable"], sizes: ["S", "M", "L", "XL"], images: ["/products/rainjacket-1.jpg"] },
  { id: "rainjacket-2", name: "Reflective Safety Rain Jacket", category: "sportswear", subcategory: "Rain Jackets", description: "Safety rain jacket with reflective elements.", features: ["Reflective strips", "Waterproof", "High visibility", "Durable"], sizes: ["M", "L", "XL", "XXL"], images: ["/products/rainjacket-2.jpg"] },
  { id: "rainjacket-3", name: "Lightweight Rain Jacket", category: "sportswear", subcategory: "Rain Jackets", description: "Lightweight and packable rain jacket.", features: ["Lightweight", "Packable", "Waterproof", "Breathable mesh"], sizes: ["S", "M", "L", "XL"], images: ["/products/rainjacket-3.jpg"] },
  { id: "rainjacket-4", name: "Women's Rain Jacket", category: "sportswear", subcategory: "Rain Jackets", description: "Women's tailored rain jacket.", features: ["Women's fit", "Flattering cut", "Waterproof", "Comfortable"], sizes: ["XS", "S", "M", "L"], images: ["/products/rainjacket-4.jpg"] },
  { id: "rainjacket-5", name: "Professional Rain Jacket", category: "sportswear", subcategory: "Rain Jackets", description: "Professional-grade waterproof rain jacket.", features: ["Professional grade", "Premium waterproof", "Durable", "Stylish"], sizes: ["M", "L", "XL", "XXL"], images: ["/products/rainjacket-5.jpg"] },

  // SPORTSWEAR - BUBBLE JACKETS (5 products)
  { id: "bubble-1", name: "Classic Bubble Jacket", category: "sportswear", subcategory: "Bubble Jackets", description: "Classic quilted bubble jacket.", features: ["Quilted design", "Lightweight fill", "Water-resistant", "Warm"], sizes: ["S", "M", "L", "XL"], images: ["/products/bubble-1.jpg"] },
  { id: "bubble-2", name: "Premium Winter Bubble Jacket", category: "sportswear", subcategory: "Bubble Jackets", description: "Premium insulated bubble jacket for winter.", features: ["Premium insulation", "Down alternative", "Windproof", "Warm"], sizes: ["M", "L", "XL", "XXL"], images: ["/products/bubble-2.jpg"] },
  { id: "bubble-3", name: "Lightweight Bubble Jacket", category: "sportswear", subcategory: "Bubble Jackets", description: "Lightweight bubble jacket for layering.", features: ["Lightweight", "Packable", "Breathable", "Comfortable"], sizes: ["S", "M", "L", "XL"], images: ["/products/bubble-3.jpg"] },
  { id: "bubble-4", name: "Women's Bubble Jacket", category: "sportswear", subcategory: "Bubble Jackets", description: "Women's fitted bubble jacket.", features: ["Women's fit", "Tailored", "Warm", "Stylish"], sizes: ["XS", "S", "M", "L"], images: ["/products/bubble-4.jpg"] },
  { id: "bubble-5", name: "Ultra-Warm Bubble Jacket", category: "sportswear", subcategory: "Bubble Jackets", description: "Extra warm bubble jacket with premium fill.", features: ["Ultra warm", "Premium fill", "Water-resistant", "Durable"], sizes: ["M", "L", "XL", "XXL"], images: ["/products/bubble-5.jpg"] },

  // SPORTSWEAR - POLO SHIRTS (5 products)
  { id: "polo-1", name: "Classic Polo Shirt", category: "sportswear", subcategory: "Polo Shirts", description: "Classic golf and casual polo shirt.", features: ["Classic design", "Comfortable", "Breathable", "Quality fabric"], sizes: ["S", "M", "L", "XL"], images: ["/products/polo-1.jpg"] },
  { id: "polo-2", name: "Performance Polo Shirt", category: "sportswear", subcategory: "Polo Shirts", description: "Performance polo with moisture-wicking.", features: ["Moisture-wicking", "Breathable", "Athletic fit", "Durable"], sizes: ["S", "M", "L", "XL"], images: ["/products/polo-2.jpg"] },
  { id: "polo-3", name: "Premium Golf Polo", category: "sportswear", subcategory: "Polo Shirts", description: "Premium polo for golf and sports.", features: ["Golf fit", "Premium fabric", "UPF protection", "Comfortable"], sizes: ["M", "L", "XL", "XXL"], images: ["/products/polo-3.jpg"] },
  { id: "polo-4", name: "Women's Polo Shirt", category: "sportswear", subcategory: "Polo Shirts", description: "Women's tailored polo shirt.", features: ["Women's fit", "Tailored cut", "Flatlock seams", "Feminine design"], sizes: ["XS", "S", "M", "L"], images: ["/products/polo-4.jpg"] },
  { id: "polo-5", name: "Tech Polo Shirt", category: "sportswear", subcategory: "Polo Shirts", description: "Advanced tech polo with cooling.", features: ["Tech fabric", "Cooling", "Anti-bacterial", "Smart design"], sizes: ["S", "M", "L", "XL"], images: ["/products/polo-5.jpg"] },

  // SPORTSWEAR - RUGBY (5 products)
  { id: "rugby-1", name: "Professional Rugby Jersey", category: "sportswear", subcategory: "Rugby", description: "Professional rugby jersey for teams.", features: ["Professional grade", "Reinforced seams", "Moisture control", "Team customizable"], sizes: ["M", "L", "XL", "XXL"], images: ["/products/rugby-1.jpg"] },
  { id: "rugby-2", name: "Performance Rugby Kit", category: "sportswear", subcategory: "Rugby", description: "High-performance rugby kit.", features: ["Performance fabric", "Ergonomic design", "Ventilation", "Durable"], sizes: ["L", "XL", "XXL", "3XL"], images: ["/products/rugby-2.jpg"] },
  { id: "rugby-3", name: "Training Rugby Jersey", category: "sportswear", subcategory: "Rugby", description: "Comfortable training rugby jersey.", features: ["Training fit", "Breathable", "Comfortable", "Durable"], sizes: ["M", "L", "XL", "XXL"], images: ["/products/rugby-3.jpg"] },
  { id: "rugby-4", name: "Youth Rugby Jersey", category: "sportswear", subcategory: "Rugby", description: "Rugby jersey for young players.", features: ["Youth fit", "Comfortable", "Durable", "Fun colors"], sizes: ["8", "10", "12", "14"], images: ["/products/rugby-4.jpg"] },
  { id: "rugby-5", name: "Women's Rugby Jersey", category: "sportswear", subcategory: "Rugby", description: "Women's rugby jersey.", features: ["Women's fit", "Professional", "Flatlock seams", "Supportive"], sizes: ["S", "M", "L", "XL"], images: ["/products/rugby-5.jpg"] },

  // SPORTSWEAR - AMERICAN FOOTBALL (5 products)
  { id: "amfb-1", name: "Professional Football Jersey", category: "sportswear", subcategory: "American Football", description: "Professional American football jersey.", features: ["Mesh fabric", "Ventilation", "Durable", "Team customizable"], sizes: ["M", "L", "XL", "XXL"], images: ["/products/amfb-1.jpg"] },
  { id: "amfb-2", name: "Football Practice Jersey", category: "sportswear", subcategory: "American Football", description: "Comfortable practice jersey.", features: ["Practice fit", "Breathable", "Comfortable", "Quality fabric"], sizes: ["L", "XL", "XXL"], images: ["/products/amfb-2.jpg"] },
  { id: "amfb-3", name: "Youth Football Jersey", category: "sportswear", subcategory: "American Football", description: "Youth football jersey.", features: ["Youth fit", "Comfortable", "Durable", "Sizing options"], sizes: ["6", "8", "10", "12"], images: ["/products/amfb-3.jpg"] },
  { id: "amfb-4", name: "Premium Football Kit", category: "sportswear", subcategory: "American Football", description: "Premium football jersey with shorts.", features: ["Premium fabric", "Professional", "Complete kit", "Team logos"], sizes: ["M", "L", "XL", "XXL"], images: ["/products/amfb-4.jpg"] },
  { id: "amfb-5", name: "Tournament Football Jersey", category: "sportswear", subcategory: "American Football", description: "Tournament-grade football jersey.", features: ["Tournament grade", "Mesh panels", "Reinforced", "Professional"], sizes: ["L", "XL", "XXL", "3XL"], images: ["/products/amfb-5.jpg"] },

  // SPORTSWEAR - NETBALL (5 products)
  { id: "netball-1", name: "Professional Netball Dress", category: "sportswear", subcategory: "Netball", description: "Professional netball dress.", features: ["Professional grade", "Breathable", "Moisture control", "Comfortable"], sizes: ["S", "M", "L", "XL"], images: ["/products/netball-1.jpg"] },
  { id: "netball-2", name: "Training Netball Dress", category: "sportswear", subcategory: "Netball", description: "Training netball dress.", features: ["Training fit", "Breathable mesh", "Comfortable", "Durable"], sizes: ["S", "M", "L", "XL"], images: ["/products/netball-2.jpg"] },
  { id: "netball-3", name: "Youth Netball Dress", category: "sportswear", subcategory: "Netball", description: "Youth netball dress.", features: ["Youth fit", "Comfortable", "Durable", "Fun colors"], sizes: ["6", "8", "10", "12"], images: ["/products/netball-3.jpg"] },
  { id: "netball-4", name: "Premium Netball Kit", category: "sportswear", subcategory: "Netball", description: "Premium netball kit with shorts.", features: ["Premium fabric", "Professional", "Complete kit", "Team customizable"], sizes: ["M", "L", "XL", "XXL"], images: ["/products/netball-4.jpg"] },
  { id: "netball-5", name: "Tournament Netball Dress", category: "sportswear", subcategory: "Netball", description: "Tournament-grade netball dress.", features: ["Tournament grade", "Professional", "High quality", "Mesh panels"], sizes: ["S", "M", "L", "XL"], images: ["/products/netball-5.jpg"] },

  // SPORTSWEAR - HALF ZIP TOP (5 products)
  { id: "halfzip-1", name: "Classic Half Zip Top", category: "sportswear", subcategory: "Half Zip Top", description: "Classic half zip top for training.", features: ["Half zip", "Breathable", "Comfortable", "Versatile"], sizes: ["S", "M", "L", "XL"], images: ["/products/halfzip-1.jpg"] },
  { id: "halfzip-2", name: "Performance Half Zip Top", category: "sportswear", subcategory: "Half Zip Top", description: "Performance half zip top with moisture-wicking.", features: ["Moisture-wicking", "Breathable", "Athletic fit", "Durable"], sizes: ["S", "M", "L", "XL"], images: ["/products/halfzip-2.jpg"] },
  { id: "halfzip-3", name: "Women's Half Zip Top", category: "sportswear", subcategory: "Half Zip Top", description: "Women's half zip top.", features: ["Women's fit", "Tailored", "Flatlock seams", "Comfortable"], sizes: ["XS", "S", "M", "L"], images: ["/products/halfzip-3.jpg"] },
  { id: "halfzip-4", name: "Lightweight Half Zip Top", category: "sportswear", subcategory: "Half Zip Top", description: "Lightweight half zip top.", features: ["Lightweight", "Quick-dry", "Breathable", "Comfortable"], sizes: ["S", "M", "L", "XL"], images: ["/products/halfzip-4.jpg"] },
  { id: "halfzip-5", name: "Premium Half Zip Top", category: "sportswear", subcategory: "Half Zip Top", description: "Premium half zip top.", features: ["Premium fabric", "High quality", "Durable", "Stylish"], sizes: ["M", "L", "XL", "XXL"], images: ["/products/halfzip-5.jpg"] },

  // SPORTSWEAR - MOTOCROSS SUITS (5 products)
  { id: "motocross-1", name: "Professional Motocross Suit", category: "sportswear", subcategory: "Motocross Suits", description: "Professional motocross racing suit.", features: ["Professional grade", "Reinforced", "Protective", "Breathable"], sizes: ["M", "L", "XL", "XXL"], images: ["/products/motocross-1.jpg"] },
  { id: "motocross-2", name: "Performance Motocross Suit", category: "sportswear", subcategory: "Motocross Suits", description: "High-performance motocross suit.", features: ["Performance fabric", "Ventilation", "Durable", "Protective panels"], sizes: ["L", "XL", "XXL"], images: ["/products/motocross-2.jpg"] },
  { id: "motocross-3", name: "Training Motocross Suit", category: "sportswear", subcategory: "Motocross Suits", description: "Training motocross suit.", features: ["Training fit", "Comfortable", "Breathable", "Flexible"], sizes: ["M", "L", "XL", "XXL"], images: ["/products/motocross-3.jpg"] },
  { id: "motocross-4", name: "Youth Motocross Suit", category: "sportswear", subcategory: "Motocross Suits", description: "Youth motocross suit.", features: ["Youth fit", "Protective", "Comfortable", "Growth room"], sizes: ["8", "10", "12", "14"], images: ["/products/motocross-4.jpg"] },
  { id: "motocross-5", name: "Premium Racing Motocross Suit", category: "sportswear", subcategory: "Motocross Suits", description: "Premium motocross racing suit.", features: ["Premium material", "Professional grade", "Full protection", "Lightweight"], sizes: ["M", "L", "XL", "XXL"], images: ["/products/motocross-5.jpg"] },

  // SPORTSWEAR - ICE HOCKEY KITS (5 products)
  { id: "hockey-1", name: "Professional Hockey Jersey", category: "sportswear", subcategory: "Ice Hockey Kits", description: "Professional ice hockey jersey.", features: ["Professional grade", "Mesh panels", "Durable", "Team customizable"], sizes: ["M", "L", "XL", "XXL"], images: ["/products/hockey-1.jpg"] },
  { id: "hockey-2", name: "Performance Hockey Kit", category: "sportswear", subcategory: "Ice Hockey Kits", description: "High-performance hockey kit.", features: ["Performance fabric", "Moisture control", "Durable", "Comfortable"], sizes: ["L", "XL", "XXL"], images: ["/products/hockey-2.jpg"] },
  { id: "hockey-3", name: "Training Hockey Jersey", category: "sportswear", subcategory: "Ice Hockey Kits", description: "Training hockey jersey.", features: ["Training fit", "Breathable", "Comfortable", "Durable"], sizes: ["M", "L", "XL", "XXL"], images: ["/products/hockey-3.jpg"] },
  { id: "hockey-4", name: "Youth Hockey Jersey", category: "sportswear", subcategory: "Ice Hockey Kits", description: "Youth hockey jersey.", features: ["Youth fit", "Durable", "Comfortable", "Growth room"], sizes: ["6", "8", "10", "12"], images: ["/products/hockey-4.jpg"] },
  { id: "hockey-5", name: "Premium Hockey Kit", category: "sportswear", subcategory: "Ice Hockey Kits", description: "Premium hockey kit with shorts.", features: ["Premium fabric", "Professional", "Complete kit", "High quality"], sizes: ["M", "L", "XL", "XXL"], images: ["/products/hockey-5.jpg"] },

  // SPORTSWEAR - RACING JACKETS (5 products)
  { id: "racing-1", name: "Professional Racing Jacket", category: "sportswear", subcategory: "Racing Jackets", description: "Professional motorsports racing jacket.", features: ["Professional grade", "Fire resistant", "Protective", "Breathable"], sizes: ["M", "L", "XL", "XXL"], images: ["/products/racing-1.jpg"] },
  { id: "racing-2", name: "Performance Racing Jacket", category: "sportswear", subcategory: "Racing Jackets", description: "High-performance racing jacket.", features: ["Performance fabric", "Protective panels", "Ventilation", "Durable"], sizes: ["L", "XL", "XXL"], images: ["/products/racing-2.jpg"] },
  { id: "racing-3", name: "Lightweight Racing Jacket", category: "sportswear", subcategory: "Racing Jackets", description: "Lightweight racing jacket.", features: ["Lightweight", "Breathable", "Comfortable", "Protective"], sizes: ["M", "L", "XL", "XXL"], images: ["/products/racing-3.jpg"] },
  { id: "racing-4", name: "Women's Racing Jacket", category: "sportswear", subcategory: "Racing Jackets", description: "Women's racing jacket.", features: ["Women's fit", "Protective", "Stylish", "Comfortable"], sizes: ["S", "M", "L", "XL"], images: ["/products/racing-4.jpg"] },
  { id: "racing-5", name: "Premium Racing Jacket", category: "sportswear", subcategory: "Racing Jackets", description: "Premium motorsports racing jacket.", features: ["Premium material", "Professional grade", "Full protection", "High quality"], sizes: ["M", "L", "XL", "XXL"], images: ["/products/racing-5.jpg"] },

  // STREETWEAR - HOODIES (5 products)
  { id: "hoodie-1", name: "Classic Hoodie", category: "streetwear", subcategory: "Hoodies", description: "Classic comfortable hoodie.", features: ["Comfortable", "Warm", "Quality fabric", "Timeless"], sizes: ["S", "M", "L", "XL"], images: ["/products/hoodie-1.jpg"], featured: true },
  { id: "hoodie-2", name: "Premium Hoodie", category: "streetwear", subcategory: "Hoodies", description: "Premium quality hoodie.", features: ["Premium fabric", "High quality", "Durable", "Soft"], sizes: ["S", "M", "L", "XL"], images: ["/products/hoodie-2.jpg"] },
  { id: "hoodie-3", name: "Performance Hoodie", category: "streetwear", subcategory: "Hoodies", description: "Performance hoodie with moisture control.", features: ["Moisture-wicking", "Breathable", "Comfortable", "Athletic fit"], sizes: ["S", "M", "L", "XL"], images: ["/products/hoodie-3.jpg"] },
  { id: "hoodie-4", name: "Women's Hoodie", category: "streetwear", subcategory: "Hoodies", description: "Women's fitted hoodie.", features: ["Women's fit", "Tailored", "Flatlock seams", "Comfortable"], sizes: ["XS", "S", "M", "L"], images: ["/products/hoodie-4.jpg"] },
  { id: "hoodie-5", name: "Oversized Hoodie", category: "streetwear", subcategory: "Hoodies", description: "Oversized comfortable hoodie.", features: ["Oversized fit", "Comfortable", "Relaxed", "Trendy"], sizes: ["M", "L", "XL", "XXL"], images: ["/products/hoodie-5.jpg"] },

  // STREETWEAR - GRAPHIC T-SHIRTS (5 products)
  { id: "tshirt-1", name: "Classic Graphic Tee", category: "streetwear", subcategory: "Graphic T-Shirts", description: "Classic graphic t-shirt.", features: ["Quality fabric", "Comfortable", "Classic design", "Durable"], sizes: ["S", "M", "L", "XL"], images: ["/products/tshirt-1.jpg"] },
  { id: "tshirt-2", name: "Premium Graphic Tee", category: "streetwear", subcategory: "Graphic T-Shirts", description: "Premium graphic t-shirt.", features: ["Premium fabric", "High quality", "Bold graphics", "Durable"], sizes: ["S", "M", "L", "XL"], images: ["/products/tshirt-2.jpg"] },
  { id: "tshirt-3", name: "Streetwear Graphic Tee", category: "streetwear", subcategory: "Graphic T-Shirts", description: "Trendy streetwear graphic tee.", features: ["Trendy design", "Quality fabric", "Comfortable", "Stylish"], sizes: ["S", "M", "L", "XL"], images: ["/products/tshirt-3.jpg"] },
  { id: "tshirt-4", name: "Women's Graphic Tee", category: "streetwear", subcategory: "Graphic T-Shirts", description: "Women's graphic t-shirt.", features: ["Women's fit", "Tailored", "Quality fabric", "Comfortable"], sizes: ["XS", "S", "M", "L"], images: ["/products/tshirt-4.jpg"] },
  { id: "tshirt-5", name: "Vintage Graphic Tee", category: "streetwear", subcategory: "Graphic T-Shirts", description: "Vintage-style graphic tee.", features: ["Vintage style", "Quality fabric", "Classic graphics", "Comfortable"], sizes: ["S", "M", "L", "XL"], images: ["/products/tshirt-5.jpg"] },

  // STREETWEAR - OVERSIZE HOODIES (5 products)
  { id: "ovhoodie-1", name: "Classic Oversize Hoodie", category: "streetwear", subcategory: "Oversize Hoodies", description: "Classic oversize hoodie.", features: ["Oversized fit", "Comfortable", "Warm", "Relaxed style"], sizes: ["S", "M", "L", "XL"], images: ["/products/ovhoodie-1.jpg"] },
  { id: "ovhoodie-2", name: "Premium Oversize Hoodie", category: "streetwear", subcategory: "Oversize Hoodies", description: "Premium oversize hoodie.", features: ["Premium fabric", "Oversized", "High quality", "Soft"], sizes: ["M", "L", "XL", "XXL"], images: ["/products/ovhoodie-2.jpg"] },
  { id: "ovhoodie-3", name: "Trendy Oversize Hoodie", category: "streetwear", subcategory: "Oversize Hoodies", description: "Trendy oversize hoodie.", features: ["Trendy design", "Oversized", "Comfortable", "Stylish"], sizes: ["M", "L", "XL", "XXL"], images: ["/products/ovhoodie-3.jpg"] },
  { id: "ovhoodie-4", name: "Women's Oversize Hoodie", category: "streetwear", subcategory: "Oversize Hoodies", description: "Women's oversize hoodie.", features: ["Women's oversize", "Tailored", "Comfortable", "Stylish"], sizes: ["S", "M", "L", "XL"], images: ["/products/ovhoodie-4.jpg"] },
  { id: "ovhoodie-5", name: "Ultra Oversized Hoodie", category: "streetwear", subcategory: "Oversize Hoodies", description: "Ultra oversized comfortable hoodie.", features: ["Ultra oversized", "Comfortable", "Relaxed", "Trendy"], sizes: ["L", "XL", "XXL", "3XL"], images: ["/products/ovhoodie-5.jpg"] },

  // STREETWEAR - FLANNEL SHIRTS (5 products)
  { id: "flannel-1", name: "Classic Flannel Shirt", category: "streetwear", subcategory: "Flannel Shirts", description: "Classic flannel shirt.", features: ["Classic design", "Comfortable", "Quality fabric", "Timeless"], sizes: ["S", "M", "L", "XL"], images: ["/products/flannel-1.jpg"] },
  { id: "flannel-2", name: "Premium Flannel Shirt", category: "streetwear", subcategory: "Flannel Shirts", description: "Premium quality flannel shirt.", features: ["Premium fabric", "High quality", "Durable", "Soft"], sizes: ["S", "M", "L", "XL"], images: ["/products/flannel-2.jpg"] },
  { id: "flannel-3", name: "Oversized Flannel Shirt", category: "streetwear", subcategory: "Flannel Shirts", description: "Oversized flannel shirt.", features: ["Oversized fit", "Comfortable", "Relaxed", "Trendy"], sizes: ["M", "L", "XL", "XXL"], images: ["/products/flannel-3.jpg"] },
  { id: "flannel-4", name: "Women's Flannel Shirt", category: "streetwear", subcategory: "Flannel Shirts", description: "Women's flannel shirt.", features: ["Women's fit", "Tailored", "Quality fabric", "Comfortable"], sizes: ["XS", "S", "M", "L"], images: ["/products/flannel-4.jpg"] },
  { id: "flannel-5", name: "Vintage Flannel Shirt", category: "streetwear", subcategory: "Flannel Shirts", description: "Vintage-style flannel shirt.", features: ["Vintage style", "Quality fabric", "Classic colors", "Comfortable"], sizes: ["S", "M", "L", "XL"], images: ["/products/flannel-5.jpg"] },

  // STREETWEAR - LONG SLEEVE TEES (5 products)
  { id: "longsleeve-1", name: "Classic Long Sleeve Tee", category: "streetwear", subcategory: "Long Sleeve Tees", description: "Classic long sleeve t-shirt.", features: ["Classic design", "Comfortable", "Quality fabric", "Versatile"], sizes: ["S", "M", "L", "XL"], images: ["/products/longsleeve-1.jpg"] },
  { id: "longsleeve-2", name: "Premium Long Sleeve Tee", category: "streetwear", subcategory: "Long Sleeve Tees", description: "Premium long sleeve tee.", features: ["Premium fabric", "High quality", "Durable", "Soft"], sizes: ["S", "M", "L", "XL"], images: ["/products/longsleeve-2.jpg"] },
  { id: "longsleeve-3", name: "Performance Long Sleeve Tee", category: "streetwear", subcategory: "Long Sleeve Tees", description: "Performance long sleeve tee.", features: ["Moisture-wicking", "Breathable", "Comfortable", "Durable"], sizes: ["S", "M", "L", "XL"], images: ["/products/longsleeve-3.jpg"] },
  { id: "longsleeve-4", name: "Women's Long Sleeve Tee", category: "streetwear", subcategory: "Long Sleeve Tees", description: "Women's long sleeve tee.", features: ["Women's fit", "Tailored", "Flatlock seams", "Comfortable"], sizes: ["XS", "S", "M", "L"], images: ["/products/longsleeve-4.jpg"] },
  { id: "longsleeve-5", name: "Graphic Long Sleeve Tee", category: "streetwear", subcategory: "Long Sleeve Tees", description: "Graphic long sleeve tee.", features: ["Bold graphics", "Quality fabric", "Comfortable", "Stylish"], sizes: ["S", "M", "L", "XL"], images: ["/products/longsleeve-5.jpg"] },

  // STREETWEAR - CARGO PANTS (5 products)
  { id: "cargo-1", name: "Classic Cargo Pants", category: "streetwear", subcategory: "Cargo Pants", description: "Classic cargo pants.", features: ["Multiple pockets", "Comfortable", "Durable", "Versatile"], sizes: ["S", "M", "L", "XL"], images: ["/products/cargo-1.jpg"] },
  { id: "cargo-2", name: "Premium Cargo Pants", category: "streetwear", subcategory: "Cargo Pants", description: "Premium cargo pants.", features: ["Premium fabric", "High quality", "Durable", "Comfortable fit"], sizes: ["M", "L", "XL", "XXL"], images: ["/products/cargo-2.jpg"] },
  { id: "cargo-3", name: "Oversized Cargo Pants", category: "streetwear", subcategory: "Cargo Pants", description: "Oversized cargo pants.", features: ["Oversized fit", "Comfortable", "Trendy", "Relaxed style"], sizes: ["M", "L", "XL", "XXL"], images: ["/products/cargo-3.jpg"] },
  { id: "cargo-4", name: "Women's Cargo Pants", category: "streetwear", subcategory: "Cargo Pants", description: "Women's cargo pants.", features: ["Women's fit", "Tailored", "Comfortable", "Stylish"], sizes: ["S", "M", "L", "XL"], images: ["/products/cargo-4.jpg"] },
  { id: "cargo-5", name: "Tactical Cargo Pants", category: "streetwear", subcategory: "Cargo Pants", description: "Tactical cargo pants.", features: ["Tactical pockets", "Durable", "Quality fabric", "Comfortable"], sizes: ["M", "L", "XL", "XXL"], images: ["/products/cargo-5.jpg"] },

  // STREETWEAR - BAGGY JEANS (5 products)
  { id: "baggy-1", name: "Classic Baggy Jeans", category: "streetwear", subcategory: "Baggy Jeans", description: "Classic baggy jeans.", features: ["Baggy fit", "Comfortable", "Quality denim", "Timeless"], sizes: ["S", "M", "L", "XL"], images: ["/products/baggy-1.jpg"] },
  { id: "baggy-2", name: "Premium Baggy Jeans", category: "streetwear", subcategory: "Baggy Jeans", description: "Premium baggy jeans.", features: ["Premium denim", "High quality", "Durable", "Comfortable"], sizes: ["M", "L", "XL", "XXL"], images: ["/products/baggy-2.jpg"] },
  { id: "baggy-3", name: "Oversized Baggy Jeans", category: "streetwear", subcategory: "Baggy Jeans", description: "Oversized baggy jeans.", features: ["Oversized fit", "Very baggy", "Trendy", "Comfortable"], sizes: ["L", "XL", "XXL"], images: ["/products/baggy-3.jpg"] },
  { id: "baggy-4", name: "Women's Baggy Jeans", category: "streetwear", subcategory: "Baggy Jeans", description: "Women's baggy jeans.", features: ["Women's fit", "Baggy style", "Comfortable", "Trendy"], sizes: ["S", "M", "L", "XL"], images: ["/products/baggy-4.jpg"] },
  { id: "baggy-5", name: "Vintage Baggy Jeans", category: "streetwear", subcategory: "Baggy Jeans", description: "Vintage-style baggy jeans.", features: ["Vintage look", "Baggy fit", "Quality denim", "Character"], sizes: ["M", "L", "XL", "XXL"], images: ["/products/baggy-5.jpg"] },

  // STREETWEAR - RIPPED JEANS (5 products)
  { id: "ripped-1", name: "Classic Ripped Jeans", category: "streetwear", subcategory: "Ripped Jeans", description: "Classic ripped jeans.", features: ["Ripped design", "Comfortable", "Quality denim", "Trendy"], sizes: ["S", "M", "L", "XL"], images: ["/products/ripped-1.jpg"] },
  { id: "ripped-2", name: "Premium Ripped Jeans", category: "streetwear", subcategory: "Ripped Jeans", description: "Premium ripped jeans.", features: ["Premium denim", "High quality", "Ripped style", "Comfortable"], sizes: ["M", "L", "XL", "XXL"], images: ["/products/ripped-2.jpg"] },
  { id: "ripped-3", name: "Heavy Ripped Jeans", category: "streetwear", subcategory: "Ripped Jeans", description: "Heavy ripped jeans.", features: ["Heavy rips", "Trendy", "Quality denim", "Edgy style"], sizes: ["M", "L", "XL"], images: ["/products/ripped-3.jpg"] },
  { id: "ripped-4", name: "Women's Ripped Jeans", category: "streetwear", subcategory: "Ripped Jeans", description: "Women's ripped jeans.", features: ["Women's fit", "Ripped style", "Trendy", "Comfortable"], sizes: ["S", "M", "L", "XL"], images: ["/products/ripped-4.jpg"] },
  { id: "ripped-5", name: "Distressed Ripped Jeans", category: "streetwear", subcategory: "Ripped Jeans", description: "Distressed ripped jeans.", features: ["Distressed look", "Heavy rips", "Trendy", "Quality denim"], sizes: ["M", "L", "XL", "XXL"], images: ["/products/ripped-5.jpg"] },

  // STREETWEAR - SHORTS (5 products)
  { id: "shorts-1", name: "Classic Shorts", category: "streetwear", subcategory: "Shorts", description: "Classic shorts.", features: ["Comfortable", "Quality fabric", "Versatile", "Easy care"], sizes: ["S", "M", "L", "XL"], images: ["/products/shorts-1.jpg"] },
  { id: "shorts-2", name: "Premium Shorts", category: "streetwear", subcategory: "Shorts", description: "Premium shorts.", features: ["Premium fabric", "High quality", "Durable", "Comfortable"], sizes: ["M", "L", "XL", "XXL"], images: ["/products/shorts-2.jpg"] },
  { id: "shorts-3", name: "Cargo Shorts", category: "streetwear", subcategory: "Shorts", description: "Cargo shorts with pockets.", features: ["Multiple pockets", "Durable", "Comfortable", "Versatile"], sizes: ["M", "L", "XL", "XXL"], images: ["/products/shorts-3.jpg"] },
  { id: "shorts-4", name: "Women's Shorts", category: "streetwear", subcategory: "Shorts", description: "Women's shorts.", features: ["Women's fit", "Tailored", "Comfortable", "Stylish"], sizes: ["S", "M", "L", "XL"], images: ["/products/shorts-4.jpg"] },
  { id: "shorts-5", name: "Denim Shorts", category: "streetwear", subcategory: "Shorts", description: "Denim shorts.", features: ["Quality denim", "Comfortable", "Versatile", "Timeless"], sizes: ["S", "M", "L", "XL"], images: ["/products/shorts-5.jpg"] },

  // STREETWEAR - CAPS (5 products)
  { id: "cap-1", name: "Classic Baseball Cap", category: "streetwear", subcategory: "Caps", description: "Classic baseball cap.", features: ["Classic design", "Comfortable", "Quality fabric", "Versatile"], sizes: ["One Size"], images: ["/products/cap-1.jpg"] },
  { id: "cap-2", name: "Premium Baseball Cap", category: "streetwear", subcategory: "Caps", description: "Premium baseball cap.", features: ["Premium fabric", "High quality", "Durable", "Comfortable"], sizes: ["One Size"], images: ["/products/cap-2.jpg"] },
  { id: "cap-3", name: "Snapback Cap", category: "streetwear", subcategory: "Caps", description: "Snapback adjustable cap.", features: ["Snapback closure", "Adjustable", "Trendy", "Comfortable"], sizes: ["One Size"], images: ["/products/cap-3.jpg"] },
  { id: "cap-4", name: "Bucket Hat", category: "streetwear", subcategory: "Caps", description: "Bucket hat.", features: ["Bucket style", "Comfortable", "Trendy", "Sun protection"], sizes: ["One Size"], images: ["/products/cap-4.jpg"] },
  { id: "cap-5", name: "Trucker Cap", category: "streetwear", subcategory: "Caps", description: "Trucker mesh cap.", features: ["Mesh back", "Adjustable", "Breathable", "Comfortable"], sizes: ["One Size"], images: ["/products/cap-5.jpg"] },

  // STREETWEAR - CROSS BODY BAGS (5 products)
  { id: "bag-1", name: "Classic Cross Body Bag", category: "streetwear", subcategory: "Cross Body Bags", description: "Classic cross body bag.", features: ["Crossbody style", "Comfortable", "Quality material", "Versatile"], images: ["/products/bag-1.jpg"] },
  { id: "bag-2", name: "Premium Cross Body Bag", category: "streetwear", subcategory: "Cross Body Bags", description: "Premium cross body bag.", features: ["Premium material", "High quality", "Durable", "Stylish"], images: ["/products/bag-2.jpg"] },
  { id: "bag-3", name: "Leather Cross Body Bag", category: "streetwear", subcategory: "Cross Body Bags", description: "Leather cross body bag.", features: ["Genuine leather", "High quality", "Durable", "Premium"], images: ["/products/bag-3.jpg"] },
  { id: "bag-4", name: "Canvas Cross Body Bag", category: "streetwear", subcategory: "Cross Body Bags", description: "Canvas cross body bag.", features: ["Canvas material", "Durable", "Comfortable", "Eco-friendly"], images: ["/products/bag-4.jpg"] },
  { id: "bag-5", name: "Waterproof Cross Body Bag", category: "streetwear", subcategory: "Cross Body Bags", description: "Waterproof cross body bag.", features: ["Waterproof", "Durable", "Comfortable", "Protective"], images: ["/products/bag-5.jpg"] },

  // GLOVES - WEIGHTLIFTING GLOVES (5 products)
  { id: "wlift-1", name: "Classic Weightlifting Gloves", category: "gloves", subcategory: "Weightlifting Gloves", description: "Classic weightlifting gloves.", features: ["Comfortable fit", "Quality material", "Grip support", "Durable"], sizes: ["S", "M", "L", "XL"], images: ["/products/wlift-1.jpg"], featured: true },
  { id: "wlift-2", name: "Premium Weightlifting Gloves", category: "gloves", subcategory: "Weightlifting Gloves", description: "Premium weightlifting gloves.", features: ["Premium material", "High quality", "Excellent grip", "Durable"], sizes: ["M", "L", "XL", "XXL"], images: ["/products/wlift-2.jpg"] },
  { id: "wlift-3", name: "Pro Weightlifting Gloves", category: "gloves", subcategory: "Weightlifting Gloves", description: "Professional weightlifting gloves.", features: ["Professional grade", "Superior grip", "Wrist support", "Durable"], sizes: ["L", "XL", "XXL"], images: ["/products/wlift-3.jpg"] },
  { id: "wlift-4", name: "Women's Weightlifting Gloves", category: "gloves", subcategory: "Weightlifting Gloves", description: "Women's weightlifting gloves.", features: ["Women's fit", "Comfortable", "Quality material", "Grip support"], sizes: ["S", "M", "L"], images: ["/products/wlift-4.jpg"] },
  { id: "wlift-5", name: "Training Weightlifting Gloves", category: "gloves", subcategory: "Weightlifting Gloves", description: "Training weightlifting gloves.", features: ["Training fit", "Affordable", "Quality material", "Comfortable"], sizes: ["M", "L", "XL"], images: ["/products/wlift-5.jpg"] },

  // GLOVES - WINTER GLOVES (5 products)
  { id: "winter-1", name: "Classic Winter Gloves", category: "gloves", subcategory: "Winter Gloves", description: "Classic winter gloves.", features: ["Warm", "Comfortable", "Quality material", "Waterproof"], sizes: ["S", "M", "L", "XL"], images: ["/products/winter-1.jpg"] },
  { id: "winter-2", name: "Premium Winter Gloves", category: "gloves", subcategory: "Winter Gloves", description: "Premium winter gloves.", features: ["Premium material", "Extra warm", "Waterproof", "Durable"], sizes: ["M", "L", "XL"], images: ["/products/winter-2.jpg"] },
  { id: "winter-3", name: "Thermal Winter Gloves", category: "gloves", subcategory: "Winter Gloves", description: "Thermal-lined winter gloves.", features: ["Thermal lining", "Extra warm", "Windproof", "Comfortable"], sizes: ["M", "L", "XL"], images: ["/products/winter-3.jpg"] },
  { id: "winter-4", name: "Women's Winter Gloves", category: "gloves", subcategory: "Winter Gloves", description: "Women's winter gloves.", features: ["Women's fit", "Warm", "Waterproof", "Stylish"], sizes: ["S", "M", "L"], images: ["/products/winter-4.jpg"] },
  { id: "winter-5", name: "Touch Screen Winter Gloves", category: "gloves", subcategory: "Winter Gloves", description: "Touch screen winter gloves.", features: ["Touch screen compatible", "Warm", "Waterproof", "Convenient"], sizes: ["M", "L", "XL"], images: ["/products/winter-5.jpg"] },

  // GLOVES - CYCLING GLOVES (5 products)
  { id: "cycling-1", name: "Classic Cycling Gloves", category: "gloves", subcategory: "Cycling Gloves", description: "Classic cycling gloves.", features: ["Comfortable fit", "Quality material", "Grip support", "Breathable"], sizes: ["S", "M", "L", "XL"], images: ["/products/cycling-1.jpg"] },
  { id: "cycling-2", name: "Premium Cycling Gloves", category: "gloves", subcategory: "Cycling Gloves", description: "Premium cycling gloves.", features: ["Premium material", "High quality", "Excellent grip", "Durable"], sizes: ["M", "L", "XL"], images: ["/products/cycling-2.jpg"] },
  { id: "cycling-3", name: "Full Finger Cycling Gloves", category: "gloves", subcategory: "Cycling Gloves", description: "Full finger cycling gloves.", features: ["Full finger", "Protection", "Grip support", "Durable"], sizes: ["M", "L", "XL"], images: ["/products/cycling-3.jpg"] },
  { id: "cycling-4", name: "Women's Cycling Gloves", category: "gloves", subcategory: "Cycling Gloves", description: "Women's cycling gloves.", features: ["Women's fit", "Comfortable", "Quality material", "Grip support"], sizes: ["S", "M", "L"], images: ["/products/cycling-4.jpg"] },
  { id: "cycling-5", name: "Professional Cycling Gloves", category: "gloves", subcategory: "Cycling Gloves", description: "Professional cycling gloves.", features: ["Professional grade", "Superior grip", "Padded palms", "Durable"], sizes: ["L", "XL"], images: ["/products/cycling-5.jpg"] },

  // GLOVES - LEATHER GLOVES (5 products)
  { id: "leather-1", name: "Classic Leather Gloves", category: "gloves", subcategory: "Leather Gloves", description: "Classic leather gloves.", features: ["Genuine leather", "Comfortable", "Quality material", "Timeless"], sizes: ["S", "M", "L", "XL"], images: ["/products/leather-1.jpg"] },
  { id: "leather-2", name: "Premium Leather Gloves", category: "gloves", subcategory: "Leather Gloves", description: "Premium leather gloves.", features: ["Premium leather", "High quality", "Durable", "Stylish"], sizes: ["M", "L", "XL"], images: ["/products/leather-2.jpg"] },
  { id: "leather-3", name: "Winter Leather Gloves", category: "gloves", subcategory: "Leather Gloves", description: "Lined winter leather gloves.", features: ["Leather material", "Lined", "Warm", "Durable"], sizes: ["M", "L", "XL"], images: ["/products/leather-3.jpg"] },
  { id: "leather-4", name: "Women's Leather Gloves", category: "gloves", subcategory: "Leather Gloves", description: "Women's leather gloves.", features: ["Women's fit", "Genuine leather", "Quality", "Elegant"], sizes: ["S", "M", "L"], images: ["/products/leather-4.jpg"] },
  { id: "leather-5", name: "Tactical Leather Gloves", category: "gloves", subcategory: "Leather Gloves", description: "Tactical leather gloves.", features: ["Durable leather", "Protective", "Quality material", "Functional"], sizes: ["M", "L", "XL"], images: ["/products/leather-5.jpg"] },

  // GLOVES - FINGERLESS GLOVES (5 products)
  { id: "fingerless-1", name: "Classic Fingerless Gloves", category: "gloves", subcategory: "Fingerless Gloves", description: "Classic fingerless gloves.", features: ["Fingerless design", "Comfortable", "Quality material", "Versatile"], sizes: ["S", "M", "L", "XL"], images: ["/products/fingerless-1.jpg"] },
  { id: "fingerless-2", name: "Premium Fingerless Gloves", category: "gloves", subcategory: "Fingerless Gloves", description: "Premium fingerless gloves.", features: ["Premium material", "High quality", "Durable", "Comfortable"], sizes: ["M", "L", "XL"], images: ["/products/fingerless-2.jpg"] },
  { id: "fingerless-3", name: "Leather Fingerless Gloves", category: "gloves", subcategory: "Fingerless Gloves", description: "Leather fingerless gloves.", features: ["Genuine leather", "Stylish", "Quality material", "Durable"], sizes: ["M", "L", "XL"], images: ["/products/fingerless-3.jpg"] },
  { id: "fingerless-4", name: "Women's Fingerless Gloves", category: "gloves", subcategory: "Fingerless Gloves", description: "Women's fingerless gloves.", features: ["Women's fit", "Comfortable", "Quality material", "Stylish"], sizes: ["S", "M", "L"], images: ["/products/fingerless-4.jpg"] },
  { id: "fingerless-5", name: "Wool Fingerless Gloves", category: "gloves", subcategory: "Fingerless Gloves", description: "Wool fingerless gloves.", features: ["Wool material", "Warm", "Quality", "Comfortable"], sizes: ["M", "L", "XL"], images: ["/products/fingerless-5.jpg"] },
]

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id)
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
