import React from 'react';

const TrackOrderStatus = () => {
  return (
    <div className="wireframe-component">
      <div className="wireframe-header">
        <h3>Track Order Status</h3>
      </div>
      <div className="wireframe-content">
        <div className="wireframe-form-grid">
          <div className="wireframe-form-group">
            <label>Order ID</label>
            <div className="wireframe-input">[ENTER ORDER ID]</div>
          </div>
          <div className="wireframe-form-group">
            <label>Customer Name</label>
            <div className="wireframe-input">[SEARCH BY CUSTOMER]</div>
          </div>
          <div className="wireframe-form-group">
            <label>Date Range</label>
            <div className="wireframe-input">[FROM DATE] - [TO DATE]</div>
          </div>
          <div className="wireframe-form-group">
            <label>Order Status</label>
            <div className="wireframe-select">[ALL/PENDING/PROCESSING/SHIPPED/DELIVERED]</div>
          </div>
        </div>

        <div className="wireframe-button-group">
          <button className="wireframe-button-primary">Search Orders</button>
          <button className="wireframe-button-secondary">Reset Filters</button>
        </div>

        <div className="wireframe-section">
          <h4>Order Status Results</h4>
          <div className="wireframe-table">
            <div className="wireframe-table-header">
              <div>Order ID</div>
              <div>Customer</div>
              <div>Order Date</div>
              <div>Total Amount</div>
              <div>Status</div>
              <div>Expected Delivery</div>
              <div>Action</div>
            </div>
            <div className="wireframe-table-row">
              <div>SO-2024-001</div>
              <div>John Doe</div>
              <div>2024-05-15</div>
              <div>$373.02</div>
              <div><span className="wireframe-status-shipped">Shipped</span></div>
              <div>2024-05-20</div>
              <div>
                <button className="wireframe-button-secondary">View Details</button>
              </div>
            </div>
            <div className="wireframe-table-row">
              <div>SO-2024-002</div>
              <div>Jane Smith</div>
              <div>2024-05-16</div>
              <div>$1,250.00</div>
              <div><span className="wireframe-status-processing">Processing</span></div>
              <div>2024-05-22</div>
              <div>
                <button className="wireframe-button-secondary">View Details</button>
              </div>
            </div>
            <div className="wireframe-table-row">
              <div>SO-2024-003</div>
              <div>Bob Johnson</div>
              <div>2024-05-17</div>
              <div>$89.99</div>
              <div><span className="wireframe-status-pending">Pending</span></div>
              <div>2024-05-25</div>
              <div>
                <button className="wireframe-button-secondary">View Details</button>
              </div>
            </div>
          </div>
        </div>

        <div className="wireframe-section">
          <h4>Detailed Order Tracking</h4>
          <div className="wireframe-order-tracking">
            <div className="wireframe-tracking-header">
              <h5>Order #SO-2024-001 - Tracking Details</h5>
            </div>
            
            <div className="wireframe-tracking-timeline">
              <div className="wireframe-tracking-step completed">
                <div className="wireframe-step-indicator">✓</div>
                <div className="wireframe-step-content">
                  <h6>Order Placed</h6>
                  <p>May 15, 2024 - 10:30 AM</p>
                  <p>Order confirmed and payment processed</p>
                </div>
              </div>
              
              <div className="wireframe-tracking-step completed">
                <div className="wireframe-step-indicator">✓</div>
                <div className="wireframe-step-content">
                  <h6>Order Processing</h6>
                  <p>May 15, 2024 - 2:15 PM</p>
                  <p>Items picked and prepared for shipping</p>
                </div>
              </div>
              
              <div className="wireframe-tracking-step completed">
                <div className="wireframe-step-indicator">✓</div>
                <div className="wireframe-step-content">
                  <h6>Shipped</h6>
                  <p>May 16, 2024 - 9:00 AM</p>
                  <p>Package shipped via FedEx - Tracking #1234567890</p>
                </div>
              </div>
              
              <div className="wireframe-tracking-step current">
                <div className="wireframe-step-indicator">●</div>
                <div className="wireframe-step-content">
                  <h6>In Transit</h6>
                  <p>May 17, 2024 - 1:45 PM</p>
                  <p>Package is on the way to delivery location</p>
                </div>
              </div>
              
              <div className="wireframe-tracking-step pending">
                <div className="wireframe-step-indicator">○</div>
                <div className="wireframe-step-content">
                  <h6>Out for Delivery</h6>
                  <p>Expected: May 20, 2024</p>
                  <p>Package will be delivered today</p>
                </div>
              </div>
              
              <div className="wireframe-tracking-step pending">
                <div className="wireframe-step-indicator">○</div>
                <div className="wireframe-step-content">
                  <h6>Delivered</h6>
                  <p>Expected: May 20, 2024</p>
                  <p>Package delivered to recipient</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="wireframe-button-group">
          <button className="wireframe-button-primary">Refresh Status</button>
          <button className="wireframe-button-secondary">Export Report</button>
          <button className="wireframe-button-secondary">Send Update to Customer</button>
        </div>
      </div>
    </div>
  );
};

export default TrackOrderStatus;
