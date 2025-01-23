import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getRandomCat } from "@/services/catApi";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";

const Index = () => {
  const [shouldFetch, setShouldFetch] = useState(false);

  const { data: catImage, refetch, isLoading } = useQuery({
    queryKey: ["randomCat"],
    queryFn: getRandomCat,
    enabled: shouldFetch,
  });

  const handleGetRandomCat = async () => {
    setShouldFetch(true);
    await refetch();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-cat-primary">
          Welcome to Cat Paradise! 🐱
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Discover adorable cats with just one click!
        </p>
        <div className="flex flex-col items-center">
          <Button
            onClick={handleGetRandomCat}
            className="bg-cat-primary hover:bg-cat-accent text-white mb-8"
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Get Random Cat Image"}
          </Button>
          {catImage && (
            <div className="w-full max-w-lg mx-auto rounded-lg overflow-hidden shadow-lg animate-image-fade">
              <img
                src={catImage.url}
                alt="Random cat"
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;