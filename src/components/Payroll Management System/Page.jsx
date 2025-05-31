import React, { useState } from 'react';
import CollectAttendanceData from './CollectAttendanceData';
import CalculateEmployeeSalaries from './CalculateEmployeeSalaries';
import ProcessSalaryDeductions from './ProcessSalaryDeductions';
import GeneratePayslips from './GeneratePayslips';
import DisburseSalaries from './DisburseSalaries';
import MaintainPayrollRecords from './MaintainPayrollRecords';
import '../../wireframe.css';

function Page() {
  const [activeTab, setActiveTab] = useState('attendance');

  const payrollSteps = [
    { id: 'attendance', label: 'Collect Attendance', component: CollectAttendanceData },
    { id: 'calculate', label: 'Calculate Salaries', component: CalculateEmployeeSalaries },
    { id: 'deductions', label: 'Process Deductions', component: ProcessSalaryDeductions },
    { id: 'payslips', label: 'Generate Payslips', component: GeneratePayslips },
    { id: 'disburse', label: 'Disburse Salaries', component: DisburseSalaries },
    { id: 'records', label: 'Maintain Records', component: MaintainPayrollRecords }
  ];

  const ActiveComponent = payrollSteps.find(step => step.id === activeTab)?.component || CollectAttendanceData;

  return (
    <div className="wireframe-app">
      {/* Header */}
      <header className="wireframe-header-main">
        <div className="wireframe-header-content">
          <h1>Payroll Management System</h1>
          <div className="wireframe-user-info">
            <span>Payroll Officer</span>
            <div className="wireframe-avatar">PO</div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="wireframe-navigation">
        {payrollSteps.map((step, index) => (
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
        <div className="payroll-content">
          <ActiveComponent />
        </div>

        {/* Navigation Buttons */}
        <div className="payroll-navigation">
          <div className="wireframe-button-group">
            <button
              className="wireframe-button-secondary"
              onClick={() => {
                const currentIndex = payrollSteps.findIndex(step => step.id === activeTab);
                if (currentIndex > 0) {
                  setActiveTab(payrollSteps[currentIndex - 1].id);
                }
              }}
              disabled={activeTab === payrollSteps[0].id}
            >
              ← Previous Step
            </button>
            
            <button
              className="wireframe-button"
              onClick={() => {
                const currentIndex = payrollSteps.findIndex(step => step.id === activeTab);
                if (currentIndex < payrollSteps.length - 1) {
                  setActiveTab(payrollSteps[currentIndex + 1].id);
                }
              }}
              disabled={activeTab === payrollSteps[payrollSteps.length - 1].id}
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