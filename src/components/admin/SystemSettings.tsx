import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Switch } from '../ui/switch';
import { Textarea } from '../ui/textarea';
import { Settings, Save, RefreshCw, Database, Shield, Globe } from 'lucide-react';
import { toast } from 'sonner';

interface SystemConfig {
  siteName: string;
  siteDescription: string;
  maintenanceMode: boolean;
  enableAnalytics: boolean;
  enableNotifications: boolean;
  maxUploadSize: string;
  sessionTimeout: string;
  enableTwoFactor: boolean;
  allowRegistrations: boolean;
  enableSocialLogin: boolean;
}

const SystemSettings: React.FC = () => {
  const [config, setConfig] = useState<SystemConfig>({
    siteName: 'Owu Falls Tourism',
    siteDescription: 'Experience the majesty of Nigeria\'s tallest waterfall',
    maintenanceMode: false,
    enableAnalytics: true,
    enableNotifications: true,
    maxUploadSize: '10',
    sessionTimeout: '24',
    enableTwoFactor: false,
    allowRegistrations: true,
    enableSocialLogin: false
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Load system config from localStorage
    const savedConfig = localStorage.getItem('adminSystemConfig');
    if (savedConfig) {
      setConfig(JSON.parse(savedConfig));
    }
  }, []);

  const handleConfigChange = (field: keyof SystemConfig, value: string | boolean) => {
    setConfig(prev => ({ ...prev, [field]: value }));
  };

  const saveSettings = async () => {
    setIsLoading(true);
    
    // Save to localStorage
    localStorage.setItem('adminSystemConfig', JSON.stringify(config));
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast.success('System settings saved successfully!');
    }, 1000);
  };

  const clearCache = () => {
    // Clear various cache items but keep admin settings
    const itemsToKeep = ['adminAuth', 'adminLoginTime', 'adminSystemConfig', 'adminEmailConfig'];
    const keysToRemove = [];
    
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && !itemsToKeep.includes(key)) {
        keysToRemove.push(key);
      }
    }
    
    keysToRemove.forEach(key => localStorage.removeItem(key));
    toast.success('Cache cleared successfully!');
  };

  const resetToDefaults = () => {
    if (confirm('Are you sure you want to reset all settings to defaults? This action cannot be undone.')) {
      const defaultConfig: SystemConfig = {
        siteName: 'Owu Falls Tourism',
        siteDescription: 'Experience the majesty of Nigeria\'s tallest waterfall',
        maintenanceMode: false,
        enableAnalytics: true,
        enableNotifications: true,
        maxUploadSize: '10',
        sessionTimeout: '24',
        enableTwoFactor: false,
        allowRegistrations: true,
        enableSocialLogin: false
      };
      
      setConfig(defaultConfig);
      localStorage.setItem('adminSystemConfig', JSON.stringify(defaultConfig));
      toast.success('Settings reset to defaults!');
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white">System Settings</h1>
        <div className="flex space-x-2">
          <Button onClick={clearCache} variant="outline" className="border-emerald-500/20 text-emerald-400">
            <RefreshCw className="w-4 h-4 mr-2" />
            Clear Cache
          </Button>
          <Button onClick={saveSettings} disabled={isLoading} className="bg-emerald-500 hover:bg-emerald-600">
            <Save className="w-4 h-4 mr-2" />
            {isLoading ? 'Saving...' : 'Save Settings'}
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* General Settings */}
        <Card className="bg-black/50 backdrop-blur-md border border-emerald-500/20">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Globe className="w-5 h-5 mr-2 text-emerald-400" />
              General Settings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="siteName" className="text-white">Site Name</Label>
              <Input
                id="siteName"
                value={config.siteName}
                onChange={(e) => handleConfigChange('siteName', e.target.value)}
                className="bg-gray-800 border-emerald-500/20 text-white"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="siteDescription" className="text-white">Site Description</Label>
              <Textarea
                id="siteDescription"
                value={config.siteDescription}
                onChange={(e) => handleConfigChange('siteDescription', e.target.value)}
                className="bg-gray-800 border-emerald-500/20 text-white"
                rows={3}
              />
            </div>
            
            <div className="flex items-center space-x-2">
              <Switch
                checked={config.maintenanceMode}
                onCheckedChange={(checked) => handleConfigChange('maintenanceMode', checked)}
              />
              <Label className="text-white">Maintenance Mode</Label>
            </div>
            
            <div className="flex items-center space-x-2">
              <Switch
                checked={config.allowRegistrations}
                onCheckedChange={(checked) => handleConfigChange('allowRegistrations', checked)}
              />
              <Label className="text-white">Allow New Registrations</Label>
            </div>
          </CardContent>
        </Card>

        {/* Security Settings */}
        <Card className="bg-black/50 backdrop-blur-md border border-emerald-500/20">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Shield className="w-5 h-5 mr-2 text-emerald-400" />
              Security Settings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="sessionTimeout" className="text-white">Session Timeout (hours)</Label>
              <Input
                id="sessionTimeout"
                type="number"
                value={config.sessionTimeout}
                onChange={(e) => handleConfigChange('sessionTimeout', e.target.value)}
                className="bg-gray-800 border-emerald-500/20 text-white"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="maxUploadSize" className="text-white">Max Upload Size (MB)</Label>
              <Input
                id="maxUploadSize"
                type="number"
                value={config.maxUploadSize}
                onChange={(e) => handleConfigChange('maxUploadSize', e.target.value)}
                className="bg-gray-800 border-emerald-500/20 text-white"
              />
            </div>
            
            <div className="flex items-center space-x-2">
              <Switch
                checked={config.enableTwoFactor}
                onCheckedChange={(checked) => handleConfigChange('enableTwoFactor', checked)}
              />
              <Label className="text-white">Enable Two-Factor Authentication</Label>
            </div>
            
            <div className="flex items-center space-x-2">
              <Switch
                checked={config.enableSocialLogin}
                onCheckedChange={(checked) => handleConfigChange('enableSocialLogin', checked)}
              />
              <Label className="text-white">Enable Social Login</Label>
            </div>
          </CardContent>
        </Card>

        {/* Feature Settings */}
        <Card className="bg-black/50 backdrop-blur-md border border-emerald-500/20">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Settings className="w-5 h-5 mr-2 text-emerald-400" />
              Feature Settings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-2">
              <Switch
                checked={config.enableAnalytics}
                onCheckedChange={(checked) => handleConfigChange('enableAnalytics', checked)}
              />
              <Label className="text-white">Enable Analytics Tracking</Label>
            </div>
            
            <div className="flex items-center space-x-2">
              <Switch
                checked={config.enableNotifications}
                onCheckedChange={(checked) => handleConfigChange('enableNotifications', checked)}
              />
              <Label className="text-white">Enable Push Notifications</Label>
            </div>
            
            <div className="pt-4 border-t border-emerald-500/20">
              <h3 className="text-white font-medium mb-4">Database Actions</h3>
              <div className="space-y-2">
                <Button
                  onClick={resetToDefaults}
                  variant="outline"
                  className="w-full border-yellow-500/20 text-yellow-400 hover:bg-yellow-500/20"
                >
                  <Database className="w-4 h-4 mr-2" />
                  Reset to Defaults
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* System Information */}
        <Card className="bg-black/50 backdrop-blur-md border border-emerald-500/20">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Settings className="w-5 h-5 mr-2 text-emerald-400" />
              System Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-400">Version:</span>
                <span className="text-white">1.0.0</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Environment:</span>
                <span className="text-white">Production</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Last Updated:</span>
                <span className="text-white">{new Date().toLocaleDateString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Storage Used:</span>
                <span className="text-white">2.4 MB</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Uptime:</span>
                <span className="text-white">99.9%</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SystemSettings;
