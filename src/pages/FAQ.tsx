
import Layout from "@/components/Layout";

const FAQ = () => {
  return (
    <Layout>
      <section className="pt-28 pb-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-6 text-center">
            Frequently Asked <span className="text-brand-gold">Questions</span>
          </h1>
          <p className="text-lg text-center max-w-3xl mx-auto mb-16">
            Find answers to common questions about our membership and services.
          </p>
          
          {/* Placeholder for future content */}
          <div className="bg-gray-900 p-8 rounded-lg text-center">
            <p>FAQ content coming soon...</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FAQ;
