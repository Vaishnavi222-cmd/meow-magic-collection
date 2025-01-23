import { useState } from "react";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

type FormData = {
  email: string;
};

const Book = () => {
  const { toast } = useToast();
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  const form = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      // Save email to database
      const { error } = await supabase
        .from("ebook_downloads")
        .insert([{ email: data.email }]);

      if (error) throw error;

      // Get the download URL
      const url = "https://ndlcubreelausxwvukta.supabase.co/storage/v1/object/public/ebook/self_improvemnt.pdf";
      setDownloadUrl(url);

      toast({
        title: "Success!",
        description: "Your download link is ready below.",
      });
    } catch (error) {
      console.error("Error:", error);
      toast({
        title: "Error",
        description: "There was a problem processing your request.",
        variant: "destructive",
      });
    }
  };

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

            <div className="mt-8 p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">
                Download Your Free Copy
              </h3>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="Enter your email"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full">
                    Get Your Free Ebook
                  </Button>
                </form>
              </Form>

              {downloadUrl && (
                <div className="mt-4 p-4 bg-green-50 rounded-lg">
                  <p className="text-green-700 mb-2">
                    Your ebook is ready! Click below to download:
                  </p>
                  <a
                    href={downloadUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 underline"
                  >
                    Download Ebook
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;