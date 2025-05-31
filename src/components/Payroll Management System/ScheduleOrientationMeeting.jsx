import React from 'react';

const ScheduleOrientationMeeting = () => {
  return (
    <div className="wireframe-component">
      <div className="wireframe-header">
        <h3>Schedule Orientation Meeting</h3>
      </div>
      <div className="wireframe-content">
        {/* New Employee Information */}
        <div className="wireframe-section">
          <h4>New Employee Information</h4>
          <div className="wireframe-info-grid">
            <div className="wireframe-info-item">
              <label>Employee Name:</label>
              <span>[John Doe]</span>
            </div>
            <div className="wireframe-info-item">
              <label>Department:</label>
              <span>[Engineering]</span>
            </div>
            <div className="wireframe-info-item">
              <label>Position:</label>
              <span>[Software Developer]</span>
            </div>
            <div className="wireframe-info-item">
              <label>Start Date:</label>
              <span>[2024-01-15]</span>
            </div>
            <div className="wireframe-info-item">
              <label>Manager:</label>
              <span>[Sarah Johnson]</span>
            </div>
            <div className="wireframe-info-item">
              <label>HR Contact:</label>
              <span>[Mike Smith]</span>
            </div>
          </div>
        </div>

        {/* Meeting Details */}
        <div className="wireframe-section">
          <h4>Meeting Schedule</h4>
          <div className="wireframe-form-grid">
            <div className="wireframe-form-group">
              <label>Meeting Type:</label>
              <div className="wireframe-select">
                <span>General Orientation ▼</span>
              </div>
            </div>
            <div className="wireframe-form-group">
              <label>Meeting Date:</label>
              <div className="wireframe-input">[DD/MM/YYYY]</div>
            </div>
            <div className="wireframe-form-group">
              <label>Start Time:</label>
              <div className="wireframe-select">
                <span>09:00 AM ▼</span>
              </div>
            </div>
            <div className="wireframe-form-group">
              <label>Duration:</label>
              <div className="wireframe-select">
                <span>2 hours ▼</span>
              </div>
            </div>
            <div className="wireframe-form-group">
              <label>Meeting Location:</label>
              <div className="wireframe-select">
                <span>Conference Room A ▼</span>
              </div>
            </div>
            <div className="wireframe-form-group">
              <label>Meeting Format:</label>
              <div className="wireframe-select">
                <span>In-Person ▼</span>
              </div>
            </div>
          </div>
        </div>

        {/* Participants */}
        <div className="wireframe-section">
          <h4>Meeting Participants</h4>
          <div className="wireframe-participants-section">
            <div className="wireframe-participants-required">
              <h5>Required Attendees</h5>
              <div className="wireframe-participant-list">
                <div className="wireframe-participant-item">
                  <div className="wireframe-participant-info">
                    <span className="wireframe-participant-name">John Doe</span>
                    <span className="wireframe-participant-role">(New Employee)</span>
                  </div>
                  <div className="wireframe-participant-status wireframe-status-confirmed">Confirmed</div>
                </div>
                <div className="wireframe-participant-item">
                  <div className="wireframe-participant-info">
                    <span className="wireframe-participant-name">Mike Smith</span>
                    <span className="wireframe-participant-role">(HR Representative)</span>
                  </div>
                  <div className="wireframe-participant-status wireframe-status-pending">Pending</div>
                </div>
                <div className="wireframe-participant-item">
                  <div className="wireframe-participant-info">
                    <span className="wireframe-participant-name">Sarah Johnson</span>
                    <span className="wireframe-participant-role">(Direct Manager)</span>
                  </div>
                  <div className="wireframe-participant-status wireframe-status-confirmed">Confirmed</div>
                </div>
              </div>
            </div>

            <div className="wireframe-participants-optional">
              <h5>Optional Attendees</h5>
              <div className="wireframe-add-participant">
                <div className="wireframe-input-group">
                  <div className="wireframe-input">[Search employees...]</div>
                  <button className="wireframe-button wireframe-button-small">Add</button>
                </div>
              </div>
              <div className="wireframe-participant-list">
                <div className="wireframe-participant-item">
                  <div className="wireframe-participant-info">
                    <span className="wireframe-participant-name">David Wilson</span>
                    <span className="wireframe-participant-role">(Team Lead)</span>
                  </div>
                  <div className="wireframe-participant-actions">
                    <button className="wireframe-button wireframe-button-small">Remove</button>
                  </div>
                </div>
                <div className="wireframe-participant-item">
                  <div className="wireframe-participant-info">
                    <span className="wireframe-participant-name">Lisa Brown</span>
                    <span className="wireframe-participant-role">(IT Support)</span>
                  </div>
                  <div className="wireframe-participant-actions">
                    <button className="wireframe-button wireframe-button-small">Remove</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Agenda Items */}
        <div className="wireframe-section">
          <h4>Meeting Agenda</h4>
          <div className="wireframe-agenda-list">
            <div className="wireframe-agenda-item">
              <div className="wireframe-agenda-checkbox">
                <input type="checkbox" checked readOnly />
              </div>
              <div className="wireframe-agenda-content">
                <div className="wireframe-agenda-title">Welcome & Introductions</div>
                <div className="wireframe-agenda-duration">(15 minutes)</div>
                <div className="wireframe-agenda-description">Personal introductions and welcome message</div>
              </div>
            </div>
            <div className="wireframe-agenda-item">
              <div className="wireframe-agenda-checkbox">
                <input type="checkbox" checked readOnly />
              </div>
              <div className="wireframe-agenda-content">
                <div className="wireframe-agenda-title">Company Overview</div>
                <div className="wireframe-agenda-duration">(30 minutes)</div>
                <div className="wireframe-agenda-description">Mission, values, organizational structure</div>
              </div>
            </div>
            <div className="wireframe-agenda-item">
              <div className="wireframe-agenda-checkbox">
                <input type="checkbox" checked readOnly />
              </div>
              <div className="wireframe-agenda-content">
                <div className="wireframe-agenda-title">Department Introduction</div>
                <div className="wireframe-agenda-duration">(20 minutes)</div>
                <div className="wireframe-agenda-description">Team structure, ongoing projects, expectations</div>
              </div>
            </div>
            <div className="wireframe-agenda-item">
              <div className="wireframe-agenda-checkbox">
                <input type="checkbox" />
              </div>
              <div className="wireframe-agenda-content">
                <div className="wireframe-agenda-title">HR Policies & Benefits</div>
                <div className="wireframe-agenda-duration">(25 minutes)</div>
                <div className="wireframe-agenda-description">Employee handbook, benefits overview, policies</div>
              </div>
            </div>
            <div className="wireframe-agenda-item">
              <div className="wireframe-agenda-checkbox">
                <input type="checkbox" />
              </div>
              <div className="wireframe-agenda-content">
                <div className="wireframe-agenda-title">IT Setup & Systems</div>
                <div className="wireframe-agenda-duration">(20 minutes)</div>
                <div className="wireframe-agenda-description">Account setup, system access, equipment distribution</div>
              </div>
            </div>
            <div className="wireframe-agenda-item">
              <div className="wireframe-agenda-checkbox">
                <input type="checkbox" />
              </div>
              <div className="wireframe-agenda-content">
                <div className="wireframe-agenda-title">Q&A Session</div>
                <div className="wireframe-agenda-duration">(10 minutes)</div>
                <div className="wireframe-agenda-description">Open discussion and questions</div>
              </div>
            </div>
          </div>
          <div className="wireframe-add-agenda">
            <button className="wireframe-button wireframe-button-secondary">+ Add Agenda Item</button>
          </div>
        </div>

        {/* Resources & Materials */}
        <div className="wireframe-section">
          <h4>Meeting Resources</h4>
          <div className="wireframe-resources-grid">
            <div className="wireframe-resource-category">
              <h5>Documents to Prepare</h5>
              <div className="wireframe-resource-list">
                <div className="wireframe-resource-item">
                  <span className="wireframe-resource-icon">📄</span>
                  <span>Employee Handbook</span>
                  <div className="wireframe-resource-status wireframe-status-ready">Ready</div>
                </div>
                <div className="wireframe-resource-item">
                  <span className="wireframe-resource-icon">📋</span>
                  <span>IT Setup Checklist</span>
                  <div className="wireframe-resource-status wireframe-status-ready">Ready</div>
                </div>
                <div className="wireframe-resource-item">
                  <span className="wireframe-resource-icon">📊</span>
                  <span>Benefits Overview</span>
                  <div className="wireframe-resource-status wireframe-status-pending">Pending</div>
                </div>
              </div>
            </div>
            <div className="wireframe-resource-category">
              <h5>Equipment Needed</h5>
              <div className="wireframe-resource-list">
                <div className="wireframe-resource-item">
                  <span className="wireframe-resource-icon">💻</span>
                  <span>Laptop Setup</span>
                  <div className="wireframe-resource-status wireframe-status-pending">Pending</div>
                </div>
                <div className="wireframe-resource-item">
                  <span className="wireframe-resource-icon">🆔</span>
                  <span>Access Cards</span>
                  <div className="wireframe-resource-status wireframe-status-pending">Pending</div>
                </div>
                <div className="wireframe-resource-item">
                  <span className="wireframe-resource-icon">📱</span>
                  <span>Phone Setup</span>
                  <div className="wireframe-resource-status wireframe-status-ready">Ready</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Calendar Integration */}
        <div className="wireframe-section">
          <h4>Calendar & Notifications</h4>
          <div className="wireframe-calendar-section">
            <div className="wireframe-calendar-preview">
              <h5>Meeting Preview</h5>
              <div className="wireframe-calendar-event">
                <div className="wireframe-event-time">09:00 - 11:00 AM</div>
                <div className="wireframe-event-title">Orientation Meeting - John Doe</div>
                <div className="wireframe-event-location">📍 Conference Room A</div>
                <div className="wireframe-event-attendees">👥 4 attendees</div>
              </div>
            </div>
            <div className="wireframe-notification-settings">
              <h5>Notification Settings</h5>
              <div className="wireframe-checkbox-group">
                <label className="wireframe-checkbox">
                  <input type="checkbox" checked readOnly />
                  Send calendar invites to all participants
                </label>
                <label className="wireframe-checkbox">
                  <input type="checkbox" checked readOnly />
                  Email reminder 24 hours before
                </label>
                <label className="wireframe-checkbox">
                  <input type="checkbox" />
                  SMS reminder 1 hour before
                </label>
                <label className="wireframe-checkbox">
                  <input type="checkbox" checked readOnly />
                  Add to company orientation calendar
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Follow-up Actions */}
        <div className="wireframe-section">
          <h4>Follow-up Actions</h4>
          <div className="wireframe-followup-grid">
            <div className="wireframe-followup-item">
              <div className="wireframe-followup-title">Feedback Collection</div>
              <div className="wireframe-followup-description">Send feedback survey 24 hours after meeting</div>
              <div className="wireframe-followup-assignee">Assigned to: HR Team</div>
            </div>
            <div className="wireframe-followup-item">
              <div className="wireframe-followup-title">30-Day Check-in</div>
              <div className="wireframe-followup-description">Schedule follow-up meeting in 30 days</div>
              <div className="wireframe-followup-assignee">Assigned to: Direct Manager</div>
            </div>
            <div className="wireframe-followup-item">
              <div className="wireframe-followup-title">Training Completion</div>
              <div className="wireframe-followup-description">Track mandatory training completion</div>
              <div className="wireframe-followup-assignee">Assigned to: Training Coordinator</div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="wireframe-actions">
          <button className="wireframe-button wireframe-button-primary">Schedule Meeting</button>
          <button className="wireframe-button wireframe-button-secondary">Save Draft</button>
          <button className="wireframe-button wireframe-button-secondary">Send Invites</button>
          <button className="wireframe-button">Preview Agenda</button>
        </div>
      </div>
    </div>
  );
};

export default ScheduleOrientationMeeting;
