
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative bg-gray-50 py-24 sm:py-32 overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-lg">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 mb-6">
              Discover Modern Fashion for Everyone
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Shop the latest trends and discover quality products crafted for your everyday needs.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                className="bg-purple-400 hover:bg-purple-500 text-white px-6 py-3 rounded-md font-medium text-base"
                asChild
              >
                <Link to="/shop">
                  Shop Now <ArrowRight size={18} className="ml-2" />
                </Link>
              </Button>
              <Button
                variant="outline"
                className="border-purple-400 text-purple-400 hover:bg-purple-50"
                asChild
              >
                <Link to="/collections">
                  View Collections
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
              <img 
                src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=2070&auto=format&fit=crop"
                alt="Hero" 
                className="object-cover w-full h-full"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg max-w-xs">
              <p className="font-semibold text-purple-400 mb-2">New Collection</p>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Summer Essentials</h3>
              <p className="text-sm text-gray-500">Get ready for summer with our latest collection.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-72 h-72 bg-purple-100 rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-purple-200 rounded-full opacity-30 blur-3xl"></div>
    </section>
  );
};

export default HeroSection;
