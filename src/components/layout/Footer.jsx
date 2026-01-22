import { Link } from 'react-router-dom';
import { schoolInfo } from '../../data/content';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-tamil-maroon to-gray-900 text-white" role="contentinfo">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-4">
              {schoolInfo.name}
            </h3>
            <p className="text-gray-300 leading-relaxed">
              {schoolInfo.tagline}
            </p>
            <div className="pt-2">
              <p className="text-sm text-gray-400">
                {schoolInfo.nonprofit.status}
              </p>
              <p className="text-sm text-gray-400">
                EIN: {schoolInfo.nonprofit.ein}
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-tamil-orange transition-colors duration-200"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/classes"
                  className="text-gray-300 hover:text-tamil-orange transition-colors duration-200"
                >
                  Classes
                </Link>
              </li>
              <li>
                <Link
                  to="/events"
                  className="text-gray-300 hover:text-tamil-orange transition-colors duration-200"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="text-gray-300 hover:text-tamil-orange transition-colors duration-200"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-tamil-orange transition-colors duration-200"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-4">Contact</h3>
            <div className="space-y-3 text-gray-300">
              <p>
                <span className="block text-sm text-gray-400">Email:</span>
                <a
                  href={`mailto:${schoolInfo.email}`}
                  className="hover:text-tamil-orange transition-colors duration-200 break-words inline-block max-w-full"
                >
                  {schoolInfo.email}
                </a>
              </p>

              <p>
                <span className="block text-sm text-gray-400">Location:</span>
                <span className="block">{schoolInfo.address.venue}</span>
                <span className="block">
                  {schoolInfo.address.city}, {schoolInfo.address.state}{' '}
                  {schoolInfo.address.zip}
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} {schoolInfo.name}. All rights reserved. <br />
            Supported by Foster City Counsel
          </p>
        </div>
      </div>
    </footer>
  );
}
