
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
          <div className="space-y-6">
            <h3 className="text-xl font-playfair font-bold">
              <span className="text-brand-gold">Bullish</span> Whales Club
            </h3>
            <p className="text-gray-300 max-w-xs">
              Elite Strategies. Exclusive Access. Ultimate Performance.
            </p>
            <div className="flex space-x-4">
              <SocialIcon href="#" ariaLabel="Follow us on Twitter">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.059 10.059 0 01-3.13 1.195 4.92 4.92 0 00-8.363 4.49c-4.075-.204-7.69-2.157-10.12-5.126a4.92 4.92 0 001.525 6.57 4.91 4.91 0 01-2.232-.617v.061a4.923 4.923 0 003.95 4.827 4.912 4.912 0 01-2.223.086 4.93 4.93 0 004.6 3.42 9.88 9.88 0 01-7.29 2.04 13.95 13.95 0 007.548 2.212c9.059 0 14.01-7.503 14.01-14.01 0-.211-.005-.422-.015-.632a9.94 9.94 0 002.45-2.548z" />
                </svg>
              </SocialIcon>
              <SocialIcon href="#" ariaLabel="Connect with us on LinkedIn">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.025-3.037-1.853-3.037-1.856 0-2.139 1.446-2.139 2.941v5.665h-3.554v-11.45h3.414v1.561h.047c.477-.902 1.637-1.853 3.37-1.853 3.605 0 4.268 2.372 4.268 5.456v6.286h.001zM5.337 7.433a2.063 2.063 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555v-11.45h3.564v11.45zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                </svg>
              </SocialIcon>
              <SocialIcon href="#" ariaLabel="Follow us on Instagram">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.07 1.645.07 4.85 0 3.204-.012 3.584-.07 4.85-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.645.07-4.85.07-3.204 0-3.584-.012-4.85-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.645-.07-4.849 0-3.204.012-3.584.07-4.85.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.85-.069zM12 0C8.741 0 8.332.014 7.052.072c-4.376.2-6.73 2.554-6.93 6.93C.014 8.332 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.375 2.555 6.73 6.93 6.93C8.332 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.73-2.555 6.93-6.93.058-1.28.072-1.689.072-4.948 0-3.259-.014-3.668-.072-4.948-.2-4.375-2.576-6.73-6.93-6.93C15.668.014 15.259 0 12 0z" />
                  <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8z" />
                  <circle cx="18.406" cy="5.594" r="1.44" />
                </svg>
              </SocialIcon>
              <SocialIcon href="#" ariaLabel="Join our Telegram channel">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.79.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
              </SocialIcon>
            </div>
          </div>

          <div>
            <h4 className="text-brand-gold font-playfair text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <FooterLink to="/">Home</FooterLink>
              <FooterLink to="/about">About Us</FooterLink>
              <FooterLink to="/membership">Membership</FooterLink>
              <FooterLink to="/programs">Programs</FooterLink>
              <FooterLink to="/education">Education Hub</FooterLink>
            </ul>
          </div>

          <div>
            <h4 className="text-brand-gold font-playfair text-lg font-bold mb-6">Resources</h4>
            <ul className="space-y-4">
              <FooterLink to="/coaching">Coaching</FooterLink>
              <FooterLink to="/testimonials">Testimonials</FooterLink>
              <FooterLink to="/team">Our Team</FooterLink>
              <FooterLink to="/faq">FAQ</FooterLink>
              <FooterLink to="/contact">Contact Us</FooterLink>
            </ul>
          </div>

          <div>
            <h4 className="text-brand-gold font-playfair text-lg font-bold mb-6">
              Join Our Newsletter
            </h4>
            <p className="text-gray-300 mb-4">Get trading insights and updates directly in your inbox.</p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded focus:outline-none focus:border-brand-gold transition-colors"
              />
              <button
                type="submit"
                className="w-full bg-brand-gold text-black font-bold py-2 rounded hover:bg-opacity-90 transition-all"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Bullish Whales Club. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-400 hover:text-brand-gold text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-brand-gold text-sm transition-colors">
              Terms of Service
            </Link>
            <Link to="/disclaimer" className="text-gray-400 hover:text-brand-gold text-sm transition-colors">
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ to, children }: { to: string; children: React.ReactNode }) => {
  return (
    <li>
      <Link to={to} className="text-gray-300 hover:text-brand-gold transition-colors">
        {children}
      </Link>
    </li>
  );
};

const SocialIcon = ({
  href,
  ariaLabel,
  children,
}: {
  href: string;
  ariaLabel: string;
  children: React.ReactNode;
}) => {
  return (
    <a
      href={href}
      aria-label={ariaLabel}
      className="bg-gray-800 text-white p-2 rounded-full hover:bg-brand-gold hover:text-black transition-colors"
    >
      {children}
    </a>
  );
};

export default Footer;
