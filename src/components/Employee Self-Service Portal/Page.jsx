import React, { useState } from 'react';
import ViewPayslip from './ViewPayslip';
import UpdatePersonalDetails from './UpdatePersonalDetails';
import ApplyForLeave from './ApplyForLeave';
import CheckLeaveBalance from './CheckLeaveBalance';
import ViewCompanyPolicies from './ViewCompanyPolicies';
import SubmitExpenseClaim from './SubmitExpenseClaim';
import '../../wireframe.css';

const Page = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderActiveComponent = () => {
    switch (activeTab) {
      case 'payslip':
        return <ViewPayslip />;
      case 'personal':
        return <UpdatePersonalDetails />;
      case 'leave-apply':
        return <ApplyForLeave />;
      case 'leave-balance':
        return <CheckLeaveBalance />;
      case 'policies':
        return <ViewCompanyPolicies />;
      case 'expenses':
        return <SubmitExpenseClaim />;
      default:
        return (
          <div className="wireframe-dashboard">
            <div className="wireframe-component">
              <div className="wireframe-header">
                <h3>Employee Self-Service Portal Dashboard</h3>
              </div>
              <div className="wireframe-content">
                <div className="wireframe-dashboard-grid">
                  <div className="wireframe-dashboard-card" onClick={() => setActiveTab('payslip')}>
                    <div className="wireframe-card-icon">💰</div>
                    <div className="wireframe-card-title">View Payslip</div>
                    <div className="wireframe-card-description">Access your salary statements</div>
                  </div>
                  <div className="wireframe-dashboard-card" onClick={() => setActiveTab('personal')}>
                    <div className="wireframe-card-icon">👤</div>
                    <div className="wireframe-card-title">Update Personal Details</div>
                    <div className="wireframe-card-description">Manage your profile information</div>
                  </div>
                  <div className="wireframe-dashboard-card" onClick={() => setActiveTab('leave-apply')}>
                    <div className="wireframe-card-icon">📅</div>
                    <div className="wireframe-card-title">Apply for Leave</div>
                    <div className="wireframe-card-description">Submit leave requests</div>
                  </div>
                  <div className="wireframe-dashboard-card" onClick={() => setActiveTab('leave-balance')}>
                    <div className="wireframe-card-icon">📊</div>
                    <div className="wireframe-card-title">Check Leave Balance</div>
                    <div className="wireframe-card-description">View remaining leave days</div>
                  </div>
                  <div className="wireframe-dashboard-card" onClick={() => setActiveTab('policies')}>
                    <div className="wireframe-card-icon">📋</div>
                    <div className="wireframe-card-title">View Company Policies</div>
                    <div className="wireframe-card-description">Access company documents</div>
                  </div>
                  <div className="wireframe-dashboard-card" onClick={() => setActiveTab('expenses')}>
                    <div className="wireframe-card-icon">🧾</div>
                    <div className="wireframe-card-title">Submit Expense Claim</div>
                    <div className="wireframe-card-description">File expense reports</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="wireframe-app">
      <header className="wireframe-header-main">
        <div className="wireframe-header-content">
          <h1>Employee Self-Service Portal</h1>
          <div className="wireframe-user-info">
            <span>Welcome, ████████</span>
            <div className="wireframe-avatar">👤</div>
          </div>
        </div>
      </header>

      <nav className="wireframe-navigation">
        <button 
          className={`wireframe-nav-item ${activeTab === 'dashboard' ? 'active' : ''}`}
          onClick={() => setActiveTab('dashboard')}
        >
          Dashboard
        </button>
        <button 
          className={`wireframe-nav-item ${activeTab === 'payslip' ? 'active' : ''}`}
          onClick={() => setActiveTab('payslip')}
        >
          Payslip
        </button>
        <button 
          className={`wireframe-nav-item ${activeTab === 'personal' ? 'active' : ''}`}
          onClick={() => setActiveTab('personal')}
        >
          Personal Details
        </button>
        <button 
          className={`wireframe-nav-item ${activeTab === 'leave-apply' ? 'active' : ''}`}
          onClick={() => setActiveTab('leave-apply')}
        >
          Apply Leave
        </button>
        <button 
          className={`wireframe-nav-item ${activeTab === 'leave-balance' ? 'active' : ''}`}
          onClick={() => setActiveTab('leave-balance')}
        >
          Leave Balance
        </button>
        <button 
          className={`wireframe-nav-item ${activeTab === 'policies' ? 'active' : ''}`}
          onClick={() => setActiveTab('policies')}
        >
          Policies
        </button>
        <button 
          className={`wireframe-nav-item ${activeTab === 'expenses' ? 'active' : ''}`}
          onClick={() => setActiveTab('expenses')}
        >
          Expenses
        </button>
      </nav>

      <main className="wireframe-main">
        {renderActiveComponent()}
      </main>
    </div>
  );
};

export default Page;
