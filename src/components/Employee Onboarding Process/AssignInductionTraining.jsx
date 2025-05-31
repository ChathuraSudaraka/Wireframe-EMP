import React from 'react';

const AssignInductionTraining = () => {
  return (
    <div className="wireframe-container">
      <div className="wireframe-header">
        <h2>ASSIGN INDUCTION TRAINING</h2>
        <div className="wireframe-breadcrumb">
          Employee Onboarding &gt; Training Assignment
        </div>
      </div>

      <div className="wireframe-grid">
        {/* Employee Information */}
        <div className="wireframe-section">
          <h3>EMPLOYEE INFORMATION</h3>
          <div className="wireframe-form-grid">
            <div className="wireframe-form-group">
              <label>Employee ID:</label>
              <div className="wireframe-input">[EMP001]</div>
            </div>
            <div className="wireframe-form-group">
              <label>Full Name:</label>
              <div className="wireframe-input">[John Smith]</div>
            </div>
            <div className="wireframe-form-group">
              <label>Department:</label>
              <div className="wireframe-input">[Engineering]</div>
            </div>
            <div className="wireframe-form-group">
              <label>Position:</label>
              <div className="wireframe-input">[Software Developer]</div>
            </div>
            <div className="wireframe-form-group">
              <label>Start Date:</label>
              <div className="wireframe-input">[2024-01-15]</div>
            </div>
            <div className="wireframe-form-group">
              <label>Manager:</label>
              <div className="wireframe-input">[Sarah Johnson]</div>
            </div>
          </div>
        </div>

        {/* Training Assignment */}
        <div className="wireframe-section">
          <h3>TRAINING ASSIGNMENT</h3>
          <div className="wireframe-form-grid">
            <div className="wireframe-form-group">
              <label>Training Program:</label>
              <select className="wireframe-select">
                <option>[Select Training Program]</option>
                <option>[New Employee Orientation]</option>
                <option>[IT Security Training]</option>
                <option>[Safety & Compliance]</option>
                <option>[Department Specific Training]</option>
              </select>
            </div>
            <div className="wireframe-form-group">
              <label>Training Type:</label>
              <div className="wireframe-radio-group">
                <label><input type="radio" name="type" /> Online</label>
                <label><input type="radio" name="type" /> In-Person</label>
                <label><input type="radio" name="type" /> Hybrid</label>
              </div>
            </div>
            <div className="wireframe-form-group">
              <label>Priority Level:</label>
              <select className="wireframe-select">
                <option>[High - Required]</option>
                <option>[Medium - Recommended]</option>
                <option>[Low - Optional]</option>
              </select>
            </div>
            <div className="wireframe-form-group">
              <label>Deadline:</label>
              <input type="date" className="wireframe-input" />
            </div>
            <div className="wireframe-form-group span-2">
              <label>Training Description:</label>
              <textarea className="wireframe-textarea" rows="3" placeholder="[Training details and objectives]"></textarea>
            </div>
          </div>
        </div>

        {/* Available Training Modules */}
        <div className="wireframe-section span-2">
          <h3>AVAILABLE TRAINING MODULES</h3>
          <div className="wireframe-table-container">
            <table className="wireframe-table">
              <thead>
                <tr>
                  <th>SELECT</th>
                  <th>MODULE NAME</th>
                  <th>TYPE</th>
                  <th>DURATION</th>
                  <th>PRIORITY</th>
                  <th>STATUS</th>
                  <th>ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><input type="checkbox" checked /></td>
                  <td>[Company Overview & Culture]</td>
                  <td>[Online]</td>
                  <td>[2 hours]</td>
                  <td>[High]</td>
                  <td>[Assigned]</td>
                  <td><button className="wireframe-btn-sm">[View]</button></td>
                </tr>
                <tr>
                  <td><input type="checkbox" checked /></td>
                  <td>[IT Security & Password Policy]</td>
                  <td>[Online]</td>
                  <td>[1 hour]</td>
                  <td>[High]</td>
                  <td>[Assigned]</td>
                  <td><button className="wireframe-btn-sm">[View]</button></td>
                </tr>
                <tr>
                  <td><input type="checkbox" /></td>
                  <td>[Workplace Safety Training]</td>
                  <td>[In-Person]</td>
                  <td>[3 hours]</td>
                  <td>[High]</td>
                  <td>[Available]</td>
                  <td><button className="wireframe-btn-sm">[Assign]</button></td>
                </tr>
                <tr>
                  <td><input type="checkbox" /></td>
                  <td>[HR Policies & Procedures]</td>
                  <td>[Online]</td>
                  <td>[1.5 hours]</td>
                  <td>[Medium]</td>
                  <td>[Available]</td>
                  <td><button className="wireframe-btn-sm">[Assign]</button></td>
                </tr>
                <tr>
                  <td><input type="checkbox" /></td>
                  <td>[Software Development Standards]</td>
                  <td>[Hybrid]</td>
                  <td>[4 hours]</td>
                  <td>[High]</td>
                  <td>[Available]</td>
                  <td><button className="wireframe-btn-sm">[Assign]</button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Training Schedule */}
        <div className="wireframe-section">
          <h3>TRAINING SCHEDULE</h3>
          <div className="wireframe-form-grid">
            <div className="wireframe-form-group">
              <label>Start Date:</label>
              <input type="date" className="wireframe-input" />
            </div>
            <div className="wireframe-form-group">
              <label>End Date:</label>
              <input type="date" className="wireframe-input" />
            </div>
            <div className="wireframe-form-group">
              <label>Trainer/Instructor:</label>
              <select className="wireframe-select">
                <option>[Select Trainer]</option>
                <option>[HR Team]</option>
                <option>[IT Department]</option>
                <option>[Department Manager]</option>
                <option>[External Trainer]</option>
              </select>
            </div>
            <div className="wireframe-form-group">
              <label>Location:</label>
              <input type="text" className="wireframe-input" placeholder="[Training Room A / Online]" />
            </div>
          </div>
        </div>

        {/* Progress Tracking */}
        <div className="wireframe-section">
          <h3>PROGRESS TRACKING</h3>
          <div className="wireframe-stats">
            <div className="wireframe-stat-item">
              <div className="wireframe-stat-value">[3]</div>
              <div className="wireframe-stat-label">Assigned Modules</div>
            </div>
            <div className="wireframe-stat-item">
              <div className="wireframe-stat-value">[1]</div>
              <div className="wireframe-stat-label">Completed</div>
            </div>
            <div className="wireframe-stat-item">
              <div className="wireframe-stat-value">[2]</div>
              <div className="wireframe-stat-label">In Progress</div>
            </div>
            <div className="wireframe-stat-item">
              <div className="wireframe-stat-value">[8.5]</div>
              <div className="wireframe-stat-label">Total Hours</div>
            </div>
          </div>
          
          <div className="wireframe-progress-section">
            <div className="wireframe-progress-item">
              <span>Overall Training Progress</span>
              <div className="wireframe-progress-bar">
                <div className="wireframe-progress-fill" style={{width: '33%'}}></div>
              </div>
              <span>33%</span>
            </div>
          </div>
        </div>

        {/* Notifications */}
        <div className="wireframe-section span-2">
          <h3>NOTIFICATIONS & REMINDERS</h3>
          <div className="wireframe-form-grid">
            <div className="wireframe-form-group">
              <label>
                <input type="checkbox" checked />
                Send email notification to employee
              </label>
            </div>
            <div className="wireframe-form-group">
              <label>
                <input type="checkbox" checked />
                Send notification to manager
              </label>
            </div>
            <div className="wireframe-form-group">
              <label>
                <input type="checkbox" />
                Set automatic reminders
              </label>
            </div>
            <div className="wireframe-form-group">
              <label>Reminder Frequency:</label>
              <select className="wireframe-select">
                <option>[Daily]</option>
                <option>[Weekly]</option>
                <option>[Before Deadline]</option>
              </select>
            </div>
            <div className="wireframe-form-group span-2">
              <label>Additional Notes:</label>
              <textarea className="wireframe-textarea" rows="2" placeholder="[Special instructions or requirements]"></textarea>
            </div>
          </div>
        </div>
      </div>

      <div className="wireframe-actions">
        <button className="wireframe-btn-secondary">[Cancel]</button>
        <button className="wireframe-btn-secondary">[Save as Draft]</button>
        <button className="wireframe-btn-primary">[Assign Training]</button>
      </div>
    </div>
  );
};

export default AssignInductionTraining;