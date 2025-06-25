
import React, { useState, useEffect } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Badge } from '../ui/badge';
import { Bell, Info, AlertTriangle, CheckCircle, X, Plus } from 'lucide-react';

interface Notification {
  id: string;
  type: 'info' | 'warning' | 'success' | 'error';
  title: string;
  message: string;
  timestamp: string;
  read: boolean;
}

const NotificationsPanel: React.FC = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [filterType, setFilterType] = useState('all');
  const [newNotification, setNewNotification] = useState({
    type: 'info' as Notification['type'],
    title: '',
    message: ''
  });

  useEffect(() => {
    const savedNotifications = localStorage.getItem('adminNotifications');
    if (savedNotifications) {
      setNotifications(JSON.parse(savedNotifications));
    }
  }, []);

  const addNotification = () => {
    if (!newNotification.title || !newNotification.message) return;

    const notification: Notification = {
      id: Date.now().toString(),
      type: newNotification.type,
      title: newNotification.title,
      message: newNotification.message,
      timestamp: new Date().toISOString(),
      read: false
    };

    const updatedNotifications = [notification, ...notifications];
    setNotifications(updatedNotifications);
    localStorage.setItem('adminNotifications', JSON.stringify(updatedNotifications));
    setNewNotification({ type: 'info', title: '', message: '' });
  };

  const markAsRead = (id: string) => {
    const updatedNotifications = notifications.map(notif =>
      notif.id === id ? { ...notif, read: true } : notif
    );
    setNotifications(updatedNotifications);
    localStorage.setItem('adminNotifications', JSON.stringify(updatedNotifications));
  };

  const deleteNotification = (id: string) => {
    const updatedNotifications = notifications.filter(notif => notif.id !== id);
    setNotifications(updatedNotifications);
    localStorage.setItem('adminNotifications', JSON.stringify(updatedNotifications));
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'info': return <Info className="w-4 h-4" />;
      case 'warning': return <AlertTriangle className="w-4 h-4" />;
      case 'success': return <CheckCircle className="w-4 h-4" />;
      case 'error': return <X className="w-4 h-4" />;
      default: return <Bell className="w-4 h-4" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'info': return 'border-l-blue-500 bg-blue-500/10';
      case 'warning': return 'border-l-yellow-500 bg-yellow-500/10';
      case 'success': return 'border-l-green-500 bg-green-500/10';
      case 'error': return 'border-l-red-500 bg-red-500/10';
      default: return 'border-l-gray-500 bg-gray-500/10';
    }
  };

  const filteredNotifications = notifications.filter(notif =>
    filterType === 'all' || notif.type === filterType
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white">Notifications</h1>
        <Badge className="bg-emerald-500/20 text-emerald-400">
          {notifications.filter(n => !n.read).length} Unread
        </Badge>
      </div>

      {/* Create New Notification */}
      <div className="bg-black/50 backdrop-blur-md border border-emerald-500/20 rounded-2xl p-6">
        <h2 className="text-xl font-semibold text-white mb-4">Create Notification</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Select 
            value={newNotification.type} 
            onValueChange={(value) => setNewNotification({...newNotification, type: value as Notification['type']})}
          >
            <SelectTrigger className="bg-gray-800 border-emerald-500/20 text-white">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="info">Info</SelectItem>
              <SelectItem value="warning">Warning</SelectItem>
              <SelectItem value="success">Success</SelectItem>
              <SelectItem value="error">Error</SelectItem>
            </SelectContent>
          </Select>
          <Input
            placeholder="Notification title"
            value={newNotification.title}
            onChange={(e) => setNewNotification({...newNotification, title: e.target.value})}
            className="bg-gray-800 border-emerald-500/20 text-white"
          />
          <Input
            placeholder="Notification message"
            value={newNotification.message}
            onChange={(e) => setNewNotification({...newNotification, message: e.target.value})}
            className="bg-gray-800 border-emerald-500/20 text-white"
          />
          <Button onClick={addNotification} className="bg-emerald-500 hover:bg-emerald-600">
            <Plus className="w-4 h-4 mr-2" />
            Add
          </Button>
        </div>
      </div>

      {/* Filter */}
      <div className="flex justify-between items-center">
        <Select value={filterType} onValueChange={setFilterType}>
          <SelectTrigger className="w-48 bg-black/50 border-emerald-500/20 text-white">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Types</SelectItem>
            <SelectItem value="info">Info</SelectItem>
            <SelectItem value="warning">Warning</SelectItem>
            <SelectItem value="success">Success</SelectItem>
            <SelectItem value="error">Error</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Notifications List */}
      <div className="bg-black/50 backdrop-blur-md border border-emerald-500/20 rounded-2xl p-6">
        <div className="space-y-4 max-h-96 overflow-y-auto">
          {filteredNotifications.length === 0 ? (
            <div className="text-center text-gray-400 py-8">
              <Bell className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p>No notifications found.</p>
            </div>
          ) : (
            filteredNotifications.map((notification) => (
              <div
                key={notification.id}
                className={`border-l-4 p-4 rounded-lg ${getTypeColor(notification.type)} ${
                  !notification.read ? 'bg-opacity-20' : 'bg-opacity-10'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-3">
                    <div className={`p-2 rounded-full ${
                      notification.type === 'info' ? 'bg-blue-500/20 text-blue-400' :
                      notification.type === 'warning' ? 'bg-yellow-500/20 text-yellow-400' :
                      notification.type === 'success' ? 'bg-green-500/20 text-green-400' :
                      'bg-red-500/20 text-red-400'
                    }`}>
                      {getTypeIcon(notification.type)}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white font-medium">{notification.title}</h3>
                      <p className="text-gray-300 text-sm mt-1">{notification.message}</p>
                      <p className="text-gray-400 text-xs mt-2">
                        {new Date(notification.timestamp).toLocaleString()}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    {!notification.read && (
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => markAsRead(notification.id)}
                        className="border-emerald-500/20 text-emerald-400"
                      >
                        Mark Read
                      </Button>
                    )}
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => deleteNotification(notification.id)}
                      className="border-red-500/20 text-red-400"
                    >
                      <X className="w-3 h-3" />
                    </Button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default NotificationsPanel;
