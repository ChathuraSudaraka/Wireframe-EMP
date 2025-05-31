import React, { useState } from 'react';
import AddNewCustomer from './AddNewCustomer';
import UpdateCustomerRecords from './UpdateCustomerRecords';
import ScheduleFollowUp from './ScheduleFollowUp';
import AnalyzeSalesData from './AnalyzeSalesData';
import RecordCustomerInteraction from './RecordCustomerInteraction';
import GenerateSalesReports from './GenerateSalesReports';
import '../../wireframe.css';

const CustomerRelationshipManagement = ({ onBackToMain }) => {
  const [currentPage, setCurrentPage] = useState('main');

  const navigate = (page) => {
    setCurrentPage(page);
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'add-customer':
        return <AddNewCustomer onNavigate={navigate} />;
      case 'update-customer':
        return <UpdateCustomerRecords onNavigate={navigate} />;
      case 'schedule-followup':
        return <ScheduleFollowUp onNavigate={navigate} />;
      case 'analyze-sales':
        return <AnalyzeSalesData onNavigate={navigate} />;
      case 'record-interaction':
        return <RecordCustomerInteraction onNavigate={navigate} />;
      case 'generate-reports':
        return <GenerateSalesReports onNavigate={navigate} />;
      default:
        return (
          <div className="wireframe-container">
            <div className="wireframe-header">
              <h1>Customer Relationship Management (CRM)</h1>
              <button 
                className="wireframe-back-btn"
                onClick={onBackToMain}
              >
                ← Back to Main Dashboard
              </button>
            </div>

            <div className="wireframe-content">
              <div className="wireframe-section">
                <h2>CRM Dashboard Overview</h2>
                <div className="dashboard-stats">
                  <div className="stat-card">
                    <h3>Total Customers</h3>
                    <span className="stat-number">2,847</span>
                    <span className="stat-change positive">+127 this month</span>
                  </div>
                  <div className="stat-card">
                    <h3>Active Leads</h3>
                    <span className="stat-number">156</span>
                    <span className="stat-change positive">+23 this week</span>
                  </div>
                  <div className="stat-card">
                    <h3>Monthly Revenue</h3>
                    <span className="stat-number">$487,230</span>
                    <span className="stat-change positive">+8.5%</span>
                  </div>
                  <div className="stat-card">
                    <h3>Conversion Rate</h3>
                    <span className="stat-number">24.3%</span>
                    <span className="stat-change negative">-1.2%</span>
                  </div>
                </div>
              </div>

              <div className="wireframe-section">
                <h2>Recent Customer Activity</h2>
                <div className="activity-feed">
                  <div className="activity-item">
                    <div className="activity-icon">📞</div>
                    <div className="activity-details">
                      <span className="activity-text">Called ABC Corp - discussed renewal terms</span>
                      <span className="activity-time">2 hours ago</span>
                    </div>
                  </div>
                  <div className="activity-item">
                    <div className="activity-icon">✉️</div>
                    <div className="activity-details">
                      <span className="activity-text">Email sent to XYZ Ltd - proposal follow-up</span>
                      <span className="activity-time">4 hours ago</span>
                    </div>
                  </div>
                  <div className="activity-item">
                    <div className="activity-icon">🤝</div>
                    <div className="activity-details">
                      <span className="activity-text">Meeting scheduled with Tech Solutions Inc</span>
                      <span className="activity-time">Yesterday</span>
                    </div>
                  </div>
                  <div className="activity-item">
                    <div className="activity-icon">💰</div>
                    <div className="activity-details">
                      <span className="activity-text">Deal closed with Global Manufacturing - $45,000</span>
                      <span className="activity-time">2 days ago</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="wireframe-section">
                <h2>CRM System Modules</h2>
                <div className="modules-grid">
                  <div className="module-card" onClick={() => navigate('add-customer')}>
                    <div className="module-icon">👤</div>
                    <h3>Add New Customer</h3>
                    <p>Register new customers and prospects in the system with complete profile information</p>
                    <div className="module-stats">
                      <span>47 new this month</span>
                    </div>
                  </div>

                  <div className="module-card" onClick={() => navigate('update-customer')}>
                    <div className="module-icon">✏️</div>
                    <h3>Update Customer Records</h3>
                    <p>Modify existing customer information, contact details, and account status</p>
                    <div className="module-stats">
                      <span>89 updates this week</span>
                    </div>
                  </div>

                  <div className="module-card" onClick={() => navigate('schedule-followup')}>
                    <div className="module-icon">📅</div>
                    <h3>Schedule Follow-Up</h3>
                    <p>Plan and schedule customer follow-up activities, meetings, and reminders</p>
                    <div className="module-stats">
                      <span>34 scheduled today</span>
                    </div>
                  </div>

                  <div className="module-card" onClick={() => navigate('analyze-sales')}>
                    <div className="module-icon">📊</div>
                    <h3>Analyze Sales Data</h3>
                    <p>Review sales performance metrics, trends, and customer analytics</p>
                    <div className="module-stats">
                      <span>24.3% conversion rate</span>
                    </div>
                  </div>

                  <div className="module-card" onClick={() => navigate('record-interaction')}>
                    <div className="module-icon">💬</div>
                    <h3>Record Customer Interaction</h3>
                    <p>Log customer communications, calls, emails, and meeting notes</p>
                    <div className="module-stats">
                      <span>156 interactions logged</span>
                    </div>
                  </div>

                  <div className="module-card" onClick={() => navigate('generate-reports')}>
                    <div className="module-icon">📋</div>
                    <h3>Generate Sales Reports</h3>
                    <p>Create comprehensive sales and customer reports for analysis and management</p>
                    <div className="module-stats">
                      <span>12 reports generated</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="wireframe-section">
                <h2>Quick Actions</h2>
                <div className="quick-actions">
                  <button className="wireframe-btn-primary" onClick={() => navigate('add-customer')}>
                    Add New Customer
                  </button>
                  <button className="wireframe-btn-secondary" onClick={() => navigate('record-interaction')}>
                    Log Interaction
                  </button>
                  <button className="wireframe-btn-secondary" onClick={() => navigate('schedule-followup')}>
                    Schedule Follow-Up
                  </button>
                  <button className="wireframe-btn-outline" onClick={() => navigate('generate-reports')}>
                    Generate Report
                  </button>
                </div>
              </div>

              <div className="wireframe-section">
                <h2>Upcoming Tasks</h2>
                <div className="task-list">
                  <div className="task-item high-priority">
                    <div className="task-priority">High</div>
                    <div className="task-details">
                      <span className="task-title">Follow up with Enterprise Solutions Ltd</span>
                      <span className="task-due">Due: Today 3:00 PM</span>
                    </div>
                    <button className="task-action">Complete</button>
                  </div>
                  <div className="task-item medium-priority">
                    <div className="task-priority">Medium</div>
                    <div className="task-details">
                      <span className="task-title">Send proposal to Tech Innovators Inc</span>
                      <span className="task-due">Due: Tomorrow 10:00 AM</span>
                    </div>
                    <button className="task-action">Complete</button>
                  </div>
                  <div className="task-item low-priority">
                    <div className="task-priority">Low</div>
                    <div className="task-details">
                      <span className="task-title">Update customer database records</span>
                      <span className="task-due">Due: This Friday</span>
                    </div>
                    <button className="task-action">Complete</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  return renderCurrentPage();
};

export default CustomerRelationshipManagement;
