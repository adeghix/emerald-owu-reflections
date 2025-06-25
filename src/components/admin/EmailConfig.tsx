
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Switch } from '../ui/switch';
import { Mail, Send, Settings, CheckCircle, AlertCircle } from 'lucide-react';
import { toast } from 'sonner';

interface EmailConfig {
  smtpHost: string;
  smtpPort: string;
  smtpUser: string;
  smtpPassword: string;
  fromEmail: string;
  fromName: string;
  enableSSL: boolean;
  enableNewsletter: boolean;
}

const EmailConfig: React.FC = () => {
  const [config, setConfig] = useState<EmailConfig>({
    smtpHost: '',
    smtpPort: '587',
    smtpUser: '',
    smtpPassword: '',
    fromEmail: 'noreply@owufalls.com',
    fromName: 'Owu Falls Tourism',
    enableSSL: true,
    enableNewsletter: true
  });
  const [testEmail, setTestEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [connectionStatus, setConnectionStatus] = useState<'idle' | 'testing' | 'success' | 'error'>('idle');

  useEffect(() => {
    // Load email config from localStorage
    const savedConfig = localStorage.getItem('adminEmailConfig');
    if (savedConfig) {
      setConfig(JSON.parse(savedConfig));
    }
  }, []);

  const handleConfigChange = (field: keyof EmailConfig, value: string | boolean) => {
    const newConfig = { ...config, [field]: value };
    setConfig(newConfig);
    localStorage.setItem('adminEmailConfig', JSON.stringify(newConfig));
  };

  const testConnection = async () => {
    setConnectionStatus('testing');
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      const isValid = config.smtpHost && config.smtpUser && config.smtpPassword;
      if (isValid) {
        setConnectionStatus('success');
        toast.success('SMTP connection successful!');
      } else {
        setConnectionStatus('error');
        toast.error('SMTP connection failed. Please check your settings.');
      }
      setIsLoading(false);
    }, 2000);
  };

  const sendTestEmail = async () => {
    if (!testEmail) {
      toast.error('Please enter a test email address');
      return;
    }
    
    setIsLoading(true);
    
    // Simulate sending test email
    setTimeout(() => {
      setIsLoading(false);
      toast.success(`Test email sent to ${testEmail}`);
      setTestEmail('');
    }, 1500);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white">Email Configuration</h1>
        <div className="flex items-center space-x-2">
          {connectionStatus === 'success' && <CheckCircle className="w-5 h-5 text-green-400" />}
          {connectionStatus === 'error' && <AlertCircle className="w-5 h-5 text-red-400" />}
          <span className="text-sm text-gray-400">
            Status: {connectionStatus === 'success' ? 'Connected' : connectionStatus === 'error' ? 'Error' : 'Not tested'}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* SMTP Configuration */}
        <Card className="bg-black/50 backdrop-blur-md border border-emerald-500/20">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Settings className="w-5 h-5 mr-2 text-emerald-400" />
              SMTP Settings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="smtpHost" className="text-white">SMTP Host</Label>
              <Input
                id="smtpHost"
                value={config.smtpHost}
                onChange={(e) => handleConfigChange('smtpHost', e.target.value)}
                placeholder="smtp.gmail.com"
                className="bg-gray-800 border-emerald-500/20 text-white"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="smtpPort" className="text-white">SMTP Port</Label>
              <Input
                id="smtpPort"
                value={config.smtpPort}
                onChange={(e) => handleConfigChange('smtpPort', e.target.value)}
                placeholder="587"
                className="bg-gray-800 border-emerald-500/20 text-white"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="smtpUser" className="text-white">SMTP Username</Label>
              <Input
                id="smtpUser"
                value={config.smtpUser}
                onChange={(e) => handleConfigChange('smtpUser', e.target.value)}
                placeholder="your-email@gmail.com"
                className="bg-gray-800 border-emerald-500/20 text-white"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="smtpPassword" className="text-white">SMTP Password</Label>
              <Input
                id="smtpPassword"
                type="password"
                value={config.smtpPassword}
                onChange={(e) => handleConfigChange('smtpPassword', e.target.value)}
                placeholder="your-app-password"
                className="bg-gray-800 border-emerald-500/20 text-white"
              />
            </div>
            
            <div className="flex items-center space-x-2">
              <Switch
                checked={config.enableSSL}
                onCheckedChange={(checked) => handleConfigChange('enableSSL', checked)}
              />
              <Label className="text-white">Enable SSL/TLS</Label>
            </div>
            
            <Button
              onClick={testConnection}
              disabled={isLoading}
              className="w-full bg-emerald-500 hover:bg-emerald-600"
            >
              {connectionStatus === 'testing' ? 'Testing Connection...' : 'Test Connection'}
            </Button>
          </CardContent>
        </Card>

        {/* Email Settings */}
        <Card className="bg-black/50 backdrop-blur-md border border-emerald-500/20">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Mail className="w-5 h-5 mr-2 text-emerald-400" />
              Email Settings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="fromEmail" className="text-white">From Email</Label>
              <Input
                id="fromEmail"
                value={config.fromEmail}
                onChange={(e) => handleConfigChange('fromEmail', e.target.value)}
                placeholder="noreply@owufalls.com"
                className="bg-gray-800 border-emerald-500/20 text-white"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="fromName" className="text-white">From Name</Label>
              <Input
                id="fromName"
                value={config.fromName}
                onChange={(e) => handleConfigChange('fromName', e.target.value)}
                placeholder="Owu Falls Tourism"
                className="bg-gray-800 border-emerald-500/20 text-white"
              />
            </div>
            
            <div className="flex items-center space-x-2">
              <Switch
                checked={config.enableNewsletter}
                onCheckedChange={(checked) => handleConfigChange('enableNewsletter', checked)}
              />
              <Label className="text-white">Enable Newsletter Signup</Label>
            </div>
            
            <div className="pt-4 border-t border-emerald-500/20">
              <Label htmlFor="testEmail" className="text-white">Test Email Address</Label>
              <div className="flex space-x-2 mt-2">
                <Input
                  id="testEmail"
                  value={testEmail}
                  onChange={(e) => setTestEmail(e.target.value)}
                  placeholder="test@example.com"
                  className="bg-gray-800 border-emerald-500/20 text-white"
                />
                <Button
                  onClick={sendTestEmail}
                  disabled={isLoading || !testEmail}
                  className="bg-emerald-500 hover:bg-emerald-600"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default EmailConfig;
