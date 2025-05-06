
import { useState } from "react";
import { Link } from "react-router-dom";
import { Heart, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Product } from "@/types";
import { useCart } from "@/hooks/useCart";
import { useToast } from "@/hooks/use-toast";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();
  const { toast } = useToast();
  const [isHovered, setIsHovered] = useState(false);
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <div 
      className="group relative overflow-hidden rounded-lg transition-all duration-300 animate-fade-in"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
          <img 
            src={product.images[0]} 
            alt={product.name}
            className="h-full w-full object-cover object-center transition-all duration-500 group-hover:scale-105"
          />
          
          {product.isNew && (
            <div className="absolute top-2 left-2 bg-purple-400 text-white text-xs px-2 py-1 rounded">
              New
            </div>
          )}
          
          {product.discountPercentage > 0 && (
            <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
              -{product.discountPercentage}%
            </div>
          )}
        </div>
        
        <div className={`absolute inset-x-0 bottom-0 bg-white/90 backdrop-blur-sm p-4 translate-y-full transition-transform duration-300 ${isHovered ? 'translate-y-0' : ''}`}>
          <div className="flex justify-between gap-2">
            <Button
              className="w-full bg-purple-400 hover:bg-purple-500"
              size="sm"
              onClick={handleAddToCart}
            >
              <ShoppingBag className="mr-2 h-4 w-4" />
              Add to Cart
            </Button>
            <Button variant="outline" size="icon" className="flex-shrink-0">
              <Heart className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        <div className="mt-3 px-2">
          <h3 className="font-medium text-gray-900 group-hover:text-purple-400 transition-colors">
            {product.name}
          </h3>
          <p className="text-sm text-gray-500 mt-1">
            {product.category}
          </p>
          <div className="mt-1 flex items-center">
            {product.discountPercentage > 0 ? (
              <>
                <span className="font-medium text-gray-900">${product.price * (1 - product.discountPercentage / 100)}</span>
                <span className="ml-2 text-sm text-gray-500 line-through">${product.price}</span>
              </>
            ) : (
              <span className="font-medium text-gray-900">${product.price}</span>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
