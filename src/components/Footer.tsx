import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-display text-xl font-semibold mb-3">The Flour Jar</h3>
            <p className="font-body text-sm leading-relaxed opacity-80">
              A neighbourhood café & bakery in the heart of Primrose Hill. Sourdough, seasonal food, and really good coffee.
            </p>
          </div>
          <div>
            <h4 className="font-display text-lg font-medium mb-3">Quick Links</h4>
            <nav className="flex flex-col gap-2 font-body text-sm opacity-80">
              <Link to="/" className="hover:opacity-100 transition-opacity">Home</Link>
              <Link to="/menu" className="hover:opacity-100 transition-opacity">Menu</Link>
              <Link to="/about" className="hover:opacity-100 transition-opacity">About</Link>
              <Link to="/contact" className="hover:opacity-100 transition-opacity">Find Us</Link>
            </nav>
          </div>
          <div>
            <h4 className="font-display text-lg font-medium mb-3">Visit Us</h4>
            <address className="font-body text-sm not-italic leading-relaxed opacity-80">
              42 Regent's Park Road<br />
              Primrose Hill, London NW1 8XD<br />
              <a href="tel:+442071234567" className="hover:opacity-100 transition-opacity">020 7123 4567</a><br />
              <a href="mailto:hello@theflourjar.co.uk" className="hover:opacity-100 transition-opacity">hello@theflourjar.co.uk</a>
            </address>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-primary-foreground/20 text-center font-body text-xs opacity-60">
          © {new Date().getFullYear()} The Flour Jar. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
