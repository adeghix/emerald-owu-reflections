
import React from 'react';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';
import { MapPin, Clock, Car, Plane, Calendar, Thermometer, CloudRain, Sun, AlertTriangle, Backpack, Camera, ShieldCheck } from 'lucide-react';

const VisitInfo: React.FC = () => {
  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
              Plan Your Visit
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Everything you need to know for an unforgettable experience at Owu Falls
            </p>
          </div>

          {/* Quick Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="glassmorphism-card p-6 rounded-lg text-center animate-on-scroll">
              <Clock className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2 text-white">Operating Hours</h3>
              <p className="text-gray-300">6:00 AM - 6:00 PM Daily</p>
              <p className="text-sm text-emerald-400 mt-2">Visitor Center: 8:00 AM - 5:00 PM</p>
            </div>
            
            <div className="glassmorphism-card p-6 rounded-lg text-center animate-on-scroll">
              <Calendar className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2 text-white">Best Season</h3>
              <p className="text-gray-300">June - September</p>
              <p className="text-sm text-emerald-400 mt-2">Peak water flow period</p>
            </div>
            
            <div className="glassmorphism-card p-6 rounded-lg text-center animate-on-scroll">
              <MapPin className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2 text-white">Location</h3>
              <p className="text-gray-300">Owa Kajola, Kwara State</p>
              <p className="text-sm text-emerald-400 mt-2">2 hours from Ilorin</p>
            </div>
          </div>

          {/* Getting There */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-12 text-emerald-400 text-center animate-on-scroll">How to Get There</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="glassmorphism-card p-8 rounded-lg animate-on-scroll">
                <div className="flex items-center mb-6">
                  <Car className="w-8 h-8 text-emerald-400 mr-3" />
                  <h3 className="text-2xl font-bold text-white">By Road</h3>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-emerald-400 mb-2">From Lagos (5-6 hours)</h4>
                    <p className="text-gray-300 mb-2">Take Lagos-Ibadan Expressway → Ogbomoso → Ilorin → Owa Kajola</p>
                    <p className="text-sm text-gray-400">Distance: ~450km</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-emerald-400 mb-2">From Abuja (3-4 hours)</h4>
                    <p className="text-gray-300 mb-2">Take A2 Highway → Lokoja → Kabba → Ilorin → Owa Kajola</p>
                    <p className="text-sm text-gray-400">Distance: ~280km</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-emerald-400 mb-2">From Ilorin (2 hours)</h4>
                    <p className="text-gray-300 mb-2">Take Ilorin-Kabba Road → Follow signs to Owa Kajola</p>
                    <p className="text-sm text-gray-400">Distance: ~100km</p>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-yellow-900/30 rounded-lg border border-yellow-600/30">
                  <p className="text-yellow-400 text-sm">
                    <AlertTriangle className="w-4 h-4 inline mr-2" />
                    Last 20km is on unpaved road. 4WD recommended during rainy season.
                  </p>
                </div>
              </div>
              
              <div className="glassmorphism-card p-8 rounded-lg animate-on-scroll">
                <div className="flex items-center mb-6">
                  <Plane className="w-8 h-8 text-emerald-400 mr-3" />
                  <h3 className="text-2xl font-bold text-white">By Air + Road</h3>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-emerald-400 mb-2">Ilorin Airport (ILR)</h4>
                    <p className="text-gray-300 mb-2">Closest airport to Owu Falls</p>
                    <p className="text-sm text-gray-400">2.5 hours drive from airport</p>
                    <p className="text-sm text-gray-400">Daily flights from Lagos and Abuja</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-emerald-400 mb-2">Lagos Airport (LOS)</h4>
                    <p className="text-gray-300 mb-2">International gateway</p>
                    <p className="text-sm text-gray-400">5-6 hours drive from airport</p>
                    <p className="text-sm text-gray-400">Most international connections</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-emerald-400 mb-2">Abuja Airport (ABV)</h4>
                    <p className="text-gray-300 mb-2">Capital city gateway</p>
                    <p className="text-sm text-gray-400">3-4 hours drive from airport</p>
                    <p className="text-sm text-gray-400">Good domestic connections</p>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-emerald-900/30 rounded-lg border border-emerald-600/30">
                  <p className="text-emerald-400 text-sm">
                    💡 We can arrange airport pickup and transport. Contact us for details.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Weather & Seasons */}
          <section className="mb-20 glassmorphism-card p-12 rounded-lg animate-on-scroll">
            <h2 className="text-3xl font-bold mb-12 text-emerald-400 text-center">Weather & Best Times to Visit</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-white flex items-center">
                  <CloudRain className="w-6 h-6 text-blue-400 mr-3" />
                  Rainy Season (April - October)
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Water Volume:</span>
                    <span className="text-emerald-400 font-semibold">Peak (Best for viewing)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Temperature:</span>
                    <span className="text-white">22-28°C</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Trail Conditions:</span>
                    <span className="text-yellow-400">Moderate to Challenging</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Photography:</span>
                    <span className="text-emerald-400">Excellent</span>
                  </div>
                </div>
                <p className="text-sm text-gray-400 mt-4">
                  Best months: June, July, August, September
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-6 text-white flex items-center">
                  <Sun className="w-6 h-6 text-yellow-400 mr-3" />
                  Dry Season (November - March)
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Water Volume:</span>
                    <span className="text-orange-400">Reduced</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Temperature:</span>
                    <span className="text-white">25-35°C</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Trail Conditions:</span>
                    <span className="text-emerald-400">Easy to Moderate</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Photography:</span>
                    <span className="text-yellow-400">Good</span>
                  </div>
                </div>
                <p className="text-sm text-gray-400 mt-4">
                  Best for hiking and cultural experiences
                </p>
              </div>
            </div>
            
            <div className="border-t border-white/10 pt-8">
              <h4 className="text-xl font-bold mb-4 text-emerald-400">Monthly Weather Guide</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {[
                  { month: 'Jan', temp: '28°C', rain: 'Low', flow: 'Low' },
                  { month: 'Feb', temp: '31°C', rain: 'Low', flow: 'Low' },
                  { month: 'Mar', temp: '33°C', rain: 'Low', flow: 'Low' },
                  { month: 'Apr', temp: '32°C', rain: 'Medium', flow: 'Medium' },
                  { month: 'May', temp: '29°C', rain: 'High', flow: 'High' },
                  { month: 'Jun', temp: '26°C', rain: 'High', flow: 'Peak' },
                  { month: 'Jul', temp: '25°C', rain: 'High', flow: 'Peak' },
                  { month: 'Aug', temp: '25°C', rain: 'High', flow: 'Peak' },
                  { month: 'Sep', temp: '26°C', rain: 'High', flow: 'Peak' },
                  { month: 'Oct', temp: '28°C', rain: 'Medium', flow: 'High' },
                  { month: 'Nov', temp: '30°C', rain: 'Low', flow: 'Medium' },
                  { month: 'Dec', temp: '29°C', rain: 'Low', flow: 'Low' }
                ].map((data) => (
                  <div key={data.month} className="text-center p-3 bg-black/30 rounded-lg">
                    <div className="font-bold text-white">{data.month}</div>
                    <div className="text-sm text-gray-300">{data.temp}</div>
                    <div className="text-xs text-emerald-400">{data.flow}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* What to Bring */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-12 text-emerald-400 text-center animate-on-scroll">What to Bring</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="glassmorphism-card p-6 rounded-lg animate-on-scroll">
                <Backpack className="w-12 h-12 text-emerald-400 mb-4" />
                <h3 className="text-xl font-bold mb-4 text-white">Essential Gear</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Sturdy hiking boots with good grip</li>
                  <li>• Waterproof backpack</li>
                  <li>• Quick-dry clothing</li>
                  <li>• Rain jacket/poncho</li>
                  <li>• Hat and sunglasses</li>
                  <li>• Personal first aid kit</li>
                </ul>
              </div>
              
              <div className="glassmorphism-card p-6 rounded-lg animate-on-scroll">
                <Camera className="w-12 h-12 text-emerald-400 mb-4" />
                <h3 className="text-xl font-bold mb-4 text-white">Photography</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Camera with extra batteries</li>
                  <li>• Waterproof camera bag</li>
                  <li>• Tripod for long exposures</li>
                  <li>• Lens cleaning kit</li>
                  <li>• Power bank</li>
                  <li>• Memory cards</li>
                </ul>
              </div>
              
              <div className="glassmorphism-card p-6 rounded-lg animate-on-scroll">
                <Thermometer className="w-12 h-12 text-emerald-400 mb-4" />
                <h3 className="text-xl font-bold mb-4 text-white">Comfort Items</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Plenty of water (2-3 liters)</li>
                  <li>• Energy snacks</li>
                  <li>• Insect repellent</li>
                  <li>• Sunscreen (SPF 30+)</li>
                  <li>• Towel</li>
                  <li>• Plastic bags for wet clothes</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Safety Guidelines */}
          <section className="mb-20 glassmorphism-card p-12 rounded-lg animate-on-scroll">
            <h2 className="text-3xl font-bold mb-8 text-emerald-400 text-center">Safety Guidelines</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-white flex items-center">
                  <ShieldCheck className="w-6 h-6 text-emerald-400 mr-3" />
                  General Safety
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Always hike with a guide</li>
                  <li>• Stay on marked trails</li>
                  <li>• Never swim alone</li>
                  <li>• Check weather conditions before visiting</li>
                  <li>• Inform someone of your itinerary</li>
                  <li>• Carry emergency contact numbers</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4 text-white flex items-center">
                  <AlertTriangle className="w-6 h-6 text-yellow-400 mr-3" />
                  Important Warnings
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Rock surfaces are slippery when wet</li>
                  <li>• Flash floods possible during heavy rain</li>
                  <li>• No swimming directly under the falls</li>
                  <li>• Be aware of wildlife</li>
                  <li>• Cell phone coverage is limited</li>
                  <li>• Avoid visiting alone</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-red-900/30 rounded-lg border border-red-600/30">
              <h4 className="text-red-400 font-bold mb-2">Emergency Contacts</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-300">Tourist Police: +234 xxx xxx xxxx</p>
                  <p className="text-gray-300">Medical Emergency: +234 xxx xxx xxxx</p>
                </div>
                <div>
                  <p className="text-gray-300">Site Management: +234 xxx xxx xxxx</p>
                  <p className="text-gray-300">Emergency Services: 199</p>
                </div>
              </div>
            </div>
          </section>

          {/* Accommodation */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-12 text-emerald-400 text-center animate-on-scroll">Accommodation Options</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="glassmorphism-card p-6 rounded-lg animate-on-scroll">
                <h3 className="text-xl font-bold mb-4 text-emerald-400">Near the Falls</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-white">Owu Falls Guesthouse</h4>
                    <p className="text-sm text-gray-300">Basic accommodation, 2km from falls</p>
                    <p className="text-sm text-emerald-400">₦8,000 - ₦15,000/night</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Camping Sites</h4>
                    <p className="text-sm text-gray-300">Designated camping areas</p>
                    <p className="text-sm text-emerald-400">₦2,000/person/night</p>
                  </div>
                </div>
              </div>
              
              <div className="glassmorphism-card p-6 rounded-lg animate-on-scroll">
                <h3 className="text-xl font-bold mb-4 text-emerald-400">Ilorin City (2 hours)</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-white">Luxury Hotels</h4>
                    <p className="text-sm text-gray-300">4-5 star accommodations</p>
                    <p className="text-sm text-emerald-400">₦25,000 - ₦50,000/night</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Budget Hotels</h4>
                    <p className="text-sm text-gray-300">Clean, comfortable options</p>
                    <p className="text-sm text-emerald-400">₦8,000 - ₦20,000/night</p>
                  </div>
                </div>
              </div>
              
              <div className="glassmorphism-card p-6 rounded-lg animate-on-scroll">
                <h3 className="text-xl font-bold mb-4 text-emerald-400">Recommended</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-white">Package Deals</h4>
                    <p className="text-sm text-gray-300">Accommodation + transport + guides</p>
                    <p className="text-sm text-emerald-400">Starting ₦35,000/person</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Group Bookings</h4>
                    <p className="text-sm text-gray-300">Special rates for 10+ people</p>
                    <p className="text-sm text-emerald-400">Contact for quotes</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Booking CTA */}
          <section className="text-center glassmorphism-card p-12 rounded-lg animate-on-scroll">
            <h2 className="text-3xl font-bold mb-6 gradient-text">Ready to Plan Your Visit?</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Let us help you create the perfect itinerary for your Owu Falls adventure. 
              Our local guides will ensure you have a safe and memorable experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-emerald-500 hover:bg-emerald-600">
                <Link to="/booking">Book Your Tour</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-black">
                <Link to="/contact">Ask Questions</Link>
              </Button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default VisitInfo;
