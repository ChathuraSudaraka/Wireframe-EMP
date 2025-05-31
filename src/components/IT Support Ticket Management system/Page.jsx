import React, { useState } from 'react';
import '../../wireframe.css';
import ReceiveTickets from './ReceiveTickets';
import AssignTickets from './AssignTickets';
import TrackProgress from './TrackProgress';
import ResolveTickets from './ResolveTickets';

const ITSupportPage = () => {
  const [activeTab, setActiveTab] = useState('receive');

  const renderContent = () => {
    switch (activeTab) {
      case 'receive':
        return <ReceiveTickets />;
      case 'assign':
        return <AssignTickets />;
      case 'track':
        return <TrackProgress />;
      case 'resolve':
        return <ResolveTickets />;
      default:
        return <ReceiveTickets />;
    }
  };

  return (
    <div className="wireframe-container">
      {/* Header */}
      <div className="wireframe-header">
        <h1>IT Support Ticket Management System</h1>
        <div className="wireframe-stats">
          <div className="wireframe-stat-item">
            <span className="stat-number">47</span>
            <span className="stat-label">Open Tickets</span>
          </div>
          <div className="wireframe-stat-item">
            <span className="stat-number">12</span>
            <span className="stat-label">High Priority</span>
          </div>
          <div className="wireframe-stat-item">
            <span className="stat-number">8</span>
            <span className="stat-label">Unassigned</span>
          </div>
          <div className="wireframe-stat-item">
            <span className="stat-number">95%</span>
            <span className="stat-label">SLA Compliance</span>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="wireframe-nav">
        <button 
          className={`wireframe-nav-item ${activeTab === 'receive' ? 'active' : ''}`}
          onClick={() => setActiveTab('receive')}
        >
          📨 Receive Tickets
        </button>
        <button 
          className={`wireframe-nav-item ${activeTab === 'assign' ? 'active' : ''}`}
          onClick={() => setActiveTab('assign')}
        >
          👥 Assign Tickets
        </button>
        <button 
          className={`wireframe-nav-item ${activeTab === 'track' ? 'active' : ''}`}
          onClick={() => setActiveTab('track')}
        >
          📊 Track Progress
        </button>
        <button 
          className={`wireframe-nav-item ${activeTab === 'resolve' ? 'active' : ''}`}
          onClick={() => setActiveTab('resolve')}
        >
          ✅ Resolve Tickets
        </button>
      </div>

      {/* Main Content */}
      <div className="wireframe-content">
        {renderContent()}
      </div>

      {/* Footer */}
      <div className="wireframe-footer">
        <div className="wireframe-button-group">
          <button className="wireframe-button secondary">📊 Generate Reports</button>
          <button className="wireframe-button secondary">📚 Knowledge Base</button>
          <button className="wireframe-button secondary">⚡ Escalate Tickets</button>
          <button className="wireframe-button secondary">⚙️ System Settings</button>
        </div>
        <div className="wireframe-info">
          <span>Last Updated: Today 3:45 PM</span>
          <span>System Status: ✅ Operational</span>
        </div>
      </div>
    </div>
  );
};

export default ITSupportPage;
