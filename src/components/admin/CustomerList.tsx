
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Users, UserCheck, UserX } from 'lucide-react';
import AnimatedCounter from '../AnimatedCounter';

interface Customer {
  id: string;
  email: string;
  type: 'signed_in' | 'registered' | 'guest';
  timestamp: string;
  ipAddress: string;
  userAgent: string;
}

const CustomerList: React.FC = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [stats, setStats] = useState({
    signedIn: 0,
    registered: 0,
    guests: 0
  });

  useEffect(() => {
    // Load customers from localStorage
    const savedCustomers = localStorage.getItem('adminCustomers');
    if (savedCustomers) {
      const parsed = JSON.parse(savedCustomers);
      setCustomers(parsed);
      updateStats(parsed);
    }

    // Listen for new customer data from the main website
    const handleCustomerUpdate = (event: StorageEvent) => {
      if (event.key === 'adminCustomers') {
        const newCustomers = JSON.parse(event.newValue || '[]');
        setCustomers(newCustomers);
        updateStats(newCustomers);
      }
    };

    window.addEventListener('storage', handleCustomerUpdate);
    return () => window.removeEventListener('storage', handleCustomerUpdate);
  }, []);

  const updateStats = (customerList: Customer[]) => {
    const signedIn = customerList.filter(c => c.type === 'signed_in').length;
    const registered = customerList.filter(c => c.type === 'registered').length;
    const guests = customerList.filter(c => c.type === 'guest').length;
    
    setStats({ signedIn, registered, guests });
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'signed_in': return 'bg-green-500/20 text-green-400';
      case 'registered': return 'bg-blue-500/20 text-blue-400';
      case 'guest': return 'bg-yellow-500/20 text-yellow-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'signed_in': return <UserCheck className="w-4 h-4" />;
      case 'registered': return <Users className="w-4 h-4" />;
      case 'guest': return <UserX className="w-4 h-4" />;
      default: return <Users className="w-4 h-4" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white">Customer Analytics</h1>
        <div className="text-sm text-gray-400">
          Real-time customer tracking
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-black/50 backdrop-blur-md border border-emerald-500/20 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-green-500/20 rounded-full">
              <UserCheck className="w-6 h-6 text-green-400" />
            </div>
            <Badge className="bg-green-500/20 text-green-400">Active</Badge>
          </div>
          <AnimatedCounter
            end={stats.signedIn}
            label="Signed In Users"
            className="text-white"
          />
        </div>

        <div className="bg-black/50 backdrop-blur-md border border-emerald-500/20 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-blue-500/20 rounded-full">
              <Users className="w-6 h-6 text-blue-400" />
            </div>
            <Badge className="bg-blue-500/20 text-blue-400">Registered</Badge>
          </div>
          <AnimatedCounter
            end={stats.registered}
            label="Registered Users"
            className="text-white"
          />
        </div>

        <div className="bg-black/50 backdrop-blur-md border border-emerald-500/20 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-yellow-500/20 rounded-full">
              <UserX className="w-6 h-6 text-yellow-400" />
            </div>
            <Badge className="bg-yellow-500/20 text-yellow-400">Guest</Badge>
          </div>
          <AnimatedCounter
            end={stats.guests}
            label="Guest Users"
            className="text-white"
          />
        </div>
      </div>

      {/* Customer List */}
      <Card className="bg-black/50 backdrop-blur-md border border-emerald-500/20">
        <CardHeader>
          <CardTitle className="text-white flex items-center justify-between">
            <span>Recent Customer Activity</span>
            <Badge className="bg-emerald-500/20 text-emerald-400">
              {customers.length} Total
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4 max-h-96 overflow-y-auto">
            {customers.length === 0 ? (
              <div className="text-center text-gray-400 py-8">
                <Users className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p>No customer data available.</p>
                <p className="text-sm">Customer information will appear here when users interact with the website.</p>
              </div>
            ) : (
              customers.reverse().map((customer) => (
                <div 
                  key={customer.id}
                  className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg border border-emerald-500/10"
                >
                  <div className="flex items-center space-x-4">
                    <div className={`p-2 rounded-full ${getTypeColor(customer.type)}`}>
                      {getTypeIcon(customer.type)}
                    </div>
                    <div>
                      <div className="text-white font-medium">{customer.email}</div>
                      <div className="text-sm text-gray-400">
                        {new Date(customer.timestamp).toLocaleString()}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge className={getTypeColor(customer.type)}>
                      {customer.type.replace('_', ' ')}
                    </Badge>
                    <div className="text-xs text-gray-400 mt-1">
                      {customer.ipAddress}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CustomerList;
