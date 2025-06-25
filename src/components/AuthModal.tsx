
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: (userData: any) => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, onLogin }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [showVerification, setShowVerification] = useState(false);
  const [verificationEmail, setVerificationEmail] = useState('');

  const trackCustomer = (email: string, type: 'signed_in' | 'registered' | 'guest') => {
    const customers = JSON.parse(localStorage.getItem('adminCustomers') || '[]');
    const newCustomer = {
      id: Date.now().toString(),
      email,
      type,
      timestamp: new Date().toISOString(),
      ipAddress: '192.168.1.1', // In real app, get actual IP
      userAgent: navigator.userAgent.substring(0, 50) + '...'
    };
    
    customers.push(newCustomer);
    localStorage.setItem('adminCustomers', JSON.stringify(customers));
    
    // Update stats
    const stats = JSON.parse(localStorage.getItem('adminStats') || '{}');
    stats.totalUsers = (stats.totalUsers || 0) + 1;
    localStorage.setItem('adminStats', JSON.stringify(stats));
  };

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    
    // Track registration
    trackCustomer(email, 'registered');
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setVerificationEmail(email);
      setShowVerification(true);
    }, 1000);
  };

  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    
    // Track sign in
    trackCustomer(email, 'signed_in');
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setVerificationEmail(email);
      setShowVerification(true);
    }, 1000);
  };

  const handleGuestAccess = () => {
    // For guest access, we need an email
    const email = prompt('Please enter your email to continue as guest:');
    if (email && email.includes('@')) {
      trackCustomer(email, 'guest');
      onLogin({ type: 'guest', name: 'Guest User', email });
      onClose();
    }
  };

  if (showVerification) {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="glassmorphism-card border-white/20 text-white max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center text-xl font-bold">Check Your Email</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📧</span>
              </div>
              <p className="text-gray-300 mb-4">
                We've sent a verification link to:
              </p>
              <p className="text-emerald-400 font-medium mb-4">{verificationEmail}</p>
              <p className="text-sm text-gray-400">
                Click the link in your email to complete the process.
              </p>
            </div>
            <div className="flex space-x-3">
              <Button 
                variant="outline" 
                onClick={() => setShowVerification(false)}
                className="flex-1 border-white/20 text-white hover:bg-white/10"
              >
                Back
              </Button>
              <Button 
                onClick={onClose}
                className="flex-1 bg-emerald-500 hover:bg-emerald-600"
              >
                Done
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="glassmorphism-card border-white/20 text-white max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-bold">Welcome to Owu Falls</DialogTitle>
        </DialogHeader>
        
        <Tabs defaultValue="signin" className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-gray-800">
            <TabsTrigger value="signin" className="data-[state=active]:bg-emerald-500">Sign In</TabsTrigger>
            <TabsTrigger value="signup" className="data-[state=active]:bg-emerald-500">Sign Up</TabsTrigger>
          </TabsList>
          
          <TabsContent value="signin" className="space-y-4">
            <form onSubmit={handleSignIn} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="signin-email">Email</Label>
                <Input
                  id="signin-email"
                  name="email"
                  type="email"
                  required
                  className="bg-gray-800 border-white/20 text-white"
                  placeholder="Enter your email"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="signin-password">Password</Label>
                <Input
                  id="signin-password"
                  name="password"
                  type="password"
                  required
                  className="bg-gray-800 border-white/20 text-white"
                  placeholder="Enter your password"
                />
              </div>
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-emerald-500 hover:bg-emerald-600"
              >
                {isLoading ? 'Signing In...' : 'Sign In'}
              </Button>
            </form>
          </TabsContent>
          
          <TabsContent value="signup" className="space-y-4">
            <form onSubmit={handleSignUp} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="signup-name">Full Name</Label>
                <Input
                  id="signup-name"
                  name="name"
                  type="text"
                  required
                  className="bg-gray-800 border-white/20 text-white"
                  placeholder="Enter your full name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="signup-email">Email</Label>
                <Input
                  id="signup-email"
                  name="email"
                  type="email"
                  required
                  className="bg-gray-800 border-white/20 text-white"
                  placeholder="Enter your email"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="signup-password">Password</Label>
                <Input
                  id="signup-password"
                  name="password"
                  type="password"
                  required
                  className="bg-gray-800 border-white/20 text-white"
                  placeholder="Create a password"
                />
              </div>
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-emerald-500 hover:bg-emerald-600"
              >
                {isLoading ? 'Creating Account...' : 'Sign Up'}
              </Button>
            </form>
          </TabsContent>
        </Tabs>
        
        <div className="relative my-4">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-white/20" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-gray-900 px-2 text-gray-400">Or</span>
          </div>
        </div>
        
        <Button
          onClick={handleGuestAccess}
          variant="outline"
          className="w-full border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-black"
        >
          Continue as Guest
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;
