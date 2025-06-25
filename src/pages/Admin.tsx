
import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import AdminHeader from '../components/admin/AdminHeader';
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
    const adminAuth = localStorage.getItem('adminAuth');
    const loginTime = localStorage.getItem('adminLoginTime');
    const currentTime = Date.now();
    const sessionDuration = 24 * 60 * 60 * 1000; // 24 hours

    if (adminAuth === 'authenticated' && loginTime && (currentTime - parseInt(loginTime)) < sessionDuration) {
      setIsAuthenticated(true);
    } else {
      localStorage.removeItem('adminAuth');
      localStorage.removeItem('adminLoginTime');
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('adminAuth');
    localStorage.removeItem('adminLoginTime');
    window.location.href = '/';
  };

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <AdminHeader onLogout={handleLogout} />
      
      <main className="pt-20 pb-8">
        <div className="container mx-auto px-4">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:grid-cols-8 bg-black/50 backdrop-blur-md border border-emerald-500/20 rounded-2xl p-2">
              <TabsTrigger 
                value="overview" 
                className="data-[state=active]:bg-emerald-500 data-[state=active]:text-black transition-all duration-300"
              >
                Overview
              </TabsTrigger>
              <TabsTrigger 
                value="users" 
                className="data-[state=active]:bg-emerald-500 data-[state=active]:text-black transition-all duration-300"
              >
                Users
              </TabsTrigger>
              <TabsTrigger 
                value="customers" 
                className="data-[state=active]:bg-emerald-500 data-[state=active]:text-black transition-all duration-300"
              >
                Customers
              </TabsTrigger>
              <TabsTrigger 
                value="notifications" 
                className="data-[state=active]:bg-emerald-500 data-[state=active]:text-black transition-all duration-300"
              >
                Notifications
              </TabsTrigger>
              <TabsTrigger 
                value="email" 
                className="data-[state=active]:bg-emerald-500 data-[state=active]:text-black transition-all duration-300"
              >
                Email
              </TabsTrigger>
              <TabsTrigger 
                value="charts" 
                className="data-[state=active]:bg-emerald-500 data-[state=active]:text-black transition-all duration-300"
              >
                Analytics
              </TabsTrigger>
              <TabsTrigger 
                value="reports" 
                className="data-[state=active]:bg-emerald-500 data-[state=active]:text-black transition-all duration-300"
              >
                Reports
              </TabsTrigger>
              <TabsTrigger 
                value="settings" 
                className="data-[state=active]:bg-emerald-500 data-[state=active]:text-black transition-all duration-300"
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
