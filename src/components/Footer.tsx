
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import WaterfallLogo from './WaterfallLogo';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { toast } from 'sonner';

const Footer: React.FC = () => {
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const [adminCredentials, setAdminCredentials] = useState({ username: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);

  const handleAdminLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Secure admin credentials
    const ADMIN_USERNAME = 'owufalls_admin';
    const ADMIN_PASSWORD = 'owufalls2024!secure';
    
    if (adminCredentials.username === ADMIN_USERNAME && adminCredentials.password === ADMIN_PASSWORD) {
      localStorage.setItem('adminAuth', 'authenticated');
      localStorage.setItem('adminLoginTime', Date.now().toString());
      toast.success('Admin login successful!');
      window.location.href = '/admin';
    } else {
      toast.error('Invalid admin credentials');
    }
    
    setIsLoading(false);
    setShowAdminLogin(false);
    setAdminCredentials({ username: '', password: '' });
  };

  return (
    <footer className="bg-black border-t border-white/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <WaterfallLogo />
            <p className="text-gray-400 text-sm">
              Experience the majesty of Nigeria's tallest waterfall. 
              A natural wonder waiting to be explored.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                Facebook
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                Instagram
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                Twitter
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-emerald-400 transition-colors">About Us</Link></li>
              <li><Link to="/visit-info" className="text-gray-400 hover:text-emerald-400 transition-colors">Visit Information</Link></li>
              <li><Link to="/activities" className="text-gray-400 hover:text-emerald-400 transition-colors">Activities</Link></li>
              <li><Link to="/booking" className="text-gray-400 hover:text-emerald-400 transition-colors">Book a Tour</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/blog" className="text-gray-400 hover:text-emerald-400 transition-colors">Travel Blog</Link></li>
              <li><Link to="/gallery" className="text-gray-400 hover:text-emerald-400 transition-colors">Photo Gallery</Link></li>
              <li><Link to="/events" className="text-gray-400 hover:text-emerald-400 transition-colors">Events</Link></li>
              <li><Link to="/faq" className="text-gray-400 hover:text-emerald-400 transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2 text-gray-400 text-sm">
              <p>Owu Falls, Kwara State</p>
              <p>Nigeria</p>
              <p>+234 xxx xxx xxxx</p>
              <p>info@owufalls.com</p>
            </div>
          </div>
        </div>

        <hr className="border-white/10 my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-gray-400 text-sm">
            © 2024 Owu Falls Tourism. All rights reserved.
          </div>
          
          {/* Admin Panel */}
          <div className="space-y-2">
            {!showAdminLogin ? (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowAdminLogin(true)}
                className="text-gray-500 hover:text-emerald-400 text-xs bg-black/50 border border-emerald-500/20"
              >
                Admin Access
              </Button>
            ) : (
              <form onSubmit={handleAdminLogin} className="flex space-x-2 bg-black/50 backdrop-blur-md border border-emerald-500/20 rounded-lg p-2">
                <Input
                  type="text"
                  placeholder="Username"
                  value={adminCredentials.username}
                  onChange={(e) => setAdminCredentials({...adminCredentials, username: e.target.value})}
                  className="w-28 h-8 text-xs bg-gray-800 border-emerald-500/20 text-white"
                  required
                />
                <Input
                  type="password"
                  placeholder="Password"
                  value={adminCredentials.password}
                  onChange={(e) => setAdminCredentials({...adminCredentials, password: e.target.value})}
                  className="w-28 h-8 text-xs bg-gray-800 border-emerald-500/20 text-white"
                  required
                />
                <Button 
                  type="submit" 
                  size="sm" 
                  disabled={isLoading}
                  className="h-8 text-xs bg-emerald-500 hover:bg-emerald-600"
                >
                  {isLoading ? 'Loading...' : 'Login'}
                </Button>
                <Button 
                  type="button" 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => setShowAdminLogin(false)}
                  className="h-8 text-xs text-emerald-400"
                >
                  ×
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
