import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    title: "Facial Treatment",
    price: 89.99,
    image: "/placeholder.svg"
  },
  {
    id: 2,
    title: "Massage Therapy",
    price: 129.99,
    image: "/placeholder.svg"
  },
  {
    id: 3,
    title: "Hair Styling",
    price: 69.99,
    image: "/placeholder.svg"
  },
  {
    id: 4,
    title: "Manicure & Pedicure",
    price: 49.99,
    image: "/placeholder.svg"
  }
];

const ProductGrid = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;