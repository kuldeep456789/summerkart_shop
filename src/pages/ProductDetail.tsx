
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Minus, Plus, ShoppingBag, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { products } from "@/data/mock";
import { useCart } from "@/hooks/useCart";
import { useToast } from "@/hooks/use-toast";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const { toast } = useToast();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState<string | undefined>();
  const [selectedSize, setSelectedSize] = useState<string | undefined>();

  const product = products.find(p => p.id === Number(id));

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-24">
          <div className="container-custom py-16 text-center">
            <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
            <p>The product you are looking for does not exist.</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const increaseQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(prev => prev + 1);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedColor, selectedSize);
    
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const discountedPrice = product.discountPercentage > 0
    ? product.price * (1 - product.discountPercentage / 100)
    : product.price;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        <div className="container-custom py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              
              {product.images.length > 1 && (
                <div className="grid grid-cols-4 gap-2">
                  {product.images.map((image, index) => (
                    <div 
                      key={index}
                      className={`aspect-square cursor-pointer overflow-hidden rounded-md border-2 ${
                        selectedImage === index ? 'border-purple-400' : 'border-transparent'
                      }`}
                      onClick={() => setSelectedImage(index)}
                    >
                      <img
                        src={image}
                        alt={`${product.name} - View ${index + 1}`}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
                <p className="text-lg text-gray-500 mt-1">{product.category}</p>
              </div>
              
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className={i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
                  />
                ))}
                <span className="ml-2 text-sm text-gray-600">{product.rating} ({Math.floor(Math.random() * 100) + 20} reviews)</span>
              </div>
              
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold text-gray-900">${discountedPrice.toFixed(2)}</span>
                {product.discountPercentage > 0 && (
                  <span className="text-lg text-gray-500 line-through">${product.price.toFixed(2)}</span>
                )}
                {product.discountPercentage > 0 && (
                  <span className="ml-2 rounded-md bg-red-100 px-2 py-1 text-xs font-medium text-red-700">
                    {product.discountPercentage}% OFF
                  </span>
                )}
              </div>
              
              <div className="border-t border-gray-200 pt-4">
                <p className="text-gray-700">{product.description}</p>
              </div>
              
              {/* Color Selection */}
              {product.colors && product.colors.length > 0 && (
                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-3">Color</h3>
                  <div className="flex gap-2">
                    {product.colors.map(color => (
                      <button
                        key={color}
                        type="button"
                        className={`rounded-full h-10 w-10 flex items-center justify-center ${
                          selectedColor === color ? "ring-2 ring-purple-400 ring-offset-2" : ""
                        }`}
                        onClick={() => setSelectedColor(color)}
                      >
                        <span
                          className="rounded-full h-8 w-8"
                          style={{ backgroundColor: color.toLowerCase() }}
                          aria-hidden="true"
                        />
                        <span className="sr-only">{color}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Size Selection */}
              {product.sizes && product.sizes.length > 0 && (
                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-3">Size</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map(size => (
                      <button
                        key={size}
                        type="button"
                        className={`rounded-md border px-3 py-2 text-sm font-medium ${
                          selectedSize === size
                            ? "border-purple-400 bg-purple-50 text-purple-700"
                            : "border-gray-300 bg-white text-gray-900"
                        }`}
                        onClick={() => setSelectedSize(size)}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Quantity */}
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-3">Quantity</h3>
                <div className="flex items-center">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={decreaseQuantity}
                    disabled={quantity <= 1}
                  >
                    <Minus size={16} />
                  </Button>
                  <span className="mx-4 w-10 text-center">{quantity}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={increaseQuantity}
                    disabled={quantity >= product.stock}
                  >
                    <Plus size={16} />
                  </Button>
                  <span className="ml-4 text-sm text-gray-500">{product.stock} available</span>
                </div>
              </div>
              
              {/* Add to Cart */}
              <div className="pt-4">
                <Button
                  className="w-full bg-purple-400 hover:bg-purple-500 text-white text-lg py-6"
                  onClick={handleAddToCart}
                >
                  <ShoppingBag className="mr-2 h-5 w-5" />
                  Add to Cart - ${(quantity * discountedPrice).toFixed(2)}
                </Button>
              </div>
              
              {/* Features */}
              {product.features && product.features.length > 0 && (
                <div className="border-t border-gray-200 pt-4">
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Features</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    {product.features.map((feature, index) => (
                      <li key={index} className="text-gray-700">{feature}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductDetail;
