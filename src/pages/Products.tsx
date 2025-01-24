import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const Products = () => {
  const products = [
    {
      id: 1,
      title: "Digital Inspiration Pack 1",
      image: "/lovable-uploads/c19849b2-a0bb-4df7-a154-ca201f8ddd1e.png",
      storeUrl: "https://awakenedartisans.etsy.com/listing/1539279990/affirmation-card-deck-manifesting-kit",
    },
    {
      id: 2,
      title: "Digital Inspiration Pack 2",
      image: "/lovable-uploads/8e315bdb-5f5e-45ad-96f7-0d077d1d2896.png",
      storeUrl: "https://etsy.com/shop/digital-pack-2",
    },
    {
      id: 3,
      title: "Digital Inspiration Pack 3",
      image: "/lovable-uploads/a375b5ef-f261-4a36-938e-1ab580859329.png",
      storeUrl: "https://etsy.com/shop/digital-pack-3",
    },
    {
      id: 4,
      title: "Digital Inspiration Pack 4",
      image: "/lovable-uploads/a56fc758-25bd-484a-b026-8c69010563ec.png",
      storeUrl: "https://etsy.com/shop/digital-pack-4",
    },
    {
      id: 5,
      title: "Digital Inspiration Pack 5",
      image: "/lovable-uploads/11e97d7a-f7f7-4e5f-8b61-9c491a2d70fd.png",
      storeUrl: "https://etsy.com/shop/digital-pack-5",
    },
    {
      id: 6,
      title: "Digital Inspiration Pack 6",
      image: "/lovable-uploads/65f97ee7-cc8f-492b-abb4-365c0e7f7803.png",
      storeUrl: "https://etsy.com/shop/digital-pack-6",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Our Digital Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative aspect-square">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-lg font-semibold px-4 text-center">
                    Digital Product - Instant Download
                  </p>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
                <Button 
                  className="w-full"
                  onClick={() => window.open(product.storeUrl, '_blank')}
                >
                  Buy Now <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;