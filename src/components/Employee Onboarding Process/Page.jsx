import React, { useState } from 'react';
import CreateEmployeeProfile from './CreateEmployeeProfile';
import CollectRequiredDocuments from './CollectRequiredDocuments';
import AssignInductionTraining from './AssignInductionTraining';
import SetupPayrollAccount from './SetupPayrollAccount';
import IssueEmployeeID from './IssueEmployeeID';
import ScheduleOrientationMeeting from './ScheduleOrientationMeeting';
import '../../wireframe.css';

function Page() {
  const [activeTab, setActiveTab] = useState('profile');

  const onboardingSteps = [
    { id: 'profile', label: 'Create Profile', component: CreateEmployeeProfile },
    { id: 'documents', label: 'Collect Documents', component: CollectRequiredDocuments },
    { id: 'training', label: 'Assign Training', component: AssignInductionTraining },
    { id: 'payroll', label: 'Setup Payroll', component: SetupPayrollAccount },
    { id: 'employee-id', label: 'Issue Employee ID', component: IssueEmployeeID },
    { id: 'orientation', label: 'Schedule Orientation', component: ScheduleOrientationMeeting }
  ];

  const ActiveComponent = onboardingSteps.find(step => step.id === activeTab)?.component || CreateEmployeeProfile;

  return (
    <div className="wireframe-app">
      {/* Header */}
      <header className="wireframe-header-main">
        <div className="wireframe-header-content">
          <h1>Employee Onboarding Process</h1>
          <div className="wireframe-user-info">
            <span>HR Admin</span>
            <div className="wireframe-avatar">HA</div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="wireframe-navigation">
        {onboardingSteps.map((step, index) => (
          <button
            key={step.id}
            className={`wireframe-nav-item ${activeTab === step.id ? 'active' : ''}`}
            onClick={() => setActiveTab(step.id)}
          >
            {index + 1}. {step.label}
          </button>
        ))}
      </nav>      {/* Main Content */}
      <main className="wireframe-main">
        {/* Active Component */}
        <div className="onboarding-content">
          <ActiveComponent />
        </div>

        {/* Navigation Buttons */}
        <div className="onboarding-navigation">
          <div className="wireframe-button-group">
            <button
              className="wireframe-button-secondary"
              onClick={() => {
                const currentIndex = onboardingSteps.findIndex(step => step.id === activeTab);
                if (currentIndex > 0) {
                  setActiveTab(onboardingSteps[currentIndex - 1].id);
                }
              }}
              disabled={activeTab === onboardingSteps[0].id}
            >
              ← Previous Step
            </button>
            
            <button
              className="wireframe-button"
              onClick={() => {
                const currentIndex = onboardingSteps.findIndex(step => step.id === activeTab);
                if (currentIndex < onboardingSteps.length - 1) {
                  setActiveTab(onboardingSteps[currentIndex + 1].id);
                }
              }}
              disabled={activeTab === onboardingSteps[onboardingSteps.length - 1].id}
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