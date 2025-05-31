import React from 'react';

const ScheduleFollowUp = () => {
  return (
    <div className="wireframe-component">
      <div className="wireframe-header">
        <h3>Schedule Follow-Up</h3>
      </div>
      <div className="wireframe-content">
        <div className="wireframe-form-grid">
          <div className="wireframe-form-group">
            <label>Customer</label>
            <div className="wireframe-select">[SEARCH AND SELECT CUSTOMER]</div>
          </div>
          <div className="wireframe-form-group">
            <label>Follow-up Type</label>
            <div className="wireframe-select">[CALL/EMAIL/MEETING/DEMO/PROPOSAL]</div>
          </div>
        </div>

        <div className="wireframe-section">
          <h4>Follow-up Details</h4>
          <div className="wireframe-form-grid">
            <div className="wireframe-form-group">
              <label>Subject/Title</label>
              <div className="wireframe-input">[FOLLOW-UP SUBJECT]</div>
            </div>
            <div className="wireframe-form-group">
              <label>Priority Level</label>
              <div className="wireframe-select">[LOW/MEDIUM/HIGH/URGENT]</div>
            </div>
            <div className="wireframe-form-group">
              <label>Scheduled Date</label>
              <div className="wireframe-input">[DATE PICKER]</div>
            </div>
            <div className="wireframe-form-group">
              <label>Scheduled Time</label>
              <div className="wireframe-input">[TIME PICKER]</div>
            </div>
            <div className="wireframe-form-group">
              <label>Duration (Minutes)</label>
              <div className="wireframe-input">[DURATION]</div>
            </div>
            <div className="wireframe-form-group">
              <label>Assigned To</label>
              <div className="wireframe-select">[SALES REPRESENTATIVE]</div>
            </div>
          </div>
        </div>

        <div className="wireframe-section">
          <h4>Follow-up Agenda</h4>
          <div className="wireframe-form-group wireframe-full-width">
            <label>Agenda/Objectives</label>
            <div className="wireframe-textarea">[MEETING AGENDA AND OBJECTIVES]</div>
          </div>
          <div className="wireframe-form-group wireframe-full-width">
            <label>Preparation Notes</label>
            <div className="wireframe-textarea">[PREPARATION NOTES AND RESEARCH]</div>
          </div>
        </div>

        <div className="wireframe-section">
          <h4>Customer Context</h4>
          <div className="wireframe-customer-context">
            <div className="wireframe-context-card">
              <h5>Customer: ABC Corporation</h5>
              <div className="wireframe-info-grid">
                <div>
                  <label>Last Contact:</label>
                  <span>May 10, 2024</span>
                </div>
                <div>
                  <label>Contact Method:</label>
                  <span>Phone Call</span>
                </div>
                <div>
                  <label>Sales Stage:</label>
                  <span>Proposal</span>
                </div>
                <div>
                  <label>Deal Value:</label>
                  <span>$75,000</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="wireframe-section">
          <h4>Reminder Settings</h4>
          <div className="wireframe-form-grid">
            <div className="wireframe-form-group">
              <label>Email Reminder</label>
              <div className="wireframe-select">[15MIN/30MIN/1HR/1DAY BEFORE]</div>
            </div>
            <div className="wireframe-form-group">
              <label>SMS Reminder</label>
              <div className="wireframe-checkbox-group">
                <input type="checkbox" id="sms-reminder" />
                <label htmlFor="sms-reminder">Send SMS reminder</label>
              </div>
            </div>
            <div className="wireframe-form-group">
              <label>Calendar Integration</label>
              <div className="wireframe-checkbox-group">
                <input type="checkbox" id="calendar-sync" />
                <label htmlFor="calendar-sync">Add to calendar</label>
              </div>
            </div>
            <div className="wireframe-form-group">
              <label>Team Notification</label>
              <div className="wireframe-checkbox-group">
                <input type="checkbox" id="team-notify" />
                <label htmlFor="team-notify">Notify team members</label>
              </div>
            </div>
          </div>
        </div>

        <div className="wireframe-section">
          <h4>Upcoming Follow-ups</h4>
          <div className="wireframe-table">
            <div className="wireframe-table-header">
              <div>Customer</div>
              <div>Type</div>
              <div>Date & Time</div>
              <div>Assigned To</div>
              <div>Priority</div>
              <div>Status</div>
              <div>Action</div>
            </div>
            <div className="wireframe-table-row">
              <div>ABC Corporation</div>
              <div>Demo Call</div>
              <div>May 20, 2024 - 2:00 PM</div>
              <div>Sarah Johnson</div>
              <div><span className="wireframe-priority-high">High</span></div>
              <div><span className="wireframe-status-scheduled">Scheduled</span></div>
              <div>
                <button className="wireframe-button-secondary">Edit</button>
              </div>
            </div>
            <div className="wireframe-table-row">
              <div>XYZ Inc</div>
              <div>Email Follow-up</div>
              <div>May 22, 2024 - 9:00 AM</div>
              <div>Mike Chen</div>
              <div><span className="wireframe-priority-medium">Medium</span></div>
              <div><span className="wireframe-status-scheduled">Scheduled</span></div>
              <div>
                <button className="wireframe-button-secondary">Edit</button>
              </div>
            </div>
            <div className="wireframe-table-row">
              <div>Tech Solutions Ltd</div>
              <div>Proposal Review</div>
              <div>May 25, 2024 - 11:00 AM</div>
              <div>John Smith</div>
              <div><span className="wireframe-priority-urgent">Urgent</span></div>
              <div><span className="wireframe-status-confirmed">Confirmed</span></div>
              <div>
                <button className="wireframe-button-secondary">Edit</button>
              </div>
            </div>
          </div>
        </div>

        <div className="wireframe-section">
          <h4>Follow-up Templates</h4>
          <div className="wireframe-template-grid">
            <div className="wireframe-template-card">
              <h5>Initial Contact Follow-up</h5>
              <p>Standard follow-up after first contact</p>
              <button className="wireframe-button-secondary">Use Template</button>
            </div>
            <div className="wireframe-template-card">
              <h5>Post-Demo Follow-up</h5>
              <p>Follow-up after product demonstration</p>
              <button className="wireframe-button-secondary">Use Template</button>
            </div>
            <div className="wireframe-template-card">
              <h5>Proposal Follow-up</h5>
              <p>Follow-up after sending proposal</p>
              <button className="wireframe-button-secondary">Use Template</button>
            </div>
            <div className="wireframe-template-card">
              <h5>Contract Negotiation</h5>
              <p>Follow-up during contract discussions</p>
              <button className="wireframe-button-secondary">Use Template</button>
            </div>
          </div>
        </div>

        <div className="wireframe-button-group">
          <button className="wireframe-button-primary">Schedule Follow-up</button>
          <button className="wireframe-button-secondary">Save as Draft</button>
          <button className="wireframe-button-secondary">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default ScheduleFollowUp;
