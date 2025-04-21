
import Layout from "@/components/Layout";
import { GoldButton } from "@/components/ui/gold-button";
import { useState } from "react";

const masterclasses = [
  {
    title: "Day Trading Techniques",
    desc: "Pro-level scalping setups & live execution breakdowns.",
    video: "https://www.youtube.com/embed/_Z1eL4C0p_U",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80",
    category: "Day Trading",
  },
  {
    title: "Swing Trading Setup Systems",
    desc: "Win big on high timeframe signals — from concept to cash-out.",
    video: "https://www.youtube.com/embed/VIGp7uEyO2Q",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&q=80",
    category: "Swing Trading",
  },
  {
    title: "Risk Management 101",
    desc: "Elite portfolio protection, position sizing, and mental stops.",
    video: "https://www.youtube.com/embed/49VwjQQ4PZY",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80",
    category: "Risk",
  },
  {
    title: "Crypto Macro Narratives",
    desc: "See around corners: narrative forecasting for real edge.",
    video: "https://www.youtube.com/embed/icrm8aO535U",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
    category: "Macro",
  },
  {
    title: "Trading Psychology & Discipline",
    desc: "Battle-tested mindset rituals and focus workflows.",
    video: "https://www.youtube.com/embed/yWT7XO-fDbk",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80",
    category: "Psychology",
  },
];

const categories = [
  "All", "Day Trading", "Swing Trading", "Risk", "Macro", "Psychology"
];

const Education = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [hovered, setHovered] = useState<number | null>(null);

  const filtered = masterclasses.filter(m => {
    const inCat = category === "All" || m.category === category;
    const hasText = m.title.toLowerCase().includes(search.toLowerCase()) || m.desc.toLowerCase().includes(search.toLowerCase());
    return inCat && hasText;
  });

  return (
    <Layout>
      <section className="pt-28 pb-10">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-center mb-6">
            Education <span className="text-brand-gold">Hub</span>
          </h1>
          <p className="text-lg text-center max-w-3xl mx-auto mb-10 text-gray-300">
            Master the markets like a whale with our modular, on-demand masterclasses. No-nonsense, high ROI, and trackable progress.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-4 py-2 rounded-full font-medium border transition-all ${
                  category === cat
                    ? "bg-brand-gold text-black border-brand-gold"
                    : "bg-gray-900 text-gray-300 border-gray-800 hover:border-brand-gold/70"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <input
            type="text"
            placeholder="Search masterclasses…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="mb-10 block w-full max-w-md mx-auto px-6 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-brand-gold text-white"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filtered.map((m, i) => (
              <div
                className="relative group bg-gray-900 rounded-lg overflow-hidden border border-gray-800 shadow-md hover:shadow-lg hover:border-brand-gold/40 transition-all duration-200"
                key={m.title}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                <div className="aspect-w-16 aspect-h-9 w-full relative bg-black">
                  {hovered === i ? (
                    <iframe
                      className="w-full h-full rounded-md"
                      src={m.video + "?autoplay=1&mute=1&controls=0"}
                      title={m.title}
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                    />
                  ) : (
                    <img
                      src={m.image}
                      alt={m.title}
                      className="w-full h-full object-cover transition-all duration-200 transform group-hover:scale-105"
                    />
                  )}
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold mb-2 text-brand-gold font-playfair">{m.title}</h3>
                  <p className="text-gray-300 mb-3">{m.desc}</p>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-block bg-gray-800 text-xs px-3 py-1 rounded-full border border-brand-gold text-brand-gold">{m.category}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <GoldButton size="lg">Access the Education Hub</GoldButton>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Education;
