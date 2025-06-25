
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Switch } from '../ui/switch';
import { Settings, Save, RefreshCw, Database } from 'lucide-react';
import { toast } from 'sonner';

const SystemSettings: React.FC = () => {
  const [settings, setSettings] = useState({
    siteName: 'Owu Falls Tourism',
    siteUrl: 'https://owufalls.com',
    maintenanceMode: false,
    emailNotifications: true,
    autoBackup: true,
    cacheEnabled: true,
    debugMode: false
  });

  const handleSaveSettings = () => {
    localStorage.setItem('systemSettings', JSON.stringify(settings));
    toast.success('Settings saved successfully!');
  };

  const handleClearCache = () => {
    // Clear various cache items except admin auth
    const keysToKeep = ['adminAuth', 'adminLoginTime'];
    Object.keys(localStorage).forEach(key => {
      if (!keysToKeep.includes(key)) {
        localStorage.removeItem(key);
      }
    });
    toast.success('Cache cleared successfully!');
  };

  const handleBackupData = () => {
    const data = {
      stats: localStorage.getItem('adminStats'),
      users: localStorage.getItem('adminUsers'),
      customers: localStorage.getItem('adminCustomers'),
      notifications: localStorage.getItem('adminNotifications'),
      emailConfig: localStorage.getItem('emailConfig'),
      timestamp: new Date().toISOString()
    };
    
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `owufalls_backup_${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    
    toast.success('Backup downloaded successfully!');
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white">System Settings</h1>
        <Button onClick={handleSaveSettings} className="bg-emerald-500 hover:bg-emerald-600">
          <Save className="w-4 h-4 mr-2" />
          Save All Settings
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* General Settings */}
        <Card className="bg-black/50 backdrop-blur-md border border-emerald-500/20">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Settings className="w-5 h-5 mr-2 text-emerald-400" />
              General Settings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label className="text-white">Site Name</Label>
              <Input
                value={settings.siteName}
                onChange={(e) => setSettings({...settings, siteName: e.target.value})}
                className="bg-gray-800 border-emerald-500/20 text-white"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-white">Site URL</Label>
              <Input
                value={settings.siteUrl}
                onChange={(e) => setSettings({...settings, siteUrl: e.target.value})}
                className="bg-gray-800 border-emerald-500/20 text-white"
              />
            </div>
            
            <div className="space-y-4 pt-4">
              <div className="flex items-center justify-between">
                <Label className="text-white">Maintenance Mode</Label>
                <Switch
                  checked={settings.maintenanceMode}
                  onCheckedChange={(checked) => setSettings({...settings, maintenanceMode: checked})}
                />
              </div>
              <div className="flex items-center justify-between">
                <Label className="text-white">Email Notifications</Label>
                <Switch
                  checked={settings.emailNotifications}
                  onCheckedChange={(checked) => setSettings({...settings, emailNotifications: checked})}
                />
              </div>
              <div className="flex items-center justify-between">
                <Label className="text-white">Auto Backup</Label>
                <Switch
                  checked={settings.autoBackup}
                  onCheckedChange={(checked) => setSettings({...settings, autoBackup: checked})}
                />
              </div>
              <div className="flex items-center justify-between">
                <Label className="text-white">Cache Enabled</Label>
                <Switch
                  checked={settings.cacheEnabled}
                  onCheckedChange={(checked) => setSettings({...settings, cacheEnabled: checked})}
                />
              </div>
              <div className="flex items-center justify-between">
                <Label className="text-white">Debug Mode</Label>
                <Switch
                  checked={settings.debugMode}
                  onCheckedChange={(checked) => setSettings({...settings, debugMode: checked})}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* System Actions */}
        <Card className="bg-black/50 backdrop-blur-md border border-emerald-500/20">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Database className="w-5 h-5 mr-2 text-emerald-400" />
              System Actions
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <Button 
                onClick={handleClearCache}
                variant="outline"
                className="w-full border-yellow-500/20 text-yellow-400 hover:bg-yellow-500/10"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Clear Cache
              </Button>
              
              <Button 
                onClick={handleBackupData}
                variant="outline"
                className="w-full border-blue-500/20 text-blue-400 hover:bg-blue-500/10"
              >
                <Database className="w-4 h-4 mr-2" />
                Backup Data
              </Button>
              
              <Button 
                variant="outline"
                className="w-full border-purple-500/20 text-purple-400 hover:bg-purple-500/10"
              >
                <Settings className="w-4 h-4 mr-2" />
                Export Settings
              </Button>
            </div>

            {/* System Information */}
            <div className="mt-6 p-4 bg-gray-800/50 rounded-lg">
              <h4 className="text-white font-medium mb-3">System Information</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Version:</span>
                  <span className="text-white">1.0.0</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Last Backup:</span>
                  <span className="text-white">Today</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Storage Used:</span>
                  <span className="text-white">2.3 MB</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Uptime:</span>
                  <span className="text-green-400">99.9%</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SystemSettings;
