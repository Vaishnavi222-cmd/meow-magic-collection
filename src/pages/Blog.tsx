import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Blog = () => {
  const blogs = [
    {
      id: 1,
      title: "Essential Cat Nutrition Guide",
      content: "Proper nutrition is crucial for your cat's health. Cats are obligate carnivores, meaning they require a diet rich in animal protein. Ensure your cat's food contains high-quality protein sources, essential fatty acids, and adequate water intake. Avoid feeding them human food, especially chocolate, onions, and garlic, which can be toxic to cats.",
      date: "2024-03-15",
    },
    {
      id: 2,
      title: "Common Cat Health Issues and Prevention",
      content: "Regular veterinary check-ups are essential for maintaining your cat's health. Watch out for common issues like dental disease, urinary tract infections, and hairballs. Maintain a clean litter box, provide regular grooming, and keep up with vaccinations to prevent health problems. If you notice any changes in behavior or appetite, consult your vet.",
      date: "2024-03-14",
    },
    {
      id: 3,
      title: "Exercise and Mental Stimulation for Cats",
      content: "Indoor cats need regular exercise and mental stimulation to stay healthy. Provide climbing spaces, scratching posts, and interactive toys. Set aside time each day for play sessions using wand toys or laser pointers. This helps prevent obesity and behavioral issues while strengthening your bond with your cat.",
      date: "2024-03-13",
    },
    {
      id: 4,
      title: "Stress-Free Vet Visits for Your Cat",
      content: "Many cats find vet visits stressful. Start carrier training early, using positive reinforcement. Place familiar bedding in the carrier and use calming pheromone sprays. Choose a cat-friendly veterinary practice and schedule appointments during quieter times. Regular check-ups help catch health issues early.",
      date: "2024-03-12",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Cat Health Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogs.map((blog) => (
            <Card key={blog.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-cat-primary">{blog.title}</CardTitle>
                <p className="text-sm text-gray-500">{blog.date}</p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">{blog.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;