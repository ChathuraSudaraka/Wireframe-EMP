import React, { useState } from 'react';
import '../../wireframe.css';
import CreateUserAccount from './CreateUserAccount';
import AssignUserRoles from './AssignUserRoles';
import ResetUserPassword from './ResetUserPassword';
import DeactivateUserAccount from './DeactivateUserAccount';
import MonitorUserActivity from './MonitorUserActivity';
import UpdateUserPermissions from './UpdateUserPermissions';

const SystemUserAccountAdministration = () => {
  const [activeTab, setActiveTab] = useState('create');

  const tabs = [
    { id: 'create', label: 'Create User Account', component: CreateUserAccount },
    { id: 'assign', label: 'Assign User Roles', component: AssignUserRoles },
    { id: 'reset', label: 'Reset User Password', component: ResetUserPassword },
    { id: 'deactivate', label: 'Deactivate User Account', component: DeactivateUserAccount },
    { id: 'monitor', label: 'Monitor User Activity', component: MonitorUserActivity },
    { id: 'permissions', label: 'Update User Permissions', component: UpdateUserPermissions }
  ];

  const ActiveComponent = tabs.find(tab => tab.id === activeTab)?.component;

  return (
    <div className="wireframe-container">
      <div className="wireframe-header">
        <h1>System User Account Administration</h1>
        <p>Manage user accounts, roles, permissions, and security settings</p>
      </div>

      <div className="wireframe-navigation">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`wireframe-nav-item ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="wireframe-content">
        {ActiveComponent && <ActiveComponent />}
      </div>
    </div>
  );
};

export default SystemUserAccountAdministration;
