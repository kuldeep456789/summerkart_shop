
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/mock";

const Collections = () => {
  const { type } = useParams<{ type: string }>();
  
  // Filter products based on collection type
  const filteredProducts = type
    ? products.filter(product => {
        switch (type) {
          case "new-arrivals":
            return product.isNew;
          case "featured":
            return product.rating >= 4.5;
          case "sale":
            return product.discountPercentage > 0;
          default:
            return true;
        }
      })
    : products;

  // Get collection title
  const getTitle = () => {
    switch (type) {
      case "new-arrivals":
        return "New Arrivals";
      case "featured":
        return "Featured Products";
      case "sale":
        return "Sale Items";
      default:
        return "All Collections";
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        <div className="container-custom py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">{getTitle()}</h1>

          {!type && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <Link to="/collections/new-arrivals" className="group block overflow-hidden rounded-lg">
                <div className="relative aspect-[3/2] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1511556532299-8f662fc26c06?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
                    alt="New Arrivals"
                    className="h-full w-full object-cover object-center transition-all duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <h2 className="text-2xl font-bold text-white">New Arrivals</h2>
                  </div>
                </div>
              </Link>
              <Link to="/collections/featured" className="group block overflow-hidden rounded-lg">
                <div className="relative aspect-[3/2] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
                    alt="Featured Products"
                    className="h-full w-full object-cover object-center transition-all duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <h2 className="text-2xl font-bold text-white">Featured Products</h2>
                  </div>
                </div>
              </Link>
              <Link to="/collections/sale" className="group block overflow-hidden rounded-lg">
                <div className="relative aspect-[3/2] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1607083206968-13611e3d76db?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
                    alt="Sale Items"
                    className="h-full w-full object-cover object-center transition-all duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <h2 className="text-2xl font-bold text-white">Sale Items</h2>
                  </div>
                </div>
              </Link>
            </div>
          )}
          
          {filteredProducts.length > 0 ? (
            <div className="product-grid">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-500">No products found in this collection.</p>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Collections;
