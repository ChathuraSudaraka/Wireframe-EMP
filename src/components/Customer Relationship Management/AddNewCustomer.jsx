import React from 'react';

const AddNewCustomer = () => {
  return (
    <div className="wireframe-component">
      <div className="wireframe-header">
        <h3>Add New Customer</h3>
      </div>
      <div className="wireframe-content">
        <div className="wireframe-form-grid">
          <div className="wireframe-form-group">
            <label>Customer ID</label>
            <div className="wireframe-input">AUTO-GENERATED</div>
          </div>
          <div className="wireframe-form-group">
            <label>Customer Type</label>
            <div className="wireframe-select">[INDIVIDUAL/BUSINESS/CORPORATE]</div>
          </div>
        </div>

        <div className="wireframe-section">
          <h4>Basic Information</h4>
          <div className="wireframe-form-grid">
            <div className="wireframe-form-group">
              <label>First Name</label>
              <div className="wireframe-input">[FIRST NAME]</div>
            </div>
            <div className="wireframe-form-group">
              <label>Last Name</label>
              <div className="wireframe-input">[LAST NAME]</div>
            </div>
            <div className="wireframe-form-group">
              <label>Company Name</label>
              <div className="wireframe-input">[COMPANY NAME]</div>
            </div>
            <div className="wireframe-form-group">
              <label>Job Title</label>
              <div className="wireframe-input">[JOB TITLE]</div>
            </div>
          </div>
        </div>

        <div className="wireframe-section">
          <h4>Contact Information</h4>
          <div className="wireframe-form-grid">
            <div className="wireframe-form-group">
              <label>Primary Phone</label>
              <div className="wireframe-input">[PHONE NUMBER]</div>
            </div>
            <div className="wireframe-form-group">
              <label>Secondary Phone</label>
              <div className="wireframe-input">[SECONDARY PHONE]</div>
            </div>
            <div className="wireframe-form-group">
              <label>Email Address</label>
              <div className="wireframe-input">[EMAIL ADDRESS]</div>
            </div>
            <div className="wireframe-form-group">
              <label>Website</label>
              <div className="wireframe-input">[WEBSITE URL]</div>
            </div>
          </div>
        </div>

        <div className="wireframe-section">
          <h4>Address Information</h4>
          <div className="wireframe-form-grid">
            <div className="wireframe-form-group wireframe-full-width">
              <label>Street Address</label>
              <div className="wireframe-input">[STREET ADDRESS]</div>
            </div>
            <div className="wireframe-form-group">
              <label>City</label>
              <div className="wireframe-input">[CITY]</div>
            </div>
            <div className="wireframe-form-group">
              <label>State/Province</label>
              <div className="wireframe-input">[STATE/PROVINCE]</div>
            </div>
            <div className="wireframe-form-group">
              <label>ZIP/Postal Code</label>
              <div className="wireframe-input">[ZIP CODE]</div>
            </div>
            <div className="wireframe-form-group">
              <label>Country</label>
              <div className="wireframe-select">[SELECT COUNTRY]</div>
            </div>
          </div>
        </div>

        <div className="wireframe-section">
          <h4>Business Details</h4>
          <div className="wireframe-form-grid">
            <div className="wireframe-form-group">
              <label>Industry</label>
              <div className="wireframe-select">[SELECT INDUSTRY]</div>
            </div>
            <div className="wireframe-form-group">
              <label>Company Size</label>
              <div className="wireframe-select">[1-10/11-50/51-200/201-500/500+]</div>
            </div>
            <div className="wireframe-form-group">
              <label>Annual Revenue</label>
              <div className="wireframe-select">[REVENUE RANGE]</div>
            </div>
            <div className="wireframe-form-group">
              <label>Lead Source</label>
              <div className="wireframe-select">[WEBSITE/REFERRAL/CAMPAIGN/OTHER]</div>
            </div>
          </div>
        </div>

        <div className="wireframe-section">
          <h4>Sales Information</h4>
          <div className="wireframe-form-grid">
            <div className="wireframe-form-group">
              <label>Sales Representative</label>
              <div className="wireframe-select">[ASSIGN SALES REP]</div>
            </div>
            <div className="wireframe-form-group">
              <label>Customer Priority</label>
              <div className="wireframe-select">[LOW/MEDIUM/HIGH/VIP]</div>
            </div>
            <div className="wireframe-form-group">
              <label>Credit Limit</label>
              <div className="wireframe-input">[CREDIT LIMIT]</div>
            </div>
            <div className="wireframe-form-group">
              <label>Payment Terms</label>
              <div className="wireframe-select">[NET 15/NET 30/COD/PREPAID]</div>
            </div>
          </div>
        </div>

        <div className="wireframe-section">
          <h4>Additional Notes</h4>
          <div className="wireframe-form-group wireframe-full-width">
            <label>Customer Notes</label>
            <div className="wireframe-textarea">[ADDITIONAL NOTES AND COMMENTS]</div>
          </div>
        </div>

        <div className="wireframe-button-group">
          <button className="wireframe-button-primary">Add Customer</button>
          <button className="wireframe-button-secondary">Save as Draft</button>
          <button className="wireframe-button-secondary">Clear Form</button>
        </div>
      </div>
    </div>
  );
};

export default AddNewCustomer;
