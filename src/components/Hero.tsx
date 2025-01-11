import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="bg-beauty-50 py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-beauty-900 mb-6">
          Discover Your Beauty
        </h1>
        <p className="text-lg md:text-xl text-beauty-700 mb-8 max-w-2xl mx-auto">
          Experience luxury beauty treatments and premium products curated just for you
        </p>
        <Button className="bg-beauty-600 hover:bg-beauty-700 text-white">
          Book Now
        </Button>
      </div>
    </div>
  );
};

export default Hero;