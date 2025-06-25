
import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { X, Mail, Send } from 'lucide-react';
import { toast } from 'sonner';

const NewsletterPopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Check if user has already seen the popup today
    const lastShown = localStorage.getItem('newsletterPopupLastShown');
    const now = new Date().toDateString();
    
    if (lastShown !== now) {
      // Show popup after 10 seconds
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 10000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast.error('Please enter a valid email address');
      return;
    }
    
    setIsLoading(true);
    
    // Add to newsletter list in admin dashboard
    const newsletters = JSON.parse(localStorage.getItem('adminNewsletters') || '[]');
    const newSubscriber = {
      id: Date.now().toString(),
      email,
      timestamp: new Date().toISOString(),
      source: 'newsletter_popup',
      status: 'subscribed'
    };
    
    newsletters.push(newSubscriber);
    localStorage.setItem('adminNewsletters', JSON.stringify(newsletters));
    
    // Update admin stats
    const stats = JSON.parse(localStorage.getItem('adminStats') || '{}');
    stats.emailsSent = (stats.emailsSent || 0) + 1;
    localStorage.setItem('adminStats', JSON.stringify(stats));
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsOpen(false);
      setEmail('');
      toast.success('Thank you for subscribing to our newsletter!');
      
      // Don't show again today
      localStorage.setItem('newsletterPopupLastShown', new Date().toDateString());
    }, 1500);
  };

  const handleClose = () => {
    setIsOpen(false);
    // Don't show again today
    localStorage.setItem('newsletterPopupLastShown', new Date().toDateString());
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="glassmorphism-card border-emerald-500/20 text-white max-w-md">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-xl font-bold flex items-center">
              <Mail className="w-6 h-6 mr-2 text-emerald-400" />
              Stay Updated!
            </DialogTitle>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleClose}
              className="text-gray-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </DialogHeader>
        
        <div className="space-y-4 py-4">
          <div className="text-center space-y-2">
            <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto">
              <Mail className="w-8 h-8 text-emerald-400" />
            </div>
            <p className="text-gray-300">
              Get the latest updates about Owu Falls, special offers, and exclusive content delivered to your inbox.
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="newsletter-email" className="text-white">Email Address</Label>
              <Input
                id="newsletter-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="bg-gray-800 border-emerald-500/20 text-white"
                required
              />
            </div>
            
            <div className="flex space-x-3">
              <Button
                type="button"
                variant="outline"
                onClick={handleClose}
                className="flex-1 border-gray-500/20 text-gray-400 hover:bg-gray-500/10"
              >
                Maybe Later
              </Button>
              <Button
                type="submit"
                disabled={isLoading}
                className="flex-1 bg-emerald-500 hover:bg-emerald-600"
              >
                {isLoading ? (
                  'Subscribing...'
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Subscribe
                  </>
                )}
              </Button>
            </div>
          </form>
          
          <p className="text-xs text-gray-400 text-center">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default NewsletterPopup;
