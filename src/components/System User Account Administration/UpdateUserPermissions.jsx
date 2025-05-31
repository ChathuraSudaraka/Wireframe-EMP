import React from 'react';

const UpdateUserPermissions = () => {
  return (
    <div className="wireframe-component">
      <div className="wireframe-header">
        <h2>Update User Permissions</h2>
        <p>Modify system access permissions for users</p>
      </div>
      
      <div className="wireframe-content">
        {/* User Selection Section */}
        <div className="wireframe-section">
          <h3>Select User</h3>
          <div className="wireframe-form-grid">
            <div className="wireframe-form-group">
              <label>Search User</label>
              <input type="text" placeholder="Enter username or email" className="wireframe-input" />
            </div>
            <div className="wireframe-form-group">
              <label>Department Filter</label>
              <select className="wireframe-select">
                <option>All Departments</option>
                <option>IT Department</option>
                <option>HR Department</option>
                <option>Finance Department</option>
                <option>Operations</option>
              </select>
            </div>
          </div>
        </div>

        {/* User Information Display */}
        <div className="wireframe-section">
          <h3>User Information</h3>
          <div className="wireframe-info-grid">
            <div className="wireframe-info-item">
              <strong>Name:</strong> John Doe
            </div>
            <div className="wireframe-info-item">
              <strong>Email:</strong> john.doe@company.com
            </div>
            <div className="wireframe-info-item">
              <strong>Department:</strong> IT Department
            </div>
            <div className="wireframe-info-item">
              <strong>Role:</strong> Senior Developer
            </div>
            <div className="wireframe-info-item">
              <strong>Status:</strong> Active
            </div>
            <div className="wireframe-info-item">
              <strong>Last Login:</strong> 2025-05-30 14:30
            </div>
          </div>
        </div>

        {/* Permissions Management */}
        <div className="wireframe-section">
          <h3>Permission Categories</h3>
          <div className="wireframe-permissions-container">
            
            {/* System Administration Permissions */}
            <div className="wireframe-permission-category">
              <h4>System Administration</h4>
              <div className="wireframe-checkbox-group">
                <label><input type="checkbox" checked /> User Management</label>
                <label><input type="checkbox" /> System Configuration</label>
                <label><input type="checkbox" checked /> Database Access</label>
                <label><input type="checkbox" /> Security Settings</label>
              </div>
            </div>

            {/* HR Module Permissions */}
            <div className="wireframe-permission-category">
              <h4>HR Module</h4>
              <div className="wireframe-checkbox-group">
                <label><input type="checkbox" checked /> Employee Records</label>
                <label><input type="checkbox" checked /> Payroll Access</label>
                <label><input type="checkbox" /> Recruitment</label>
                <label><input type="checkbox" /> Performance Reviews</label>
              </div>
            </div>

            {/* Finance Module Permissions */}
            <div className="wireframe-permission-category">
              <h4>Finance Module</h4>
              <div className="wireframe-checkbox-group">
                <label><input type="checkbox" /> Expense Approval</label>
                <label><input type="checkbox" /> Budget Planning</label>
                <label><input type="checkbox" checked /> Financial Reports</label>
                <label><input type="checkbox" /> Accounts Management</label>
              </div>
            </div>

            {/* IT Support Permissions */}
            <div className="wireframe-permission-category">
              <h4>IT Support</h4>
              <div className="wireframe-checkbox-group">
                <label><input type="checkbox" checked /> Ticket Management</label>
                <label><input type="checkbox" checked /> System Monitoring</label>
                <label><input type="checkbox" /> Hardware Management</label>
                <label><input type="checkbox" /> Software Licensing</label>
              </div>
            </div>
          </div>
        </div>

        {/* Permission Level Settings */}
        <div className="wireframe-section">
          <h3>Permission Levels</h3>
          <div className="wireframe-form-grid">
            <div className="wireframe-form-group">
              <label>Data Access Level</label>
              <select className="wireframe-select">
                <option>Read Only</option>
                <option>Read & Write</option>
                <option>Full Control</option>
                <option>Admin Level</option>
              </select>
            </div>
            <div className="wireframe-form-group">
              <label>Report Access</label>
              <select className="wireframe-select">
                <option>Department Only</option>
                <option>Cross Department</option>
                <option>Organization Wide</option>
                <option>No Access</option>
              </select>
            </div>
          </div>
        </div>

        {/* Special Permissions */}
        <div className="wireframe-section">
          <h3>Special Permissions</h3>
          <div className="wireframe-checkbox-group">
            <label><input type="checkbox" /> Override System Restrictions</label>
            <label><input type="checkbox" checked /> Access During Maintenance</label>
            <label><input type="checkbox" /> Backup & Recovery Operations</label>
            <label><input type="checkbox" /> Emergency Access</label>
            <label><input type="checkbox" /> API Access</label>
            <label><input type="checkbox" /> Bulk Data Operations</label>
          </div>
        </div>

        {/* Permission History */}
        <div className="wireframe-section">
          <h3>Permission Change History</h3>
          <div className="wireframe-table">
            <table>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Changed By</th>
                  <th>Permission</th>
                  <th>Action</th>
                  <th>Reason</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>2025-05-25</td>
                  <td>Admin User</td>
                  <td>Database Access</td>
                  <td>Granted</td>
                  <td>Project requirements</td>
                </tr>
                <tr>
                  <td>2025-05-20</td>
                  <td>HR Manager</td>
                  <td>Payroll Access</td>
                  <td>Granted</td>
                  <td>Role change</td>
                </tr>
                <tr>
                  <td>2025-05-15</td>
                  <td>IT Manager</td>
                  <td>System Configuration</td>
                  <td>Revoked</td>
                  <td>Security policy</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Effective Date and Notifications */}
        <div className="wireframe-section">
          <h3>Update Settings</h3>
          <div className="wireframe-form-grid">
            <div className="wireframe-form-group">
              <label>Effective Date</label>
              <input type="date" className="wireframe-input" defaultValue="2025-05-31" />
            </div>
            <div className="wireframe-form-group">
              <label>Expiry Date (Optional)</label>
              <input type="date" className="wireframe-input" />
            </div>
            <div className="wireframe-form-group">
              <label>Reason for Change</label>
              <textarea className="wireframe-textarea" placeholder="Enter reason for permission update"></textarea>
            </div>
            <div className="wireframe-form-group">
              <label>Notification Settings</label>
              <div className="wireframe-checkbox-group">
                <label><input type="checkbox" checked /> Notify User</label>
                <label><input type="checkbox" checked /> Notify Manager</label>
                <label><input type="checkbox" /> Notify IT Admin</label>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="wireframe-button-group">
          <button className="wireframe-button wireframe-button-primary">Update Permissions</button>
          <button className="wireframe-button wireframe-button-secondary">Preview Changes</button>
          <button className="wireframe-button">Reset to Current</button>
          <button className="wireframe-button wireframe-button-danger">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default UpdateUserPermissions;
