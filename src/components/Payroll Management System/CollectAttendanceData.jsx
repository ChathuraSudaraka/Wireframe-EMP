import React, { useState } from 'react';

function CollectAttendanceData() {
  const [selectedPeriod, setSelectedPeriod] = useState('current-month');
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  const attendanceData = [
    { id: 'EMP001', name: 'John Smith', department: 'Engineering', daysWorked: 22, overtime: 8, late: 2, absent: 0 },
    { id: 'EMP002', name: 'Sarah Johnson', department: 'Marketing', daysWorked: 20, overtime: 4, late: 1, absent: 2 },
    { id: 'EMP003', name: 'Mike Davis', department: 'HR', daysWorked: 21, overtime: 6, late: 0, absent: 1 },
    { id: 'EMP004', name: 'Lisa Wilson', department: 'Finance', daysWorked: 22, overtime: 10, late: 1, absent: 0 },
  ];

  return (
    <div className="wireframe-component">
      <div className="wireframe-header">
        <h3>Collect Attendance Data</h3>
      </div>
      <div className="wireframe-content">
        {/* Filters */}
        <div className="wireframe-form-grid">
          <div className="wireframe-form-group">
            <label>Pay Period</label>
            <div className="wireframe-select">
              <span>{selectedPeriod === 'current-month' ? 'Current Month (May 2025)' : 'Previous Month'}</span>
              <span>▼</span>
            </div>
          </div>
          
          <div className="wireframe-form-group">
            <label>Department</label>
            <div className="wireframe-select">
              <span>{selectedDepartment === 'all' ? 'All Departments' : selectedDepartment}</span>
              <span>▼</span>
            </div>
          </div>
          
          <div className="wireframe-form-group">
            <label>Import Source</label>
            <div className="wireframe-file-upload">
              📁 Upload Attendance File
            </div>
          </div>
        </div>

        {/* Attendance Summary */}
        <div className="attendance-summary">
          <h4>Attendance Summary</h4>
          <div className="wireframe-stats-grid">
            <div className="wireframe-stat-card">
              <div className="wireframe-stat-value">156</div>
              <div className="wireframe-stat-label">Total Employees</div>
            </div>
            <div className="wireframe-stat-card">
              <div className="wireframe-stat-value">3,432</div>
              <div className="wireframe-stat-label">Total Work Days</div>
            </div>
            <div className="wireframe-stat-card">
              <div className="wireframe-stat-value">284</div>
              <div className="wireframe-stat-label">Overtime Hours</div>
            </div>
            <div className="wireframe-stat-card">
              <div className="wireframe-stat-value">12</div>
              <div className="wireframe-stat-label">Absent Days</div>
            </div>
          </div>
        </div>

        {/* Attendance Data Table */}
        <div className="attendance-data">
          <h4>Employee Attendance Details</h4>
          <div className="wireframe-table">
            <div className="wireframe-table-header">
              <span>Employee ID</span>
              <span>Name</span>
              <span>Department</span>
              <span>Days Worked</span>
              <span>Overtime Hrs</span>
              <span>Late Days</span>
              <span>Absent Days</span>
              <span>Actions</span>
            </div>
            {attendanceData.map((employee) => (
              <div key={employee.id} className="wireframe-table-row">
                <span>{employee.id}</span>
                <span>{employee.name}</span>
                <span>{employee.department}</span>
                <span>{employee.daysWorked}</span>
                <span>{employee.overtime}</span>
                <span>{employee.late}</span>
                <span>{employee.absent}</span>
                <span>
                  <button className="wireframe-button-small">Edit</button>
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="wireframe-button-group">
          <button className="wireframe-button-secondary">Import from System</button>
          <button className="wireframe-button-secondary">Export Data</button>
          <button className="wireframe-button">Validate & Save</button>
        </div>
      </div>
    </div>
  );
}

export default CollectAttendanceData;
