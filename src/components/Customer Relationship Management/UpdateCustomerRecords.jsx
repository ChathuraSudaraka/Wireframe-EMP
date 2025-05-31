import React from 'react';

const UpdateCustomerRecords = () => {
  return (
    <div className="wireframe-component">
      <div className="wireframe-header">
        <h3>Update Customer Records</h3>
      </div>
      <div className="wireframe-content">
        <div className="wireframe-form-grid">
          <div className="wireframe-form-group">
            <label>Search Customer</label>
            <div className="wireframe-input">[SEARCH BY NAME, ID, EMAIL, PHONE]</div>
          </div>
          <div className="wireframe-form-group">
            <button className="wireframe-button-primary">Search</button>
          </div>
        </div>

        <div className="wireframe-section">
          <h4>Customer Search Results</h4>
          <div className="wireframe-table">
            <div className="wireframe-table-header">
              <div>Customer ID</div>
              <div>Name</div>
              <div>Company</div>
              <div>Email</div>
              <div>Phone</div>
              <div>Status</div>
              <div>Action</div>
            </div>
            <div className="wireframe-table-row">
              <div>CUST-001</div>
              <div>John Doe</div>
              <div>ABC Corp</div>
              <div>john@abccorp.com</div>
              <div>(555) 123-4567</div>
              <div><span className="wireframe-status-active">Active</span></div>
              <div>
                <button className="wireframe-button-secondary">Edit</button>
              </div>
            </div>
            <div className="wireframe-table-row">
              <div>CUST-002</div>
              <div>Jane Smith</div>
              <div>XYZ Inc</div>
              <div>jane@xyzinc.com</div>
              <div>(555) 987-6543</div>
              <div><span className="wireframe-status-active">Active</span></div>
              <div>
                <button className="wireframe-button-secondary">Edit</button>
              </div>
            </div>
          </div>
        </div>

        <div className="wireframe-section">
          <h4>Update Customer Information</h4>
          <div className="wireframe-customer-edit-card">
            <div className="wireframe-customer-header">
              <div className="wireframe-avatar">JD</div>
              <div>
                <h4>John Doe</h4>
                <p>Customer ID: CUST-001</p>
                <p>Last Updated: May 15, 2024</p>
              </div>
            </div>

            <div className="wireframe-section">
              <h5>Basic Information</h5>
              <div className="wireframe-form-grid">
                <div className="wireframe-form-group">
                  <label>First Name</label>
                  <div className="wireframe-input">John</div>
                </div>
                <div className="wireframe-form-group">
                  <label>Last Name</label>
                  <div className="wireframe-input">Doe</div>
                </div>
                <div className="wireframe-form-group">
                  <label>Company Name</label>
                  <div className="wireframe-input">ABC Corporation</div>
                </div>
                <div className="wireframe-form-group">
                  <label>Job Title</label>
                  <div className="wireframe-input">CEO</div>
                </div>
              </div>
            </div>

            <div className="wireframe-section">
              <h5>Contact Information</h5>
              <div className="wireframe-form-grid">
                <div className="wireframe-form-group">
                  <label>Primary Phone</label>
                  <div className="wireframe-input">(555) 123-4567</div>
                </div>
                <div className="wireframe-form-group">
                  <label>Email Address</label>
                  <div className="wireframe-input">john@abccorp.com</div>
                </div>
                <div className="wireframe-form-group">
                  <label>Website</label>
                  <div className="wireframe-input">www.abccorp.com</div>
                </div>
                <div className="wireframe-form-group">
                  <label>Preferred Contact Method</label>
                  <div className="wireframe-select">[EMAIL/PHONE/SMS]</div>
                </div>
              </div>
            </div>

            <div className="wireframe-section">
              <h5>Address Information</h5>
              <div className="wireframe-form-grid">
                <div className="wireframe-form-group wireframe-full-width">
                  <label>Street Address</label>
                  <div className="wireframe-input">123 Main Street, Suite 100</div>
                </div>
                <div className="wireframe-form-group">
                  <label>City</label>
                  <div className="wireframe-input">New York</div>
                </div>
                <div className="wireframe-form-group">
                  <label>State</label>
                  <div className="wireframe-input">NY</div>
                </div>
                <div className="wireframe-form-group">
                  <label>ZIP Code</label>
                  <div className="wireframe-input">10001</div>
                </div>
              </div>
            </div>

            <div className="wireframe-section">
              <h5>Business Details</h5>
              <div className="wireframe-form-grid">
                <div className="wireframe-form-group">
                  <label>Industry</label>
                  <div className="wireframe-select">[TECHNOLOGY/FINANCE/HEALTHCARE/OTHER]</div>
                </div>
                <div className="wireframe-form-group">
                  <label>Company Size</label>
                  <div className="wireframe-select">[51-200 EMPLOYEES]</div>
                </div>
                <div className="wireframe-form-group">
                  <label>Customer Status</label>
                  <div className="wireframe-select">[ACTIVE/INACTIVE/PROSPECT/LEAD]</div>
                </div>
                <div className="wireframe-form-group">
                  <label>Customer Priority</label>
                  <div className="wireframe-select">[HIGH/MEDIUM/LOW]</div>
                </div>
              </div>
            </div>

            <div className="wireframe-section">
              <h5>Sales Information</h5>
              <div className="wireframe-form-grid">
                <div className="wireframe-form-group">
                  <label>Sales Representative</label>
                  <div className="wireframe-select">[ASSIGN SALES REP]</div>
                </div>
                <div className="wireframe-form-group">
                  <label>Credit Limit</label>
                  <div className="wireframe-input">$50,000</div>
                </div>
                <div className="wireframe-form-group">
                  <label>Payment Terms</label>
                  <div className="wireframe-select">[NET 30 DAYS]</div>
                </div>
                <div className="wireframe-form-group">
                  <label>Tax ID</label>
                  <div className="wireframe-input">[TAX ID NUMBER]</div>
                </div>
              </div>
            </div>

            <div className="wireframe-section">
              <h5>Customer Tags & Categories</h5>
              <div className="wireframe-tag-container">
                <div className="wireframe-tag">VIP Customer</div>
                <div className="wireframe-tag">Technology</div>
                <div className="wireframe-tag">Enterprise</div>
                <div className="wireframe-tag">Long-term</div>
                <button className="wireframe-button-secondary wireframe-tag-add">+ Add Tag</button>
              </div>
            </div>

            <div className="wireframe-section">
              <h5>Update Notes</h5>
              <div className="wireframe-form-group wireframe-full-width">
                <label>Reason for Update</label>
                <div className="wireframe-textarea">[DESCRIBE CHANGES MADE]</div>
              </div>
            </div>
          </div>
        </div>

        <div className="wireframe-section">
          <h4>Update History</h4>
          <div className="wireframe-update-history">
            <div className="wireframe-history-item">
              <div className="wireframe-history-time">May 15, 2024 - 2:30 PM</div>
              <div className="wireframe-history-user">Updated by: Sarah Johnson</div>
              <div className="wireframe-history-action">Updated contact information and credit limit</div>
            </div>
            <div className="wireframe-history-item">
              <div className="wireframe-history-time">April 20, 2024 - 10:15 AM</div>
              <div className="wireframe-history-user">Updated by: Mike Chen</div>
              <div className="wireframe-history-action">Changed customer priority to High and added VIP tag</div>
            </div>
            <div className="wireframe-history-item">
              <div className="wireframe-history-time">March 10, 2024 - 4:45 PM</div>
              <div className="wireframe-history-user">Created by: John Smith</div>
              <div className="wireframe-history-action">Customer record created</div>
            </div>
          </div>
        </div>

        <div className="wireframe-button-group">
          <button className="wireframe-button-primary">Save Changes</button>
          <button className="wireframe-button-secondary">Reset Changes</button>
          <button className="wireframe-button-secondary">View Full Profile</button>
          <button className="wireframe-button-secondary">Delete Customer</button>
        </div>
      </div>
    </div>
  );
};

export default UpdateCustomerRecords;
