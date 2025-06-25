
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Download, Calendar, TrendingUp, Users, Eye, Clock } from 'lucide-react';
import { toast } from 'sonner';

const AnalyticsPanel: React.FC = () => {
  const [timeRange, setTimeRange] = useState('7d');
  const [analyticsData, setAnalyticsData] = useState([]);
  const [trafficData, setTrafficData] = useState([]);

  useEffect(() => {
    // Generate sample analytics data
    const generateData = () => {
      const days = timeRange === '7d' ? 7 : timeRange === '30d' ? 30 : 90;
      const analytics = [];
      const traffic = [];
      
      for (let i = days; i >= 0; i--) {
        const date = new Date();
        date.setDate(date.getDate() - i);
        
        analytics.push({
          date: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
          users: Math.floor(Math.random() * 200) + 50,
          sessions: Math.floor(Math.random() * 300) + 80,
          pageviews: Math.floor(Math.random() * 500) + 150,
          bounceRate: (Math.random() * 40 + 20).toFixed(1)
        });
        
        traffic.push({
          date: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
          organic: Math.floor(Math.random() * 100) + 30,
          direct: Math.floor(Math.random() * 80) + 20,
          social: Math.floor(Math.random() * 60) + 10,
          referral: Math.floor(Math.random() * 40) + 5
        });
      }
      
      setAnalyticsData(analytics);
      setTrafficData(traffic);
    };

    generateData();
  }, [timeRange]);

  const exportReport = () => {
    toast.success(`Analytics report for ${timeRange} exported successfully!`);
  };

  const totalUsers = analyticsData.reduce((sum: number, day: any) => sum + day.users, 0);
  const totalSessions = analyticsData.reduce((sum: number, day: any) => sum + day.sessions, 0);
  const totalPageviews = analyticsData.reduce((sum: number, day: any) => sum + day.pageviews, 0);
  const avgBounceRate = analyticsData.length > 0 ? 
    (analyticsData.reduce((sum: number, day: any) => sum + parseFloat(day.bounceRate), 0) / analyticsData.length).toFixed(1) 
    : '0';

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white">Analytics Reports</h1>
        <div className="flex space-x-4">
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className="w-32 bg-gray-800 border-emerald-500/20 text-white">
              <Calendar className="w-4 h-4 mr-2" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7d">Last 7 days</SelectItem>
              <SelectItem value="30d">Last 30 days</SelectItem>
              <SelectItem value="90d">Last 90 days</SelectItem>
            </SelectContent>
          </Select>
          <Button onClick={exportReport} className="bg-emerald-500 hover:bg-emerald-600">
            <Download className="w-4 h-4 mr-2" />
            Export Report
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-black/50 backdrop-blur-md border border-emerald-500/20">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Total Users</p>
                <p className="text-2xl font-bold text-white">{totalUsers.toLocaleString()}</p>
                <p className="text-emerald-400 text-xs">+15% vs previous period</p>
              </div>
              <div className="p-3 bg-emerald-500/20 rounded-full">
                <Users className="w-6 h-6 text-emerald-400" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-black/50 backdrop-blur-md border border-emerald-500/20">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Sessions</p>
                <p className="text-2xl font-bold text-white">{totalSessions.toLocaleString()}</p>
                <p className="text-blue-400 text-xs">+8% vs previous period</p>
              </div>
              <div className="p-3 bg-blue-500/20 rounded-full">
                <TrendingUp className="w-6 h-6 text-blue-400" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-black/50 backdrop-blur-md border border-emerald-500/20">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Page Views</p>
                <p className="text-2xl font-bold text-white">{totalPageviews.toLocaleString()}</p>
                <p className="text-purple-400 text-xs">+22% vs previous period</p>
              </div>
              <div className="p-3 bg-purple-500/20 rounded-full">
                <Eye className="w-6 h-6 text-purple-400" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-black/50 backdrop-blur-md border border-emerald-500/20">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Bounce Rate</p>
                <p className="text-2xl font-bold text-white">{avgBounceRate}%</p>
                <p className="text-yellow-400 text-xs">-3% vs previous period</p>
              </div>
              <div className="p-3 bg-yellow-500/20 rounded-full">
                <Clock className="w-6 h-6 text-yellow-400" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* User Analytics Chart */}
        <Card className="bg-black/50 backdrop-blur-md border border-emerald-500/20">
          <CardHeader>
            <CardTitle className="text-white">User Analytics Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={analyticsData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(16, 185, 129, 0.1)" />
                <XAxis dataKey="date" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'rgba(0, 0, 0, 0.8)', 
                    border: '1px solid rgba(16, 185, 129, 0.2)',
                    borderRadius: '8px',
                    color: 'white'
                  }} 
                />
                <Line type="monotone" dataKey="users" stroke="#10b981" strokeWidth={2} dot={{ fill: '#10b981' }} />
                <Line type="monotone" dataKey="sessions" stroke="#3b82f6" strokeWidth={2} dot={{ fill: '#3b82f6' }} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Traffic Sources Chart */}
        <Card className="bg-black/50 backdrop-blur-md border border-emerald-500/20">
          <CardHeader>
            <CardTitle className="text-white">Traffic Sources</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={trafficData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(16, 185, 129, 0.1)" />
                <XAxis dataKey="date" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'rgba(0, 0, 0, 0.8)', 
                    border: '1px solid rgba(16, 185, 129, 0.2)',
                    borderRadius: '8px',
                    color: 'white'
                  }} 
                />
                <Area type="monotone" dataKey="organic" stackId="1" stroke="#10b981" fill="#10b981" fillOpacity={0.6} />
                <Area type="monotone" dataKey="direct" stackId="1" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.6} />
                <Area type="monotone" dataKey="social" stackId="1" stroke="#f59e0b" fill="#f59e0b" fillOpacity={0.6} />
                <Area type="monotone" dataKey="referral" stackId="1" stroke="#8b5cf6" fill="#8b5cf6" fillOpacity={0.6} />
              </AreaChart>
            </ResponsiveContainer>
            <div className="flex justify-center space-x-4 mt-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                <span className="text-sm text-gray-300">Organic</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                <span className="text-sm text-gray-300">Direct</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <span className="text-sm text-gray-300">Social</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                <span className="text-sm text-gray-300">Referral</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AnalyticsPanel;
