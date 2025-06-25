
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Users, Eye, TrendingUp, Activity } from 'lucide-react';
import AnimatedCounter from '../AnimatedCounter';

const ChartsPanel: React.FC = () => {
  const [userStatusData, setUserStatusData] = useState([
    { name: 'Active', value: 0, color: '#10b981' },
    { name: 'Inactive', value: 0, color: '#6b7280' },
    { name: 'Pending', value: 0, color: '#f59e0b' }
  ]);

  const [monthlyVisitors, setMonthlyVisitors] = useState([
    { month: 'Jan', visitors: 0 },
    { month: 'Feb', visitors: 0 },
    { month: 'Mar', visitors: 0 },
    { month: 'Apr', visitors: 0 },
    { month: 'May', visitors: 0 },
    { month: 'Jun', visitors: 0 }
  ]);

  const [totalVisitors, setTotalVisitors] = useState(0);
  const [liveVisitors, setLiveVisitors] = useState(0);

  useEffect(() => {
    // Load data from localStorage and simulate real-time updates
    const loadData = () => {
      const customers = JSON.parse(localStorage.getItem('adminCustomers') || '[]');
      const stats = JSON.parse(localStorage.getItem('adminStats') || '{}');
      
      // Update user status data
      const activeUsers = customers.filter((c: any) => c.type === 'signed_in').length;
      const registeredUsers = customers.filter((c: any) => c.type === 'registered').length;
      const guestUsers = customers.filter((c: any) => c.type === 'guest').length;
      
      setUserStatusData([
        { name: 'Active', value: activeUsers, color: '#10b981' },
        { name: 'Registered', value: registeredUsers, color: '#3b82f6' },
        { name: 'Guests', value: guestUsers, color: '#f59e0b' }
      ]);

      // Update monthly visitors with random data
      setMonthlyVisitors([
        { month: 'Jan', visitors: Math.floor(Math.random() * 1000) + 500 },
        { month: 'Feb', visitors: Math.floor(Math.random() * 1000) + 600 },
        { month: 'Mar', visitors: Math.floor(Math.random() * 1000) + 700 },
        { month: 'Apr', visitors: Math.floor(Math.random() * 1000) + 800 },
        { month: 'May', visitors: Math.floor(Math.random() * 1000) + 900 },
        { month: 'Jun', visitors: Math.floor(Math.random() * 1000) + 1000 }
      ]);

      setTotalVisitors(stats.totalUsers || customers.length);
      setLiveVisitors(stats.currentVisitors || Math.floor(Math.random() * 50) + 10);
    };

    loadData();
    
    // Update every 10 seconds
    const interval = setInterval(() => {
      setLiveVisitors(prev => Math.max(1, prev + Math.floor(Math.random() * 5) - 2));
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white">Analytics Dashboard</h1>
        <div className="text-sm text-gray-400">
          Real-time data visualization
        </div>
      </div>

      <Tabs defaultValue="charts" className="space-y-6">
        <TabsList className="bg-black/50 backdrop-blur-md border border-emerald-500/20">
          <TabsTrigger value="charts" className="data-[state=active]:bg-emerald-500 data-[state=active]:text-black">
            Charts
          </TabsTrigger>
          <TabsTrigger value="visitors" className="data-[state=active]:bg-emerald-500 data-[state=active]:text-black">
            Visitors
          </TabsTrigger>
          <TabsTrigger value="live" className="data-[state=active]:bg-emerald-500 data-[state=active]:text-black">
            Live Data
          </TabsTrigger>
        </TabsList>

        <TabsContent value="charts" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* User Status Pie Chart */}
            <Card className="bg-black/50 backdrop-blur-md border border-emerald-500/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Users className="w-5 h-5 mr-2 text-emerald-400" />
                  User Status Distribution
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={userStatusData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {userStatusData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'rgba(0, 0, 0, 0.8)', 
                        border: '1px solid rgba(16, 185, 129, 0.2)',
                        borderRadius: '8px',
                        color: 'white'
                      }} 
                    />
                  </PieChart>
                </ResponsiveContainer>
                <div className="flex justify-center space-x-4 mt-4">
                  {userStatusData.map((item) => (
                    <div key={item.name} className="flex items-center space-x-2">
                      <div 
                        className="w-3 h-3 rounded-full" 
                        style={{ backgroundColor: item.color }}
                      ></div>
                      <span className="text-sm text-gray-300">{item.name}: {item.value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Monthly Visitors Bar Chart */}
            <Card className="bg-black/50 backdrop-blur-md border border-emerald-500/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2 text-emerald-400" />
                  Monthly Visitors
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={monthlyVisitors}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(16, 185, 129, 0.1)" />
                    <XAxis dataKey="month" stroke="#9ca3af" />
                    <YAxis stroke="#9ca3af" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'rgba(0, 0, 0, 0.8)', 
                        border: '1px solid rgba(16, 185, 129, 0.2)',
                        borderRadius: '8px',
                        color: 'white'
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-black/50 backdrop-blur-md border border-emerald-500/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Eye className="w-5 h-5 mr-2 text-emerald-400" />
                  Total Visitors
                </CardTitle>
              </CardHeader>
              <CardContent>
                <AnimatedCounter
                  end={totalVisitors}
                  label="All Time Visitors"
                  className="text-white text-center"
                />
                <div className="mt-4 text-center">
                  <span className="text-emerald-400 text-sm">↗ +12% from last month</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black/50 backdrop-blur-md border border-emerald-500/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Activity className="w-5 h-5 mr-2 text-green-400" />
                  <span>Live Visitors</span>
                  <div className="ml-2 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <AnimatedCounter
                  end={liveVisitors}
                  label="Currently Online"
                  className="text-white text-center"
                />
                <div className="mt-4 text-center">
                  <span className="text-green-400 text-sm">Real-time count</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="live" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="bg-black/50 backdrop-blur-md border border-emerald-500/20">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-sm">Page Views</p>
                    <p className="text-2xl font-bold text-white">
                      {Math.floor(Math.random() * 1000) + 500}
                    </p>
                  </div>
                  <div className="p-3 bg-blue-500/20 rounded-full">
                    <Eye className="w-6 h-6 text-blue-400" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black/50 backdrop-blur-md border border-emerald-500/20">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-sm">Bounce Rate</p>
                    <p className="text-2xl font-bold text-white">
                      {Math.floor(Math.random() * 30) + 20}%
                    </p>
                  </div>
                  <div className="p-3 bg-yellow-500/20 rounded-full">
                    <TrendingUp className="w-6 h-6 text-yellow-400" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black/50 backdrop-blur-md border border-emerald-500/20">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-sm">Avg. Session</p>
                    <p className="text-2xl font-bold text-white">
                      {Math.floor(Math.random() * 5) + 2}:30
                    </p>
                  </div>
                  <div className="p-3 bg-purple-500/20 rounded-full">
                    <Activity className="w-6 h-6 text-purple-400" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ChartsPanel;
