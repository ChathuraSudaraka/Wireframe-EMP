import React, { useState } from 'react';
import ExpenseReimbursementPage from './components/Expense Reimbursement Process/Page.jsx';
import EmployeeOnboardingPage from './components/Employee Onboarding Process/Page.jsx';
import PayrollManagementPage from './components/Payroll Management System/Page.jsx';
import EmployeeSelfServicePage from './components/Employee Self-Service Portal/Page.jsx';
import ITSupportPage from './components/IT Support Ticket Management system/Page.jsx';
import SystemUserAccountAdministrationPage from './components/System User Account Administration/Page.jsx';
import SalesOrderProcessingPage from './components/Sales Order Processing/Page.jsx';
import CustomerRelationshipManagementPage from './components/Customer Relationship Management/Page.jsx';
import './wireframe.css';

function Page() {
  const [activeSystem, setActiveSystem] = useState('dashboard');
  const systems = [
    {
      id: 'expense-reimbursement',
      title: 'Expense Reimbursement Process',
      description: 'Manage expense claims, verify documents, approve reimbursements, and process payments',
      icon: '💰',
      component: ExpenseReimbursementPage,
      role: 'Finance Clerk'
    },
    {
      id: 'employee-onboarding',
      title: 'Employee Onboarding Process',
      description: 'Create profiles, collect documents, assign training, and setup new employees',
      icon: '👥',
      component: EmployeeOnboardingPage,
      role: 'HR Admin'
    },
    {
      id: 'payroll-management',
      title: 'Payroll Management System',
      description: 'Process payroll, manage employee benefits, and generate payroll reports',
      icon: '📊',
      component: PayrollManagementPage,
      role: 'Payroll Admin'
    },
    {
      id: 'employee-self-service',
      title: 'Employee Self-Service Portal',
      description: 'Employee portal for leave requests, profile updates, and document access',
      icon: '🔧',
      component: EmployeeSelfServicePage,
      role: 'Employee'
    },    {
      id: 'it-support',
      title: 'IT Support Ticket Management',
      description: 'Receive, assign, track, and resolve IT support tickets with comprehensive management tools',
      icon: '🎧',
      component: ITSupportPage,
      role: 'IT Support'
    },    {
      id: 'user-account-admin',
      title: 'System User Account Administration',
      description: 'Manage user accounts, roles, permissions, and security settings across the system',
      icon: '👨‍💼',
      component: SystemUserAccountAdministrationPage,
      role: 'System Admin'
    },    {
      id: 'sales-order-processing',
      title: 'Sales Order Processing',
      description: 'Complete sales order lifecycle management from creation to delivery and invoicing',
      icon: '📦',
      component: SalesOrderProcessingPage,
      role: 'Sales Representative'
    },
    {
      id: 'customer-relationship-management',
      title: 'Customer Relationship Management',
      description: 'Manage customer relationships, sales data, follow-ups, and generate comprehensive reports',
      icon: '🤝',
      component: CustomerRelationshipManagementPage,
      role: 'Sales Manager'
    }
  ];
  const ActiveComponent = systems.find(system => system.id === activeSystem)?.component;

  if (activeSystem !== 'dashboard' && ActiveComponent) {
    return <ActiveComponent onBackToMain={() => setActiveSystem('dashboard')} />;
  }

  return (
    <div className="wireframe-app">
      {/* Header */}
      <header className="wireframe-header-main">
        <div className="wireframe-header-content">
          <h1>🏢 Enterprise Management System</h1>
          <div className="wireframe-user-info">
            <span>System Administrator</span>
            <div className="wireframe-avatar">SA</div>
          </div>
        </div>
      </header>

      {/* Dashboard Content */}
      <main className="wireframe-main">
        <div className="dashboard-container">
          {/* Welcome Section */}
          <section className="dashboard-welcome">
            <h2>Welcome to the Enterprise Management System</h2>
            <p>Select a system below to access its functionality</p>
          </section>

          {/* System Cards Grid */}
          <div className="systems-grid">
            {systems.map((system) => (
              <div 
                key={system.id} 
                className="system-card"
                onClick={() => setActiveSystem(system.id)}
              >
                <div className="system-card-header">
                  <div className="system-icon">{system.icon}</div>
                  <h3>{system.title}</h3>
                </div>
                <div className="system-card-body">
                  <p>{system.description}</p>
                  <div className="system-role">
                    <span className="role-badge">{system.role}</span>
                  </div>
                </div>
                <div className="system-card-footer">
                  <button className="access-btn">
                    Access System →
                  </button>
                </div>
              </div>
            ))}
          </div>          {/* Quick Stats */}
          <section className="dashboard-stats">
            <h3>System Overview</h3>            <div className="stats-grid">              <div className="stat-card">
                <div className="stat-number">8</div>
                <div className="stat-label">Active Systems</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">33</div>
                <div className="stat-label">Total Modules</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">24/7</div>
                <div className="stat-label">System Availability</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">100%</div>
                <div className="stat-label">Uptime</div>
              </div>
            </div>
          </section>{/* Recent Activity */}
          <section className="dashboard-activity">
            <h3>Recent System Activity</h3>            <div className="activity-list">
              <div className="activity-item">
                <div className="activity-icon">👨‍💼</div>
                <div className="activity-content">
                  <div className="activity-title">New user account created</div>
                  <div className="activity-time">Just now</div>
                </div>
              </div>
              <div className="activity-item">
                <div className="activity-icon">🎧</div>
                <div className="activity-content">
                  <div className="activity-title">IT ticket resolved - printer issue</div>
                  <div className="activity-time">2 minutes ago</div>
                </div>
              </div>
              <div className="activity-item">
                <div className="activity-icon">💰</div>
                <div className="activity-content">
                  <div className="activity-title">New expense claim submitted</div>
                  <div className="activity-time">5 minutes ago</div>
                </div>
              </div>
              <div className="activity-item">
                <div className="activity-icon">👥</div>
                <div className="activity-content">
                  <div className="activity-title">Employee onboarding completed</div>
                  <div className="activity-time">15 minutes ago</div>
                </div>
              </div>
              <div className="activity-item">
                <div className="activity-icon">📊</div>
                <div className="activity-content">
                  <div className="activity-title">Payroll report generated</div>
                  <div className="activity-time">1 hour ago</div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Back to Dashboard Button (for when in systems) */}
      {activeSystem !== 'dashboard' && (
        <button 
          className="back-to-dashboard"
          onClick={() => setActiveSystem('dashboard')}
        >
          ← Back to Dashboard
        </button>
      )}
    </div>
  );
}

export default Page;