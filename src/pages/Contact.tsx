
import Layout from "@/components/Layout";

const Contact = () => {
  return (
    <Layout>
      <section className="pt-28 pb-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-6 text-center">
            Contact <span className="text-brand-gold">Us</span>
          </h1>
          <p className="text-lg text-center max-w-3xl mx-auto mb-16">
            Reach out to the Bullish Whales Club team.
          </p>
          
          {/* Placeholder for future content */}
          <div className="bg-gray-900 p-8 rounded-lg text-center">
            <p>Contact page content coming soon...</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
