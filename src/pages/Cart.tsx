
import { useState } from "react";
import { Link } from "react-router-dom";
import { Minus, Plus, ShoppingBag, Trash2, ArrowLeft, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/useCart";
import { useToast } from "@/hooks/use-toast";

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart, getCartTotal } = useCart();
  const { toast } = useToast();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  
  const handleCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      toast({
        title: "Order placed!",
        description: "Your order has been successfully placed.",
      });
      clearCart();
      setIsCheckingOut(false);
    }, 2000);
  };
  
  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-24">
          <div className="container-custom py-16 text-center">
            <div className="max-w-md mx-auto">
              <ShoppingBag className="h-16 w-16 mx-auto text-gray-400 mb-4" />
              <h1 className="text-3xl font-bold mb-4">Your cart is empty</h1>
              <p className="text-gray-600 mb-8">Looks like you haven't added any products to your cart yet.</p>
              <Button asChild className="bg-purple-400 hover:bg-purple-500">
                <Link to="/shop">
                  Continue Shopping <ArrowRight size={16} className="ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        <div className="container-custom py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {/* Cart Items */}
              <div className="border rounded-lg overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Product
                      </th>
                      <th scope="col" className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Price
                      </th>
                      <th scope="col" className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Quantity
                      </th>
                      <th scope="col" className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Total
                      </th>
                      <th scope="col" className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        <span className="sr-only">Actions</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {cartItems.map((item) => {
                      const itemPrice = item.discountPercentage > 0 
                        ? item.price * (1 - item.discountPercentage / 100) 
                        : item.price;
                      
                      return (
                        <tr key={`${item.id}-${item.selectedColor}-${item.selectedSize}`}>
                          <td className="py-4 px-4">
                            <div className="flex items-center">
                              <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                <img
                                  src={item.images[0]}
                                  alt={item.name}
                                  className="h-full w-full object-cover object-center"
                                />
                              </div>
                              <div className="ml-4">
                                <h3 className="text-sm font-medium text-gray-900">{item.name}</h3>
                                {item.selectedColor && (
                                  <p className="text-xs text-gray-500 mt-1">Color: {item.selectedColor}</p>
                                )}
                                {item.selectedSize && (
                                  <p className="text-xs text-gray-500">Size: {item.selectedSize}</p>
                                )}
                              </div>
                            </div>
                          </td>
                          <td className="py-4 px-4 text-sm text-gray-900">
                            ${itemPrice.toFixed(2)}
                          </td>
                          <td className="py-4 px-4">
                            <div className="flex items-center">
                              <button
                                className="p-1 rounded-full hover:bg-gray-100"
                                onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                              >
                                <Minus size={14} />
                              </button>
                              <span className="mx-2 w-8 text-center">{item.quantity}</span>
                              <button
                                className="p-1 rounded-full hover:bg-gray-100"
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              >
                                <Plus size={14} />
                              </button>
                            </div>
                          </td>
                          <td className="py-4 px-4 text-sm font-medium text-gray-900">
                            ${(itemPrice * item.quantity).toFixed(2)}
                          </td>
                          <td className="py-4 px-4 text-right">
                            <button
                              className="text-red-600 hover:text-red-800"
                              onClick={() => removeFromCart(item.id)}
                            >
                              <Trash2 size={18} />
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              
              <div className="mt-6 flex justify-between items-center">
                <Button variant="outline" asChild>
                  <Link to="/shop" className="flex items-center">
                    <ArrowLeft size={16} className="mr-2" />
                    Continue Shopping
                  </Link>
                </Button>
                <Button variant="outline" onClick={clearCart}>
                  Clear Cart
                </Button>
              </div>
            </div>
            
            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-lg p-6">
                <h2 className="text-lg font-medium text-gray-900 mb-4">Order Summary</h2>
                
                <div className="flow-root">
                  <div className="border-t border-gray-200 py-4">
                    <div className="flex justify-between mb-2">
                      <p className="text-sm text-gray-600">Subtotal</p>
                      <p className="text-sm font-medium text-gray-900">${getCartTotal().toFixed(2)}</p>
                    </div>
                    <div className="flex justify-between mb-2">
                      <p className="text-sm text-gray-600">Shipping estimate</p>
                      <p className="text-sm font-medium text-gray-900">$5.00</p>
                    </div>
                    <div className="flex justify-between mb-2">
                      <p className="text-sm text-gray-600">Tax estimate</p>
                      <p className="text-sm font-medium text-gray-900">${(getCartTotal() * 0.1).toFixed(2)}</p>
                    </div>
                    <div className="flex justify-between pt-4 border-t border-gray-200">
                      <p className="text-base font-medium text-gray-900">Order total</p>
                      <p className="text-base font-medium text-gray-900">
                        ${(getCartTotal() + 5 + getCartTotal() * 0.1).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
                
                <Button
                  className="w-full bg-purple-400 hover:bg-purple-500 mt-6"
                  onClick={handleCheckout}
                  disabled={isCheckingOut}
                >
                  {isCheckingOut ? "Processing..." : "Checkout"}
                </Button>
                
                <div className="mt-6 text-center text-sm text-gray-500">
                  <p>
                    or{" "}
                    <Link to="/shop" className="font-medium text-purple-400 hover:text-purple-500">
                      Continue Shopping
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Cart;
