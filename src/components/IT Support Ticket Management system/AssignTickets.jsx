import React, { useState } from 'react';

const AssignTickets = () => {
  const [tickets] = useState([
    {
      id: 'TK-001',
      title: 'Computer won\'t start',
      reporter: 'John Smith',
      priority: 'High',
      category: 'Hardware',
      estimatedTime: '2 hours',
      status: 'Unassigned'
    },
    {
      id: 'TK-004',
      title: 'Software installation issue',
      reporter: 'Lisa Davis',
      priority: 'Medium',
      category: 'Software',
      estimatedTime: '1 hour',
      status: 'Unassigned'
    },
    {
      id: 'TK-007',
      title: 'VPN connection problems',
      reporter: 'Tom Brown',
      priority: 'Medium',
      category: 'Network',
      estimatedTime: '30 minutes',
      status: 'Unassigned'
    }
  ]);

  const [technicians] = useState([
    { id: 'TECH-001', name: 'Alex Rodriguez', specialization: 'Hardware', workload: 'Light', status: 'Available' },
    { id: 'TECH-002', name: 'Maria Garcia', specialization: 'Software', workload: 'Medium', status: 'Available' },
    { id: 'TECH-003', name: 'James Wilson', specialization: 'Network', workload: 'Heavy', status: 'Busy' },
    { id: 'TECH-004', name: 'Emma Johnson', specialization: 'General', workload: 'Light', status: 'Available' }
  ]);

  return (
    <div className="wireframe-component">
      <div className="wireframe-header">
        <h3>👥 Assign Support Tickets</h3>
      </div>
      <div className="wireframe-content">
        <div className="wireframe-two-column">
          <div className="wireframe-column">
            <div className="wireframe-section">
              <h4>📋 Unassigned Tickets</h4>
              <div className="wireframe-form-group">
                <label>Filter by Category:</label>
                <div className="wireframe-select">
                  <span>All Categories ▼</span>
                </div>
              </div>
              <div className="wireframe-list">
                {tickets.map((ticket) => (
                  <div key={ticket.id} className="wireframe-list-item">
                    <div className="wireframe-list-header">
                      <span className="wireframe-list-title">{ticket.id} - {ticket.title}</span>
                      <span className={`wireframe-status-${ticket.priority.toLowerCase()}`}>
                        {ticket.priority}
                      </span>
                    </div>
                    <div className="wireframe-list-details">
                      <span>Reporter: {ticket.reporter}</span>
                      <span>Category: {ticket.category}</span>
                      <span>Est. Time: {ticket.estimatedTime}</span>
                    </div>
                    <div className="wireframe-list-actions">
                      <button className="wireframe-button-small">View Details</button>
                      <button className="wireframe-button-small">Quick Assign</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="wireframe-column">
            <div className="wireframe-section">
              <h4>👨‍💻 Available Technicians</h4>
              <div className="wireframe-form-group">
                <label>Filter by Specialization:</label>
                <div className="wireframe-select">
                  <span>All Specializations ▼</span>
                </div>
              </div>
              <div className="wireframe-list">
                {technicians.map((tech) => (
                  <div key={tech.id} className="wireframe-list-item">
                    <div className="wireframe-list-header">
                      <span className="wireframe-list-title">{tech.name}</span>
                      <span className={`wireframe-status-${tech.status.toLowerCase()}`}>
                        {tech.status}
                      </span>
                    </div>
                    <div className="wireframe-list-details">
                      <span>ID: {tech.id}</span>
                      <span>Specialization: {tech.specialization}</span>
                      <span>Workload: {tech.workload}</span>
                    </div>
                    <div className="wireframe-list-actions">
                      <button className="wireframe-button-small">View Schedule</button>
                      <button className="wireframe-button-small">Assign Ticket</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="wireframe-section">
          <h4>📊 Assignment Statistics</h4>
          <div className="wireframe-stats-grid">
            <div className="wireframe-stat-card">
              <div className="wireframe-stat-title">Unassigned</div>
              <div className="wireframe-stat-value">8</div>
              <div className="wireframe-stat-label">Tickets</div>
            </div>
            <div className="wireframe-stat-card">
              <div className="wireframe-stat-title">Available</div>
              <div className="wireframe-stat-value">3</div>
              <div className="wireframe-stat-label">Technicians</div>
            </div>
            <div className="wireframe-stat-card">
              <div className="wireframe-stat-title">Avg Assignment</div>
              <div className="wireframe-stat-value">5 min</div>
              <div className="wireframe-stat-label">Time</div>
            </div>
          </div>
        </div>

        <div className="wireframe-button-group">
          <button className="wireframe-button">Auto-Assign All</button>
          <button className="wireframe-button-secondary">Load Balancing</button>
          <button className="wireframe-button-secondary">Export Assignment Report</button>
        </div>
      </div>
    </div>
  );
};

export default AssignTickets;
