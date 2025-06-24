
import React from 'react';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';
import { MapPin, Clock, Camera, Users, Star, ArrowRight, Play } from 'lucide-react';
import AnimatedCounter from '../components/AnimatedCounter';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section with Video Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gradient-to-b from-black/50 via-transparent to-black/80">
            <iframe
              src="https://www.youtube.com/embed/my431uqh28?autoplay=1&mute=1&loop=1&playlist=my431uqh28&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1"
              className="w-full h-full object-cover"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 gradient-text animate-fade-in">
            Owu Falls
          </h1>
          <p className="text-2xl md:text-3xl mb-4 text-emerald-400 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Nigeria's Tallest Waterfall
          </p>
          <p className="text-lg md:text-xl mb-8 text-gray-300 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Experience the breathtaking beauty of Nigeria's highest waterfall, cascading 120 meters through pristine tropical rainforest in Kwara State.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Button asChild size="lg" className="bg-emerald-500 hover:bg-emerald-600 px-8 py-4 text-lg">
              <Link to="/booking">Book Your Adventure</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg">
              <Link to="/gallery">
                <Play className="w-5 h-5 mr-2" />
                Watch Virtual Tour
              </Link>
            </Button>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center animate-bounce">
          <div className="text-emerald-400 mb-2">Discover More</div>
          <div className="w-6 h-10 border-2 border-emerald-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-emerald-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <AnimatedCounter end={120} suffix="m" className="text-4xl font-bold text-emerald-400" />
              <p className="text-gray-300 mt-2">Height</p>
            </div>
            <div className="text-center">
              <AnimatedCounter end={50} suffix="+" className="text-4xl font-bold text-emerald-400" />
              <p className="text-gray-300 mt-2">Bird Species</p>
            </div>
            <div className="text-center">
              <AnimatedCounter end={4.8} decimals={1} suffix="/5" className="text-4xl font-bold text-emerald-400" />
              <p className="text-gray-300 mt-2">Rating</p>
            </div>
            <div className="text-center">
              <AnimatedCounter end={1000} suffix="+" className="text-4xl font-bold text-emerald-400" />
              <p className="text-gray-300 mt-2">Monthly Visitors</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <h2 className="text-4xl font-bold mb-6 gradient-text">Discover Nigeria's Natural Wonder</h2>
              <p className="text-lg text-gray-300 mb-6">
                Hidden in the heart of Kwara State, Owu Falls stands as Nigeria's tallest waterfall, 
                plunging 120 meters through ancient granite cliffs into crystal-clear pools below. 
                This pristine natural sanctuary offers an escape into untouched wilderness.
              </p>
              <p className="text-lg text-gray-300 mb-8">
                Sacred to the local Yoruba people for centuries, the falls are believed to possess 
                healing powers and spiritual significance. The surrounding rainforest teems with 
                exotic wildlife, making it a paradise for nature lovers and photographers.
              </p>
              <Button asChild className="bg-emerald-500 hover:bg-emerald-600">
                <Link to="/about">Learn More <ArrowRight className="w-4 h-4 ml-2" /></Link>
              </Button>
            </div>
            <div className="relative animate-on-scroll">
              <img 
                src="/placeholder.svg" 
                alt="Owu Falls cascading through tropical rainforest"
                className="rounded-lg shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Preview */}
      <section className="py-20 bg-gray-900/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 gradient-text">Adventures Await</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              From challenging hikes to peaceful nature walks, discover all the ways to experience Owu Falls
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="glassmorphism-card p-6 rounded-lg text-center hover:scale-105 transition-transform animate-on-scroll">
              <div className="text-4xl mb-4">🥾</div>
              <h3 className="text-xl font-bold mb-3 text-emerald-400">Hiking Trails</h3>
              <p className="text-gray-300 mb-4">Explore scenic trails with varying difficulty levels</p>
              <Button variant="outline" size="sm" className="border-emerald-500 text-emerald-400">
                Explore Trails
              </Button>
            </div>
            
            <div className="glassmorphism-card p-6 rounded-lg text-center hover:scale-105 transition-transform animate-on-scroll">
              <div className="text-4xl mb-4">📸</div>
              <h3 className="text-xl font-bold mb-3 text-emerald-400">Photography Tours</h3>
              <p className="text-gray-300 mb-4">Capture perfect shots with professional guides</p>
              <Button variant="outline" size="sm" className="border-emerald-500 text-emerald-400">
                Book Photo Tour
              </Button>
            </div>
            
            <div className="glassmorphism-card p-6 rounded-lg text-center hover:scale-105 transition-transform animate-on-scroll">
              <div className="text-4xl mb-4">🏛️</div>
              <h3 className="text-xl font-bold mb-3 text-emerald-400">Cultural Tours</h3>
              <p className="text-gray-300 mb-4">Learn about local traditions and history</p>
              <Button variant="outline" size="sm" className="border-emerald-500 text-emerald-400">
                Cultural Experience
              </Button>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-emerald-500 hover:bg-emerald-600">
              <Link to="/activities">View All Activities</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 gradient-text">What Visitors Say</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="glassmorphism-card p-6 rounded-lg animate-on-scroll">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-4 italic">
                "Absolutely breathtaking! The hike was challenging but so worth it. 
                The waterfall is even more spectacular in person."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-black font-bold">A</span>
                </div>
                <div>
                  <p className="font-semibold">Adaora Okafor</p>
                  <p className="text-sm text-gray-400">Lagos, Nigeria</p>
                </div>
              </div>
            </div>
            
            <div className="glassmorphism-card p-6 rounded-lg animate-on-scroll">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-4 italic">
                "Perfect family destination! The guides were knowledgeable and the 
                kids loved spotting different bird species."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-black font-bold">M</span>
                </div>
                <div>
                  <p className="font-semibold">Michael Johnson</p>
                  <p className="text-sm text-gray-400">UK Tourist</p>
                </div>
              </div>
            </div>
            
            <div className="glassmorphism-card p-6 rounded-lg animate-on-scroll">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-4 italic">
                "A photographer's paradise! The lighting through the canopy creates 
                magical moments. Highly recommend the photography tour."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-black font-bold">F</span>
                </div>
                <div>
                  <p className="font-semibold">Fatima Al-Rashid</p>
                  <p className="text-sm text-gray-400">Professional Photographer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-900/50 to-black/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 gradient-text">Ready for Your Adventure?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Experience the power and beauty of Nigeria's tallest waterfall. Book your tour today 
            and create memories that will last a lifetime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-emerald-500 hover:bg-emerald-600 px-8 py-4">
              <Link to="/booking">Book Now</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-black px-8 py-4">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
