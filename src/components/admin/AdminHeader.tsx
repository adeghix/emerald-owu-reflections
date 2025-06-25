
import React from 'react';
import { Button } from '../ui/button';
import { LogOut, Shield } from 'lucide-react';
import WaterfallLogo from '../WaterfallLogo';

interface AdminHeaderProps {
  onLogout: () => void;
}

const AdminHeader: React.FC<AdminHeaderProps> = ({ onLogout }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md border-b border-emerald-500/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <WaterfallLogo />
            <div className="flex items-center space-x-2 text-emerald-400">
              <Shield className="w-5 h-5" />
              <span className="font-semibold">Admin Dashboard</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="text-sm text-gray-400">
              Welcome, Administrator
            </div>
            <Button
              onClick={onLogout}
              variant="outline"
              size="sm"
              className="border-emerald-500/20 text-emerald-400 hover:bg-emerald-500 hover:text-black"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
