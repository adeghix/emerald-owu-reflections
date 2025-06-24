
import React from 'react';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Users, Clock, Music, Camera, Utensils } from 'lucide-react';

const Events: React.FC = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: 'Owu Falls Photography Festival',
      date: '2024-08-15',
      time: '6:00 AM - 6:00 PM',
      location: 'Owu Falls Main Site',
      category: 'Photography',
      participants: '50 photographers',
      price: '₦25,000',
      image: '/placeholder.svg',
      description: 'Annual gathering of photographers from across Nigeria to capture the falls at peak season.',
      highlights: ['Professional workshops', 'Equipment exhibition', 'Photo competition', 'Sunrise shooting session']
    },
    {
      id: 2,
      title: 'Cultural Heritage Festival',
      date: '2024-09-22',
      time: '9:00 AM - 8:00 PM',
      location: 'Owu Falls Cultural Center',
      category: 'Culture',
      participants: '200+ attendees',
      price: '₦15,000',
      image: '/placeholder.svg',
      description: 'Celebrate the rich Yoruba heritage and spiritual significance of Owu Falls.',
      highlights: ['Traditional music', 'Storytelling sessions', 'Local crafts market', 'Cultural performances']
    },
    {
      id: 3,
      title: 'Eco-Adventure Challenge',
      date: '2024-10-12',
      time: '7:00 AM - 5:00 PM',
      location: 'Multiple Trail Points',
      category: 'Adventure',
      participants: '100 adventurers',
      price: '₦30,000',
      image: '/placeholder.svg',
      description: 'Multi-activity challenge including hiking, photography, and conservation activities.',
      highlights: ['Guided nature hikes', 'Bird watching contest', 'Conservation workshop', 'Team challenges']
    }
  ];

  const pastEvents = [
    {
      id: 4,
      title: 'Annual Waterfall Festival 2023',
      date: '2023-08-20',
      participants: '500+ visitors',
      image: '/placeholder.svg',
      description: 'Our biggest celebration of the year featuring local music, food, and cultural displays.',
      gallery: ['12 photos', '3 videos']
    },
    {
      id: 5,
      title: 'International Bird Watching Day',
      date: '2023-05-14',
      participants: '75 bird enthusiasts',
      image: '/placeholder.svg',
      description: 'Special event highlighting the 50+ bird species found around Owu Falls.',
      gallery: ['25 photos', '2 videos']
    },
    {
      id: 6,
      title: 'Youth Environmental Summit',
      date: '2023-06-05',
      participants: '120 students',
      image: '/placeholder.svg',
      description: 'Educational summit focused on conservation and environmental protection.',
      gallery: ['18 photos', '1 video']
    }
  ];

  const seasonalEvents = [
    {
      season: 'Rainy Season (June - September)',
      events: [
        'Peak Flow Photography Tours',
        'Waterfall Power Exhibitions',
        'Rainy Season Cultural Ceremonies'
      ],
      description: 'When the falls are at their most spectacular with maximum water flow.'
    },
    {
      season: 'Dry Season (October - May)',
      events: [
        'Hiking Championships',
        'Rock Climbing Competitions',
        'Educational Field Trips'
      ],
      description: 'Perfect weather for outdoor activities and extended hiking expeditions.'
    },
    {
      season: 'Year-Round',
      events: [
        'Monthly Full Moon Tours',
        'Weekend Photography Workshops',
        'Corporate Team Building Events'
      ],
      description: 'Regular events that happen throughout the year regardless of season.'
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
              Join us for special celebrations, cultural festivals, and unique experiences at Nigeria's tallest waterfall
            </p>
          </div>

          {/* Upcoming Events */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-12 text-emerald-400 text-center animate-on-scroll">
              Upcoming Events
            </h2>
            <div className="space-y-8">
              {upcomingEvents.map((event, index) => (
                <div key={event.id} className="glassmorphism-card p-8 rounded-lg animate-on-scroll hover:scale-[1.02] transition-transform duration-300">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-1">
                      <img 
                        src={event.image} 
                        alt={event.title}
                        className="w-full h-48 object-cover rounded-lg"
                      />
                    </div>
                    <div className="lg:col-span-2">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-2">{event.title}</h3>
                          <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                            <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full">
                              {event.category}
                            </span>
                            <span className="text-emerald-400 font-semibold">{event.price}</span>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-gray-300 mb-6">{event.description}</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <div className="flex items-center text-gray-300">
                          <Calendar className="w-5 h-5 text-emerald-400 mr-2" />
                          <span>{new Date(event.date).toLocaleDateString('en-US', { 
                            weekday: 'long', 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })}</span>
                        </div>
                        <div className="flex items-center text-gray-300">
                          <Clock className="w-5 h-5 text-emerald-400 mr-2" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center text-gray-300">
                          <MapPin className="w-5 h-5 text-emerald-400 mr-2" />
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center text-gray-300">
                          <Users className="w-5 h-5 text-emerald-400 mr-2" />
                          <span>{event.participants}</span>
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-emerald-400 mb-3">Event Highlights</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {event.highlights.map((highlight, idx) => (
                            <div key={idx} className="text-sm text-gray-300">• {highlight}</div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex gap-4">
                        <Button className="bg-emerald-500 hover:bg-emerald-600">
                          Register Now
                        </Button>
                        <Button variant="outline" className="border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-black">
                          Learn More
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Seasonal Events Calendar */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-12 text-emerald-400 text-center animate-on-scroll">
              Seasonal Event Calendar
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {seasonalEvents.map((season, index) => (
                <div key={index} className="glassmorphism-card p-6 rounded-lg animate-on-scroll">
                  <h3 className="text-xl font-bold text-emerald-400 mb-4">{season.season}</h3>
                  <p className="text-gray-300 mb-6 text-sm">{season.description}</p>
                  <div className="space-y-3">
                    {season.events.map((event, idx) => (
                      <div key={idx} className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                        <span className="text-sm">{event}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Past Events */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-12 text-emerald-400 text-center animate-on-scroll">
              Past Events Gallery
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pastEvents.map((event, index) => (
                <div key={event.id} className="glassmorphism-card p-6 rounded-lg animate-on-scroll hover:scale-105 transition-transform duration-300">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-lg font-bold text-white mb-2">{event.title}</h3>
                  <div className="flex items-center text-gray-400 text-sm mb-3">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{new Date(event.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center text-gray-400 text-sm mb-4">
                    <Users className="w-4 h-4 mr-2" />
                    <span>{event.participants}</span>
                  </div>
                  <p className="text-gray-300 text-sm mb-4">{event.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="text-emerald-400 text-sm">
                      {event.gallery.join(' • ')}
                    </div>
                    <Button size="sm" variant="outline" className="border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-black">
                      View Gallery
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Event Types */}
          <section className="mb-20 glassmorphism-card p-12 rounded-lg animate-on-scroll">
            <h2 className="text-3xl font-bold mb-12 text-emerald-400 text-center">Types of Events We Host</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <Camera className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">Photography</h3>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• Workshops</li>
                  <li>• Competitions</li>
                  <li>• Photo walks</li>
                  <li>• Exhibitions</li>
                </ul>
              </div>
              
              <div className="text-center">
                <Music className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">Cultural</h3>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• Traditional festivals</li>
                  <li>• Music performances</li>
                  <li>• Storytelling</li>
                  <li>• Art exhibitions</li>
                </ul>
              </div>
              
              <div className="text-center">
                <Users className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">Adventure</h3>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• Hiking challenges</li>
                  <li>• Rock climbing</li>
                  <li>• Team building</li>
                  <li>• Survival skills</li>
                </ul>
              </div>
              
              <div className="text-center">
                <Utensils className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">Food & Culture</h3>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• Local cuisine</li>
                  <li>• Cooking workshops</li>
                  <li>• Food festivals</li>
                  <li>• Farm tours</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Private Event Booking */}
          <section className="glassmorphism-card p-12 rounded-lg text-center animate-on-scroll">
            <h2 className="text-3xl font-bold mb-6 gradient-text">Host Your Own Event</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Looking to organize a private event, corporate retreat, or special celebration? 
              Owu Falls provides a stunning natural backdrop for memorable gatherings.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-emerald-400 mb-2">Corporate Events</h3>
                <p className="text-sm text-gray-300">Team building, conferences, and corporate retreats</p>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold text-emerald-400 mb-2">Private Celebrations</h3>
                <p className="text-sm text-gray-300">Weddings, anniversaries, and milestone celebrations</p>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold text-emerald-400 mb-2">Educational Groups</h3>
                <p className="text-sm text-gray-300">School trips, university research, and learning expeditions</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-emerald-500 hover:bg-emerald-600">
                <Link to="/contact">Plan Your Event</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-black">
                <Link to="/booking">Book Regular Tour</Link>
              </Button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Events;
