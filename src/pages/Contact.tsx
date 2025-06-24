
import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { MapPin, Clock, User, Calendar } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    visitDate: '',
    groupSize: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Thank you for your message! We will get back to you soon.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        visitDate: '',
        groupSize: ''
      });
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
              Contact Us
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Get in touch to plan your visit or ask any questions about Owu Falls
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="glassmorphism-card p-8 rounded-lg animate-on-scroll">
              <h2 className="text-2xl font-bold mb-6 text-emerald-400">Send us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="bg-gray-800 border-white/20 text-white"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-gray-800 border-white/20 text-white"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="bg-gray-800 border-white/20 text-white"
                      placeholder="+234 xxx xxx xxxx"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="groupSize">Group Size</Label>
                    <select
                      id="groupSize"
                      name="groupSize"
                      value={formData.groupSize}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 bg-gray-800 border border-white/20 text-white rounded-md"
                    >
                      <option value="">Select group size</option>
                      <option value="1">Solo traveler</option>
                      <option value="2-4">2-4 people</option>
                      <option value="5-10">5-10 people</option>
                      <option value="10+">10+ people</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="visitDate">Planned Visit Date</Label>
                    <Input
                      id="visitDate"
                      name="visitDate"
                      type="date"
                      value={formData.visitDate}
                      onChange={handleInputChange}
                      className="bg-gray-800 border-white/20 text-white"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 bg-gray-800 border border-white/20 text-white rounded-md"
                    >
                      <option value="">Select a subject</option>
                      <option value="booking">Tour Booking</option>
                      <option value="information">General Information</option>
                      <option value="accessibility">Accessibility</option>
                      <option value="group">Group Bookings</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="bg-gray-800 border-white/20 text-white resize-none"
                    placeholder="Tell us about your planned visit, any specific requirements, or questions you have..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-emerald-500 hover:bg-emerald-600 py-3"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>

            {/* Contact Info & Map */}
            <div className="space-y-8">
              {/* Contact Information */}
              <div className="glassmorphism-card p-8 rounded-lg animate-on-scroll">
                <h2 className="text-2xl font-bold mb-6 text-emerald-400">Get in Touch</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-emerald-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Location</h3>
                      <p className="text-gray-300">Owu Falls Tourism Center<br />Kwara State, Nigeria</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Clock className="w-6 h-6 text-emerald-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Operating Hours</h3>
                      <p className="text-gray-300">
                        Daily: 6:00 AM - 6:00 PM<br />
                        Visitor Center: 8:00 AM - 5:00 PM
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <User className="w-6 h-6 text-emerald-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Contact Information</h3>
                      <p className="text-gray-300">
                        Phone: +234 xxx xxx xxxx<br />
                        Email: info@owufalls.com<br />
                        WhatsApp: +234 xxx xxx xxxx
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Calendar className="w-6 h-6 text-emerald-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Best Time to Visit</h3>
                      <p className="text-gray-300">
                        Peak Season: June - September<br />
                        Off Season: October - May
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="glassmorphism-card p-4 rounded-lg animate-on-scroll">
                <h3 className="text-xl font-bold mb-4 text-emerald-400">Find Us</h3>
                <div className="relative h-64 bg-gray-800 rounded-lg overflow-hidden">
                  {/* Placeholder for Google Map */}
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                    <div className="text-center">
                      <MapPin className="w-12 h-12 mx-auto mb-2 text-emerald-400" />
                      <p>Interactive Map</p>
                      <p className="text-sm">Owu Falls, Kwara State</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 glassmorphism opacity-50"></div>
                </div>
              </div>

              {/* Emergency Contacts */}
              <div className="glassmorphism-card p-6 rounded-lg animate-on-scroll">
                <h3 className="text-xl font-bold mb-4 text-yellow-400">Emergency Contacts</h3>
                <div className="space-y-2 text-sm text-gray-300">
                  <p><span className="font-semibold">Emergency Services:</span> 199</p>
                  <p><span className="font-semibold">Tourist Police:</span> +234 xxx xxx xxxx</p>
                  <p><span className="font-semibold">Medical Emergency:</span> +234 xxx xxx xxxx</p>
                  <p><span className="font-semibold">Site Management:</span> +234 xxx xxx xxxx</p>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Quick Links */}
          <section className="mt-16 glassmorphism-card p-8 rounded-lg animate-on-scroll">
            <h2 className="text-2xl font-bold mb-6 text-emerald-400">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2">How do I book a tour?</h3>
                <p className="text-gray-300 text-sm mb-4">
                  You can book tours through our online booking system, by phone, or by visiting our visitor center.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">What should I bring?</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Comfortable hiking shoes, water, sun protection, and a camera. See our visit info page for a complete list.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Is it suitable for children?</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Yes! We have family-friendly trails and activities suitable for children of all ages.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Can I visit during rainy season?</h3>
                <p className="text-gray-300 text-sm mb-4">
                  The falls are most spectacular during rainy season, though trails may be more challenging.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Contact;
