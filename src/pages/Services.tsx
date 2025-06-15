
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Code, CheckCircle, Phone, Calendar } from "lucide-react";

const Services = () => {
  const customSystems = [
    {
      title: "POS Systems",
      description: "Modern point-of-sale solutions with inventory management, sales tracking, and reporting features.",
      features: ["Real-time inventory tracking", "Sales analytics", "Multi-location support", "Receipt printing", "Customer management"]
    },
    {
      title: "School Management Systems",
      description: "Comprehensive education management platform for academic institutions of all sizes.",
      features: ["Student information system", "Grade management", "Attendance tracking", "Parent portal", "Fee management"]
    },
    {
      title: "Hospital Management Systems",
      description: "Complete healthcare management solution for hospitals and medical facilities.",
      features: ["Patient records", "Appointment scheduling", "Billing system", "Pharmacy management", "Report generation"]
    }
  ];

  const hostingServices = [
    {
      title: "Web Hosting",
      description: "Reliable and fast web hosting with 99.9% uptime guarantee.",
      features: ["SSD storage", "Free SSL certificates", "Daily backups", "24/7 monitoring", "cPanel access"],
      pricing: "Starting from Tzs60,000/annually"
    },
    {
      title: "Email Hosting",
      description: "Professional email solutions for your business communications.",
      features: ["Custom domain emails", "Spam protection", "Mobile sync", "Webmail access", "Large attachments"],
      pricing: "Starting from Tzs45,000/annually"
    }
  ];

  const smsPlans = [
    {
      plan: "Starter",
      price: "Tzs20,000",
      messages: "1,000 SMS",
      features: ["API access", "Basic dashboard", "Delivery reports"]
    },
    {
      plan: "Business",
      price: "Tzs60,000",
      messages: "5,000 SMS",
      features: ["API access", "Advanced dashboard", "Delivery reports", "Sender ID customization"]
    },
    {
      plan: "Enterprise",
      price: "Tzs120,000",
      messages: "15,000 SMS",
      features: ["API access", "Premium dashboard", "Delivery reports", "Sender ID customization", "Priority support"]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand-primary to-brand-secondary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto animate-fade-in">
            Comprehensive technology solutions tailored to your business needs
          </p>
        </div>
      </section>

      {/* Customized Systems */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Code className="w-16 h-16 text-brand-primary mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Customized Systems
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tailored software solutions designed specifically for your business operations
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {customSystems.map((system, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-brand-primary">
                    {system.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {system.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {system.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-brand-accent mr-2" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button asChild className="w-full mt-6 bg-brand-primary hover:bg-brand-secondary">
                    <Link to="/inquiry">Request Quote</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Hosting Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <CheckCircle className="w-16 h-16 text-brand-secondary mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Hosting Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Reliable hosting services with exceptional performance and support
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {hostingServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl font-bold text-brand-secondary">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="text-gray-600 mt-2">
                        {service.description}
                      </CardDescription>
                    </div>
                    <Badge variant="secondary" className="bg-brand-accent text-white">
                      {service.pricing}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-brand-accent mr-2" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button asChild className="w-full bg-brand-secondary hover:bg-brand-primary">
                    <Link to="/inquiry">Get Started</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Bulk SMS */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Phone className="w-16 h-16 text-brand-accent mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Bulk SMS Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Reach your customers instantly with our reliable SMS platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {smsPlans.map((plan, index) => (
              <Card key={index} className={`relative hover:shadow-lg transition-shadow duration-300 ${index === 1 ? 'border-brand-accent border-2' : ''}`}>
                {index === 1 && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-brand-accent">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {plan.plan}
                  </CardTitle>
                  <div className="text-3xl font-bold text-brand-primary">
                    {plan.price}
                    <span className="text-lg font-normal text-gray-600">/month</span>
                  </div>
                  <CardDescription className="text-brand-accent font-medium">
                    {plan.messages}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-6">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-brand-accent mr-2" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button asChild className={`w-full ${index === 1 ? 'bg-brand-accent hover:bg-brand-primary' : 'bg-brand-primary hover:bg-brand-secondary'}`}>
                    <Link to="/inquiry">Choose Plan</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Need a custom plan? We offer flexible pricing for high-volume requirements.
            </p>
            <Button asChild variant="outline" size="lg" className="border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white">
              <Link to="/book-meeting">
                <Calendar className="mr-2 h-5 w-5" />
                Discuss Custom Plans
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Let's discuss which of our services best fits your business needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-brand-primary hover:bg-gray-100">
              <Link to="/inquiry">Contact Us Today</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-blue text-white hover:bg-white hover:text-brand-primary">
              <Link to="/book-meeting">Schedule a Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
