import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

interface ProductCardProps {
  title: string;
  price: number;
  image: string;
  description: string;
}

const ProductCard = ({ title, price, image, description }: ProductCardProps) => {
  const { toast } = useToast();

  const handleAddToCart = () => {
    toast({
      title: "Added to cart",
      description: `${title} has been added to your cart.`,
      duration: 3000,
    });
  };

  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg animate-fade-in">
      <CardContent className="p-0">
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
        />
        <div className="p-6">
          <h3 className="font-semibold text-xl mb-2 text-beauty-800">{title}</h3>
          <p className="text-beauty-600 font-medium text-2xl mb-2">
            ${price.toFixed(2)}
          </p>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button 
          onClick={handleAddToCart}
          className="w-full bg-beauty-600 hover:bg-beauty-700 transition-colors"
        >
          Book Now
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;