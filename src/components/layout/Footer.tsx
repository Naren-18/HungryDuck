import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-primary-foreground">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-display text-2xl font-bold">
              Hungry<span className="text-terracotta-light">Duck</span>
            </h3>
            <p className="text-sand-dark/80 text-sm leading-relaxed">
              Creating world-class hospitality experiences from concept to completion.
              Your turnkey partner in hospitality success.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-display text-lg font-semibold">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              {['Home', 'About', 'Services', 'Why Us', 'Contact'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(' ', '-')}`}
                  className="text-sand-dark/80 text-sm hover:text-terracotta-light transition-colors"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-display text-lg font-semibold">Services</h4>
            <nav className="flex flex-col gap-2">
              {[
                'Turnkey Projects',
                'Hotels & Resorts',
                'Restaurants & Cafés',
                'Nightclubs & Lounges',
                'Operations & Maintenance',
              ].map((service) => (
                <a
                  key={service}
                  href="#services"
                  className="text-sand-dark/80 text-sm hover:text-terracotta-light transition-colors"
                >
                  {service}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-display text-lg font-semibold">Get in Touch</h4>
            <div className="space-y-3">
              <a
                href="tel:+919886343434"
                className="flex items-center gap-3 text-sand-dark/80 text-sm hover:text-terracotta-light transition-colors"
              >
                <Phone size={16} />
                <span>098863 43434</span>
              </a>
              <a
                href="mailto:info@hungryduck.in"
                className="flex items-center gap-3 text-sand-dark/80 text-sm hover:text-terracotta-light transition-colors"
              >
                <Mail size={16} />
                <span>info@hungryduck.in</span>
              </a>
              <div className="flex items-start gap-3 text-sand-dark/80 text-sm">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <span>Ground Floor, The District, Myscape Rd,<br />Financial District, Nanakramguda,<br />Hyderabad, Telangana 500032</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-sand-dark/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sand-dark/60 text-sm">
            © {currentYear} HungryDuck. All rights reserved.
          </p>
          <p className="text-sand-dark/60 text-sm font-display italic">
            "Creating Experiences. Building Hospitality Success."
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
