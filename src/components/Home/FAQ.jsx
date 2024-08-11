import { useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is the return policy?",
      answer:
        "Our return policy allows you to return products within 30 days of purchase. The product must be unused and needs to have original packaging. Please keep your receipt as proof of purchase.",
    },
    {
      question: "How long does shipping take?",
      answer:
        "Shipping typically takes 3-5 business days within Europe and 7-10 business days internationally. Expedited shipping options are available at an additional cost.",
    },
    {
      question: "Do you ship internationally?",
      answer:
        "Yes, we ship internationally. Shipping costs and delivery times will vary depending on your location. Please see our shipping policy for more details.",
    },
    {
      question: "How can I track my order?",
      answer:
        "Once your order is shipped, you will receive an email with a tracking number. You can use this number to track your order on our website or the carrier's website.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards, PayPal, and bank transfers. All payments are securely processed using SSL encryption.",
    },
    {
      question: "Can I change or cancel my order?",
      answer:
        "You can change or cancel your order within 24 hours of placing it. After this period, we cannot guarantee changes or cancellations as your order may already be processed or shipped.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-5xl mx-auto mt-6 p-4">
      <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b pb-4">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left text-xl font-medium text-gray-800 focus:outline-none flex justify-between items-center"
            >
              {faq.question}
              <span>{activeIndex === index ? "-" : "+"}</span>
            </button>
            <div
              className={`mt-2 text-gray-600 text-base ${
                activeIndex === index ? "block" : "hidden"
              }`}
            >
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
