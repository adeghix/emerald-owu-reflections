
import React, { useState, useEffect } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Mail, Send, CheckCircle, X } from 'lucide-react';
import { toast } from 'sonner';

interface EmailConfig {
  smtpHost: string;
  smtpPort: string;
  smtpUser: string;
  smtpPassword: string;
  fromEmail: string;
  fromName: string;
}

const EmailConfig: React.FC = () => {
  const [config, setConfig] = useState<EmailConfig>({
    smtpHost: '',
    smtpPort: '587',
    smtpUser: '',
    smtpPassword: '',
    fromEmail: '',
    fromName: 'Owu Falls Tourism'
  });
  const [isLoading, setIsLoading] = useState(false);
  const [testEmail, setTestEmail] = useState('');
  const [connectionStatus, setConnectionStatus] = useState<'idle' | 'testing' | 'success' | 'error'>('idle');

  useEffect(() => {
    const savedConfig = localStorage.getItem('emailConfig');
    if (savedConfig) {
      setConfig(JSON.parse(savedConfig));
    }
  }, []);

  const handleSaveConfig = () => {
    localStorage.setItem('emailConfig', JSON.stringify(config));
    toast.success('Email configuration saved!');
  };

  const handleTestConnection = async () => {
    setConnectionStatus('testing');
    
    // Simulate SMTP connection test
    setTimeout(() => {
      if (config.smtpHost && config.smtpUser && config.smtpPassword) {
        setConnectionStatus('success');
        toast.success('SMTP connection successful!');
      } else {
        setConnectionStatus('error');
        toast.error('SMTP connection failed. Please check your settings.');
      }
    }, 2000);
  };

  const handleSendTestEmail = async () => {
    if (!testEmail) {
      toast.error('Please enter a test email address');
      return;
    }

    setIsLoading(true);
    
    // Simulate sending test email
    setTimeout(() => {
      setIsLoading(false);
      toast.success(`Test email sent to ${testEmail}!`);
      
      // Update email stats
      const stats = JSON.parse(localStorage.getItem('adminStats') || '{}');
      stats.emailsSent = (stats.emailsSent || 0) + 1;
      localStorage.setItem('adminStats', JSON.stringify(stats));
    }, 1500);
  };

  const getStatusIcon = () => {
    switch (connectionStatus) {
      case 'testing':
        return <div className="animate-spin w-4 h-4 border-2 border-yellow-400 border-t-transparent rounded-full" />;
      case 'success':
        return <CheckCircle className="w-4 h-4 text-green-400" />;
      case 'error':
        return <X className="w-4 h-4 text-red-400" />;
      default:
        return <Mail className="w-4 h-4 text-gray-400" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white">Email Configuration</h1>
        <div className="flex items-center space-x-2">
          {getStatusIcon()}
          <span className={`text-sm ${
            connectionStatus === 'success' ? 'text-green-400' :
            connectionStatus === 'error' ? 'text-red-400' :
            connectionStatus === 'testing' ? 'text-yellow-400' :
            'text-gray-400'
          }`}>
            {connectionStatus === 'testing' ? 'Testing...' :
             connectionStatus === 'success' ? 'Connected' :
             connectionStatus === 'error' ? 'Connection Failed' :
             'Not Connected'}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* SMTP Configuration */}
        <Card className="bg-black/50 backdrop-blur-md border border-emerald-500/20">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Mail className="w-5 h-5 mr-2 text-emerald-400" />
              SMTP Settings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-white">SMTP Host</Label>
                <Input
                  placeholder="smtp.gmail.com"
                  value={config.smtpHost}
                  onChange={(e) => setConfig({...config, smtpHost: e.target.value})}
                  className="bg-gray-800 border-emerald-500/20 text-white"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-white">Port</Label>
                <Input
                  placeholder="587"
                  value={config.smtpPort}
                  onChange={(e) => setConfig({...config, smtpPort: e.target.value})}
                  className="bg-gray-800 border-emerald-500/20 text-white"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label className="text-white">Username</Label>
              <Input
                placeholder="your-email@gmail.com"
                value={config.smtpUser}
                onChange={(e) => setConfig({...config, smtpUser: e.target.value})}
                className="bg-gray-800 border-emerald-500/20 text-white"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-white">Password</Label>
              <Input
                type="password"
                placeholder="Your app password"
                value={config.smtpPassword}
                onChange={(e) => setConfig({...config, smtpPassword: e.target.value})}
                className="bg-gray-800 border-emerald-500/20 text-white"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-white">From Email</Label>
              <Input
                placeholder="noreply@owufalls.com"
                value={config.fromEmail}
                onChange={(e) => setConfig({...config, fromEmail: e.target.value})}
                className="bg-gray-800 border-emerald-500/20 text-white"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-white">From Name</Label>
              <Input
                placeholder="Owu Falls Tourism"
                value={config.fromName}
                onChange={(e) => setConfig({...config, fromName: e.target.value})}
                className="bg-gray-800 border-emerald-500/20 text-white"
              />
            </div>
            <div className="flex space-x-3">
              <Button 
                onClick={handleSaveConfig}
                className="bg-emerald-500 hover:bg-emerald-600"
              >
                Save Configuration
              </Button>
              <Button 
                onClick={handleTestConnection}
                variant="outline"
                className="border-emerald-500/20 text-emerald-400"
                disabled={connectionStatus === 'testing'}
              >
                Test Connection
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Test Email */}
        <Card className="bg-black/50 backdrop-blur-md border border-emerald-500/20">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Send className="w-5 h-5 mr-2 text-emerald-400" />
              Test Email
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label className="text-white">Test Email Address</Label>
              <Input
                type="email"
                placeholder="test@example.com"
                value={testEmail}
                onChange={(e) => setTestEmail(e.target.value)}
                className="bg-gray-800 border-emerald-500/20 text-white"
              />
            </div>
            <Button 
              onClick={handleSendTestEmail}
              disabled={isLoading || !testEmail}
              className="w-full bg-emerald-500 hover:bg-emerald-600"
            >
              {isLoading ? 'Sending...' : 'Send Test Email'}
            </Button>
            
            {/* Email Templates */}
            <div className="mt-6 space-y-3">
              <h3 className="text-white font-medium">Quick Templates</h3>
              <div className="space-y-2">
                <button className="w-full p-3 text-left bg-gray-800/50 rounded-lg border border-emerald-500/10 hover:bg-emerald-500/10 transition-colors">
                  <div className="text-white text-sm font-medium">Welcome Email</div>
                  <div className="text-gray-400 text-xs">Send to new users</div>
                </button>
                <button className="w-full p-3 text-left bg-gray-800/50 rounded-lg border border-emerald-500/10 hover:bg-emerald-500/10 transition-colors">
                  <div className="text-white text-sm font-medium">Booking Confirmation</div>
                  <div className="text-gray-400 text-xs">Tour booking receipt</div>
                </button>
                <button className="w-full p-3 text-left bg-gray-800/50 rounded-lg border border-emerald-500/10 hover:bg-emerald-500/10 transition-colors">
                  <div className="text-white text-sm font-medium">Newsletter</div>
                  <div className="text-gray-400 text-xs">Monthly updates</div>
                </button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default EmailConfig;
