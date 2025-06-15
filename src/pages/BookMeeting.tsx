
import { Calendar, Clock, CheckCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const BookMeeting = () => {
  const meetingBenefits = [
    "Personalized consultation for your business needs",
    "Detailed discussion of available solutions",
    "Custom pricing and timeline estimates", 
    "Technical requirements assessment",
    "Implementation roadmap planning"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand-primary to-brand-secondary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <Calendar className="w-20 h-20 mx-auto mb-6 animate-fade-in" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Book a Meeting
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto animate-fade-in">
            Schedule a consultation with our experts to discuss your technology needs
          </p>
        </div>
      </section>

      {/* Meeting Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Meeting Details */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                What to Expect
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Our consultation sessions are designed to understand your unique business 
                requirements and explore how our technology solutions can help you achieve 
                your goals.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <Card>
                  <CardHeader className="text-center">
                    <Clock className="w-8 h-8 text-brand-primary mx-auto mb-2" />
                    <CardTitle className="text-lg">Duration</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-600">30-45 minutes</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="text-center">
                    <Calendar className="w-8 h-8 text-brand-primary mx-auto mb-2" />
                    <CardTitle className="text-lg">Format</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-600">Google Meeting or Phone</p>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Meeting Benefits:
                </h3>
                <div className="space-y-3">
                  {meetingBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-brand-accent mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Calendly Embed */}
            <div className="bg-white rounded-lg shadow-lg">
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                  Schedule Your Consultation
                </h3>
                
                {/* Calendly Embed Container */}
                <div className="bg-gray-50 rounded-lg p-8 text-center min-h-[400px] flex flex-col justify-center">
                  <Calendar className="w-16 h-16 text-brand-primary mx-auto mb-4" />
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Click on the link to book meeting
                  </h4>
                  <div className="bg-white rounded border-2 border-dashed border-brand-primary p-6">
                    <a href="https://calendly.com/umojasolutionstz" target="blank" className="text-brand-primary font-medium">
                      calendly.com/umojasolutionstz
                    </a>
                  </div>
                </div>
                
                <div className="mt-6 text-sm text-gray-500 text-center">
                  <p>Can't find a suitable time? Contact us directly at:</p>
                  <p className="font-medium text-brand-primary">info@umojasolutions.co.tz</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Preparation Tips */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              How to Prepare for Your Meeting
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              To make the most of our consultation, here's what you can prepare beforehand:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg text-brand-primary">Business Information</CardTitle>
                </CardHeader>
                <CardContent className="text-left">
                  <ul className="space-y-2 text-gray-700">
                    <li>• Company size and industry</li>
                    <li>• Current technology challenges</li>
                    <li>• Business goals and objectives</li>
                    <li>• Budget considerations</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg text-brand-primary">Technical Details</CardTitle>
                </CardHeader>
                <CardContent className="text-left">
                  <ul className="space-y-2 text-gray-700">
                    <li>• Current systems in use</li>
                    <li>• Integration requirements</li>
                    <li>• Preferred timeline</li>
                    <li>• Specific feature needs</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Alternative Contact */}
      <section className="bg-brand-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Prefer a Different Approach?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            We're flexible! Reach out to us through any channel that works best for you.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-brand-accent mb-2">📧</div>
              <p>Email Us</p>
              <a href="mailto:info@umojasolutions.co.tz"><p className="text-sm opacity-75">info@umojasolutions.co.tz</p></a>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-brand-accent mb-2">📞</div>
              <p>Call Us</p>
              <a href="tel=+255 673 728 267" className="text-sm opacity-75">+255 673 728 267</a>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-brand-accent mb-2">💬</div>
              <p>Send Inquiry</p>
              <p className="text-sm opacity-75">Contact form available</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookMeeting;
