import Hero from "@/components/Hero";
import ProductSection from "@/components/ProductSection";
import WhyThrift from "@/components/WhyThrift";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";
import { products } from "@/data/products";

export default function HomePage() {
  const featured = products.filter((p) => p.featured);
  const newArrivals = products.filter((p) => p.isNew);

  return (
    <>
      <Hero />
      <ProductSection
        eyebrow="Handpicked"
        title="Featured Finds"
        subtitle="The pieces our team can't stop talking about right now."
        products={featured}
        viewAllHref="/shop"
      />
      <WhyThrift />
      <ProductSection
        eyebrow="Just In"
        title="New Arrivals"
        subtitle="Fresh lots, still smelling like the steamer."
        products={newArrivals}
        viewAllHref="/shop?sort=new"
      />
      <Testimonials />
      <Newsletter />
    </>
  );
}
