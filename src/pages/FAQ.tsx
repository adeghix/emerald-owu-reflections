
import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Link } from 'react-router-dom';
import { Search, ChevronDown, ChevronUp, HelpCircle, Phone, Mail, MessageCircle } from 'lucide-react';

const FAQ: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [openFAQs, setOpenFAQs] = useState<number[]>([]);

  const toggleFAQ = (id: number) => {
    setOpenFAQs(prev => 
      prev.includes(id) 
        ? prev.filter(faqId => faqId !== id)
        : [...prev, id]
    );
  };

  const faqs = [
    {
      id: 1,
      question: 'How tall is Owu Falls exactly?',
      answer: 'Owu Falls is 120 meters (394 feet) tall, making it the tallest waterfall in Nigeria. The water cascades down ancient granite cliffs in a spectacular single drop that can be seen and heard from a considerable distance.',
      category: 'General Info',
      popular: true
    },
    {
      id: 2,
      question: 'What is the best time of year to visit?',
      answer: 'The best time to visit Owu Falls is during the rainy season (June to September) when the water flow is at its peak. However, each season offers a different experience: rainy season for spectacular water volume, and dry season (October to May) for easier hiking and clearer photography conditions.',
      category: 'Planning',
      popular: true
    },
    {
      id: 3,
      question: 'How difficult is the hike to the falls?',
      answer: 'The main trail to Owu Falls is moderately challenging, taking about 45 minutes to 1 hour each way. The path includes some steep sections and rocky terrain. We offer different trail options: easy (1-2 hours), moderate (2-4 hours), and challenging (4+ hours) depending on your fitness level and desired experience.',
      category: 'Activities',
      popular: true
    },
    {
      id: 4,
      question: 'Do I need a guide to visit the falls?',
      answer: 'Yes, we strongly recommend using a local guide for safety and to enhance your experience. Our certified guides know the terrain, weather patterns, wildlife, and cultural significance of the area. They also ensure you don\'t miss the best viewpoints and photo opportunities.',
      category: 'Safety',
      popular: true
    },
    {
      id: 5,
      question: 'Can I swim in the pools at the base of the falls?',
      answer: 'Yes, swimming is allowed in designated safe areas of the natural pools. However, never swim directly under the falling water as the current is extremely powerful. Always follow your guide\'s instructions and be aware that water levels and conditions can change rapidly.',
      category: 'Activities',
      popular: false
    },
    {
      id: 6,
      question: 'What should I bring for the visit?',
      answer: 'Essential items include: sturdy hiking boots, waterproof backpack, quick-dry clothing, rain jacket, hat, sunglasses, 2-3 liters of water, energy snacks, camera with extra batteries, first aid kit, insect repellent, and sunscreen. During rainy season, bring extra waterproof gear.',
      category: 'Planning',
      popular: false
    },
    {
      id: 7,
      question: 'How much does it cost to visit?',
      answer: 'Entry fees vary by tour type: Basic guided tour (₦15,000), Photography tour (₦25,000), Cultural tour (₦20,000), Adventure package (₦35,000). Group discounts available for 10+ people. Prices include guide services, safety equipment, and park entry fees.',
      category: 'Booking',
      popular: true
    },
    {
      id: 8,
      question: 'Is Owu Falls suitable for children and elderly visitors?',
      answer: 'Yes! We have family-friendly trail options suitable for children over 8 years and elderly visitors with moderate mobility. The easy trail takes 1-2 hours and includes rest stops. We also offer shorter walks to viewing platforms that don\'t require hiking to the base.',
      category: 'Accessibility',
      popular: false
    },
    {
      id: 9,
      question: 'Are there accommodation options near the falls?',
      answer: 'Yes, we have several options: Basic guesthouse 2km from falls (₦8,000-15,000/night), designated camping sites (₦2,000/person/night), and luxury accommodations in Ilorin city (2 hours away, ₦25,000-50,000/night). We also offer package deals including accommodation.',
      category: 'Accommodation',
      popular: false
    },
    {
      id: 10,
      question: 'What wildlife can I expect to see?',
      answer: 'The area is home to over 50 bird species including kingfishers, hornbills, and various songbirds. You might also spot forest monkeys, colorful butterflies, and various small mammals. The best wildlife viewing is early morning or late afternoon with our specialized wildlife guides.',
      category: 'Wildlife',
      popular: false
    },
    {
      id: 11,
      question: 'How do I get to Owu Falls from major cities?',
      answer: 'From Lagos: 5-6 hours by road via Lagos-Ibadan Expressway → Ogbomoso → Ilorin → Owa Kajola. From Abuja: 3-4 hours via A2 Highway → Lokoja → Kabba → Ilorin. Closest airport is Ilorin (2.5 hours drive). We can arrange transport from major cities.',
      category: 'Transportation',
      popular: false
    },
    {
      id: 12,
      question: 'What safety measures are in place?',
      answer: 'We maintain comprehensive safety protocols including: certified guides with first aid training, safety equipment provided, emergency communication systems, regular trail maintenance, weather monitoring, and partnerships with local emergency services. All guides carry emergency contacts and basic medical supplies.',
      category: 'Safety',
      popular: false
    },
    {
      id: 13,
      question: 'Can I visit during the rainy season?',
      answer: 'Yes, the rainy season (June-September) is actually when the falls are most spectacular. However, trails can be more challenging and slippery. We provide extra safety equipment and may modify routes based on weather conditions. It\'s the best time for photography but requires more preparation.',
      category: 'Planning',
      popular: false
    },
    {
      id: 14,
      question: 'Are there cultural activities available?',
      answer: 'Absolutely! We offer cultural tours including traditional storytelling about the falls\' spiritual significance, local craft demonstrations, traditional music performances, and opportunities to learn about Yoruba customs. Cultural ceremonies are held during certain times of the year.',
      category: 'Culture',
      popular: false
    },
    {
      id: 15,
      question: 'What photography equipment works best?',
      answer: 'For best results: DSLR or mirrorless camera, wide-angle lens for landscape shots, telephoto for wildlife, tripod for long exposures, waterproof camera bag, lens cleaning kit, extra batteries, and memory cards. We offer photography workshops and equipment rental.',
      category: 'Photography',
      popular: false
    },
    {
      id: 16,
      question: 'How far in advance should I book?',
      answer: 'We recommend booking at least 1-2 weeks in advance, especially during peak season (June-September) and holidays. For group bookings (10+ people) or special events, book 1 month ahead. Last-minute bookings may be available but with limited guide and accommodation options.',
      category: 'Booking',
      popular: false
    },
    {
      id: 17,
      question: 'What happens if there\'s bad weather?',
      answer: 'Safety is our priority. During heavy rain or storms, we may postpone tours or modify routes. We monitor weather closely and will contact you 24-48 hours before your visit if conditions are unsafe. Full refunds or rescheduling options are available for weather-related cancellations.',
      category: 'Weather',
      popular: false
    },
    {
      id: 18,
      question: 'Are there facilities like restrooms and food available?',
      answer: 'The visitor center has clean restrooms, a small café serving local dishes, and a gift shop. Basic facilities are available at rest stops along trails. For longer tours, we provide packed lunches. Fresh spring water is available at several points, but bringing your own water is recommended.',
      category: 'Facilities',
      popular: false
    }
  ];

  const categories = [
    { id: 'all', label: 'All Questions', count: faqs.length },
    { id: 'General Info', label: 'General Info', count: faqs.filter(faq => faq.category === 'General Info').length },
    { id: 'Planning', label: 'Planning', count: faqs.filter(faq => faq.category === 'Planning').length },
    { id: 'Activities', label: 'Activities', count: faqs.filter(faq => faq.category === 'Activities').length },
    { id: 'Safety', label: 'Safety', count: faqs.filter(faq => faq.category === 'Safety').length },
    { id: 'Booking', label: 'Booking', count: faqs.filter(faq => faq.category === 'Booking').length }
  ];

  const filteredFAQs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const popularFAQs = faqs.filter(faq => faq.popular);

  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Find answers to common questions about visiting Owu Falls, planning your trip, and making the most of your experience
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            <div className="glassmorphism-card p-6 rounded-lg text-center animate-on-scroll">
              <div className="text-3xl font-bold text-emerald-400 mb-2">120m</div>
              <div className="text-sm text-gray-300">Height of Falls</div>
            </div>
            <div className="glassmorphism-card p-6 rounded-lg text-center animate-on-scroll">
              <div className="text-3xl font-bold text-emerald-400 mb-2">45min</div>
              <div className="text-sm text-gray-300">Hike Duration</div>
            </div>
            <div className="glassmorphism-card p-6 rounded-lg text-center animate-on-scroll">
              <div className="text-3xl font-bold text-emerald-400 mb-2">50+</div>
              <div className="text-sm text-gray-300">Bird Species</div>
            </div>
            <div className="glassmorphism-card p-6 rounded-lg text-center animate-on-scroll">
              <div className="text-3xl font-bold text-emerald-400 mb-2">6AM</div>
              <div className="text-sm text-gray-300">Opening Time</div>
            </div>
          </div>

          {/* Search and Popular FAQs */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              {/* Search Bar */}
              <div className="relative mb-8 animate-on-scroll">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search for answers..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-gray-800 border-white/20 text-white h-12"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-3 mb-8 animate-on-scroll">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-full transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-emerald-500 text-black font-semibold'
                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    }`}
                  >
                    {category.label} ({category.count})
                  </button>
                ))}
              </div>

              {/* FAQ Accordion */}
              <div className="space-y-4">
                {filteredFAQs.map((faq, index) => (
                  <div
                    key={faq.id}
                    className="glassmorphism-card rounded-lg animate-on-scroll"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <button
                      onClick={() => toggleFAQ(faq.id)}
                      className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors rounded-lg"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          {faq.popular && (
                            <span className="px-2 py-1 bg-emerald-500 text-black text-xs font-semibold rounded-full">
                              Popular
                            </span>
                          )}
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white mb-1">{faq.question}</h3>
                          <span className="text-sm text-emerald-400">{faq.category}</span>
                        </div>
                      </div>
                      <div className="flex-shrink-0">
                        {openFAQs.includes(faq.id) ? (
                          <ChevronUp className="w-5 h-5 text-emerald-400" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-400" />
                        )}
                      </div>
                    </button>
                    
                    {openFAQs.includes(faq.id) && (
                      <div className="px-6 pb-6">
                        <div className="border-t border-white/10 pt-4">
                          <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* No Results */}
              {filteredFAQs.length === 0 && (
                <div className="text-center py-12 animate-on-scroll">
                  <HelpCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-400 mb-4">No questions found</h3>
                  <p className="text-gray-500 mb-6">
                    Can't find what you're looking for? Try adjusting your search or contact us directly.
                  </p>
                  <Button onClick={() => { setSearchTerm(''); setSelectedCategory('all'); }} variant="outline" className="border-emerald-500 text-emerald-400 mr-4">
                    Clear Search
                  </Button>
                  <Button asChild className="bg-emerald-500 hover:bg-emerald-600">
                    <Link to="/contact">Ask a Question</Link>
                  </Button>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Popular Questions */}
              <div className="glassmorphism-card p-6 rounded-lg animate-on-scroll">
                <h3 className="text-xl font-bold text-emerald-400 mb-6">Most Popular Questions</h3>
                <div className="space-y-4">
                  {popularFAQs.slice(0, 5).map((faq) => (
                    <button
                      key={faq.id}
                      onClick={() => {
                        setSelectedCategory('all');
                        setSearchTerm('');
                        if (!openFAQs.includes(faq.id)) {
                          toggleFAQ(faq.id);
                        }
                        document.getElementById(`faq-${faq.id}`)?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="block w-full text-left p-3 rounded-lg hover:bg-white/5 transition-colors group"
                    >
                      <h4 className="text-sm font-semibold text-white group-hover:text-emerald-400 transition-colors mb-1">
                        {faq.question}
                      </h4>
                      <span className="text-xs text-gray-400">{faq.category}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Quick Contact */}
              <div className="glassmorphism-card p-6 rounded-lg animate-on-scroll">
                <h3 className="text-xl font-bold text-emerald-400 mb-6">Still Need Help?</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-gray-300">
                    <Phone className="w-5 h-5 text-emerald-400" />
                    <div>
                      <div className="font-semibold">Call Us</div>
                      <div className="text-sm">+234 xxx xxx xxxx</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 text-gray-300">
                    <Mail className="w-5 h-5 text-emerald-400" />
                    <div>
                      <div className="font-semibold">Email Us</div>
                      <div className="text-sm">info@owufalls.com</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 text-gray-300">
                    <MessageCircle className="w-5 h-5 text-emerald-400" />
                    <div>
                      <div className="font-semibold">WhatsApp</div>
                      <div className="text-sm">+234 xxx xxx xxxx</div>
                    </div>
                  </div>
                </div>
                
                <Button asChild className="w-full mt-6 bg-emerald-500 hover:bg-emerald-600">
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>

              {/* Emergency Contacts */}
              <div className="glassmorphism-card p-6 rounded-lg animate-on-scroll">
                <h3 className="text-xl font-bold text-yellow-400 mb-4">Emergency Contacts</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Emergency Services:</span>
                    <span className="text-white font-semibold">199</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Tourist Police:</span>
                    <span className="text-white font-semibold">+234 xxx xxx xxxx</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Medical Emergency:</span>
                    <span className="text-white font-semibold">+234 xxx xxx xxxx</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Site Management:</span>
                    <span className="text-white font-semibold">+234 xxx xxx xxxx</span>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="glassmorphism-card p-6 rounded-lg animate-on-scroll">
                <h3 className="text-xl font-bold text-emerald-400 mb-4">Quick Links</h3>
                <div className="space-y-2">
                  <Link to="/visit-info" className="block text-gray-300 hover:text-emerald-400 transition-colors text-sm">
                    → Visit Planning Guide
                  </Link>
                  <Link to="/activities" className="block text-gray-300 hover:text-emerald-400 transition-colors text-sm">
                    → Activities & Tours
                  </Link>
                  <Link to="/booking" className="block text-gray-300 hover:text-emerald-400 transition-colors text-sm">
                    → Book Your Visit
                  </Link>
                  <Link to="/gallery" className="block text-gray-300 hover:text-emerald-400 transition-colors text-sm">
                    → Photo Gallery
                  </Link>
                  <Link to="/blog" className="block text-gray-300 hover:text-emerald-400 transition-colors text-sm">
                    → Travel Tips & Stories
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <section className="mt-20 glassmorphism-card p-12 rounded-lg text-center animate-on-scroll">
            <h2 className="text-3xl font-bold mb-6 gradient-text">Ready to Experience Owu Falls?</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Now that you have all the information you need, it's time to plan your unforgettable adventure 
              to Nigeria's tallest waterfall.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-emerald-500 hover:bg-emerald-600">
                <Link to="/booking">Book Your Adventure</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-black">
                <Link to="/contact">Ask More Questions</Link>
              </Button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
