export type Condition = "Like New" | "Excellent" | "Good" | "Fair";

export type Product = {
  id: string;
  lot: string; // thrift "lot" catalog number — part of the site's tag motif
  name: string;
  brand: string;
  category: "Outerwear" | "Tops" | "Bottoms" | "Dresses" | "Denim" | "Accessories";
  size: "XS" | "S" | "M" | "L" | "XL";
  color: string;
  condition: Condition;
  price: number;
  originalPrice?: number;
  images: string[];
  description: string;
  isNew?: boolean;
  featured?: boolean;
};

const img = (seed: string, w = 900, h = 1100) =>
  `https://picsum.photos/seed/${seed}/${w}/${h}`;

export const products: Product[] = [
  {
    id: "p1",
    lot: "LOT 014",
    name: "Oversized Denim Trucker Jacket",
    brand: "Levi's",
    category: "Outerwear",
    size: "M",
    color: "Washed Blue",
    condition: "Excellent",
    price: 1499,
    originalPrice: 4200,
    images: [img("p1a"), img("p1b"), img("p1c")],
    description:
      "A broken-in trucker jacket with the kind of fade you can't buy new. Sits oversized through the shoulders — layer it over a hoodie or wear it buttoned up.",
    isNew: true,
    featured: true,
  },
  {
    id: "p2",
    lot: "LOT 027",
    name: "Pleated Midi Skirt",
    brand: "Zara",
    category: "Bottoms",
    size: "S",
    color: "Sage Green",
    condition: "Like New",
    price: 899,
    originalPrice: 2600,
    images: [img("p2a"), img("p2b"), img("p2c")],
    description:
      "Barely-worn pleated midi in a muted sage tone. Falls just below the knee, pairs easily with a fitted top or an oversized tee.",
    featured: true,
  },
  {
    id: "p3",
    lot: "LOT 031",
    name: "Cropped Knit Cardigan",
    brand: "Uniqlo",
    category: "Tops",
    size: "M",
    color: "Cream",
    condition: "Good",
    price: 749,
    originalPrice: 1990,
    images: [img("p3a"), img("p3b"), img("p3c")],
    description:
      "Soft cropped cardigan, small pill marks consistent with light wear (barely noticeable). Buttons all the way, great over slip dresses.",
    featured: true,
  },
  {
    id: "p4",
    lot: "LOT 042",
    name: "Straight Leg Cargo Pants",
    brand: "Dickies",
    category: "Bottoms",
    size: "L",
    color: "Olive",
    condition: "Excellent",
    price: 1199,
    originalPrice: 3100,
    images: [img("p4a"), img("p4b"), img("p4c")],
    description:
      "Utility cargo pants with six working pockets and a straight leg. Fabric has just enough structure to hold its shape all day.",
    isNew: true,
  },
  {
    id: "p5",
    lot: "LOT 058",
    name: "Silk Slip Dress",
    brand: "Mango",
    category: "Dresses",
    size: "S",
    color: "Champagne",
    condition: "Like New",
    price: 1399,
    originalPrice: 3400,
    images: [img("p5a"), img("p5b"), img("p5c")],
    description:
      "Bias-cut slip dress with a soft champagne sheen. Worn once for a few hours — practically untouched.",
    featured: true,
  },
  {
    id: "p6",
    lot: "LOT 063",
    name: "Varsity Bomber Jacket",
    brand: "Champion",
    category: "Outerwear",
    size: "L",
    color: "Navy / Cream",
    condition: "Good",
    price: 1699,
    originalPrice: 4500,
    images: [img("p6a"), img("p6b"), img("p6c")],
    description:
      "Classic varsity silhouette with ribbed cuffs and hem. Light surface wear on the left sleeve, doesn't affect wear or structure.",
    isNew: true,
  },
  {
    id: "p7",
    lot: "LOT 071",
    name: "High-Rise Straight Jeans",
    brand: "Wrangler",
    category: "Denim",
    size: "M",
    color: "Mid Wash",
    condition: "Excellent",
    price: 999,
    originalPrice: 2800,
    images: [img("p7a"), img("p7b"), img("p7c")],
    description:
      "Rigid-ish denim that softens with wear, high-rise straight cut. No stretch — built to break in like real denim should.",
  },
  {
    id: "p8",
    lot: "LOT 084",
    name: "Chunky Gold-Tone Necklace",
    brand: "Vintage",
    category: "Accessories",
    size: "M",
    color: "Gold",
    condition: "Good",
    price: 449,
    originalPrice: 1200,
    images: [img("p8a"), img("p8b"), img("p8c")],
    description:
      "Statement chain with minor tarnish that reads as patina, not damage. Adjustable clasp.",
    featured: true,
  },
  {
    id: "p9",
    lot: "LOT 090",
    name: "Ribbed Turtleneck",
    brand: "H&M",
    category: "Tops",
    size: "S",
    color: "Rust",
    condition: "Like New",
    price: 599,
    originalPrice: 1500,
    images: [img("p9a"), img("p9b"), img("p9c")],
    description:
      "Fitted ribbed turtleneck in a warm rust tone. Fabric has good recovery — no stretched-out neckline.",
    isNew: true,
  },
  {
    id: "p10",
    lot: "LOT 103",
    name: "Corduroy Wide-Leg Trousers",
    brand: "Gap",
    category: "Bottoms",
    size: "M",
    color: "Chestnut",
    condition: "Excellent",
    price: 1099,
    originalPrice: 2900,
    images: [img("p10a"), img("p10b"), img("p10c")],
    description:
      "Fine-wale corduroy with a relaxed wide leg. Deep chestnut brown that pairs with just about everything in the earthy palette.",
  },
  {
    id: "p11",
    lot: "LOT 112",
    name: "Leather Crossbody Bag",
    brand: "Fossil",
    category: "Accessories",
    size: "S",
    color: "Tan",
    condition: "Good",
    price: 1299,
    originalPrice: 3500,
    images: [img("p11a"), img("p11b"), img("p11c")],
    description:
      "Genuine leather crossbody with soft edge-wear that adds character. Interior lining is clean, zip works smoothly.",
    featured: true,
  },
  {
    id: "p12",
    lot: "LOT 121",
    name: "Wrap Midi Dress",
    brand: "Free People",
    category: "Dresses",
    size: "M",
    color: "Terracotta",
    condition: "Like New",
    price: 1599,
    originalPrice: 4100,
    images: [img("p12a"), img("p12b"), img("p12c")],
    description:
      "Flowy wrap dress in a warm terracotta print. Self-tie waist means it adjusts to fit — worn twice, laundered gently.",
    isNew: true,
  },
];

export const getProductById = (id: string) => products.find((p) => p.id === id);

export const getRelatedProducts = (product: Product, count = 4) =>
  products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .concat(products.filter((p) => p.id !== product.id && p.category !== product.category))
    .slice(0, count);

export const categories = Array.from(new Set(products.map((p) => p.category)));
export const brands = Array.from(new Set(products.map((p) => p.brand))).sort();
export const sizes: Product["size"][] = ["XS", "S", "M", "L", "XL"];
export const colors = Array.from(new Set(products.map((p) => p.color)));
