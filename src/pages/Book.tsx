import Navigation from "@/components/Navigation";

const Book = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-center mb-8 text-cat-primary">
            Our Book
          </h1>
          <div className="prose mx-auto">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              "The Complete Guide to Cat Photography"
            </h2>
            <p className="text-gray-600 mb-4">
              Discover the art of capturing perfect cat moments in our comprehensive
              guide. Whether you're a professional photographer or just love taking
              pictures of your feline friends, this book is for you.
            </p>
            <div className="bg-cat-secondary bg-opacity-20 p-4 rounded-lg mb-4">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                What You'll Learn
              </h3>
              <ul className="list-disc list-inside text-gray-600">
                <li>Perfect timing for cat photography</li>
                <li>Best equipment for pet photography</li>
                <li>Lighting techniques for indoor shots</li>
                <li>Post-processing tips and tricks</li>
              </ul>
            </div>
            <p className="text-gray-600 italic">
              Coming soon to all major bookstores!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;