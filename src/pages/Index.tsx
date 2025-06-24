
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import AnimatedCounter from '../components/AnimatedCounter';
import ScrollToTop from '../components/ScrollToTop';

const Index: React.FC = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    // Animate elements on scroll
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Check on mount
    
    return () => window.removeEventListener('scroll', animateOnScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section with YouTube Video Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <iframe
            src="https://www.youtube.com/embed/my431uqh28?autoplay=1&mute=1&loop=1&playlist=my431uqh28&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1"
            allow="autoplay; fullscreen"
            className="w-full h-full object-cover scale-125"
            onLoad={() => setIsVideoLoaded(true)}
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            <span className="gradient-text">Owu Falls</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in" style={{animationDelay: '0.2s'}}>
            Nigeria's Tallest Waterfall • 120 Meters of Natural Wonder
          </p>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto animate-fade-in" style={{animationDelay: '0.4s'}}>
            Discover the breathtaking beauty of Owu Falls, where pristine waters cascade down 
            ancient rocks surrounded by lush tropical vegetation and diverse wildlife.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{animationDelay: '0.6s'}}>
            <Button 
              asChild
              size="lg" 
              className="bg-emerald-500 hover:bg-emerald-600 text-lg px-8 py-4 emerald-glow"
            >
              <Link to="/booking">Book Your Adventure</Link>
            </Button>
            <Button 
              asChild
              variant="outline" 
              size="lg" 
              className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-4"
            >
              <Link to="/gallery">Explore Gallery</Link>
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-emerald-400 rounded-full mt-2 animate-pulse-slow"></div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              By The Numbers
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Experience the magnificence through these impressive statistics
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 animate-on-scroll">
            <AnimatedCounter
              end={120}
              suffix="m"
              label="Height"
              icon="🏔️"
            />
            <AnimatedCounter
              end={50}
              suffix="+"
              label="Bird Species"
              icon="🦅"
            />
            <AnimatedCounter
              end={4.8}
              suffix="/5"
              label="Visitor Rating"
              icon="⭐"
            />
            <AnimatedCounter
              end={1000}
              suffix="+/month"
              label="Visitors"
              icon="👥"
            />
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                A Natural <span className="text-emerald-400">Masterpiece</span>
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                Located in the heart of Kwara State, Owu Falls stands as Nigeria's tallest waterfall, 
                plunging an impressive 120 meters down ancient granite cliffs. This natural wonder 
                has been carved by millions of years of flowing water.
              </p>
              <p className="text-lg text-gray-300 mb-8">
                The falls are surrounded by dense tropical forest, home to over 50 species of birds 
                and countless other wildlife. The area holds deep cultural significance for local 
                communities and offers visitors a chance to connect with nature's raw power.
              </p>
              <Button asChild size="lg" className="bg-emerald-500 hover:bg-emerald-600">
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
            
            <div className="animate-on-scroll relative">
              <div className="glassmorphism-card p-8 rounded-2xl">
                <img 
                  src="/placeholder.svg" 
                  alt="Owu Falls landscape" 
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />
                <h3 className="text-2xl font-bold mb-4 text-emerald-400">Cultural Heritage</h3>
                <p className="text-gray-300">
                  For generations, Owu Falls has been a sacred site for local communities, 
                  with rich traditions and stories passed down through oral history.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Preview */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Adventure Awaits
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              From hiking trails to cultural tours, discover all the ways to experience Owu Falls
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Hiking Trails",
                description: "Explore scenic trails with varying difficulty levels",
                icon: "🥾",
                image: "/placeholder.svg"
              },
              {
                title: "Photography Tours",
                description: "Capture the perfect shot with professional guides",
                icon: "📸",
                image: "/placeholder.svg"
              },
              {
                title: "Cultural Experiences",
                description: "Learn about local traditions and customs",
                icon: "🏛️",
                image: "/placeholder.svg"
              }
            ].map((activity, index) => (
              <div key={index} className="glassmorphism-card p-6 rounded-lg hover:scale-105 transition-transform duration-300 animate-on-scroll">
                <div className="text-4xl mb-4">{activity.icon}</div>
                <img 
                  src={activity.image} 
                  alt={activity.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold mb-3 text-emerald-400">{activity.title}</h3>
                <p className="text-gray-300 mb-4">{activity.description}</p>
                <Button asChild variant="outline" className="border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-black">
                  <Link to="/activities">Learn More</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Visitor Experiences
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Hear from those who have experienced the magic of Owu Falls
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                location: "Lagos, Nigeria",
                text: "Absolutely breathtaking! The 120-meter drop is incredible to witness in person. The hiking trail was well-maintained and the guides were knowledgeable.",
                rating: 5
              },
              {
                name: "Michael Chen",
                location: "Tourist from Singapore",
                text: "One of the most spectacular natural wonders I've ever seen. The cultural tour added so much depth to the experience. Highly recommended!",
                rating: 5
              },
              {
                name: "Adunni Adebayo",
                location: "Abuja, Nigeria",
                text: "Perfect family destination! The kids loved the adventure, and we adults were amazed by the natural beauty. The photography opportunities are endless.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="glassmorphism-card p-6 rounded-lg animate-on-scroll">
                <div className="flex text-emerald-400 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i}>⭐</span>
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.text}"</p>
                <div className="border-t border-white/10 pt-4">
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-t from-emerald-900/20 to-transparent">
        <div className="container mx-auto px-4 text-center animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Ready for Your Adventure?
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Don't miss the opportunity to experience Nigeria's tallest waterfall. 
            Book your tour today and create memories that will last a lifetime.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              size="lg" 
              className="bg-emerald-500 hover:bg-emerald-600 text-lg px-8 py-4 emerald-glow"
            >
              <Link to="/booking">Book Now</Link>
            </Button>
            <Button 
              asChild
              variant="outline" 
              size="lg" 
              className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-4"
            >
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <ScrollToTop />
    </div>
  );
};

export default Index;
