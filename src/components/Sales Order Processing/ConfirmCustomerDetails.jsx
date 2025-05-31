import React from 'react';

const ConfirmCustomerDetails = () => {
  return (
    <div className="wireframe-component">
      <div className="wireframe-header">
        <h3>Confirm Customer Details</h3>
      </div>
      <div className="wireframe-content">
        <div className="wireframe-form-grid">
          <div className="wireframe-form-group">
            <label>Customer ID</label>
            <div className="wireframe-input">[SEARCH CUSTOMER ID]</div>
          </div>
          <div className="wireframe-form-group">
            <label>Phone Number</label>
            <div className="wireframe-input">[SEARCH BY PHONE]</div>
          </div>
          <div className="wireframe-form-group">
            <label>Email Address</label>
            <div className="wireframe-input">[SEARCH BY EMAIL]</div>
          </div>
          <div className="wireframe-form-group">
            <button className="wireframe-button-primary">Search Customer</button>
          </div>
        </div>

        <div className="wireframe-section">
          <h4>Customer Information</h4>
          <div className="wireframe-info-card">
            <div className="wireframe-customer-header">
              <div className="wireframe-avatar">JD</div>
              <div>
                <h4>John Doe</h4>
                <p>Customer ID: CUST-001234</p>
              </div>
            </div>
            
            <div className="wireframe-form-grid">
              <div className="wireframe-form-group">
                <label>Full Name</label>
                <div className="wireframe-input">John Michael Doe</div>
              </div>
              <div className="wireframe-form-group">
                <label>Company</label>
                <div className="wireframe-input">ABC Corporation</div>
              </div>
              <div className="wireframe-form-group">
                <label>Phone Number</label>
                <div className="wireframe-input">+1 (555) 123-4567</div>
              </div>
              <div className="wireframe-form-group">
                <label>Email Address</label>
                <div className="wireframe-input">john.doe@abccorp.com</div>
              </div>
            </div>

            <div className="wireframe-section">
              <h5>Billing Address</h5>
              <div className="wireframe-form-group wireframe-full-width">
                <div className="wireframe-textarea">
                  123 Main Street, Suite 100
                  New York, NY 10001
                  United States
                </div>
              </div>
            </div>

            <div className="wireframe-section">
              <h5>Shipping Address</h5>
              <div className="wireframe-checkbox-group">
                <input type="checkbox" id="same-address" />
                <label htmlFor="same-address">Same as billing address</label>
              </div>
              <div className="wireframe-form-group wireframe-full-width">
                <div className="wireframe-textarea">
                  456 Corporate Drive
                  New York, NY 10002
                  United States
                </div>
              </div>
            </div>

            <div className="wireframe-section">
              <h5>Customer Status & History</h5>
              <div className="wireframe-info-grid">
                <div>
                  <label>Customer Since:</label>
                  <span>January 2023</span>
                </div>
                <div>
                  <label>Credit Limit:</label>
                  <span>$50,000.00</span>
                </div>
                <div>
                  <label>Outstanding Balance:</label>
                  <span>$2,450.00</span>
                </div>
                <div>
                  <label>Payment Terms:</label>
                  <span>Net 30 Days</span>
                </div>
                <div>
                  <label>Total Orders:</label>
                  <span>47 orders</span>
                </div>
                <div>
                  <label>Account Status:</label>
                  <span className="wireframe-status-active">Active</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="wireframe-button-group">
          <button className="wireframe-button-primary">Confirm Details</button>
          <button className="wireframe-button-secondary">Edit Customer</button>
          <button className="wireframe-button-secondary">Add New Customer</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmCustomerDetails;
