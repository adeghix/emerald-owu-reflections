
import React from 'react';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';

const Activities: React.FC = () => {
  const activities = [
    {
      title: "Hiking Trails",
      description: "Explore scenic trails with varying difficulty levels, from easy walks to challenging treks.",
      icon: "🥾",
      duration: "2-6 hours",
      difficulty: "Easy to Hard",
      features: ["Guided tours available", "Trail maps provided", "Rest stations", "Wildlife spotting"],
      image: "/placeholder.svg"
    },
    {
      title: "Photography Tours",
      description: "Capture the perfect shot with professional guides who know the best angles and lighting.",
      icon: "📸",
      duration: "3-4 hours",
      difficulty: "Easy",
      features: ["Professional guides", "Best viewpoints", "Equipment advice", "Technique tips"],
      image: "/placeholder.svg"
    },
    {
      title: "Cultural Experiences",
      description: "Learn about local traditions, customs, and the historical significance of Owu Falls.",
      icon: "🏛️",
      duration: "2-3 hours",
      difficulty: "Easy",
      features: ["Cultural storytelling", "Traditional music", "Local crafts", "Historical insights"],
      image: "/placeholder.svg"
    },
    {
      title: "Bird Watching",
      description: "Discover over 50 species of birds in their natural habitat around the falls.",
      icon: "🦅",
      duration: "3-5 hours",
      difficulty: "Easy to Medium",
      features: ["Binoculars provided", "Expert guides", "Species identification", "Best viewing spots"],
      image: "/placeholder.svg"
    },
    {
      title: "Nature Walks",
      description: "Gentle walks through the forest to learn about local flora and ecosystem.",
      icon: "🌿",
      duration: "1-2 hours",
      difficulty: "Easy",
      features: ["Botanical guides", "Plant identification", "Ecosystem education", "Family friendly"],
      image: "/placeholder.svg"
    },
    {
      title: "Adventure Camping",
      description: "Overnight camping experience under the stars near the majestic waterfall.",
      icon: "🏕️",
      duration: "Overnight",
      difficulty: "Medium",
      features: ["Camping equipment", "Bonfire activities", "Night sounds tour", "Stargazing"],
      image: "/placeholder.svg"
    }
  ];

  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
              Activities & Adventures
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              From thrilling hikes to peaceful nature walks, discover all the ways to experience Owu Falls
            </p>
          </div>

          {/* Activities Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {activities.map((activity, index) => (
              <div key={index} className="glassmorphism-card p-8 rounded-lg hover:scale-105 transition-transform duration-300 animate-on-scroll">
                <div className="flex items-start gap-6">
                  <div className="text-5xl flex-shrink-0">{activity.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3 text-emerald-400">{activity.title}</h3>
                    <p className="text-gray-300 mb-4">{activity.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                      <div>
                        <span className="text-emerald-400 font-semibold">Duration:</span>
                        <p className="text-gray-300">{activity.duration}</p>
                      </div>
                      <div>
                        <span className="text-emerald-400 font-semibold">Difficulty:</span>
                        <p className="text-gray-300">{activity.difficulty}</p>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <span className="text-emerald-400 font-semibold block mb-2">Features:</span>
                      <div className="grid grid-cols-2 gap-1">
                        {activity.features.map((feature, idx) => (
                          <div key={idx} className="text-sm text-gray-300">• {feature}</div>
                        ))}
                      </div>
                    </div>
                    
                    <Button className="bg-emerald-500 hover:bg-emerald-600">
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Trail Difficulty Guide */}
          <section className="mb-16 animate-on-scroll">
            <h2 className="text-3xl font-bold mb-8 text-emerald-400">Trail Difficulty Guide</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="glassmorphism-card p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">E</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-green-400">Easy</h3>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• Well-maintained paths</li>
                  <li>• Minimal elevation gain</li>
                  <li>• Suitable for all ages</li>
                  <li>• 1-3 hours duration</li>
                </ul>
              </div>
              
              <div className="glassmorphism-card p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">M</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-yellow-400">Medium</h3>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• Some steep sections</li>
                  <li>• Moderate fitness required</li>
                  <li>• Sturdy shoes needed</li>
                  <li>• 3-5 hours duration</li>
                </ul>
              </div>
              
              <div className="glassmorphism-card p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">H</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-red-400">Hard</h3>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• Challenging terrain</li>
                  <li>• Good fitness required</li>
                  <li>• Hiking experience needed</li>
                  <li>• 5+ hours duration</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Booking CTA */}
          <section className="glassmorphism-card p-12 rounded-lg text-center animate-on-scroll">
            <h2 className="text-3xl font-bold mb-6 gradient-text">Ready for Your Adventure?</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Book your preferred activity today and experience the natural wonder of Owu Falls 
              with our expert guides.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-emerald-500 hover:bg-emerald-600 px-8 py-4">
                <Link to="/booking">Book Activities</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-black px-8 py-4">
                <Link to="/contact">Ask Questions</Link>
              </Button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Activities;
