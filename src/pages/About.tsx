
import Layout from "@/components/Layout";
import { GoldButton } from "@/components/ui/gold-button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <Layout>
      <section className="pt-28 pb-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-center mb-8">
            About <span className="text-brand-gold">Bullish Whales Club</span>
          </h1>
          <div className="grid md:grid-cols-3 gap-10 items-center mb-14">
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=500&q=80"
              alt="Founder at Bullish Whales Club"
              className="rounded-2xl shadow-xl aspect-square object-cover mx-auto md:col-span-1"
            />
            <div className="md:col-span-2 flex flex-col justify-center">
              <h2 className="text-2xl font-bold mb-2 font-playfair text-brand-gold">Founder's Journey</h2>
              <p className="mb-2 text-gray-300">
                From certified CPA to crypto educator and wealth strategist, our founder spent over a decade navigating chaotic markets with discipline, building a 7-figure portfolio and mentoring 500+ traders worldwide.
              </p>
              <p className="mb-2 text-gray-400">
                Their vision: fiercely democratize hedge-fund-level strategies for all—so you can own your future with access, skill, and network.
              </p>
              <Link to="/membership" className="text-brand-gold underline hover:text-white transition">Apply for Membership</Link>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 items-center mb-14">
            <div>
              <h3 className="font-playfair text-xl text-brand-gold font-bold mb-2">Mission Statement</h3>
              <p className="mb-3 text-gray-300">
                Democratize elite-level trading strategies previously reserved for institutions—empowering financial sovereignty through skill, insight, and access.
              </p>
              <h3 className="font-playfair text-xl text-brand-gold font-bold mb-2">Core Values</h3>
              <ul className="space-y-2 text-gray-200">
                <li>• Transparency</li>
                <li>• Performance-driven decision making</li>
                <li>• Independence from traditional finance</li>
              </ul>
            </div>
            <div className="bg-gray-900 rounded-xl p-6 text-center flex flex-col items-center justify-center gap-4">
              <div className="flex justify-center gap-10">
                <div>
                  <div className="text-3xl text-brand-gold font-bold">1,200+</div>
                  <div className="text-gray-400 text-xs">Members</div>
                </div>
                <div>
                  <div className="text-3xl text-brand-gold font-bold">16%</div>
                  <div className="text-gray-400 text-xs">Avg. Monthly ROI</div>
                </div>
              </div>
              <div className="flex justify-center gap-10">
                <div>
                  <div className="text-3xl text-brand-gold font-bold">$140M+</div>
                  <div className="text-gray-400 text-xs">Portfolio Guided</div>
                </div>
                <div>
                  <div className="text-3xl text-brand-gold font-bold">98%</div>
                  <div className="text-gray-400 text-xs">Member Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <GoldButton isLink href="/team" size="lg">Meet the Experts Guiding You</GoldButton>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
