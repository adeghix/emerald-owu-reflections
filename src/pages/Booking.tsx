
import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Calendar, Clock, User, Camera } from 'lucide-react';

const Booking: React.FC = () => {
  const [selectedPackage, setSelectedPackage] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    visitDate: '',
    groupSize: '',
    specialRequests: ''
  });
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const packages = [
    {
      id: 'basic',
      name: 'Basic Tour',
      duration: '4 hours',
      price: '₦15,000',
      pricePerPerson: 15000,
      description: 'Essential waterfall experience with guided tour',
      includes: [
        'Guided waterfall tour',
        'Safety equipment',
        'Basic trail access',
        'Visitor center facilities'
      ],
      icon: '🥾'
    },
    {
      id: 'photography',
      name: 'Photography Package',
      duration: '6 hours',
      price: '₦25,000',
      pricePerPerson: 25000,
      description: 'Perfect for photography enthusiasts',
      includes: [
        'Professional photography guide',
        'Best viewpoint access',
        'Equipment advice',
        'Golden hour sessions',
        'All basic tour features'
      ],
      icon: '📸',
      popular: true
    },
    {
      id: 'adventure',
      name: 'Full Adventure',
      duration: '8 hours',
      price: '₦35,000',
      pricePerPerson: 35000,
      description: 'Complete Owu Falls experience',
      includes: [
        'All hiking trails access',
        'Cultural experience',
        'Bird watching session',
        'Lunch included',
        'Professional guide',
        'Transportation assistance'
      ],
      icon: '🏔️'
    },
    {
      id: 'camping',
      name: 'Overnight Camping',
      duration: '24 hours',
      price: '₦50,000',
      pricePerPerson: 50000,
      description: 'Immersive overnight experience',
      includes: [
        'Camping equipment provided',
        'All meals included',
        'Night nature walk',
        'Sunrise viewing',
        'Bonfire activities',
        'Professional guide'
      ],
      icon: '🏕️'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const calculateTotal = () => {
    const selectedPkg = packages.find(pkg => pkg.id === selectedPackage);
    if (!selectedPkg || !formData.groupSize) return 0;
    
    const groupSizeNum = parseInt(formData.groupSize) || 1;
    return selectedPkg.pricePerPerson * groupSizeNum;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate booking submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Booking submitted successfully! We will contact you within 24 hours to confirm your reservation.');
      // Reset form
      setCurrentStep(1);
      setSelectedPackage('');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        visitDate: '',
        groupSize: '',
        specialRequests: ''
      });
    }, 2000);
  };

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
              Book Your Adventure
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Choose your perfect Owu Falls experience and reserve your spot today
            </p>
          </div>

          {/* Progress Indicator */}
          <div className="flex justify-center mb-12">
            <div className="flex items-center space-x-4">
              {[1, 2, 3].map((step) => (
                <div key={step} className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                    currentStep >= step 
                      ? 'bg-emerald-500 text-black' 
                      : 'bg-gray-700 text-gray-400'
                  }`}>
                    {step}
                  </div>
                  {step < 3 && (
                    <div className={`w-16 h-1 mx-2 ${
                      currentStep > step ? 'bg-emerald-500' : 'bg-gray-700'
                    }`} />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Step 1: Package Selection */}
          {currentStep === 1 && (
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold mb-8 text-center text-emerald-400">
                Choose Your Package
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {packages.map((pkg) => (
                  <div
                    key={pkg.id}
                    onClick={() => setSelectedPackage(pkg.id)}
                    className={`glassmorphism-card p-6 rounded-lg cursor-pointer transition-all duration-300 hover:scale-105 ${
                      selectedPackage === pkg.id 
                        ? 'ring-2 ring-emerald-500 bg-emerald-500/10' 
                        : ''
                    } ${pkg.popular ? 'relative' : ''}`}
                  >
                    {pkg.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <span className="bg-emerald-500 text-black px-4 py-1 rounded-full text-sm font-bold">
                          Most Popular
                        </span>
                      </div>
                    )}
                    
                    <div className="text-center mb-4">
                      <div className="text-4xl mb-2">{pkg.icon}</div>
                      <h3 className="text-xl font-bold text-emerald-400">{pkg.name}</h3>
                      <p className="text-gray-300">{pkg.description}</p>
                    </div>
                    
                    <div className="text-center mb-4">
                      <div className="text-3xl font-bold text-white">{pkg.price}</div>
                      <div className="text-sm text-gray-400">per person</div>
                      <div className="text-sm text-emerald-400 flex items-center justify-center mt-1">
                        <Clock className="w-4 h-4 mr-1" />
                        {pkg.duration}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2 text-emerald-400">Includes:</h4>
                      <ul className="text-sm text-gray-300 space-y-1">
                        {pkg.includes.map((item, index) => (
                          <li key={index}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="text-center">
                <Button
                  onClick={nextStep}
                  disabled={!selectedPackage}
                  className="bg-emerald-500 hover:bg-emerald-600 px-8 py-3"
                >
                  Continue to Details
                </Button>
              </div>
            </div>
          )}

          {/* Step 2: Personal Details */}
          {currentStep === 2 && (
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold mb-8 text-center text-emerald-400">
                Your Details
              </h2>
              <div className="max-w-2xl mx-auto glassmorphism-card p-8 rounded-lg">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="bg-gray-800 border-white/20 text-white"
                        placeholder="Your first name"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        type="text"
                        required
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="bg-gray-800 border-white/20 text-white"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                        placeholder="+234 xxx xxx xxxx"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="visitDate">Preferred Visit Date *</Label>
                      <Input
                        id="visitDate"
                        name="visitDate"
                        type="date"
                        required
                        value={formData.visitDate}
                        onChange={handleInputChange}
                        className="bg-gray-800 border-white/20 text-white"
                        min={new Date().toISOString().split('T')[0]}
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="groupSize">Group Size *</Label>
                      <select
                        id="groupSize"
                        name="groupSize"
                        required
                        value={formData.groupSize}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 bg-gray-800 border border-white/20 text-white rounded-md"
                      >
                        <option value="">Select group size</option>
                        {[...Array(20)].map((_, i) => (
                          <option key={i + 1} value={i + 1}>{i + 1} {i === 0 ? 'person' : 'people'}</option>
                        ))}
                      </select>
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
                      className="bg-gray-800 border-white/20 text-white resize-none"
                      placeholder="Any special requirements, accessibility needs, or dietary restrictions..."
                    />
                  </div>
                </form>
                
                <div className="flex justify-between mt-8">
                  <Button
                    onClick={prevStep}
                    variant="outline"
                    className="border-white/30 text-white hover:bg-white/10"
                  >
                    Back
                  </Button>
                  <Button
                    onClick={nextStep}
                    disabled={!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.visitDate || !formData.groupSize}
                    className="bg-emerald-500 hover:bg-emerald-600"
                  >
                    Review Booking
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Review & Confirm */}
          {currentStep === 3 && (
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold mb-8 text-center text-emerald-400">
                Review Your Booking
              </h2>
              <div className="max-w-3xl mx-auto space-y-6">
                {/* Package Summary */}
                <div className="glassmorphism-card p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4 text-emerald-400">Package Details</h3>
                  {selectedPackage && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <p className="text-lg font-semibold">
                          {packages.find(p => p.id === selectedPackage)?.name}
                        </p>
                        <p className="text-gray-300">
                          {packages.find(p => p.id === selectedPackage)?.description}
                        </p>
                        <p className="text-emerald-400 mt-2">
                          Duration: {packages.find(p => p.id === selectedPackage)?.duration}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold">
                          ₦{calculateTotal().toLocaleString()}
                        </p>
                        <p className="text-gray-400">
                          {packages.find(p => p.id === selectedPackage)?.price} × {formData.groupSize} people
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Personal Details Summary */}
                <div className="glassmorphism-card p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4 text-emerald-400">Your Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300">
                    <div>
                      <strong>Name:</strong> {formData.firstName} {formData.lastName}
                    </div>
                    <div>
                      <strong>Email:</strong> {formData.email}
                    </div>
                    <div>
                      <strong>Phone:</strong> {formData.phone}
                    </div>
                    <div>
                      <strong>Visit Date:</strong> {new Date(formData.visitDate).toLocaleDateString()}
                    </div>
                    <div>
                      <strong>Group Size:</strong> {formData.groupSize} people
                    </div>
                    {formData.specialRequests && (
                      <div className="md:col-span-2">
                        <strong>Special Requests:</strong> {formData.specialRequests}
                      </div>
                    )}
                  </div>
                </div>

                {/* Terms & Submit */}
                <div className="glassmorphism-card p-6 rounded-lg">
                  <div className="mb-6">
                    <h3 className="text-lg font-bold mb-3 text-emerald-400">Booking Terms</h3>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Full payment required to secure booking</li>
                      <li>• Free cancellation up to 48 hours before visit</li>
                      <li>• Weather-dependent activities may be rescheduled</li>
                      <li>• Group size changes subject to availability</li>
                      <li>• Valid ID required for all participants</li>
                    </ul>
                  </div>
                  
                  <form onSubmit={handleSubmit}>
                    <div className="flex justify-between">
                      <Button
                        type="button"
                        onClick={prevStep}
                        variant="outline"
                        className="border-white/30 text-white hover:bg-white/10"
                      >
                        Back
                      </Button>
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-emerald-500 hover:bg-emerald-600 px-8 py-3 text-lg"
                      >
                        {isSubmitting ? 'Processing...' : `Confirm Booking - ₦${calculateTotal().toLocaleString()}`}
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Booking;
