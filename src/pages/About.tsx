
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Users, Target, Eye } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: CheckCircle,
      title: "Innovation",
      description: "We stay ahead of technology trends to deliver cutting-edge solutions."
    },
    {
      icon: Users,
      title: "Client-Centric",
      description: "Our clients' success is our primary focus in everything we do."
    },
    {
      icon: Target,
      title: "Quality",
      description: "We maintain the highest standards in all our deliverables."
    },
    {
      icon: Eye,
      title: "Transparency",
      description: "We believe in honest communication and clear processes."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand-primary to-brand-secondary text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              About Umoja Solutions
            </h1>
            <p className="text-xl md:text-2xl opacity-90 animate-fade-in">
              Empowering businesses through innovative technology solutions since our inception
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Founded with a vision to bridge the technology gap for businesses of all sizes, 
                Umoja Solutions has been at the forefront of delivering customized technology 
                solutions that drive growth and efficiency.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                From our humble beginnings to becoming a trusted technology partner, we've 
                consistently focused on understanding our clients' unique needs and delivering 
                solutions that exceed expectations.
              </p>
              <p className="text-lg text-gray-700">
                Today, we pride ourselves on being a one-stop solution for businesses looking 
                to leverage technology for competitive advantage.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop" 
                alt="Team collaboration" 
                className="rounded-lg shadow-lg w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="border-l-4 border-brand-primary">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-brand-primary flex items-center">
                  <Target className="mr-3 h-8 w-8" />
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-lg">
                  To empower businesses with innovative, reliable, and scalable technology 
                  solutions that drive efficiency, growth, and success in an increasingly 
                  digital world.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-brand-secondary">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-brand-secondary flex items-center">
                  <Eye className="mr-3 h-8 w-8" />
                  Our Vision
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-lg">
                  To be the leading technology solutions provider in Africa, known for 
                  excellence, innovation, and transformative impact on businesses across 
                  all industries.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <value.icon className="w-12 h-12 text-brand-accent mx-auto mb-4" />
                  <CardTitle className="text-xl font-bold">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-brand-primary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Umoja Solutions?
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              We bring expertise, dedication, and results to every project
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-brand-accent mb-2">5+</div>
              <p className="text-lg">Years of Experience</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-brand-accent mb-2">100+</div>
              <p className="text-lg">Satisfied Clients</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-brand-accent mb-2">24/7</div>
              <p className="text-lg">Support Available</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
