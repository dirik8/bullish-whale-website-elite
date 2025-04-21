
import Layout from "@/components/Layout";
import { GoldButton } from "@/components/ui/gold-button";

const tiers = [
  {
    name: "Silver Whale",
    price: "$2,500/yr",
    features: [
      "Premium Signals (Crypto, Forex)",
      "Weekly Market Reports",
      "Private Discord Group Access"
    ],
    highlight: false,
  },
  {
    name: "Gold Whale",
    price: "$8,200/yr",
    features: [
      "Everything in Silver",
      "Bi-weekly Group Coaching",
      "Member-only Webinars",
      "Access to Archives (Reviews, Q&As)"
    ],
    highlight: true,
  },
  {
    name: "Platinum Elite",
    price: "$22,000/yr",
    features: [
      "Everything in Gold",
      "Monthly 1-on-1 Mentoring",
      "Access to Retreats & Masterminds",
      "Priority Support & Founder Chat"
    ],
    highlight: false,
  }
];

const featureMatrix = [
  {
    feature: "Premium Signals (Crypto, Forex)",
    silver: true,
    gold: true,
    platinum: true,
  },
  {
    feature: "Weekly Market Reports",
    silver: true,
    gold: true,
    platinum: true,
  },
  {
    feature: "Private Discord Group",
    silver: true,
    gold: true,
    platinum: true,
  },
  {
    feature: "Bi-weekly Group Coaching",
    silver: false,
    gold: true,
    platinum: true,
  },
  {
    feature: "Webinars + Strategy Rooms",
    silver: false,
    gold: true,
    platinum: true,
  },
  {
    feature: "Access to Archives",
    silver: false,
    gold: true,
    platinum: true,
  },
  {
    feature: "1-on-1 Mentoring Call",
    silver: false,
    gold: false,
    platinum: true,
  },
  {
    feature: "Global Retreats & Masterminds",
    silver: false,
    gold: false,
    platinum: true,
  },
  {
    feature: "Founder Chat / Priority Support",
    silver: false,
    gold: false,
    platinum: true,
  },
];

const Programs = () => {
  return (
    <Layout>
      <section className="pt-28 pb-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-5 text-center">
            Membership <span className="text-brand-gold">Tiers</span> That Match Your Ambition
          </h1>
          <p className="text-lg text-center max-w-4xl mx-auto mb-14 text-gray-300">
            Choose your luxury journey: Each tier unlocks a new echelon of profit, network, and mentorship. All levels are by-application only.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-14">
            {tiers.map((tier, idx) => (
              <div
                key={tier.name}
                className={`rounded-2xl p-8 border shadow-lg transition-all relative flex flex-col ${
                  tier.highlight
                    ? "border-brand-gold bg-gradient-to-br from-black via-gray-900 to-yellow-100/10 scale-105 z-10"
                    : "bg-gray-900 border-gray-700"
                }`}
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <h3 className="font-playfair text-3xl mb-2 font-bold text-brand-gold">{tier.name}</h3>
                <div className="text-xl mb-6 font-semibold">{tier.price}</div>
                <ul className="space-y-3 mb-8">
                  {tier.features.map(f => (
                    <li key={f} className="flex items-center gap-2 text-gray-200">
                      <span className="inline-block w-2 h-2 bg-brand-gold rounded-full"></span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <GoldButton size="lg" className="mt-auto">Upgrade Your Access</GoldButton>
                {tier.highlight && (
                  <div className="absolute top-3 right-4 text-xs uppercase px-3 py-1 bg-brand-gold text-black font-bold rounded-full shadow animate-glow">Most Popular</div>
                )}
              </div>
            ))}
          </div>
          <div className="bg-gray-900 rounded-xl p-6 shadow-inner overflow-auto max-w-4xl mx-auto mb-20">
            <h2 className="font-playfair text-2xl mb-6 font-bold text-center text-brand-gold">Tier Comparison</h2>
            <table className="min-w-full text-sm text-center">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="py-4"></th>
                  <th className="py-4 font-bold text-brand-gold">Silver</th>
                  <th className="py-4 font-bold text-brand-gold">Gold</th>
                  <th className="py-4 font-bold text-brand-gold">Platinum</th>
                </tr>
              </thead>
              <tbody>
                {featureMatrix.map((row) => (
                  <tr key={row.feature} className="border-t border-gray-800">
                    <td className="py-3 pr-3 text-left text-white">{row.feature}</td>
                    <td className="py-3">{row.silver ? "✔️" : ""}</td>
                    <td className="py-3">{row.gold ? "✔️" : ""}</td>
                    <td className="py-3">{row.platinum ? "✔️" : ""}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="text-center">
            <GoldButton size="lg">Upgrade Your Access</GoldButton>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Programs;
