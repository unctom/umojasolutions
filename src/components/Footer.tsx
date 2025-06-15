
import { Link } from "react-router-dom";
import { Phone, Calendar, Menu as Contact } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-brand-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">U</span>
              </div>
              <span className="text-xl font-bold">Umoja Solutions</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Empowering businesses with innovative technology solutions. From custom systems to hosting services, we help you achieve digital excellence.
            </p>
            <div className="flex space-x-4">
              <Phone className="w-5 h-5 text-brand-accent" />
              <a href="tel:+255 673 728 267"><span className="text-gray-300">+255 673 728 267</span></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-brand-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-brand-accent transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/book-meeting" className="text-gray-300 hover:text-brand-accent transition-colors">
                  Book a Meeting
                </Link>
              </li>
              <li>
                <Link to="/inquiry" className="text-gray-300 hover:text-brand-accent transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>POS Systems</li>
              <li>School Management</li>
              <li>Hospital Management</li>
              <li>Web Hosting</li>
              <li>Email Hosting</li>
              <li>Bulk SMS</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 Umoja Solutions. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/inquiry" className="text-gray-400 hover:text-brand-accent transition-colors">
              Privacy Policy
            </Link>
            <Link to="/inquiry" className="text-gray-400 hover:text-brand-accent transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
