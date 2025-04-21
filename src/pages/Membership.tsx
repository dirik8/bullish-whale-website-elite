
import Layout from "@/components/Layout";
import { GoldButton } from "@/components/ui/gold-button";
import { useState } from "react";

const Membership = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    age: "",
    occupation: "",
    residence: "",
    experience: "",
    capital: "",
    markets: "",
    investments: "",
    platforms: "",
    goals: "",
    referral: "",
  });
  const [showForm, setShowForm] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Application submitted successfully! We'll be in touch shortly.");
  };

  return (
    <Layout>
      <section className="bg-black text-white pt-28 pb-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-6">
              Apply to Join the <span className="text-brand-gold">Inner Circle</span>
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300">
              Membership is by invitation only. Elite community, personal mentorship, and accountability—by application and interview. Show us your commitment!
            </p>
          </div>

          <div className={`${showForm ? "grid" : "block"} grid-cols-1 lg:grid-cols-2 gap-16 items-center`}>
            {!showForm && (
              <div className="text-center w-full">
                <GoldButton size="lg" className="mb-8 animate-glow" onClick={() => setShowForm(true)}>Apply For Membership</GoldButton>
                <p className="text-gray-400 mt-6 text-lg">
                  BWC is seeking driven, growth-focused traders & investors who want to reach new heights.
                  <br/>Ready to take the next step? Click to apply now.
                </p>
              </div>
            )}

            {showForm && (
              <>
                <div className="space-y-10">
                  <div className="bg-gray-900 p-8 rounded-lg border border-gray-800 animate-scale-in">
                    <h2 className="text-2xl font-playfair font-bold mb-6 text-brand-gold">Application Process</h2>
                    <div className="space-y-6">
                      <ProcessStep number="01" title="Submit Application" description="Fill out our comprehensive form to help us understand your background and goals." />
                      <ProcessStep number="02" title="1:1 Interview" description="Interview with our membership team for personal fit." />
                      <ProcessStep number="03" title="Invitation Decision" description="Only the elite are invited each quarter. Limited availability." />
                    </div>
                  </div>

                  <div className="bg-gray-900 p-8 rounded-lg border border-gray-800 animate-scale-in" style={{ animationDelay: "0.2s" }}>
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 rounded-full bg-brand-gold flex items-center justify-center mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                      </div>
                      <h2 className="text-2xl font-playfair font-bold text-brand-gold">Limited Availability</h2>
                    </div>
                    <p className="text-gray-300">
                      <span className="text-white font-semibold">Only 50 spots per quarter</span> to ensure ultra-personal attention. Outperform with us!
                    </p>
                  </div>
                </div>

                <div className="bg-gray-900 p-8 rounded-lg border border-gray-800 animate-scale-in" style={{ animationDelay: "0.3s" }}>
                  <h2 className="text-2xl font-playfair font-bold mb-8 text-center text-brand-gold">Membership Application</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField label="Full Name" name="fullName" type="text" value={formData.fullName} onChange={handleChange} required />
                      <FormField label="Email Address" name="email" type="email" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField label="Phone Number" name="phone" type="tel" value={formData.phone} onChange={handleChange} required />
                      <FormField label="Age" name="age" type="number" value={formData.age} onChange={handleChange} required />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField label="Occupation" name="occupation" type="text" value={formData.occupation} onChange={handleChange} required />
                      <FormField label="Country & City of Residence" name="residence" type="text" value={formData.residence} onChange={handleChange} required />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField label="Years of Trading Experience" name="experience" type="number" value={formData.experience} onChange={handleChange} required />
                      <FormField label="Estimated Liquid Investment Capital (USD)" name="capital" type="text" value={formData.capital} onChange={handleChange} required />
                    </div>
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1">Primary Markets</label>
                        <select
                          name="markets"
                          value={formData.markets}
                          onChange={handleChange}
                          className="w-full bg-gray-800 border border-gray-700 rounded p-3 text-white focus:outline-none focus:border-brand-gold"
                          required
                        >
                          <option value="">Select your primary market</option>
                          <option value="Crypto">Cryptocurrency</option>
                          <option value="Stocks">Stocks</option>
                          <option value="Forex">Forex</option>
                          <option value="Commodities">Commodities</option>
                          <option value="Options">Options</option>
                          <option value="Futures">Futures</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                      <FormField label="Other Active Investments or Assets" name="investments" type="text" value={formData.investments} onChange={handleChange} required />
                      <FormField label="Current Brokerage Accounts or Platforms" name="platforms" type="text" value={formData.platforms} onChange={handleChange} required />
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1">What Are You Hoping to Achieve in the Next 12 Months?</label>
                        <textarea name="goals" value={formData.goals} onChange={handleChange} className="w-full bg-gray-800 border border-gray-700 rounded p-3 text-white focus:outline-none focus:border-brand-gold min-h-[100px]" required />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1">How Did You Hear About BWC?</label>
                        <textarea name="referral" value={formData.referral} onChange={handleChange} className="w-full bg-gray-800 border border-gray-700 rounded p-3 text-white focus:outline-none focus:border-brand-gold" required />
                      </div>
                    </div>
                    <div className="pt-4">
                      <GoldButton type="submit" size="lg" className="w-full">Request Invitation</GoldButton>
                    </div>
                  </form>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      <section className="bg-gray-900 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-8">
            Ready to <span className="text-brand-gold">Elevate</span> Your Trading?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            Join an elite community of traders who are committed to excellence and consistently outperform the market.
          </p>
          <GoldButton size="lg" onClick={() => setShowForm(true)}>Apply for Membership</GoldButton>
        </div>
      </section>
    </Layout>
  );
};

const ProcessStep = ({ number, title, description }: { number: string; title: string; description: string }) => {
  return (
    <div className="flex">
      <div className="mr-6">
        <div className="w-12 h-12 rounded-full bg-brand-gold flex items-center justify-center text-black font-bold">
          {number}
        </div>
      </div>
      <div>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
};

const FormField = ({
  label,
  name,
  type,
  value,
  onChange,
  required,
}: {
  label: string;
  name: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-300 mb-1">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full bg-gray-800 border border-gray-700 rounded p-3 text-white focus:outline-none focus:border-brand-gold"
        required={required}
      />
    </div>
  );
};

export default Membership;
