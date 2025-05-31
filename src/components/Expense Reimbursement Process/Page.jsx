import React, { useState } from 'react';
import ReceiveExpenseClaims from './ReceiveExpenseClaims';
import VerifyDocuments from './VerifyDocuments';
import ApproveReimbursement from './ApproveReimbursement';
import ProcessPayments from './ProcessPayments';
import RecordTransactions from './RecordTransactions';
import GenerateReimbursementReports from './GenerateReimbursementReports';
import '../../wireframe.css';

function Page() {
  const [activeTab, setActiveTab] = useState('receive');

  const reimbursementSteps = [
    { id: 'receive', label: 'Receive Claims', component: ReceiveExpenseClaims },
    { id: 'verify', label: 'Verify Documents', component: VerifyDocuments },
    { id: 'approve', label: 'Approve Requests', component: ApproveReimbursement },
    { id: 'process', label: 'Process Payments', component: ProcessPayments },
    { id: 'record', label: 'Record Transactions', component: RecordTransactions },
    { id: 'reports', label: 'Generate Reports', component: GenerateReimbursementReports }
  ];

  const ActiveComponent = reimbursementSteps.find(step => step.id === activeTab)?.component || ReceiveExpenseClaims;

  return (
    <div className="wireframe-app">
      {/* Header */}
      <header className="wireframe-header-main">
        <div className="wireframe-header-content">
          <h1>Expense Reimbursement Process</h1>
          <div className="wireframe-user-info">
            <span>Finance Clerk</span>
            <div className="wireframe-avatar">FC</div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="wireframe-navigation">
        {reimbursementSteps.map((step, index) => (
          <button
            key={step.id}
            className={`wireframe-nav-item ${activeTab === step.id ? 'active' : ''}`}
            onClick={() => setActiveTab(step.id)}
          >
            {index + 1}. {step.label}
          </button>
        ))}
      </nav>

      {/* Main Content */}
      <main className="wireframe-main">
        {/* Active Component */}
        <div className="reimbursement-content">
          <ActiveComponent />
        </div>

        {/* Navigation Buttons */}
        <div className="reimbursement-navigation">
          <div className="wireframe-button-group">
            <button
              className="wireframe-button-secondary"
              onClick={() => {
                const currentIndex = reimbursementSteps.findIndex(step => step.id === activeTab);
                if (currentIndex > 0) {
                  setActiveTab(reimbursementSteps[currentIndex - 1].id);
                }
              }}
              disabled={activeTab === reimbursementSteps[0].id}
            >
              ← Previous Step
            </button>
            
            <button
              className="wireframe-button"
              onClick={() => {
                const currentIndex = reimbursementSteps.findIndex(step => step.id === activeTab);
                if (currentIndex < reimbursementSteps.length - 1) {
                  setActiveTab(reimbursementSteps[currentIndex + 1].id);
                }
              }}
              disabled={activeTab === reimbursementSteps[reimbursementSteps.length - 1].id}
            >
              Next Step →
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Page;
