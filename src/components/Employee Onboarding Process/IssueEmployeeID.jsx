// filepath: c:\Users\Lenovo ideapadGaming\Desktop\New folder (2)\src\components\IssueEmployeeID.jsx
import React from 'react';

const IssueEmployeeID = () => {
  return (
    <div className="wireframe-component">
      <div className="wireframe-header">
        <h3>Issue Employee ID</h3>
      </div>
      <div className="wireframe-content">
        {/* Employee Information Display */}
        <div className="wireframe-section">
          <h4>Employee Information</h4>
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
          </div>
        </div>

        {/* ID Card Configuration */}
        <div className="wireframe-section">
          <h4>ID Card Configuration</h4>
          <div className="wireframe-form-grid">
            <div className="wireframe-form-group">
              <label>Employee ID Number:</label>
              <div className="wireframe-input-readonly">EMP-2024-001</div>
            </div>
            <div className="wireframe-form-group">
              <label>Access Level:</label>
              <div className="wireframe-select">
                <span>Basic Access ▼</span>
              </div>
            </div>
            <div className="wireframe-form-group">
              <label>Card Expiry Date:</label>
              <div className="wireframe-input">[DD/MM/YYYY]</div>
            </div>
            <div className="wireframe-form-group">
              <label>Emergency Contact Name:</label>
              <div className="wireframe-input"></div>
            </div>
            <div className="wireframe-form-group">
              <label>Emergency Contact Phone:</label>
              <div className="wireframe-input"></div>
            </div>
          </div>
        </div>

        {/* Photo Upload */}
        <div className="wireframe-section">
          <h4>Employee Photo</h4>
          <div className="wireframe-upload-area">
            <div className="wireframe-photo-placeholder">
              [📷 Employee Photo]
            </div>
            <div className="wireframe-upload-actions">
              <button className="wireframe-button">Upload Photo</button>
              <button className="wireframe-button wireframe-button-secondary">Take Photo</button>
            </div>
            <div className="wireframe-upload-requirements">
              Requirements:
              <ul>
                <li>• Passport-style photo</li>
                <li>• JPG/PNG format</li>
                <li>• Max 2MB file size</li>
                <li>• 300x300 pixels minimum</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Access Permissions */}
        <div className="wireframe-section">
          <h4>Access Permissions</h4>
          <div className="wireframe-permissions-grid">
            <div className="wireframe-permission-category">
              <h5>Building Access</h5>
              <div className="wireframe-checkbox-group">
                <label className="wireframe-checkbox">
                  <input type="checkbox" checked readOnly />
                  Main Building
                </label>
                <label className="wireframe-checkbox">
                  <input type="checkbox" />
                  Parking Garage
                </label>
                <label className="wireframe-checkbox">
                  <input type="checkbox" />
                  Cafeteria
                </label>
                <label className="wireframe-checkbox">
                  <input type="checkbox" />
                  Gym/Recreation
                </label>
              </div>
            </div>
            <div className="wireframe-permission-category">
              <h5>Floor Access</h5>
              <div className="wireframe-checkbox-group">
                <label className="wireframe-checkbox">
                  <input type="checkbox" checked readOnly />
                  Ground Floor
                </label>
                <label className="wireframe-checkbox">
                  <input type="checkbox" checked readOnly />
                  Department Floor
                </label>
                <label className="wireframe-checkbox">
                  <input type="checkbox" />
                  Executive Floor
                </label>
                <label className="wireframe-checkbox">
                  <input type="checkbox" />
                  Server Room
                </label>
              </div>
            </div>
            <div className="wireframe-permission-category">
              <h5>System Access</h5>
              <div className="wireframe-checkbox-group">
                <label className="wireframe-checkbox">
                  <input type="checkbox" checked readOnly />
                  Employee Portal
                </label>
                <label className="wireframe-checkbox">
                  <input type="checkbox" />
                  Development Tools
                </label>
                <label className="wireframe-checkbox">
                  <input type="checkbox" />
                  Administrative Panel
                </label>
                <label className="wireframe-checkbox">
                  <input type="checkbox" />
                  Financial Systems
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* ID Card Preview */}
        <div className="wireframe-section">
          <h4>ID Card Preview</h4>
          <div className="wireframe-id-card-preview">
            <div className="wireframe-id-card">
              <div className="wireframe-id-header">
                <div className="wireframe-company-logo">[COMPANY LOGO]</div>
                <div className="wireframe-company-name">ABC Corporation</div>
              </div>
              <div className="wireframe-id-body">
                <div className="wireframe-employee-photo">[PHOTO]</div>
                <div className="wireframe-employee-details">
                  <div className="wireframe-id-name">[John Doe]</div>
                  <div className="wireframe-id-title">[Software Developer]</div>
                  <div className="wireframe-id-number">ID: EMP-2024-001</div>
                  <div className="wireframe-id-department">[Engineering Dept.]</div>
                </div>
              </div>
              <div className="wireframe-id-footer">
                <div className="wireframe-id-barcode">[████ ████ ████]</div>
                <div className="wireframe-id-expiry">Exp: [12/2025]</div>
              </div>
            </div>
          </div>
        </div>

        {/* Processing Status */}
        <div className="wireframe-section">
          <h4>ID Processing Status</h4>
          <div className="wireframe-status-tracker">
            <div className="wireframe-status-step wireframe-status-completed">
              <div className="wireframe-status-icon">✓</div>
              <div className="wireframe-status-label">Photo Approved</div>
            </div>
            <div className="wireframe-status-step wireframe-status-current">
              <div className="wireframe-status-icon">⚠</div>
              <div className="wireframe-status-label">Permissions Review</div>
            </div>
            <div className="wireframe-status-step wireframe-status-pending">
              <div className="wireframe-status-icon">○</div>
              <div className="wireframe-status-label">Card Production</div>
            </div>
            <div className="wireframe-status-step wireframe-status-pending">
              <div className="wireframe-status-icon">○</div>
              <div className="wireframe-status-label">Ready for Pickup</div>
            </div>
          </div>
          <div className="wireframe-status-info">
            <p>Estimated completion: 2-3 business days</p>
            <p>Pickup location: Security Office, Ground Floor</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="wireframe-actions">
          <button className="wireframe-button wireframe-button-primary">Generate ID Card</button>
          <button className="wireframe-button wireframe-button-secondary">Save Draft</button>
          <button className="wireframe-button wireframe-button-secondary">Preview Card</button>
          <button className="wireframe-button">Send for Approval</button>
        </div>
      </div>
    </div>
  );
};

export default IssueEmployeeID;
