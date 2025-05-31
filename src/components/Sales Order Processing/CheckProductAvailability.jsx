import React from 'react';

const CheckProductAvailability = () => {
  return (
    <div className="wireframe-component">
      <div className="wireframe-header">
        <h3>Check Product Availability</h3>
      </div>
      <div className="wireframe-content">
        <div className="wireframe-form-grid">
          <div className="wireframe-form-group">
            <label>Search Products</label>
            <div className="wireframe-input">[SEARCH BY NAME/CODE/CATEGORY]</div>
          </div>
          <div className="wireframe-form-group">
            <label>Product Category</label>
            <div className="wireframe-select">[SELECT CATEGORY]</div>
          </div>
          <div className="wireframe-form-group">
            <label>Warehouse Location</label>
            <div className="wireframe-select">[SELECT WAREHOUSE]</div>
          </div>
          <div className="wireframe-form-group">
            <label>Required Quantity</label>
            <div className="wireframe-input">[ENTER QUANTITY]</div>
          </div>
        </div>

        <div className="wireframe-button-group">
          <button className="wireframe-button-primary">Search Products</button>
          <button className="wireframe-button-secondary">Reset Filters</button>
        </div>

        <div className="wireframe-section">
          <h4>Product Availability Results</h4>
          <div className="wireframe-table">
            <div className="wireframe-table-header">
              <div>Product Code</div>
              <div>Product Name</div>
              <div>Available Stock</div>
              <div>Reserved</div>
              <div>Unit Price</div>
              <div>Status</div>
              <div>Action</div>
            </div>
            <div className="wireframe-table-row">
              <div>PROD-001</div>
              <div>Wireless Headphones</div>
              <div>25 units</div>
              <div>5 units</div>
              <div>$89.99</div>
              <div><span className="wireframe-status-available">Available</span></div>
              <div>
                <button className="wireframe-button-primary">Add to Order</button>
              </div>
            </div>
            <div className="wireframe-table-row">
              <div>PROD-002</div>
              <div>Bluetooth Speaker</div>
              <div>2 units</div>
              <div>1 unit</div>
              <div>$149.99</div>
              <div><span className="wireframe-status-low">Low Stock</span></div>
              <div>
                <button className="wireframe-button-secondary">Add to Order</button>
              </div>
            </div>
            <div className="wireframe-table-row">
              <div>PROD-003</div>
              <div>Smart Watch</div>
              <div>0 units</div>
              <div>10 units</div>
              <div>$299.99</div>
              <div><span className="wireframe-status-unavailable">Out of Stock</span></div>
              <div>
                <button className="wireframe-button-disabled" disabled>Unavailable</button>
              </div>
            </div>
          </div>
        </div>

        <div className="wireframe-info-box">
          <h4>Stock Information</h4>
          <div className="wireframe-info-grid">
            <div>
              <label>Total Products Found:</label>
              <span>3 items</span>
            </div>
            <div>
              <label>Available Products:</label>
              <span>2 items</span>
            </div>
            <div>
              <label>Out of Stock:</label>
              <span>1 item</span>
            </div>
            <div>
              <label>Last Updated:</label>
              <span>[TIMESTAMP]</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckProductAvailability;
