
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { GoldButton } from "@/components/ui/gold-button";

const Index = () => {
  return (
    <Layout>
      {/* Parallax Hero */}
      <section className="relative flex flex-col justify-center items-center min-h-screen bg-black overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-gradient-to-b from-gray-900 via-black to-black"
        />
        {/* Parallax Layers */}
        <img
          src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80"
          alt="Ocean waves"
          className="absolute top-0 left-0 w-full h-1/2 object-cover opacity-40 animate-fade-in"
        />
        <img
          src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80"
          alt="Foggy summit"
          className="absolute bottom-0 right-0 w-full h-2/3 object-cover opacity-30"
        />
        {/* Hero Content */}
        <div className="container mx-auto px-4 z-10 text-center">
          <div className="animate-fade-in max-w-4xl mx-auto flex flex-col items-center">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-playfair font-bold mb-8 leading-tight text-gradient-primary">
              Join the Inner Circle of <span className="text-brand-gold drop-shadow-lg">Elite Traders</span>
            </h1>
            <p className="text-2xl md:text-3xl text-gray-100 mb-10 max-w-2xl mx-auto font-light">
              Unlock the Secrets to Financial Freedom.
            </p>
            <GoldButton size="lg" isLink href="/membership" className="text-lg px-12 py-5 animate-glow mb-4">
              Apply for Membership
            </GoldButton>
            <span className="uppercase tracking-wide text-brand-gold font-bold text-xs">Only 50 Spots Per Quarter</span>
          </div>
        </div>
        {/* Decorative gold gradients */}
        <div className="absolute top-10 left-0 w-full h-2 bg-gradient-to-r from-transparent via-brand-gold to-transparent opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-brand-gold to-transparent opacity-40"></div>
        {/* Scroll-down Indicator */}
        <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce z-20">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center animate-fade-in mb-16">
            <h2 className="text-3xl md:text-5xl font-playfair font-bold mb-6">
              The <span className="text-brand-gold">Exclusive</span> Trading Community
            </h2>
            <p className="text-gray-300 text-lg mb-2">
              Bullish Whales Club brings together elite traders, sophisticated strategies, and proven mentorship for world-class results.
            </p>
            <p className="text-gray-400">
              Access institutional-grade research, live signals, and powerful connections — reserved for ambitious, results-driven investors.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="flex flex-col items-center p-6 bg-black border border-gray-800 rounded-lg animate-scale-in">
              <img src="https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&w=80&q=80" alt="Profits" className="rounded-full w-20 h-20 mb-4 object-cover border-4 border-brand-gold" />
              <div className="text-3xl font-bold text-brand-gold mb-2">1000+</div>
              <div className="text-gray-200">Elite Members</div>
            </div>
            <div className="flex flex-col items-center p-6 bg-black border border-gray-800 rounded-lg animate-scale-in">
              <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=80&q=80" alt="Profits" className="rounded-full w-20 h-20 mb-4 object-cover border-4 border-brand-gold" />
              <div className="text-3xl font-bold text-brand-gold mb-2">$100M+</div>
              <div className="text-gray-200">Member Profits</div>
            </div>
            <div className="flex flex-col items-center p-6 bg-black border border-gray-800 rounded-lg animate-scale-in">
              <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=80&q=80" alt="Profits" className="rounded-full w-20 h-20 mb-4 object-cover border-4 border-brand-gold" />
              <div className="text-3xl font-bold text-brand-gold mb-2">16%</div>
              <div className="text-gray-200">Avg. Monthly ROI</div>
            </div>
          </div>
        </div>
      </section>

      {/* Luxury Video/Testimonial Introduction */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 md:items-center max-w-5xl mx-auto">
            <div className="flex-1 animate-scale-in">
              <h3 className="text-2xl font-playfair text-brand-gold mb-2 font-bold">See Real Results</h3>
              <p className="text-gray-200 mb-4 text-lg">Our members consistently outperform the market, leveraging world-class tools and group accountability. Watch testimonials and discover the BWC edge.</p>
              <GoldButton isLink href="/testimonials" className="mb-2">Watch Testimonials</GoldButton>
              <br />
              <Link to="/about" className="text-brand-gold underline hover:text-white text-sm">Meet The Founder</Link>
            </div>
            <div className="flex-1 flex items-center justify-center">
              <div className="w-full aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-xl border-4 border-brand-gold">
                <iframe
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="BWC Results"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits / Features */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center animate-fade-in mb-14">
            <h2 className="text-3xl md:text-5xl font-playfair font-bold mb-4">
              Amazing <span className="text-brand-gold">Benefits</span> With Us
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Unlock mentorship, live signals, and a luxury network that accelerates your performance and financial mastery.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <BenefitCard icon="💡" title="Institutional-Grade Analysis" desc="Get market insights typically reserved for hedge funds." />
            <BenefitCard icon="🤝" title="1-on-1 Mentorship" desc="Daily access to world-class traders and financial trainers." />
            <BenefitCard icon="⚡" title="Real-Time Trade Alerts" desc="Get notified for high-conviction trades the minute they trigger." />
            <BenefitCard icon="🌐" title="Private Community" desc="Tap into collective intelligence — Discord & live calls." />
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-playfair font-bold mb-6">
              Our <span className="text-brand-gold">Services</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Hands-on coaching, portfolio management, technical analysis, and risk strategy education—all under one roof.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <ServiceCard title="Elite Coaching" desc="Tailored 1:1 mentorship for your style, schedule, & goals." link="/coaching" />
            <ServiceCard title="Portfolio Management" desc="Advanced allocation, risk controls & psychology support." link="/programs" />
            <ServiceCard title="Technical Analysis" desc="Master charting, algorithms, and price action for edge." link="/education" />
            <ServiceCard title="Risk Strategy" desc="Create bulletproof risk-management for consistent profit." link="/programs" />
          </div>
        </div>
      </section>

      {/* Sticky CTA */}
      <section className="py-16 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-playfair font-bold mb-8">
              Ready to <span className="text-brand-gold">Transform</span> Your Trading?
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Join an exclusive community of elite traders and gain unmatched access to strategies, signals, and proven mentorship.
            </p>
            <GoldButton size="lg" isLink href="/membership" className="text-lg px-10 py-4 animate-glow">
              Apply for Membership
            </GoldButton>
          </div>
        </div>
      </section>
    </Layout>
  );
};

const BenefitCard = ({ icon, title, desc }: { icon: string; title: string; desc: string }) => (
  <div className="bg-gray-900 rounded-xl border border-brand-gold/30 text-center p-8 flex flex-col items-center hover:shadow-2xl transition-all animate-scale-in">
    <div className="text-4xl mb-5">{icon}</div>
    <h3 className="text-xl font-bold mb-3 text-brand-gold font-playfair">{title}</h3>
    <p className="text-gray-400">{desc}</p>
  </div>
);

const ServiceCard = ({ title, desc, link }: { title: string; desc: string; link: string }) => (
  <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden animate-fade-in hover:border-brand-gold transition-all">
    <div className="p-8">
      <h3 className="text-2xl font-bold mb-4 font-playfair">
        <span className="text-brand-gold">{title}</span>
      </h3>
      <p className="text-gray-300 mb-6">{desc}</p>
      <Link to={link} className="text-brand-gold hover:text-white transition-colors inline-flex items-center font-semibold">
        Learn More
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </Link>
    </div>
  </div>
);

export default Index;
