
import React, { useState, useEffect } from 'react';
import { Users, Eye, Bell, Mail } from 'lucide-react';
import AnimatedCounter from '../AnimatedCounter';

const Overview: React.FC = () => {
  const [stats, setStats] = useState({
    totalUsers: 0,
    currentVisitors: 0,
    notifications: 0,
    emailsSent: 0
  });

  useEffect(() => {
    // Load stats from localStorage or initialize
    const savedStats = localStorage.getItem('adminStats');
    if (savedStats) {
      setStats(JSON.parse(savedStats));
    }

    // Simulate real-time updates
    const interval = setInterval(() => {
      setStats(prev => {
        const newStats = {
          ...prev,
          currentVisitors: Math.max(0, prev.currentVisitors + Math.floor(Math.random() * 3) - 1),
          notifications: prev.notifications + (Math.random() > 0.8 ? 1 : 0)
        };
        localStorage.setItem('adminStats', JSON.stringify(newStats));
        return newStats;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white">Dashboard Overview</h1>
        <div className="text-sm text-gray-400">
          Last updated: {new Date().toLocaleTimeString()}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-black/50 backdrop-blur-md border border-emerald-500/20 rounded-2xl p-6 shadow-md">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-emerald-500/20 rounded-full">
              <Users className="w-6 h-6 text-emerald-400" />
            </div>
            <span className="text-xs text-emerald-400 font-medium">+12%</span>
          </div>
          <AnimatedCounter
            end={stats.totalUsers}
            label="Total Users"
            className="text-white"
          />
        </div>

        <div className="bg-black/50 backdrop-blur-md border border-emerald-500/20 rounded-2xl p-6 shadow-md">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-blue-500/20 rounded-full">
              <Eye className="w-6 h-6 text-blue-400" />
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-2"></div>
              <span className="text-xs text-green-400 font-medium">Live</span>
            </div>
          </div>
          <AnimatedCounter
            end={stats.currentVisitors}
            label="Current Visitors"
            className="text-white"
          />
        </div>

        <div className="bg-black/50 backdrop-blur-md border border-emerald-500/20 rounded-2xl p-6 shadow-md">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-yellow-500/20 rounded-full">
              <Bell className="w-6 h-6 text-yellow-400" />
            </div>
            <span className="text-xs text-yellow-400 font-medium">+3 new</span>
          </div>
          <AnimatedCounter
            end={stats.notifications}
            label="Notifications"
            className="text-white"
          />
        </div>

        <div className="bg-black/50 backdrop-blur-md border border-emerald-500/20 rounded-2xl p-6 shadow-md">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-purple-500/20 rounded-full">
              <Mail className="w-6 h-6 text-purple-400" />
            </div>
            <span className="text-xs text-purple-400 font-medium">+8 today</span>
          </div>
          <AnimatedCounter
            end={stats.emailsSent}
            label="Emails Sent"
            className="text-white"
          />
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-black/50 backdrop-blur-md border border-emerald-500/20 rounded-2xl p-6">
        <h2 className="text-xl font-semibold text-white mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-lg hover:bg-emerald-500/20 transition-colors">
            <div className="text-emerald-400 font-medium">Add New User</div>
            <div className="text-sm text-gray-400">Create a new user account</div>
          </button>
          <button className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg hover:bg-blue-500/20 transition-colors">
            <div className="text-blue-400 font-medium">Send Notification</div>
            <div className="text-sm text-gray-400">Broadcast to all users</div>
          </button>
          <button className="p-4 bg-purple-500/10 border border-purple-500/20 rounded-lg hover:bg-purple-500/20 transition-colors">
            <div className="text-purple-400 font-medium">Generate Report</div>
            <div className="text-sm text-gray-400">Create analytics report</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Overview;
