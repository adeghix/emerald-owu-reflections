
import React, { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import AdminHeader from '../components/admin/AdminHeader';
import AdminLogin from '../components/AdminLogin';
import Overview from '../components/admin/Overview';
import UsersManagement from '../components/admin/UsersManagement';
import NotificationsPanel from '../components/admin/NotificationsPanel';
import EmailConfig from '../components/admin/EmailConfig';
import ChartsPanel from '../components/admin/ChartsPanel';
import CustomerList from '../components/admin/CustomerList';
import AnalyticsPanel from '../components/admin/AnalyticsPanel';
import SystemSettings from '../components/admin/SystemSettings';

const Admin: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    const checkAuth = () => {
      const adminAuth = localStorage.getItem('adminAuth');
      const loginTime = localStorage.getItem('adminLoginTime');
      const currentTime = Date.now();
      const sessionDuration = 24 * 60 * 60 * 1000; // 24 hours

      if (adminAuth === 'authenticated' && loginTime && (currentTime - parseInt(loginTime)) < sessionDuration) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
        localStorage.removeItem('adminAuth');
        localStorage.removeItem('adminLoginTime');
      }
    };

    checkAuth();
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('adminAuth');
    localStorage.removeItem('adminLoginTime');
    setIsAuthenticated(false);
  };

  if (!isAuthenticated) {
    return <AdminLogin onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Luxury background overlay */}
      <div className="fixed inset-0 bg-gradient-to-br from-emerald-500/5 via-black to-yellow-500/5 pointer-events-none"></div>
      
      <AdminHeader onLogout={handleLogout} />
      
      <main className="pt-20 pb-8 relative">
        <div className="container mx-auto px-4">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:grid-cols-8 bg-black/60 backdrop-blur-xl border border-emerald-500/30 rounded-2xl p-2 shadow-2xl shadow-emerald-500/10">
              <TabsTrigger 
                value="overview" 
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-emerald-500 data-[state=active]:to-emerald-600 data-[state=active]:text-black data-[state=active]:shadow-lg data-[state=active]:shadow-emerald-500/25 transition-all duration-300 text-white/80 hover:text-white"
              >
                Overview
              </TabsTrigger>
              <TabsTrigger 
                value="users" 
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-emerald-500 data-[state=active]:to-emerald-600 data-[state=active]:text-black data-[state=active]:shadow-lg data-[state=active]:shadow-emerald-500/25 transition-all duration-300 text-white/80 hover:text-white"
              >
                Users
              </TabsTrigger>
              <TabsTrigger 
                value="customers" 
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-emerald-500 data-[state=active]:to-emerald-600 data-[state=active]:text-black data-[state=active]:shadow-lg data-[state=active]:shadow-emerald-500/25 transition-all duration-300 text-white/80 hover:text-white"
              >
                Customers
              </TabsTrigger>
              <TabsTrigger 
                value="notifications" 
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-emerald-500 data-[state=active]:to-emerald-600 data-[state=active]:text-black data-[state=active]:shadow-lg data-[state=active]:shadow-emerald-500/25 transition-all duration-300 text-white/80 hover:text-white"
              >
                Notifications
              </TabsTrigger>
              <TabsTrigger 
                value="email" 
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-emerald-500 data-[state=active]:to-emerald-600 data-[state=active]:text-black data-[state=active]:shadow-lg data-[state=active]:shadow-emerald-500/25 transition-all duration-300 text-white/80 hover:text-white"
              >
                Email
              </TabsTrigger>
              <TabsTrigger 
                value="charts" 
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-emerald-500 data-[state=active]:to-emerald-600 data-[state=active]:text-black data-[state=active]:shadow-lg data-[state=active]:shadow-emerald-500/25 transition-all duration-300 text-white/80 hover:text-white"
              >
                Analytics
              </TabsTrigger>
              <TabsTrigger 
                value="reports" 
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-emerald-500 data-[state=active]:to-emerald-600 data-[state=active]:text-black data-[state=active]:shadow-lg data-[state=active]:shadow-emerald-500/25 transition-all duration-300 text-white/80 hover:text-white"
              >
                Reports
              </TabsTrigger>
              <TabsTrigger 
                value="settings" 
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-emerald-500 data-[state=active]:to-emerald-600 data-[state=active]:text-black data-[state=active]:shadow-lg data-[state=active]:shadow-emerald-500/25 transition-all duration-300 text-white/80 hover:text-white"
              >
                Settings
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="animate-fade-in">
              <Overview />
            </TabsContent>

            <TabsContent value="users" className="animate-fade-in">
              <UsersManagement />
            </TabsContent>

            <TabsContent value="customers" className="animate-fade-in">
              <CustomerList />
            </TabsContent>

            <TabsContent value="notifications" className="animate-fade-in">
              <NotificationsPanel />
            </TabsContent>

            <TabsContent value="email" className="animate-fade-in">
              <EmailConfig />
            </TabsContent>

            <TabsContent value="charts" className="animate-fade-in">
              <ChartsPanel />
            </TabsContent>

            <TabsContent value="reports" className="animate-fade-in">
              <AnalyticsPanel />
            </TabsContent>

            <TabsContent value="settings" className="animate-fade-in">
              <SystemSettings />
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default Admin;
