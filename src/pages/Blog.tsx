import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

interface BlogPost {
  id: number;
  title: string;
  content: string;
  summary: string;
  date: string;
  image: string;
}

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const blogs: BlogPost[] = [
    {
      id: 1,
      title: "Essential Cat Nutrition Guide",
      summary: "Learn about proper nutrition for your cat's health and well-being. Discover the importance of protein-rich diets and essential nutrients.",
      content: "Proper nutrition is crucial for your cat's health. Cats are obligate carnivores, meaning they require a diet rich in animal protein. Ensure your cat's food contains high-quality protein sources, essential fatty acids, and adequate water intake. Avoid feeding them human food, especially chocolate, onions, and garlic, which can be toxic to cats.\n\nA balanced diet should include:\n- High-quality protein from meat sources\n- Taurine, an essential amino acid\n- Fatty acids for skin and coat health\n- Fresh, clean water available at all times\n\nConsult with your veterinarian to create a diet plan that meets your cat's specific needs based on their age, weight, and health conditions.",
      date: "2024-03-15",
      image: "/lovable-uploads/11e97d7a-f7f7-4e5f-8b61-9c491a2d70fd.png"
    },
    {
      id: 2,
      title: "Common Cat Health Issues and Prevention",
      summary: "Stay informed about common health issues that can affect your cat and learn preventive measures to keep them healthy.",
      content: "Regular veterinary check-ups are essential for maintaining your cat's health. Watch out for common issues like dental disease, urinary tract infections, and hairballs. Maintain a clean litter box, provide regular grooming, and keep up with vaccinations to prevent health problems.\n\nKey preventive measures include:\n- Annual veterinary check-ups\n- Regular dental cleaning\n- Proper grooming routine\n- Up-to-date vaccinations\n- Clean litter box maintenance\n\nIf you notice any changes in behavior or appetite, consult your vet immediately as early detection is crucial for successful treatment.",
      date: "2024-03-14",
      image: "/lovable-uploads/65f97ee7-cc8f-492b-abb4-365c0e7f7803.png"
    },
    {
      id: 3,
      title: "Exercise and Mental Stimulation for Cats",
      summary: "Discover ways to keep your indoor cat active and mentally stimulated through various activities and toys.",
      content: "Indoor cats need regular exercise and mental stimulation to stay healthy. Provide climbing spaces, scratching posts, and interactive toys. Set aside time each day for play sessions using wand toys or laser pointers.\n\nEffective exercise strategies include:\n- Interactive play sessions\n- Climbing trees and perches\n- Puzzle feeders for mental stimulation\n- Window perches for environmental enrichment\n\nThis helps prevent obesity and behavioral issues while strengthening your bond with your cat. Remember to rotate toys regularly to maintain interest and prevent boredom.",
      date: "2024-03-13",
      image: "/lovable-uploads/8e315bdb-5f5e-45ad-96f7-0d077d1d2896.png"
    },
    {
      id: 4,
      title: "Stress-Free Vet Visits for Your Cat",
      summary: "Make veterinary visits less stressful for your cat with these helpful tips and preparation strategies.",
      content: "Many cats find vet visits stressful. Start carrier training early, using positive reinforcement. Place familiar bedding in the carrier and use calming pheromone sprays.\n\nPrepare for vet visits by:\n- Getting your cat comfortable with their carrier\n- Using calming pheromone sprays\n- Scheduling appointments during quiet times\n- Bringing familiar items from home\n\nChoose a cat-friendly veterinary practice and schedule appointments during quieter times. Regular check-ups help catch health issues early and maintain your cat's overall health.",
      date: "2024-03-12",
      image: "/lovable-uploads/a375b5ef-f261-4a36-938e-1ab580859329.png"
    },
  ];

  if (selectedPost) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <div className="container mx-auto px-4 py-8">
          <Button 
            variant="ghost" 
            onClick={() => setSelectedPost(null)}
            className="mb-4"
          >
            ← Back to Blogs
          </Button>
          <article className="max-w-3xl mx-auto">
            <img 
              src={selectedPost.image} 
              alt={selectedPost.title}
              className="w-full h-[400px] object-cover rounded-lg mb-6 animate-image-fade"
            />
            <h1 className="text-4xl font-bold text-cat-primary mb-4">{selectedPost.title}</h1>
            <p className="text-sm text-gray-500 mb-6">{selectedPost.date}</p>
            <div className="prose prose-lg max-w-none">
              {selectedPost.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-4 text-gray-700">
                  {paragraph}
                </p>
              ))}
            </div>
          </article>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Cat Health Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogs.map((blog) => (
            <Card key={blog.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <img 
                  src={blog.image} 
                  alt={blog.title}
                  className="w-full h-48 object-cover rounded-lg mb-4 animate-image-fade"
                />
                <CardTitle className="text-xl text-cat-primary">{blog.title}</CardTitle>
                <p className="text-sm text-gray-500">{blog.date}</p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">{blog.summary}</p>
              </CardContent>
              <CardFooter>
                <Button 
                  onClick={() => setSelectedPost(blog)}
                  className="mt-4 bg-cat-primary hover:bg-cat-primary/90"
                >
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;