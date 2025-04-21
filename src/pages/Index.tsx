
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { GoldButton } from "@/components/ui/gold-button";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-black">
        {/* Background with subtle gradient and noise texture */}
        <div 
          className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black z-0 opacity-80"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 250 250' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundBlendMode: "overlay",
            backgroundSize: "150px",
          }}
        ></div>
        
        {/* Gold accent decorative elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-gold to-transparent opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-gold to-transparent opacity-50"></div>
        <div className="absolute bottom-40 left-10 w-24 h-24 rounded-full bg-brand-gold blur-[80px] opacity-20"></div>
        <div className="absolute top-40 right-10 w-32 h-32 rounded-full bg-brand-gold blur-[100px] opacity-15"></div>
        
        <div className="container mx-auto px-4 z-10 text-center">
          <div className="animate-fade-in max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold mb-6 leading-tight">
              Join the Inner Circle of <span className="text-brand-gold">Elite Traders</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Unlock the Secrets to Financial Freedom.
            </p>
            <GoldButton size="lg" isLink href="/membership" className="text-lg px-10 py-4">
              Apply for Membership
            </GoldButton>
          </div>
        </div>
        
        {/* Scroll down indicator */}
        <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-10 w-10 text-brand-gold opacity-80" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
            />
          </svg>
        </div>
      </section>

      {/* Brand Intro Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
                The <span className="text-brand-gold">Exclusive</span> Trading Community
              </h2>
              <p className="text-gray-300 mb-6 text-lg">
                Bullish Whales Club brings together elite traders, sophisticated strategies, and proven mentorship to help you dominate the markets.
              </p>
              <p className="text-gray-300 mb-8">
                Our members gain access to institutional-grade research, real-time signals, and personalized coaching typically reserved for hedge funds and financial institutions.
              </p>
              <GoldButton isLink href="/about" variant="outline">
                Discover Our Story
              </GoldButton>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl border border-gray-800 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="aspect-w-16 aspect-h-9 bg-gray-800 flex items-center justify-center">
                <div className="text-center p-10">
                  <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-brand-gold flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div className="text-white text-4xl font-bold mb-2">
                    1000+
                  </div>
                  <div className="text-gray-400">
                    Elite Members
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 divide-x divide-gray-800 border-t border-gray-800">
                <div className="text-center p-6">
                  <div className="text-brand-gold text-3xl font-bold mb-2">
                    $100M+
                  </div>
                  <div className="text-gray-400 text-sm">
                    Member Profits
                  </div>
                </div>
                <div className="text-center p-6">
                  <div className="text-brand-gold text-3xl font-bold mb-2">
                    16%
                  </div>
                  <div className="text-gray-400 text-sm">
                    Avg. Monthly ROI
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-playfair font-bold mb-6">
              Amazing <span className="text-brand-gold">Benefits</span> With Us
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Exclusive benefits that elevate your trading performance and financial knowledge.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <BenefitCard 
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              } 
              title="Institutional-Grade Analysis" 
              description="Access professional-level market analysis typically reserved for hedge funds and investment banks."
              delay="0"
            />
            <BenefitCard 
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              } 
              title="Mentorship & Strategy" 
              description="One-on-one coaching from seasoned traders who have navigated bull and bear markets successfully."
              delay="0.1"
            />
            <BenefitCard 
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              } 
              title="Exclusive Community" 
              description="Network with like-minded traders and investors who are serious about wealth building."
              delay="0.2"
            />
            <BenefitCard 
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              } 
              title="Real-Time Alerts" 
              description="Receive timely trade signals and market-moving news before the mainstream."
              delay="0.3"
            />
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-playfair font-bold mb-6">
              Our <span className="text-brand-gold">Services</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Comprehensive trading solutions designed for serious market participants.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ServiceCard 
              title="Elite Coaching" 
              description="One-on-one mentorship tailored to your trading style and goals. Develop strategies that match your risk tolerance and time commitment."
              link="/coaching"
              delay="0"
            />
            <ServiceCard 
              title="Portfolio Management" 
              description="Learn advanced portfolio theory, asset allocation, and risk management techniques used by professional fund managers."
              link="/programs"
              delay="0.1"
            />
            <ServiceCard 
              title="Technical Analysis" 
              description="Master chart patterns, indicators, and trading algorithms that give you an edge in any market condition."
              link="/education"
              delay="0.2"
            />
            <ServiceCard 
              title="Risk Strategy" 
              description="Develop robust risk management systems to protect capital while maximizing returns through market volatility."
              link="/programs"
              delay="0.3"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black relative">
        {/* Gold accent element */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-gold to-transparent opacity-50"></div>
        
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-playfair font-bold mb-8">
              Ready to <span className="text-brand-gold">Transform</span> Your Trading?
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Join an exclusive community of elite traders and gain access to institutional-grade strategies.
            </p>
            <GoldButton size="lg" isLink href="/membership" className="text-lg px-10 py-4">
              Apply for Membership
            </GoldButton>
          </div>
        </div>
      </section>
    </Layout>
  );
};

const BenefitCard = ({ 
  icon, 
  title, 
  description,
  delay 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
  delay: string;
}) => {
  return (
    <div 
      className="bg-gray-900 p-8 rounded-lg border border-gray-800 transition-all duration-300 hover:border-brand-gold/50 animate-fade-in" 
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="text-brand-gold mb-6">{icon}</div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

const ServiceCard = ({ 
  title, 
  description, 
  link,
  delay
}: { 
  title: string; 
  description: string; 
  link: string;
  delay: string;
}) => {
  return (
    <div 
      className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden animate-fade-in" 
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="p-8">
        <h3 className="text-2xl font-bold mb-4 font-playfair">
          <span className="text-brand-gold">{title}</span>
        </h3>
        <p className="text-gray-300 mb-6">{description}</p>
        <Link 
          to={link} 
          className="text-brand-gold hover:text-white transition-colors inline-flex items-center"
        >
          Learn More
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default Index;
