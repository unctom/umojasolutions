
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Code, Calendar, Phone } from "lucide-react";

const Home = () => {
  const services = [
    {
      title: "Customized Systems",
      description: "POS, School & Hospital Management Systems tailored to your needs",
      icon: Code,
    },
    {
      title: "Hosting Solutions",
      description: "Reliable web and email hosting with 99.9% uptime guarantee",
      icon: CheckCircle,
    },
    {
      title: "Bulk SMS Services",
      description: "API integration and dashboard for seamless communication",
      icon: Phone,
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechCorp Ltd",
      text: "Umoja Solutions transformed our business operations with their custom POS system. Highly recommended!",
    },
    {
      name: "Michael Chen",
      company: "EduTech Academy",
      text: "Their school management system streamlined our administrative processes significantly.",
    },
    {
      name: "Dr. Amina Hassan",
      company: "Modern Healthcare",
      text: "The hospital management system has improved our patient care and operational efficiency.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-primary via-brand-secondary to-brand-accent text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Innovative Technology
            <span className="block text-brand-accent">Solutions</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90 animate-fade-in">
            Empowering businesses with cutting-edge systems, reliable hosting, and seamless communication solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button asChild size="lg" className="bg-white text-brand-primary hover:bg-gray-100">
              <Link to="/services">Explore Services</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-blue text-white hover:bg-white hover:text-brand-primary">
              <Link to="/book-meeting">
                <Calendar className="mr-2 h-5 w-5" />
                Book a Meeting
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive technology solutions designed to drive your business forward
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center">
                  <service.icon className="w-12 h-12 text-brand-primary mx-auto mb-4" />
                  <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-brand-primary hover:bg-brand-secondary">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Trusted by businesses across various industries
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-l-4 border-brand-accent">
                <CardContent className="pt-6">
                  <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how our solutions can help you achieve your goals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-brand-primary hover:bg-gray-100">
              <Link to="/inquiry">Get Started Today</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-blue text-white hover:bg-white hover:text-brand-primary">
              <Link to="/book-meeting">Schedule Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
