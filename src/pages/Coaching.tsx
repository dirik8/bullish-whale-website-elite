
import Layout from "@/components/Layout";
import { GoldButton } from "@/components/ui/gold-button";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

const Coaching = () => {
  return (
    <Layout>
      <section className="pt-28 pb-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-6 text-center">
            Elite <span className="text-brand-gold">One-on-One Coaching</span>
          </h1>
          <p className="text-lg text-center max-w-3xl mx-auto mb-16">
            Personalized mentorship tailored to your portfolio and trading style.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <div className="bg-gray-900 p-8 rounded-lg border border-gray-800 hover:border-brand-gold transition-all duration-300">
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                alt="Personalized trading coaching session" 
                className="w-full h-60 object-cover rounded-md mb-6"
              />
              <h3 className="text-2xl font-playfair font-bold mb-4">
                Tailored to Your Portfolio & Risk Profile
              </h3>
              <p className="text-gray-300 mb-4">
                Our coaching isn't one-size-fits-all. We analyze your current holdings, trading history, 
                and risk tolerance to create a personalized strategy that aligns with your financial goals 
                and lifestyle requirements.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-brand-gold mr-2">•</span>
                  <span>Personalized portfolio review and strategy development</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-gold mr-2">•</span>
                  <span>Custom risk management plans</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-gold mr-2">•</span>
                  <span>Trading style alignment and optimization</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-900 p-8 rounded-lg border border-gray-800 hover:border-brand-gold transition-all duration-300">
              <img 
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7" 
                alt="Weekly trade reviews session" 
                className="w-full h-60 object-cover rounded-md mb-6"
              />
              <h3 className="text-2xl font-playfair font-bold mb-4">
                Weekly Trade Reviews via Screen-share
              </h3>
              <p className="text-gray-300 mb-4">
                Learn through direct feedback on your actual trades. Our coaches conduct in-depth reviews 
                of your entries, exits, and risk management decisions to refine your strategy and improve 
                future performance.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-brand-gold mr-2">•</span>
                  <span>Live screen-sharing sessions with expert coaches</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-gold mr-2">•</span>
                  <span>Technical chart analysis of your actual trades</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-gold mr-2">•</span>
                  <span>Pattern recognition and improvement strategies</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <div className="bg-gray-900 p-8 rounded-lg border border-gray-800 hover:border-brand-gold transition-all duration-300">
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c" 
                alt="Private coaching room session" 
                className="w-full h-60 object-cover rounded-md mb-6"
              />
              <h3 className="text-2xl font-playfair font-bold mb-4">
                Private Coaching Room & Voice Support
              </h3>
              <p className="text-gray-300 mb-4">
                Get instant feedback during market hours when it matters most. Our private coaching rooms 
                provide real-time guidance and support as you navigate volatile markets and high-stakes trading decisions.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-brand-gold mr-2">•</span>
                  <span>Dedicated private Discord channels</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-gold mr-2">•</span>
                  <span>Voice support during critical market hours</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-gold mr-2">•</span>
                  <span>Priority response for time-sensitive questions</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-900 p-8 rounded-lg border border-gray-800 hover:border-brand-gold transition-all duration-300">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                alt="Trading journal review session" 
                className="w-full h-60 object-cover rounded-md mb-6"
              />
              <h3 className="text-2xl font-playfair font-bold mb-4">
                Exclusive Journal Review and Feedback
              </h3>
              <p className="text-gray-300 mb-4">
                Master the art of effective journaling and learn from your own patterns. Our coaches review 
                your trading journal to identify blind spots, strengthen winning strategies, and eliminate 
                detrimental habits.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-brand-gold mr-2">•</span>
                  <span>Professional review of your trading journal</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-gold mr-2">•</span>
                  <span>Pattern recognition and behavioral analysis</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-gold mr-2">•</span>
                  <span>Custom journaling templates and frameworks</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-brand-gold/10 border border-brand-gold/30 rounded-lg p-8 mb-16">
            <h3 className="text-2xl font-playfair font-bold mb-4 text-center">
              Limited Coaching Slots Available
            </h3>
            <p className="text-center mb-6">
              To ensure the highest quality mentorship, each coach accepts a maximum of 5 elite members.
              This exclusivity guarantees you receive the dedicated attention needed to transform your trading.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {coaches.map((coach, index) => (
                <HoverCard key={index}>
                  <HoverCardTrigger>
                    <div className="bg-gray-900 p-4 rounded-lg text-center cursor-pointer">
                      <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden border-2 border-brand-gold">
                        <img 
                          src={coach.image} 
                          alt={coach.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h4 className="font-bold">{coach.name}</h4>
                      <p className="text-brand-gold text-sm">{coach.specialty}</p>
                      <p className="text-gray-400 text-xs mt-2">
                        {coach.availability} slots remaining
                      </p>
                    </div>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80 bg-black border border-gray-800">
                    <div className="flex flex-col space-y-2">
                      <h4 className="font-bold text-lg">{coach.name}</h4>
                      <p className="text-brand-gold">{coach.specialty}</p>
                      <p className="text-sm text-gray-300">{coach.bio}</p>
                      <div className="flex items-center space-x-2 mt-2">
                        <div className="flex">
                          {Array(5).fill(0).map((_, i) => (
                            <span key={i} className={`text-${i < coach.rating ? "brand-gold" : "gray-600"}`}>★</span>
                          ))}
                        </div>
                        <span className="text-xs text-gray-400">({coach.reviews} reviews)</span>
                      </div>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              ))}
            </div>
          </div>
          
          <div className="text-center">
            <GoldButton size="lg" href="/membership" isLink>
              Apply for Elite Coaching
            </GoldButton>
            <p className="text-gray-400 mt-4 max-w-lg mx-auto text-sm">
              All coaching applications are reviewed within 48 hours. 
              Successful applicants will be contacted for an initial consultation.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

// Coach data
const coaches = [
  {
    name: "Alexander Wright",
    specialty: "Day Trading Specialist",
    availability: 2,
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    bio: "Former institutional trader with 12+ years of experience. Specializes in high-frequency scalping strategies and risk management.",
    rating: 5,
    reviews: 87
  },
  {
    name: "Sophia Chen",
    specialty: "Crypto & DeFi Expert",
    availability: 1,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    bio: "Early Bitcoin adopter and blockchain consultant. Helps traders navigate the volatile crypto markets with advanced technical analysis.",
    rating: 5,
    reviews: 62
  },
  {
    name: "Marcus Johnson",
    specialty: "Swing Trading Coach",
    availability: 3,
    image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    bio: "Specializes in position trading and multi-day holds. Expert in market psychology and trend analysis for maximum profit extraction.",
    rating: 4,
    reviews: 51
  }
];

export default Coaching;
