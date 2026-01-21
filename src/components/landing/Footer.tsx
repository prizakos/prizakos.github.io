import { Instagram, Facebook, Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-wood text-cream py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl text-gold mb-4">Grand Bend Oasis</h3>
            <p className="font-sans text-cream/70 text-sm leading-relaxed">
              A luxury Lake Huron retreat where elegance meets serenity.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg text-cream mb-4">Quick Links</h4>
            <nav className="space-y-2">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="block font-sans text-sm text-cream/70 hover:text-gold transition-colors"
              >
                Home
              </a>
              <a
                href="#booking"
                className="block font-sans text-sm text-cream/70 hover:text-gold transition-colors"
              >
                Book Now
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg text-cream mb-4">Contact</h4>
            <div className="space-y-3">
              <a
                href="mailto:grandbend.shoreline@gmail.com"
                className="flex items-center gap-3 font-sans text-sm text-cream/70 hover:text-gold transition-colors"
              >
                <Mail className="h-4 w-4" />
                grandbend.shoreline@gmail.com
              </a>
              <a
                href="tel:+14163710625"
                className="flex items-center gap-3 font-sans text-sm text-cream/70 hover:text-gold transition-colors"
              >
                <Phone className="h-4 w-4" />
                (416) 371-0625
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-gold/20 transition-colors"
              >
                <Instagram className="h-5 w-5 text-cream" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-gold/20 transition-colors"
              >
                <Facebook className="h-5 w-5 text-cream" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-cream/10 text-center">
          <p className="font-sans text-xs text-cream/50">
            © 2026 Grand Bend Oasis. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
