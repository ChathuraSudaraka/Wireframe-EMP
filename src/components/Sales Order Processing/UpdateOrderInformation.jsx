import React from 'react';

const UpdateOrderInformation = () => {
  return (
    <div className="wireframe-component">
      <div className="wireframe-header">
        <h3>Update Order Information</h3>
      </div>
      <div className="wireframe-content">
        <div className="wireframe-form-grid">
          <div className="wireframe-form-group">
            <label>Order ID</label>
            <div className="wireframe-select">[SELECT ORDER TO EDIT]</div>
          </div>
          <div className="wireframe-form-group">
            <button className="wireframe-button-primary">Load Order</button>
          </div>
        </div>

        <div className="wireframe-section">
          <h4>Order Information</h4>
          <div className="wireframe-form-grid">
            <div className="wireframe-form-group">
              <label>Order ID</label>
              <div className="wireframe-input-readonly">SO-2024-001</div>
            </div>
            <div className="wireframe-form-group">
              <label>Order Date</label>
              <div className="wireframe-input">[EDITABLE DATE]</div>
            </div>
            <div className="wireframe-form-group">
              <label>Customer</label>
              <div className="wireframe-select">[CHANGE CUSTOMER]</div>
            </div>
            <div className="wireframe-form-group">
              <label>Sales Representative</label>
              <div className="wireframe-select">[CHANGE REP]</div>
            </div>
            <div className="wireframe-form-group">
              <label>Order Status</label>
              <div className="wireframe-select">[PENDING/PROCESSING/SHIPPED/DELIVERED/CANCELLED]</div>
            </div>
            <div className="wireframe-form-group">
              <label>Priority</label>
              <div className="wireframe-select">[LOW/NORMAL/HIGH/URGENT]</div>
            </div>
          </div>
        </div>

        <div className="wireframe-section">
          <h4>Customer Information</h4>
          <div className="wireframe-form-grid">
            <div className="wireframe-form-group">
              <label>Customer Name</label>
              <div className="wireframe-input">John Doe</div>
            </div>
            <div className="wireframe-form-group">
              <label>Phone Number</label>
              <div className="wireframe-input">+1 (555) 123-4567</div>
            </div>
            <div className="wireframe-form-group">
              <label>Email Address</label>
              <div className="wireframe-input">john.doe@email.com</div>
            </div>
            <div className="wireframe-form-group">
              <label>Payment Terms</label>
              <div className="wireframe-select">[NET 15/NET 30/COD/PREPAID]</div>
            </div>
          </div>

          <div className="wireframe-form-grid">
            <div className="wireframe-form-group">
              <label>Billing Address</label>
              <div className="wireframe-textarea">
                123 Main Street, Suite 100
                New York, NY 10001
                United States
              </div>
            </div>
            <div className="wireframe-form-group">
              <label>Shipping Address</label>
              <div className="wireframe-textarea">
                456 Corporate Drive
                New York, NY 10002
                United States
              </div>
            </div>
          </div>
        </div>

        <div className="wireframe-section">
          <h4>Product Details</h4>
          <div className="wireframe-table">
            <div className="wireframe-table-header">
              <div>Product Code</div>
              <div>Product Name</div>
              <div>Quantity</div>
              <div>Unit Price</div>
              <div>Discount</div>
              <div>Total</div>
              <div>Action</div>
            </div>
            <div className="wireframe-table-row">
              <div>PROD-001</div>
              <div>
                <div className="wireframe-input">Wireless Headphones</div>
              </div>
              <div>
                <div className="wireframe-input">2</div>
              </div>
              <div>
                <div className="wireframe-input">$89.99</div>
              </div>
              <div>
                <div className="wireframe-input">0%</div>
              </div>
              <div>$179.98</div>
              <div>
                <button className="wireframe-button-secondary">Remove</button>
              </div>
            </div>
            <div className="wireframe-table-row">
              <div>PROD-002</div>
              <div>
                <div className="wireframe-input">Bluetooth Speaker</div>
              </div>
              <div>
                <div className="wireframe-input">1</div>
              </div>
              <div>
                <div className="wireframe-input">$149.99</div>
              </div>
              <div>
                <div className="wireframe-input">5%</div>
              </div>
              <div>$142.49</div>
              <div>
                <button className="wireframe-button-secondary">Remove</button>
              </div>
            </div>
          </div>
          <button className="wireframe-button-secondary">+ Add Product</button>
        </div>

        <div className="wireframe-section">
          <h4>Order Totals</h4>
          <div className="wireframe-form-grid">
            <div className="wireframe-form-group">
              <label>Subtotal</label>
              <div className="wireframe-input-readonly">$322.47</div>
            </div>
            <div className="wireframe-form-group">
              <label>Tax Rate (%)</label>
              <div className="wireframe-input">8.5</div>
            </div>
            <div className="wireframe-form-group">
              <label>Tax Amount</label>
              <div className="wireframe-input-readonly">$27.41</div>
            </div>
            <div className="wireframe-form-group">
              <label>Shipping Cost</label>
              <div className="wireframe-input">15.00</div>
            </div>
            <div className="wireframe-form-group">
              <label>Total Amount</label>
              <div className="wireframe-input-readonly">$364.88</div>
            </div>
            <div className="wireframe-form-group">
              <label>Amount Paid</label>
              <div className="wireframe-input">0.00</div>
            </div>
          </div>
        </div>

        <div className="wireframe-section">
          <h4>Order Notes & Comments</h4>
          <div className="wireframe-form-group wireframe-full-width">
            <label>Internal Notes</label>
            <div className="wireframe-textarea">[INTERNAL NOTES FOR TEAM]</div>
          </div>
          <div className="wireframe-form-group wireframe-full-width">
            <label>Customer Instructions</label>
            <div className="wireframe-textarea">[SPECIAL DELIVERY INSTRUCTIONS]</div>
          </div>
        </div>

        <div className="wireframe-section">
          <h4>Update History</h4>
          <div className="wireframe-update-history">
            <div className="wireframe-history-item">
              <div className="wireframe-history-time">May 17, 2024 - 2:15 PM</div>
              <div className="wireframe-history-user">Updated by: Sarah Johnson</div>
              <div className="wireframe-history-action">Changed order status from "Processing" to "Shipped"</div>
            </div>
            <div className="wireframe-history-item">
              <div className="wireframe-history-time">May 16, 2024 - 10:30 AM</div>
              <div className="wireframe-history-user">Updated by: Mike Chen</div>
              <div className="wireframe-history-action">Added shipping address and updated delivery date</div>
            </div>
            <div className="wireframe-history-item">
              <div className="wireframe-history-time">May 15, 2024 - 10:30 AM</div>
              <div className="wireframe-history-user">Created by: John Smith</div>
              <div className="wireframe-history-action">Order created and confirmed</div>
            </div>
          </div>
        </div>

        <div className="wireframe-button-group">
          <button className="wireframe-button-primary">Save Changes</button>
          <button className="wireframe-button-secondary">Save as Copy</button>
          <button className="wireframe-button-secondary">Cancel Order</button>
          <button className="wireframe-button-secondary">Reset Changes</button>
        </div>
      </div>
    </div>
  );
};

export default UpdateOrderInformation;
