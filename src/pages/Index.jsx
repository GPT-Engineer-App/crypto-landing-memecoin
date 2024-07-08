import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";

const Index = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gray-100">
        <h1 className="text-5xl font-bold mb-4">Welcome to News Crypto Coin</h1>
        <p className="text-xl mb-8">The future of cryptocurrency news and updates.</p>
        <Button variant="primary" size="lg">Join Now</Button>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">About Us</h2>
          <p className="text-lg mb-8">
            News Crypto Coin is dedicated to providing the latest news and updates in the world of cryptocurrency. Our mission is to keep you informed and ahead of the curve.
          </p>
          <img src="/placeholder.svg" alt="About Us" className="mx-auto object-cover w-full h-[400px]" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Feature 1</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Stay updated with the latest news in the crypto world.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Feature 2</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Get insights and analysis from industry experts.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Feature 3</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Join a community of like-minded crypto enthusiasts.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Roadmap</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold">Q1 2023</h3>
              <p>Launch of the News Crypto Coin platform.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold">Q2 2023</h3>
              <p>Introduction of premium features and subscriptions.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold">Q3 2023</h3>
              <p>Expansion of our news coverage and expert analysis.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <img src="/placeholder.svg" alt="Team Member" className="mx-auto object-cover w-full h-[400px]" />
              <h3 className="text-2xl font-bold mt-4">John Doe</h3>
              <p>CEO</p>
              <p>John is the visionary behind News Crypto Coin.</p>
            </div>
            <div>
              <img src="/placeholder.svg" alt="Team Member" className="mx-auto object-cover w-full h-[400px]" />
              <h3 className="text-2xl font-bold mt-4">Jane Smith</h3>
              <p>CTO</p>
              <p>Jane leads our technology and development team.</p>
            </div>
            <div>
              <img src="/placeholder.svg" alt="Team Member" className="mx-auto object-cover w-full h-[400px]" />
              <h3 className="text-2xl font-bold mt-4">Mike Johnson</h3>
              <p>COO</p>
              <p>Mike oversees our operations and ensures everything runs smoothly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Contact Us</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-lg mx-auto">
            <Input placeholder="Name" {...register("name")} />
            <Input type="email" placeholder="Email" {...register("email")} />
            <Input placeholder="Subject" {...register("subject")} />
            <Textarea placeholder="Message" {...register("message")} />
            <Button type="submit" variant="primary">Submit</Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-800 text-white text-center">
        <div className="container mx-auto">
          <p>&copy; 2023 News Crypto Coin. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="#" className="hover:text-gray-400">Twitter</a>
            <a href="#" className="hover:text-gray-400">Facebook</a>
            <a href="#" className="hover:text-gray-400">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;