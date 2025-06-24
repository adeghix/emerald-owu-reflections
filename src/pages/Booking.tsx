
import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Calendar, Users, Clock, MapPin, Star, Check, Camera, Mountain, Heart, Zap } from 'lucide-react';

const Booking: React.FC = () => {
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState('');
  const [groupSize, setGroupSize] = useState('');
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    specialRequests: '',
    emergencyContact: '',
    emergencyPhone: ''
  });

  const tourPackages = [
    {
      id: 'basic',
      name: 'Classic Waterfall Tour',
      price: 15000,
      duration: '4-5 hours',
      groupSize: '1-8 people',
      difficulty: 'Easy to Moderate',
      icon: <Mountain className="w-8 h-8" />,
      image: '/placeholder.svg',
      features: [
        'Professional guide',
        'Safety equipment',
        'Trail access',
        'Basic photography tips',
        'Refreshments',
        'Certificate of completion'
      ],
      description: 'Perfect for first-time visitors and families. Includes guided hike to the main viewpoint with plenty of time for photos and relaxation.',
      highlights: ['Main waterfall viewpoint', 'Natural pools', 'Forest walk', 'Cultural stories']
    },
    {
      id: 'photography',
      name: 'Photography Expedition',
      price: 25000,
      duration: '6-8 hours',
      groupSize: '1-6 people',
      difficulty: 'Moderate',
      icon: <Camera className="w-8 h-8" />,
      image: '/placeholder.svg',
      features: [
        'Professional photography guide',
        'Early morning access',
        'Equipment advice',
        'Best viewpoints tour',
        'Photo editing tips',
        'Digital photo package'
      ],
      description: 'Designed for photography enthusiasts. Includes golden hour sessions, multiple viewpoints, and professional guidance for capturing the perfect shot.',
      highlights: ['Sunrise photography', 'Multiple viewpoints', 'Long exposure techniques', 'Wildlife photography']
    },
    {
      id: 'cultural',
      name: 'Cultural Heritage Experience',
      price: 20000,
      duration: '5-6 hours',
      groupSize: '1-12 people',
      difficulty: 'Easy',
      icon: <Heart className="w-8 h-8" />,
      image: '/placeholder.svg',
      features: [
        'Cultural historian guide',
        'Traditional storytelling',
        'Local craft demonstration',
        'Traditional lunch',
        'Cultural performance',
        'Souvenir package'
      ],
      description: 'Immerse yourself in the rich Yoruba heritage and spiritual significance of Owu Falls with local community guides.',
      highlights: ['Traditional ceremonies', 'Local crafts', 'Cultural stories', 'Community interaction']
    },
    {
      id: 'adventure',
      name: 'Ultimate Adventure Package',
      price: 35000,
      duration: '8-10 hours',
      groupSize: '1-6 people',
      difficulty: 'Challenging',
      icon: <Zap className="w-8 h-8" />,
      image: '/placeholder.svg',
      features: [
        'Expert adventure guide',
        'Multiple trails access',
        'Rock climbing experience',
        'Swimming in natural pools',
        'Picnic lunch',
        'Adventure certificate'
      ],
      description: 'For thrill-seekers and experienced hikers. Includes challenging trails, rock climbing, and exclusive access to remote viewpoints.',
      highlights: ['Advanced trails', 'Rock climbing', 'Remote viewpoints', 'Adventure challenges']
    }
  ];

  const addOns = [
    { id: 'transport', name: 'Round-trip Transport from Ilorin', price: 8000 },
    { id: 'accommodation', name: 'Overnight Accommodation', price: 12000 },
    { id: 'meals', name: 'Traditional Meals Package', price: 5000 },
    { id: 'equipment', name: 'Photography Equipment Rental', price: 3000 },
    { id: 'video', name: 'Professional Video Documentation', price: 15000 }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Booking request submitted! We will contact you within 24 hours to confirm your reservation.');
  };

  const selectedPackageData = tourPackages.find(pkg => pkg.id === selectedPackage);
  const basePrice = selectedPackageData?.price || 0;
  const groupSizeNum = parseInt(groupSize) || 1;
  const totalPrice = basePrice * groupSizeNum;

  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
              Book Your Adventure
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Choose your perfect Owu Falls experience and create memories that will last a lifetime
            </p>
          </div>

          {/* Booking Steps */}
          <div className="flex justify-center mb-12">
            <div className="flex items-center space-x-8">
              {[1, 2, 3].map((step) => (
                <div key={step} className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                    currentStep >= step ? 'bg-emerald-500 text-black' : 'bg-gray-600 text-gray-300'
                  }`}>
                    {currentStep > step ? <Check className="w-5 h-5" /> : step}
                  </div>
                  <span className={`ml-2 ${
                    currentStep >= step ? 'text-emerald-400' : 'text-gray-400'
                  }`}>
                    {step === 1 ? 'Choose Package' : step === 2 ? 'Select Date & Size' : 'Personal Details'}
                  </span>
                  {step < 3 && <div className="w-8 h-0.5 bg-gray-600 ml-4"></div>}
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Booking Form */}
            <div className="lg:col-span-2">
              {/* Step 1: Package Selection */}
              {currentStep === 1 && (
                <div className="space-y-8 animate-on-scroll">
                  <h2 className="text-3xl font-bold text-emerald-400 mb-8">Choose Your Experience</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {tourPackages.map((pkg) => (
                      <div
                        key={pkg.id}
                        onClick={() => setSelectedPackage(pkg.id)}
                        className={`glassmorphism-card p-6 rounded-lg cursor-pointer transition-all duration-300 hover:scale-105 ${
                          selectedPackage === pkg.id ? 'ring-2 ring-emerald-500' : ''
                        }`}
                      >
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <div className="text-emerald-400">{pkg.icon}</div>
                            <h3 className="text-xl font-bold text-white">{pkg.name}</h3>
                          </div>
                          {selectedPackage === pkg.id && (
                            <Check className="w-6 h-6 text-emerald-400" />
                          )}
                        </div>
                        
                        <img 
                          src={pkg.image} 
                          alt={pkg.name}
                          className="w-full h-40 object-cover rounded-lg mb-4"
                        />
                        
                        <p className="text-gray-300 text-sm mb-4">{pkg.description}</p>
                        
                        <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                          <div className="flex items-center text-gray-300">
                            <Clock className="w-4 h-4 mr-2 text-emerald-400" />
                            <span>{pkg.duration}</span>
                          </div>
                          <div className="flex items-center text-gray-300">
                            <Users className="w-4 h-4 mr-2 text-emerald-400" />
                            <span>{pkg.groupSize}</span>
                          </div>
                        </div>
                        
                        <div className="mb-4">
                          <h4 className="text-emerald-400 font-semibold mb-2">Included:</h4>
                          <div className="grid grid-cols-1 gap-1">
                            {pkg.features.slice(0, 4).map((feature, idx) => (
                              <div key={idx} className="text-sm text-gray-300">• {feature}</div>
                            ))}
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="text-2xl font-bold text-emerald-400">₦{pkg.price.toLocaleString()}</span>
                            <span className="text-gray-400 text-sm">/person</span>
                          </div>
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            pkg.difficulty === 'Easy' ? 'bg-green-500/20 text-green-400' :
                            pkg.difficulty === 'Easy to Moderate' ? 'bg-yellow-500/20 text-yellow-400' :
                            pkg.difficulty === 'Moderate' ? 'bg-orange-500/20 text-orange-400' :
                            'bg-red-500/20 text-red-400'
                          }`}>
                            {pkg.difficulty}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="text-center">
                    <Button
                      onClick={() => setCurrentStep(2)}
                      disabled={!selectedPackage}
                      className="bg-emerald-500 hover:bg-emerald-600 px-8 py-3"
                    >
                      Continue to Date Selection
                    </Button>
                  </div>
                </div>
              )}

              {/* Step 2: Date and Group Size */}
              {currentStep === 2 && (
                <div className="space-y-8 animate-on-scroll">
                  <h2 className="text-3xl font-bold text-emerald-400 mb-8">Select Date & Group Size</h2>
                  
                  <div className="glassmorphism-card p-8 rounded-lg">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <Label htmlFor="date" className="text-lg font-semibold text-white mb-4 block">
                          Preferred Date
                        </Label>
                        <Input
                          id="date"
                          type="date"
                          value={selectedDate}
                          onChange={(e) => setSelectedDate(e.target.value)}
                          min={new Date().toISOString().split('T')[0]}
                          className="bg-gray-800 border-white/20 text-white h-12"
                        />
                        <p className="text-sm text-gray-400 mt-2">
                          Best months: June - September (peak water flow)
                        </p>
                      </div>
                      
                      <div>
                        <Label htmlFor="groupSize" className="text-lg font-semibold text-white mb-4 block">
                          Group Size
                        </Label>
                        <select
                          id="groupSize"
                          value={groupSize}
                          onChange={(e) => setGroupSize(e.target.value)}
                          className="w-full h-12 px-3 bg-gray-800 border border-white/20 text-white rounded-md"
                        >
                          <option value="">Select group size</option>
                          {[...Array(12)].map((_, i) => (
                            <option key={i + 1} value={i + 1}>
                              {i + 1} {i === 0 ? 'person' : 'people'}
                            </option>
                          ))}
                        </select>
                        <p className="text-sm text-gray-400 mt-2">
                          Group discounts available for 6+ people
                        </p>
                      </div>
                    </div>
                    
                    {/* Add-ons */}
                    <div className="mt-8">
                      <h3 className="text-xl font-bold text-emerald-400 mb-4">Optional Add-ons</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {addOns.map((addon) => (
                          <div key={addon.id} className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg">
                            <div>
                              <h4 className="text-white font-semibold">{addon.name}</h4>
                              <p className="text-emerald-400 font-bold">₦{addon.price.toLocaleString()}</p>
                            </div>
                            <input
                              type="checkbox"
                              className="w-5 h-5 text-emerald-500"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <Button
                      onClick={() => setCurrentStep(1)}
                      variant="outline"
                      className="border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-black px-8 py-3"
                    >
                      Back
                    </Button>
                    <Button
                      onClick={() => setCurrentStep(3)}
                      disabled={!selectedDate || !groupSize}
                      className="bg-emerald-500 hover:bg-emerald-600 px-8 py-3"
                    >
                      Continue to Details
                    </Button>
                  </div>
                </div>
              )}

              {/* Step 3: Personal Details */}
              {currentStep === 3 && (
                <div className="space-y-8 animate-on-scroll">
                  <h2 className="text-3xl font-bold text-emerald-400 mb-8">Personal Details</h2>
                  
                  <form onSubmit={handleSubmit} className="glassmorphism-card p-8 rounded-lg space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          required
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className="bg-gray-800 border-white/20 text-white"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          required
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className="bg-gray-800 border-white/20 text-white"
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
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="bg-gray-800 border-white/20 text-white"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="emergencyContact">Emergency Contact Name *</Label>
                        <Input
                          id="emergencyContact"
                          name="emergencyContact"
                          required
                          value={formData.emergencyContact}
                          onChange={handleInputChange}
                          className="bg-gray-800 border-white/20 text-white"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="emergencyPhone">Emergency Contact Phone *</Label>
                        <Input
                          id="emergencyPhone"
                          name="emergencyPhone"
                          type="tel"
                          required
                          value={formData.emergencyPhone}
                          onChange={handleInputChange}
                          className="bg-gray-800 border-white/20 text-white"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="specialRequests">Special Requests or Dietary Requirements</Label>
                      <Textarea
                        id="specialRequests"
                        name="specialRequests"
                        value={formData.specialRequests}
                        onChange={handleInputChange}
                        rows={4}
                        className="bg-gray-800 border-white/20 text-white"
                        placeholder="Any special requirements, dietary restrictions, mobility concerns, or other information we should know..."
                      />
                    </div>
                    
                    <div className="border-t border-white/10 pt-6">
                      <div className="flex items-center gap-2 mb-4">
                        <input type="checkbox" required className="w-4 h-4" />
                        <span className="text-sm text-gray-300">
                          I agree to the terms and conditions and understand the risks involved in outdoor activities
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-2 mb-6">
                        <input type="checkbox" className="w-4 h-4" />
                        <span className="text-sm text-gray-300">
                          I would like to receive updates and special offers via email
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <Button
                        type="button"
                        onClick={() => setCurrentStep(2)}
                        variant="outline"
                        className="border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-black px-8 py-3"
                      >
                        Back
                      </Button>
                      <Button
                        type="submit"
                        className="bg-emerald-500 hover:bg-emerald-600 px-8 py-3"
                      >
                        Submit Booking Request
                      </Button>
                    </div>
                  </form>
                </div>
              )}
            </div>

            {/* Booking Summary */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Summary Card */}
                <div className="glassmorphism-card p-6 rounded-lg animate-on-scroll">
                  <h3 className="text-xl font-bold text-emerald-400 mb-6">Booking Summary</h3>
                  
                  {selectedPackageData && (
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="text-emerald-400">{selectedPackageData.icon}</div>
                        <div>
                          <h4 className="font-semibold text-white">{selectedPackageData.name}</h4>
                          <p className="text-sm text-gray-400">{selectedPackageData.duration}</p>
                        </div>
                      </div>
                      
                      {selectedDate && (
                        <div className="flex items-center justify-between">
                          <span className="text-gray-300">Date:</span>
                          <span className="text-white font-semibold">
                            {new Date(selectedDate).toLocaleDateString('en-US', {
                              weekday: 'long',
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })}
                          </span>
                        </div>
                      )}
                      
                      {groupSize && (
                        <div className="flex items-center justify-between">
                          <span className="text-gray-300">Group Size:</span>
                          <span className="text-white font-semibold">
                            {groupSize} {parseInt(groupSize) === 1 ? 'person' : 'people'}
                          </span>
                        </div>
                      )}
                      
                      <div className="border-t border-white/10 pt-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-gray-300">Base Price:</span>
                          <span className="text-white">₦{basePrice.toLocaleString()} × {groupSize || 1}</span>
                        </div>
                        
                        {groupSizeNum >= 6 && (
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-emerald-400">Group Discount (10%):</span>
                            <span className="text-emerald-400">-₦{(totalPrice * 0.1).toLocaleString()}</span>
                          </div>
                        )}
                        
                        <div className="border-t border-white/10 pt-2">
                          <div className="flex items-center justify-between">
                            <span className="text-lg font-bold text-white">Total:</span>
                            <span className="text-2xl font-bold text-emerald-400">
                              ₦{(groupSizeNum >= 6 ? totalPrice * 0.9 : totalPrice).toLocaleString()}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {!selectedPackage && (
                    <p className="text-gray-400 text-center py-8">
                      Select a package to see pricing
                    </p>
                  )}
                </div>

                {/* Contact Info */}
                <div className="glassmorphism-card p-6 rounded-lg animate-on-scroll">
                  <h3 className="text-xl font-bold text-emerald-400 mb-4">Need Help?</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-2">
                      <span className="text-gray-300">Phone:</span>
                      <span className="text-white">+234 xxx xxx xxxx</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-300">Email:</span>
                      <span className="text-white">bookings@owufalls.com</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-300">WhatsApp:</span>
                      <span className="text-white">+234 xxx xxx xxxx</span>
                    </div>
                  </div>
                  
                  <p className="text-xs text-gray-400 mt-4">
                    Our booking team is available 9 AM - 6 PM, Monday to Saturday
                  </p>
                </div>

                {/* Trust Indicators */}
                <div className="glassmorphism-card p-6 rounded-lg animate-on-scroll">
                  <h3 className="text-lg font-bold text-emerald-400 mb-4">Why Book With Us?</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-emerald-400" />
                      <span className="text-sm text-gray-300">Certified local guides</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-emerald-400" />
                      <span className="text-sm text-gray-300">24/7 emergency support</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-emerald-400" />
                      <span className="text-sm text-gray-300">Free cancellation up to 48h</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-emerald-400" />
                      <span className="text-sm text-gray-300">100% safety guarantee</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 mt-4">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <span className="text-sm text-gray-300">4.9/5 from 500+ reviews</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
