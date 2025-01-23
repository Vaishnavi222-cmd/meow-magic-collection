import { useQuery } from "@tanstack/react-query";
import { getMultipleRandomCats } from "@/services/catApi";
import Navigation from "@/components/Navigation";

const Gallery = () => {
  const { data: cats, isLoading } = useQuery({
    queryKey: ["catGallery"],
    queryFn: () => getMultipleRandomCats(6),
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-cat-primary">
          Cat Gallery
        </h1>
        {isLoading ? (
          <div className="text-center">Loading cats...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cats?.map((cat) => (
              <div
                key={cat.id}
                className="rounded-lg overflow-hidden shadow-lg animate-image-fade"
              >
                <img
                  src={cat.url}
                  alt="Cat"
                  className="w-full h-64 object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;