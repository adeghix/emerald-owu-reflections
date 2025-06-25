
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Download, FileText, Calendar, TrendingUp } from 'lucide-react';

const AnalyticsPanel: React.FC = () => {
  const handleGenerateReport = (type: string) => {
    // Simulate report generation
    console.log(`Generating ${type} report...`);
  };

  const reports = [
    {
      title: 'Monthly Visitor Report',
      description: 'Comprehensive visitor analytics for the current month',
      type: 'monthly',
      icon: Calendar,
      color: 'text-emerald-400'
    },
    {
      title: 'User Engagement Report',
      description: 'User behavior and engagement metrics',
      type: 'engagement',
      icon: TrendingUp,
      color: 'text-blue-400'
    },
    {
      title: 'Revenue Analytics',
      description: 'Booking revenue and financial insights',
      type: 'revenue',
      icon: FileText,
      color: 'text-purple-400'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white">Reports & Analytics</h1>
        <Button className="bg-emerald-500 hover:bg-emerald-600">
          <Download className="w-4 h-4 mr-2" />
          Export All Data
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reports.map((report) => (
          <Card key={report.type} className="bg-black/50 backdrop-blur-md border border-emerald-500/20">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <report.icon className={`w-5 h-5 mr-2 ${report.color}`} />
                {report.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400 mb-4">{report.description}</p>
              <Button 
                onClick={() => handleGenerateReport(report.type)}
                className="w-full bg-emerald-500 hover:bg-emerald-600"
              >
                Generate Report
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Stats */}
      <Card className="bg-black/50 backdrop-blur-md border border-emerald-500/20">
        <CardHeader>
          <CardTitle className="text-white">Quick Statistics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-emerald-400 mb-1">98%</div>
              <div className="text-sm text-gray-400">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400 mb-1">2.3s</div>
              <div className="text-sm text-gray-400">Avg Load Time</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400 mb-1">4.8/5</div>
              <div className="text-sm text-gray-400">User Rating</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-400 mb-1">89%</div>
              <div className="text-sm text-gray-400">Satisfaction</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AnalyticsPanel;
