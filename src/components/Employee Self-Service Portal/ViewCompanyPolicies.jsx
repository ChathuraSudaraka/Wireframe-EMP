import React from 'react';

const ViewCompanyPolicies = () => {
  return (
    <div className="wireframe-component">
      <div className="wireframe-header">
        <h3>View Company Policies</h3>
      </div>
      <div className="wireframe-content">
        <div className="wireframe-search-bar">
          <div className="wireframe-input">
            <span>🔍 Search policies...</span>
          </div>
        </div>
        
        <div className="wireframe-policy-categories">
          <div className="wireframe-category-tabs">
            <div className="wireframe-tab wireframe-tab-active">All</div>
            <div className="wireframe-tab">HR Policies</div>
            <div className="wireframe-tab">IT Policies</div>
            <div className="wireframe-tab">Safety</div>
          </div>
        </div>

        <div className="wireframe-policy-list">
          <div className="wireframe-policy-item">
            <div className="wireframe-policy-icon">📄</div>
            <div className="wireframe-policy-content">
              <div className="wireframe-policy-title">Employee Handbook</div>
              <div className="wireframe-policy-description">████████████████████████</div>
              <div className="wireframe-policy-date">Last updated: ████████</div>
            </div>
            <div className="wireframe-policy-actions">
              <button className="wireframe-button-small">View</button>
              <button className="wireframe-button-small">Download</button>
            </div>
          </div>
          
          <div className="wireframe-policy-item">
            <div className="wireframe-policy-icon">📄</div>
            <div className="wireframe-policy-content">
              <div className="wireframe-policy-title">Code of Conduct</div>
              <div className="wireframe-policy-description">████████████████████████</div>
              <div className="wireframe-policy-date">Last updated: ████████</div>
            </div>
            <div className="wireframe-policy-actions">
              <button className="wireframe-button-small">View</button>
              <button className="wireframe-button-small">Download</button>
            </div>
          </div>

          <div className="wireframe-policy-item">
            <div className="wireframe-policy-icon">📄</div>
            <div className="wireframe-policy-content">
              <div className="wireframe-policy-title">Leave Policy</div>
              <div className="wireframe-policy-description">████████████████████████</div>
              <div className="wireframe-policy-date">Last updated: ████████</div>
            </div>
            <div className="wireframe-policy-actions">
              <button className="wireframe-button-small">View</button>
              <button className="wireframe-button-small">Download</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewCompanyPolicies;
