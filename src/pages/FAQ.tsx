
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  const faqCategories = [
    {
      title: "Planning Your Visit",
      icon: "🗓️",
      questions: [
        {
          question: "What is the best time to visit Owu Falls?",
          answer: "The best time to visit is during the rainy season (June to September) when the waterfall is at its most spectacular with maximum water flow. However, the dry season (October to May) offers easier hiking conditions and more predictable weather."
        },
        {
          question: "How long should I plan for my visit?",
          answer: "We recommend planning at least 4-6 hours for a basic visit. This allows time for hiking, viewing the falls, taking photos, and resting. For the full experience including cultural tours and bird watching, plan for a full day (8+ hours)."
        },
        {
          question: "Do I need to book in advance?",
          answer: "While walk-ins are welcome, we strongly recommend booking in advance, especially during peak season and weekends. This ensures availability of guides and helps us prepare for your group size."
        },
        {
          question: "What are the operating hours?",
          answer: "The site is open daily from 6:00 AM to 6:00 PM. The visitor center operates from 8:00 AM to 5:00 PM. Early morning visits (6-8 AM) offer the best lighting for photography and cooler temperatures."
        }
      ]
    },
    {
      title: "Getting There",
      icon: "🚗",
      questions: [
        {
          question: "How do I get to Owu Falls?",
          answer: "Owu Falls is located in Kwara State, Nigeria. From Lagos, take the Lagos-Ibadan-Ilorin Expressway (4-5 hours). From Abuja, take the Abuja-Lokoja-Ilorin route (3-4 hours). We also offer transportation assistance for groups."
        },
        {
          question: "Is there parking available?",
          answer: "Yes, we have secure parking facilities at the visitor center. Parking is free for all visitors and the area is monitored during operating hours."
        },
        {
          question: "Can I use public transportation?",
          answer: "Yes, you can take buses to Ilorin and then use local transport to reach Owu Falls. We can arrange pickup from Ilorin for groups upon request."
        }
      ]
    },
    {
      title: "Activities & Tours",
      icon: "🥾",
      questions: [
        {
          question: "What activities are available?",
          answer: "We offer hiking trails, photography tours, cultural experiences, bird watching, nature walks, and overnight camping. Activities range from easy family-friendly walks to challenging adventure hikes."
        },
        {
          question: "Are guides required?",
          answer: "While not mandatory for basic trails, we strongly recommend guided tours for safety and to enhance your experience. Guides provide valuable insights about the area's history, culture, and wildlife."
        },
        {
          question: "Can I swim at the falls?",
          answer: "Swimming is strictly prohibited in the plunge pool due to strong currents and hidden rocks. However, there are designated safe areas for wading in shallow pools downstream."
        },
        {
          question: "Is it suitable for children?",
          answer: "Absolutely! We have family-friendly trails and activities suitable for children of all ages. Children under 12 must be accompanied by adults at all times."
        }
      ]
    },
    {
      title: "Safety & Preparation",
      icon: "⚠️",
      questions: [
        {
          question: "What should I bring?",
          answer: "Essential items include comfortable hiking shoes, water (2-3 liters), sun protection, insect repellent, and a first aid kit. For photography, bring extra batteries and waterproof protection for your equipment."
        },
        {
          question: "Are there any safety restrictions?",
          answer: "Stay on marked trails, don't climb on wet rocks near the waterfall, never swim in the main pool, travel in groups, and inform someone of your plans. We have safety briefings before all tours."
        },
        {
          question: "Is there medical assistance available?",
          answer: "We have a first aid station at the visitor center and trained guides carry basic medical supplies. The nearest hospital is 30 minutes away in Ilorin. Emergency contacts are provided to all visitors."
        },
        {
          question: "What about accessibility for people with disabilities?",
          answer: "We have accessible paths to several viewpoints and the visitor center is wheelchair accessible. Please contact us in advance to discuss specific needs and arrange appropriate assistance."
        }
      ]
    },
    {
      title: "Facilities & Services",
      icon: "🏢",
      questions: [
        {
          question: "What facilities are available on-site?",
          answer: "Our visitor center includes restrooms, a gift shop, restaurant, information desk, and lockers. We also have picnic areas, camping facilities, and secure parking."
        },
        {
          question: "Is food available?",
          answer: "Yes, we have an on-site restaurant serving local and international cuisine. There are also snack bars and picnic areas where you can enjoy packed lunches. Vending machines provide drinks and snacks."
        },
        {
          question: "Are there accommodation options nearby?",
          answer: "We offer on-site camping facilities and can recommend nearby guesthouses and lodges. For groups, we can arrange accommodation packages that include meals and activities."
        },
        {
          question: "Is Wi-Fi available?",
          answer: "Free Wi-Fi is available at the visitor center. Coverage may be limited on the trails to preserve the natural experience, but emergency communication is always available."
        }
      ]
    },
    {
      title: "Booking & Pricing",
      icon: "💰",
      questions: [
        {
          question: "How much does it cost to visit?",
          answer: "Our packages range from ₦15,000 for basic tours to ₦50,000 for overnight camping experiences. Prices vary based on group size, duration, and included services. Check our booking page for current rates."
        },
        {
          question: "Are there group discounts?",
          answer: "Yes, we offer discounts for groups of 10 or more people. School groups and cultural organizations may qualify for special rates. Contact us for custom group packages."
        },
        {
          question: "What is your cancellation policy?",
          answer: "Free cancellation up to 48 hours before your visit. Cancellations within 48 hours are subject to a 50% fee. No-shows forfeit the full payment. Weather-related cancellations are fully refundable."
        },
        {
          question: "Do you accept credit cards?",
          answer: "We accept cash, bank transfers, and mobile payments. Credit card facilities are available at the visitor center. Online bookings can be paid via various digital payment platforms."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Find answers to common questions about visiting Owu Falls
            </p>
          </div>

          {/* FAQ Categories */}
          <div className="space-y-8">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="animate-on-scroll">
                <div className="glassmorphism-card p-8 rounded-lg">
                  <div className="flex items-center mb-6">
                    <span className="text-3xl mr-4">{category.icon}</span>
                    <h2 className="text-2xl font-bold text-emerald-400">{category.title}</h2>
                  </div>
                  
                  <div className="space-y-4">
                    {category.questions.map((faq, questionIndex) => {
                      const globalIndex = categoryIndex * 1000 + questionIndex;
                      const isOpen = openItems.has(globalIndex);
                      
                      return (
                        <div key={questionIndex} className="border-b border-white/10 last:border-b-0">
                          <button
                            onClick={() => toggleItem(globalIndex)}
                            className="w-full py-4 flex justify-between items-center text-left hover:text-emerald-400 transition-colors"
                          >
                            <span className="font-semibold text-lg pr-4">{faq.question}</span>
                            {isOpen ? (
                              <ChevronUp className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                            ) : (
                              <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                            )}
                          </button>
                          
                          {isOpen && (
                            <div className="pb-4 text-gray-300 leading-relaxed animate-fade-in">
                              {faq.answer}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-16 glassmorphism-card p-8 rounded-lg text-center animate-on-scroll">
            <h2 className="text-2xl font-bold mb-4 text-emerald-400">
              Still Have Questions?
            </h2>
            <p className="text-gray-300 mb-6">
              Can't find what you're looking for? Our friendly team is here to help you plan the perfect visit to Owu Falls.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-black font-semibold rounded-lg transition-colors"
              >
                Contact Us
              </a>
              <a
                href="tel:+234xxxxxxxxx"
                className="inline-flex items-center justify-center px-6 py-3 border border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-black font-semibold rounded-lg transition-colors"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
