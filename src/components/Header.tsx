
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black bg-opacity-95 py-2 shadow-lg" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold text-white font-playfair tracking-wider">
            <span className="text-brand-gold">Bullish</span> Whales Club
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/membership">Membership</NavLink>
          <NavLink to="/programs">Programs</NavLink>
          <NavLink to="/education">Education</NavLink>
          <NavLink to="/coaching">Coaching</NavLink>
          <Link
            to="/membership"
            className="bg-brand-gold text-black font-bold px-6 py-2 rounded hover:bg-opacity-90 transition-all hover:shadow-lg hover:scale-105"
          >
            Apply Now
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute w-full bg-black bg-opacity-95 transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? "max-h-screen py-4" : "max-h-0"
        }`}
      >
        <div className="container mx-auto px-4 flex flex-col space-y-4">
          <MobileNavLink to="/" onClick={() => setIsMobileMenuOpen(false)}>
            Home
          </MobileNavLink>
          <MobileNavLink to="/about" onClick={() => setIsMobileMenuOpen(false)}>
            About
          </MobileNavLink>
          <MobileNavLink to="/membership" onClick={() => setIsMobileMenuOpen(false)}>
            Membership
          </MobileNavLink>
          <MobileNavLink to="/programs" onClick={() => setIsMobileMenuOpen(false)}>
            Programs
          </MobileNavLink>
          <MobileNavLink to="/education" onClick={() => setIsMobileMenuOpen(false)}>
            Education
          </MobileNavLink>
          <MobileNavLink to="/coaching" onClick={() => setIsMobileMenuOpen(false)}>
            Coaching
          </MobileNavLink>
          <Link
            to="/membership"
            className="bg-brand-gold text-black font-bold px-6 py-2 rounded text-center hover:bg-opacity-90 transition-all"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Apply Now
          </Link>
        </div>
      </div>
    </header>
  );
};

const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => {
  return (
    <Link
      to={to}
      className="text-white hover:text-brand-gold transition-colors duration-300 font-medium relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[2px] after:bottom-[-4px] after:left-0 after:bg-brand-gold after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
    >
      {children}
    </Link>
  );
};

const MobileNavLink = ({
  to,
  onClick,
  children,
}: {
  to: string;
  onClick?: () => void;
  children: React.ReactNode;
}) => {
  return (
    <Link
      to={to}
      className="text-white hover:text-brand-gold py-2 transition-colors font-medium text-lg"
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default Header;
