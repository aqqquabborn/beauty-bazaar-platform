import ProductGrid from "@/components/ProductGrid";
import Navbar from "@/components/Navbar";

const Catalog = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-8">
        <ProductGrid />
      </div>
    </div>
  );
};

export default Catalog;