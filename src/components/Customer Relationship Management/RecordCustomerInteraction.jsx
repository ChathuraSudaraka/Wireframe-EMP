import React from 'react';

const RecordCustomerInteraction = () => {
  return (
    <div className="wireframe-component">
      <div className="wireframe-header">
        <h3>Record Customer Interaction</h3>
      </div>
      <div className="wireframe-content">
        <div className="wireframe-form-grid">
          <div className="wireframe-form-group">
            <label>Customer</label>
            <div className="wireframe-select">[SEARCH AND SELECT CUSTOMER]</div>
          </div>
          <div className="wireframe-form-group">
            <label>Interaction Date</label>
            <div className="wireframe-input">[DATE PICKER - DEFAULT TODAY]</div>
          </div>
          <div className="wireframe-form-group">
            <label>Interaction Time</label>
            <div className="wireframe-input">[TIME PICKER]</div>
          </div>
          <div className="wireframe-form-group">
            <label>Duration (Minutes)</label>
            <div className="wireframe-input">[DURATION]</div>
          </div>
        </div>

        <div className="wireframe-section">
          <h4>Interaction Details</h4>
          <div className="wireframe-form-grid">
            <div className="wireframe-form-group">
              <label>Interaction Type</label>
              <div className="wireframe-select">[PHONE CALL/EMAIL/MEETING/DEMO/PRESENTATION/SOCIAL]</div>
            </div>
            <div className="wireframe-form-group">
              <label>Direction</label>
              <div className="wireframe-select">[INBOUND/OUTBOUND]</div>
            </div>
            <div className="wireframe-form-group">
              <label>Purpose</label>
              <div className="wireframe-select">[SALES/SUPPORT/FOLLOW-UP/DEMO/NEGOTIATION]</div>
            </div>
            <div className="wireframe-form-group">
              <label>Outcome</label>
              <div className="wireframe-select">[SUCCESSFUL/NEEDS FOLLOW-UP/NO INTEREST/CLOSED]</div>
            </div>
          </div>
        </div>

        <div className="wireframe-section">
          <h4>Customer Information</h4>
          <div className="wireframe-customer-info-card">
            <div className="wireframe-customer-header">
              <div className="wireframe-avatar">JD</div>
              <div>
                <h4>John Doe</h4>
                <p>ABC Corporation - CEO</p>
                <p>Customer since: March 2024</p>
              </div>
            </div>
            <div className="wireframe-info-grid">
              <div>
                <label>Phone:</label>
                <span>(555) 123-4567</span>
              </div>
              <div>
                <label>Email:</label>
                <span>john@abccorp.com</span>
              </div>
              <div>
                <label>Last Contact:</label>
                <span>May 10, 2024</span>
              </div>
              <div>
                <label>Sales Stage:</label>
                <span>Proposal</span>
              </div>
            </div>
          </div>
        </div>

        <div className="wireframe-section">
          <h4>Interaction Summary</h4>
          <div className="wireframe-form-group wireframe-full-width">
            <label>Subject/Title</label>
            <div className="wireframe-input">[INTERACTION SUBJECT]</div>
          </div>
          <div className="wireframe-form-group wireframe-full-width">
            <label>Detailed Notes</label>
            <div className="wireframe-textarea">[DETAILED INTERACTION NOTES AND DISCUSSION POINTS]</div>
          </div>
        </div>

        <div className="wireframe-section">
          <h4>Key Discussion Points</h4>
          <div className="wireframe-discussion-points">
            <div className="wireframe-point-item">
              <input type="checkbox" id="budget-discussed" />
              <label htmlFor="budget-discussed">Budget requirements discussed</label>
            </div>
            <div className="wireframe-point-item">
              <input type="checkbox" id="timeline-discussed" />
              <label htmlFor="timeline-discussed">Implementation timeline discussed</label>
            </div>
            <div className="wireframe-point-item">
              <input type="checkbox" id="decision-makers" />
              <label htmlFor="decision-makers">Decision makers identified</label>
            </div>
            <div className="wireframe-point-item">
              <input type="checkbox" id="pain-points" />
              <label htmlFor="pain-points">Customer pain points identified</label>
            </div>
            <div className="wireframe-point-item">
              <input type="checkbox" id="competition" />
              <label htmlFor="competition">Competitive landscape discussed</label>
            </div>
            <div className="wireframe-point-item">
              <input type="checkbox" id="technical-requirements" />
              <label htmlFor="technical-requirements">Technical requirements clarified</label>
            </div>
          </div>
        </div>

        <div className="wireframe-section">
          <h4>Customer Sentiment & Feedback</h4>
          <div className="wireframe-form-grid">
            <div className="wireframe-form-group">
              <label>Customer Interest Level</label>
              <div className="wireframe-select">[VERY HIGH/HIGH/MEDIUM/LOW/VERY LOW]</div>
            </div>
            <div className="wireframe-form-group">
              <label>Customer Satisfaction</label>
              <div className="wireframe-select">[VERY SATISFIED/SATISFIED/NEUTRAL/DISSATISFIED]</div>
            </div>
            <div className="wireframe-form-group">
              <label>Buying Intent</label>
              <div className="wireframe-select">[READY TO BUY/CONSIDERING/RESEARCHING/NOT INTERESTED]</div>
            </div>
            <div className="wireframe-form-group">
              <label>Urgency Level</label>
              <div className="wireframe-select">[IMMEDIATE/WITHIN MONTH/WITHIN QUARTER/LONG TERM]</div>
            </div>
          </div>
          <div className="wireframe-form-group wireframe-full-width">
            <label>Customer Feedback</label>
            <div className="wireframe-textarea">[CUSTOMER FEEDBACK AND CONCERNS]</div>
          </div>
        </div>

        <div className="wireframe-section">
          <h4>Action Items & Next Steps</h4>
          <div className="wireframe-action-items">
            <div className="wireframe-action-item">
              <div className="wireframe-form-group">
                <label>Action Required</label>
                <div className="wireframe-input">[ACTION DESCRIPTION]</div>
              </div>
              <div className="wireframe-form-group">
                <label>Assigned To</label>
                <div className="wireframe-select">[TEAM MEMBER]</div>
              </div>
              <div className="wireframe-form-group">
                <label>Due Date</label>
                <div className="wireframe-input">[DUE DATE]</div>
              </div>
              <div className="wireframe-form-group">
                <button className="wireframe-button-secondary">Remove</button>
              </div>
            </div>
            <div className="wireframe-action-item">
              <div className="wireframe-form-group">
                <label>Action Required</label>
                <div className="wireframe-input">[ACTION DESCRIPTION]</div>
              </div>
              <div className="wireframe-form-group">
                <label>Assigned To</label>
                <div className="wireframe-select">[TEAM MEMBER]</div>
              </div>
              <div className="wireframe-form-group">
                <label>Due Date</label>
                <div className="wireframe-input">[DUE DATE]</div>
              </div>
              <div className="wireframe-form-group">
                <button className="wireframe-button-secondary">Remove</button>
              </div>
            </div>
          </div>
          <button className="wireframe-button-secondary">+ Add Action Item</button>
        </div>

        <div className="wireframe-section">
          <h4>Deal Information Update</h4>
          <div className="wireframe-form-grid">
            <div className="wireframe-form-group">
              <label>Deal Stage</label>
              <div className="wireframe-select">[LEAD/QUALIFIED/PROPOSAL/NEGOTIATION/CLOSED WON/CLOSED LOST]</div>
            </div>
            <div className="wireframe-form-group">
              <label>Deal Value</label>
              <div className="wireframe-input">[ESTIMATED VALUE]</div>
            </div>
            <div className="wireframe-form-group">
              <label>Close Probability</label>
              <div className="wireframe-select">[10%/25%/50%/75%/90%/100%]</div>
            </div>
            <div className="wireframe-form-group">
              <label>Expected Close Date</label>
              <div className="wireframe-input">[EXPECTED DATE]</div>
            </div>
          </div>
        </div>

        <div className="wireframe-section">
          <h4>Attachments & Files</h4>
          <div className="wireframe-file-upload-area">
            <div className="wireframe-file-upload">
              [DRAG & DROP FILES OR CLICK TO UPLOAD]
            </div>
            <div className="wireframe-file-list">
              <div className="wireframe-file-item">
                <span>📄 Proposal_ABCCorp_v2.pdf</span>
                <button className="wireframe-button-secondary">Remove</button>
              </div>
              <div className="wireframe-file-item">
                <span>📊 Meeting_Notes_May15.docx</span>
                <button className="wireframe-button-secondary">Remove</button>
              </div>
            </div>
          </div>
        </div>

        <div className="wireframe-section">
          <h4>Previous Interactions</h4>
          <div className="wireframe-interaction-history">
            <div className="wireframe-history-item">
              <div className="wireframe-history-header">
                <div className="wireframe-history-type">📞 Phone Call</div>
                <div className="wireframe-history-date">May 10, 2024 - 2:30 PM</div>
              </div>
              <div className="wireframe-history-content">
                <p><strong>Duration:</strong> 45 minutes</p>
                <p><strong>Outcome:</strong> Successful - Follow-up scheduled</p>
                <p><strong>Notes:</strong> Discussed pricing options and implementation timeline...</p>
              </div>
            </div>
            <div className="wireframe-history-item">
              <div className="wireframe-history-header">
                <div className="wireframe-history-type">✉️ Email</div>
                <div className="wireframe-history-date">May 8, 2024 - 9:15 AM</div>
              </div>
              <div className="wireframe-history-content">
                <p><strong>Subject:</strong> Product Demo Follow-up</p>
                <p><strong>Outcome:</strong> Response received</p>
                <p><strong>Notes:</strong> Sent detailed proposal and technical specifications...</p>
              </div>
            </div>
          </div>
        </div>

        <div className="wireframe-button-group">
          <button className="wireframe-button-primary">Record Interaction</button>
          <button className="wireframe-button-secondary">Save as Draft</button>
          <button className="wireframe-button-secondary">Schedule Follow-up</button>
          <button className="wireframe-button-secondary">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default RecordCustomerInteraction;
