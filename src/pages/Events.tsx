
import React from 'react';
import { Calendar, Clock, MapPin, User } from 'lucide-react';
import { Button } from '../components/ui/button';

const Events: React.FC = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "Owu Falls Photography Festival",
      date: "2024-08-15",
      time: "06:00 AM - 06:00 PM",
      location: "Owu Falls Main Site",
      description: "Annual photography festival featuring workshops, exhibitions, and competitions showcasing the beauty of Owu Falls.",
      image: "/placeholder.svg",
      category: "Photography",
      organizer: "Owu Falls Tourism Board",
      maxParticipants: 150,
      currentRegistrations: 89,
      price: "₦25,000",
      highlights: [
        "Professional photography workshops",
        "Equipment exhibition and demos",
        "Photo competition with prizes",
        "Guided golden hour sessions"
      ]
    },
    {
      id: 2,
      title: "Cultural Heritage Festival",
      date: "2024-09-21",
      time: "09:00 AM - 05:00 PM",
      location: "Owu Falls Cultural Center",
      description: "Celebrate the rich cultural heritage of the Owu kingdom with traditional music, dance, and storytelling.",
      image: "/placeholder.svg",
      category: "Cultural",
      organizer: "Local Cultural Association",
      maxParticipants: 300,
      currentRegistrations: 156,
      price: "₦15,000",
      highlights: [
        "Traditional Yoruba performances",
        "Cultural storytelling sessions",
        "Local cuisine tasting",
        "Arts and crafts exhibitions"
      ]
    },
    {
      id: 3,
      title: "Bird Watching Weekend",
      date: "2024-10-05",
      time: "05:00 AM - 07:00 PM",
      location: "Owu Falls Nature Reserve",
      description: "Two-day intensive bird watching event with expert ornithologists and nature photographers.",
      image: "/placeholder.svg",
      category: "Wildlife",
      organizer: "Nigeria Bird Watching Society",
      maxParticipants: 50,
      currentRegistrations: 23,
      price: "₦45,000",
      highlights: [
        "Expert-led bird identification",
        "Professional binoculars provided",
        "Photography workshop",
        "Species documentation session"
      ]
    }
  ];

  const pastEvents = [
    {
      title: "Adventure Hiking Challenge 2024",
      date: "2024-06-15",
      description: "Challenging hiking event that brought together adventure enthusiasts from across Nigeria.",
      participants: 120,
      image: "/placeholder.svg"
    },
    {
      title: "Waterfall Conservation Awareness Day",
      date: "2024-05-22",
      description: "Educational event focused on environmental conservation and sustainable tourism practices.",
      participants: 200,
      image: "/placeholder.svg"
    },
    {
      title: "Youth Adventure Camp",
      date: "2024-04-10",
      description: "Three-day camping program designed to connect young people with nature and outdoor activities.",
      participants: 85,
      image: "/placeholder.svg"
    }
  ];

  const seasonalEvents = [
    {
      season: "Rainy Season (June - September)",
      events: [
        "Waterfall Peak Flow Celebrations",
        "Photography Intensive Workshops",
        "Cultural Rain Ceremonies"
      ],
      description: "The most spectacular time to visit with maximum water flow and lush vegetation."
    },
    {
      season: "Dry Season (October - May)",
      events: [
        "Adventure Hiking Challenges",
        "Camping Under the Stars",
        "Wildlife Observation Events"
      ],
      description: "Perfect weather for outdoor activities and extended hiking adventures."
    }
  ];

  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
              Events & Festivals
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Join us for special events that celebrate the natural beauty and cultural heritage of Owu Falls
            </p>
          </div>

          {/* Upcoming Events */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-emerald-400 animate-on-scroll">
              Upcoming Events
            </h2>
            <div className="space-y-8">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="glassmorphism-card p-8 rounded-lg hover:scale-105 transition-transform duration-300 animate-on-scroll">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <span className="inline-block px-3 py-1 bg-emerald-500 text-black text-sm font-semibold rounded-full mb-2">
                            {event.category}
                          </span>
                          <h3 className="text-2xl font-bold text-emerald-400 mb-2">
                            {event.title}
                          </h3>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-white">{event.price}</div>
                          <div className="text-sm text-gray-400">per person</div>
                        </div>
                      </div>
                      
                      <p className="text-gray-300 mb-4">{event.description}</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 text-sm">
                        <div className="flex items-center text-gray-400">
                          <Calendar className="w-4 h-4 mr-2 text-emerald-400" />
                          {new Date(event.date).toLocaleDateString('en-US', { 
                            weekday: 'long', 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })}
                        </div>
                        <div className="flex items-center text-gray-400">
                          <Clock className="w-4 h-4 mr-2 text-emerald-400" />
                          {event.time}
                        </div>
                        <div className="flex items-center text-gray-400">
                          <MapPin className="w-4 h-4 mr-2 text-emerald-400" />
                          {event.location}
                        </div>
                        <div className="flex items-center text-gray-400">
                          <User className="w-4 h-4 mr-2 text-emerald-400" />
                          {event.currentRegistrations}/{event.maxParticipants} registered
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <h4 className="font-semibold text-emerald-400 mb-2">Event Highlights:</h4>
                        <ul className="text-gray-300 space-y-1">
                          {event.highlights.map((highlight, index) => (
                            <li key={index} className="text-sm">• {highlight}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="text-sm text-gray-400 mb-4">
                        Organized by: {event.organizer}
                      </div>
                      
                      <div className="flex space-x-4">
                        <Button className="bg-emerald-500 hover:bg-emerald-600">
                          Register Now
                        </Button>
                        <Button variant="outline" className="border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-black">
                          Learn More
                        </Button>
                      </div>
                    </div>
                    
                    <div>
                      <img 
                        src={event.image} 
                        alt={event.title}
                        className="w-full h-64 object-cover rounded-lg"
                      />
                      
                      {/* Registration Progress */}
                      <div className="mt-4">
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-400">Registration Progress</span>
                          <span className="text-emerald-400">
                            {Math.round((event.currentRegistrations / event.maxParticipants) * 100)}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div 
                            className="bg-emerald-500 h-2 rounded-full transition-all duration-300"
                            style={{ 
                              width: `${(event.currentRegistrations / event.maxParticipants) * 100}%` 
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Seasonal Events */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-emerald-400 animate-on-scroll">
              Seasonal Calendar
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {seasonalEvents.map((season, index) => (
                <div key={index} className="glassmorphism-card p-6 rounded-lg animate-on-scroll">
                  <h3 className="text-xl font-bold mb-3 text-emerald-400">{season.season}</h3>
                  <p className="text-gray-300 mb-4">{season.description}</p>
                  <div>
                    <h4 className="font-semibold mb-2">Typical Events:</h4>
                    <ul className="text-gray-300 space-y-1">
                      {season.events.map((eventType, eventIndex) => (
                        <li key={eventIndex} className="text-sm">• {eventType}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Past Events */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-emerald-400 animate-on-scroll">
              Past Events
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {pastEvents.map((event, index) => (
                <div key={index} className="glassmorphism-card p-6 rounded-lg hover:scale-105 transition-transform duration-300 animate-on-scroll">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-lg font-bold text-emerald-400 mb-2">{event.title}</h3>
                  <p className="text-sm text-gray-400 mb-2">
                    {new Date(event.date).toLocaleDateString()}
                  </p>
                  <p className="text-gray-300 text-sm mb-3">{event.description}</p>
                  <div className="text-sm text-emerald-400">
                    {event.participants} participants
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Event Planning CTA */}
          <section className="glassmorphism-card p-12 rounded-lg text-center animate-on-scroll">
            <h2 className="text-3xl font-bold mb-6 gradient-text">
              Plan Your Own Event
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
              Interested in hosting a corporate retreat, wedding celebration, or special group event at Owu Falls? 
              Our stunning natural setting provides the perfect backdrop for memorable occasions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-emerald-500 hover:bg-emerald-600 px-8 py-4">
                Contact Event Planning
              </Button>
              <Button variant="outline" className="border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-black px-8 py-4">
                View Event Packages
              </Button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Events;
