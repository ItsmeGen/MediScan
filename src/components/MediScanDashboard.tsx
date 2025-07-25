import React, { useState } from 'react';
import {  
  Bell, 
  Camera, 
  CheckCircle, 
  Clock, 
  Home, 
  MessageCircle, 
  Search, 
  Upload, 
  Users, 
  FileText,
  Languages,
  User,
  Stethoscope
} from 'lucide-react';
import './MediScanDashboard.css'
import StatCard from '../components/props/StatCard';
import QuickAction from './props/QuickAction';
import ActivityItem from './props/ActivityItem';
import SystemStatus from './props/SystemStatus';

interface userInfoProps{
  name:String;
  role:String;
}


const MediScanDashboard: React.FC = () => {
  const [user,setUser] =useState<userInfoProps>({
    name:"Dr. Sarah Johnson",
    role:"Nurse"
  })
  return (
    <div className="dashboard">
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <div className="logo-section">
            <div className="logo-icon">
              <Stethoscope/>
            </div>
            <div className="logo-text">
              <h1>MediScan</h1>
              <p>Medical Record Verification</p>
            </div>
          </div>
          
          <div className="header-right">
            <div className="language-selector">
              <Languages />
              <span>EN / TL</span>
            </div>
            <div className="notification-bell">
              <Bell />
              <span className="notification-badge">2</span>
            </div>
            <div className="user-profile">
              <div className="user-avatar">
                <User />
              </div>
              <div className="user-info">
                <p>{user.name}</p>
                <p className="user-badge">{user.role}</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="navigation">
        <div className="nav-content">
          <button className="nav-button active">
            <Home />
            Dashboard
          </button>
          <button className="nav-button">
            <Camera />
            Scan ID
          </button>
          <button className="nav-button">
            <Search />
            Search
          </button>
          <button className="nav-button">
            <FileText />
            Records
          </button>
          <button className="nav-button">
            <MessageCircle />
            Assistant
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="main-content">
        <div className="welcome-section">
          <h2>Welcome back, {user.role}</h2>
          <p>Here's what's happening in your medical verification system today.</p>
        </div>

        {/* Stats Grid */}
        <div className="stats-grid">
          <StatCard
            title="Patients Scanned Today"
            value="127"
            change="+12%"
            changeType="positive"
            icon={<Users />}
          />
          <StatCard
            title="Records Verified"
            value="98"
            change="+8%"
            changeType="positive"
            icon={<CheckCircle />}
          />
          <StatCard
            title="New Registrations"
            value="15"
            change="+25%"
            changeType="positive"
            icon={<Users />}
          />
          <StatCard
            title="Pending Reviews"
            value="8"
            change="-3%"
            changeType="negative"
            icon={<Clock />}
          />
        </div>

        {/* Quick Actions */}
        <div className="quick-actions">
          <h3>Quick Actions</h3>
          <div className="quick-actions-grid">
            <QuickAction
              title="Scan Patient ID"
              description="Use camera to scan patient identification"
              icon={<Camera />}
              bgColor="bg-blue"
            />
            <QuickAction
              title="Upload ID Image"
              description="Upload an existing patient ID image"
              icon={<Upload />}
              bgColor="bg-green"
            />
            <QuickAction
              title="Search Patients"
              description="Find patients using natural language"
              icon={<Search />}
              bgColor="bg-light-blue"
            />
            <QuickAction
              title="AI Assistant"
              description="Chat with medical record assistant"
              icon={<MessageCircle />}
              bgColor="bg-orange"
            />
          </div>
        </div>

        {/* Bottom Grid */}
        <div className="bottom-grid">
          {/* Recent Activity */}
          <div className="panel">
            <div className="panel-header">
              <h3>Recent Activity</h3>
              <p>Latest patient verification activities</p>
            </div>
            <div className="panel-content">
              <ActivityItem
                name="Maria Santos"
                status="ID Verified"
                time="5 min ago"
                statusColor="status-green"
              />
              <ActivityItem
                name="John Dela Cruz"
                status="New Registration"
                time="12 min ago"
                statusColor="status-blue"
              />
              <ActivityItem
                name="Ana Rodriguez"
                status="OCR Processing"
                time="18 min ago"
                statusColor="status-yellow"
              />
              <ActivityItem
                name="Carlos Mendoza"
                status="Record Updated"
                time="25 min ago"
                statusColor="status-green"
              />
              <ActivityItem
                name="Lisa Chen"
                status="Verification Failed"
                time="32 min ago"
                statusColor="status-red"
              />
            </div>
          </div>

          {/* System Status */}
          <div className="panel">
            <div className="panel-header">
              <h3>System Status</h3>
              <p>Current system performance</p>
            </div>
            <div className="panel-content">
              <SystemStatus
                service="OCR Processing"
                status="Online"
                statusColor="status-online"
              />
              <SystemStatus
                service="Database Connection"
                status="Healthy"
                statusColor="status-healthy"
              />
              <SystemStatus
                service="AI Assistant"
                status="Active"
                statusColor="status-active"
              />
              <SystemStatus
                service="Camera Access"
                status="Available"
                statusColor="status-available"
              />
              
              <div className="system-performance">
                <div className="system-performance-content">
                  <CheckCircle />
                  <div className="system-performance-text">
                    <p>System Performance: Excellent</p>
                    <p>All services running optimally</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MediScanDashboard;