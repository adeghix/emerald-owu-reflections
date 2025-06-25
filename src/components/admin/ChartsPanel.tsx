
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';
import { Badge } from '../ui/badge';
import { TrendingUp, Users, Eye, Calendar } from 'lucide-react';
import AnimatedCounter from '../AnimatedCounter';

const ChartsPanel: React.FC = () => {
  const [visitorData, setVisitorData] = useState({
    totalVisitors: 0,
    liveVisitors: 0,
    monthlyData: [],
    userStatusData: []
  });

  useEffect(() => {
    // Initialize with realistic data
    const monthlyData = [
      { month: 'Jan', visitors: 120 },
      { month: 'Feb', visitors: 150 },
      { month: 'Mar', visitors: 180 },
      { month: 'Apr', visitors: 220 },
      { month: 'May', visitors: 280 },
      { month: 'Jun', visitors: 350 }
    ];

    const userStatusData = [
      { name: 'Active Users', value: 65, color: '#10b981' },
      { name: 'Inactive Users', value: 25, color: '#6b7280' },
      { name: 'Guest Users', value: 45, color: '#f59e0b' },
      { name: 'Pending Users', value: 15, color: '#ef4444' }
    ];

    setVisitorData({
      totalVisitors: 1250,
      liveVisitors: Math.floor(Math.random() * 50) + 10,
      monthlyData,
      userStatusData
    });

    // Simulate real-time updates for live visitors
    const interval = setInterval(() => {
      setVisitorData(prev => ({
        ...prev,
        liveVisitors: Math.max(1, prev.liveVisitors + Math.floor(Math.random() * 3) - 1)
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const COLORS = ['#10b981', '#6b7280', '#f59e0b', '#ef4444'];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white">Analytics Dashboard</h1>
        <Badge className="bg-emerald-500/20 text-emerald-400">Real-time Data</Badge>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4 bg-black/50 backdrop-blur-md border border-emerald-500/20">
          <TabsTrigger value="overview" className="data-[state=active]:bg-emerald-500 data-[state=active]:text-black">
            Overview
          </TabsTrigger>
          <TabsTrigger value="visitors" className="data-[state=active]:bg-emerald-500 data-[state=active]:text-black">
            Total Visitors
          </TabsTrigger>
          <TabsTrigger value="live" className="data-[state=active]:bg-emerald-500 data-[state=active]:text-black">
            Live Visitors
          </TabsTrigger>
          <TabsTrigger value="trends" className="data-[state=active]:bg-emerald-500 data-[state=active]:text-black">
            Trends
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-black/50 backdrop-blur-md border border-emerald-500/20 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-emerald-500/20 rounded-full">
                  <Users className="w-6 h-6 text-emerald-400" />
                </div>
                <TrendingUp className="w-4 h-4 text-green-400" />
              </div>
              <AnimatedCounter
                end={visitorData.totalVisitors}
                label="Total Visitors"
                className="text-white"
              />
            </div>

            <div className="bg-black/50 backdrop-blur-md border border-emerald-500/20 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-blue-500/20 rounded-full">
                  <Eye className="w-6 h-6 text-blue-400" />
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-2"></div>
                  <span className="text-xs text-green-400">Live</span>
                </div>
              </div>
              <AnimatedCounter
                end={visitorData.liveVisitors}
                label="Live Visitors"
                className="text-white"
              />
            </div>

            <div className="bg-black/50 backdrop-blur-md border border-emerald-500/20 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-purple-500/20 rounded-full">
                  <Calendar className="w-6 h-6 text-purple-400" />
                </div>
                <span className="text-xs text-purple-400">This Month</span>
              </div>
              <AnimatedCounter
                end={350}
                label="Monthly Visitors"
                className="text-white"
              />
            </div>

            <div className="bg-black/50 backdrop-blur-md border border-emerald-500/20 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-yellow-500/20 rounded-full">
                  <TrendingUp className="w-6 h-6 text-yellow-400" />
                </div>
                <span className="text-xs text-green-400">+23%</span>
              </div>
              <AnimatedCounter
                end={87}
                suffix="%"
                label="Growth Rate"
                className="text-white"
              />
            </div>
          </div>

          {/* Charts Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="bg-black/50 backdrop-blur-md border border-emerald-500/20">
              <CardHeader>
                <CardTitle className="text-white">User Status Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={visitorData.userStatusData}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {visitorData.userStatusData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#1f2937', 
                        border: '1px solid #10b981', 
                        borderRadius: '8px',
                        color: '#fff'
                      }} 
                    />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card className="bg-black/50 backdrop-blur-md border border-emerald-500/20">
              <CardHeader>
                <CardTitle className="text-white">Monthly Visitors</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={visitorData.monthlyData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="month" stroke="#9ca3af" />
                    <YAxis stroke="#9ca3af" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#1f2937', 
                        border: '1px solid #10b981', 
                        borderRadius: '8px',
                        color: '#fff'
                      }} 
                    />
                    <Bar dataKey="visitors" fill="#10b981" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="visitors" className="space-y-6">
          <Card className="bg-black/50 backdrop-blur-md border border-emerald-500/20">
            <CardHeader>
              <CardTitle className="text-white">Total Visitor Analytics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-400 mb-2">{visitorData.totalVisitors}</div>
                  <div className="text-gray-400">All Time Visitors</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">350</div>
                  <div className="text-gray-400">This Month</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">45</div>
                  <div className="text-gray-400">Today</div>
                </div>
              </div>
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={visitorData.monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="month" stroke="#9ca3af" />
                  <YAxis stroke="#9ca3af" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1f2937', 
                      border: '1px solid #10b981', 
                      borderRadius: '8px',
                      color: '#fff'
                    }} 
                  />
                  <Line type="monotone" dataKey="visitors" stroke="#10b981" strokeWidth={3} dot={{ fill: '#10b981', strokeWidth: 2, r: 6 }} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="live" className="space-y-6">
          <Card className="bg-black/50 backdrop-blur-md border border-emerald-500/20">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse mr-3"></div>
                Live Visitor Monitoring
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center mb-8">
                <div className="text-6xl font-bold text-emerald-400 mb-4">{visitorData.liveVisitors}</div>
                <div className="text-gray-400 text-lg">Users Currently Online</div>
                <div className="text-sm text-gray-500 mt-2">Updates every 3 seconds</div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <h3 className="text-white font-medium mb-3">Geographic Distribution</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Nigeria</span>
                      <span className="text-emerald-400">78%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">USA</span>
                      <span className="text-emerald-400">12%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">UK</span>
                      <span className="text-emerald-400">6%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Others</span>
                      <span className="text-emerald-400">4%</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-800/50 rounded-lg p-4">
                  <h3 className="text-white font-medium mb-3">Device Types</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Mobile</span>
                      <span className="text-emerald-400">65%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Desktop</span>
                      <span className="text-emerald-400">28%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Tablet</span>
                      <span className="text-emerald-400">7%</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="trends" className="space-y-6">
          <Card className="bg-black/50 backdrop-blur-md border border-emerald-500/20">
            <CardHeader>
              <CardTitle className="text-white">Traffic Trends & Insights</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-white font-medium">Peak Hours</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                      <span className="text-gray-400">10:00 AM - 12:00 PM</span>
                      <span className="text-emerald-400 font-medium">Peak</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                      <span className="text-gray-400">2:00 PM - 4:00 PM</span>
                      <span className="text-yellow-400 font-medium">High</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                      <span className="text-gray-400">6:00 PM - 8:00 PM</span>
                      <span className="text-blue-400 font-medium">Medium</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-white font-medium">Popular Pages</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                      <span className="text-gray-400">Homepage</span>
                      <span className="text-emerald-400 font-medium">45%</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                      <span className="text-gray-400">Gallery</span>
                      <span className="text-yellow-400 font-medium">28%</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                      <span className="text-gray-400">Booking</span>
                      <span className="text-blue-400 font-medium">18%</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ChartsPanel;
