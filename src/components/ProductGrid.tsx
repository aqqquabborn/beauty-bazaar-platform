import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    title: "Luxury Facial Treatment",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=500",
    description: "Rejuvenating facial treatment with premium products"
  },
  {
    id: 2,
    title: "Deep Tissue Massage",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=500",
    description: "90-minute therapeutic massage session"
  },
  {
    id: 3,
    title: "Hair Styling Package",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1560869713-da86bd4f31b7?w=500",
    description: "Complete hair makeover including cut and color"
  },
  {
    id: 4,
    title: "Deluxe Manicure & Pedicure",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=500",
    description: "Luxury nail care treatment for hands and feet"
  },
  {
    id: 5,
    title: "Anti-Aging Treatment",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=500",
    description: "Advanced anti-aging facial with collagen boost"
  },
  {
    id: 6,
    title: "Aromatherapy Session",
    price: 69.99,
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=500",
    description: "Relaxing aromatherapy massage with essential oils"
  }
];

const ProductGrid = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8 text-beauty-800">Our Premium Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
            description={product.description}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;