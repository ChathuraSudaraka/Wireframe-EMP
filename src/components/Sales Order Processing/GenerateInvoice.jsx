import React from 'react';

const GenerateInvoice = () => {
  return (
    <div className="wireframe-component">
      <div className="wireframe-header">
        <h3>Generate Invoice</h3>
      </div>
      <div className="wireframe-content">
        <div className="wireframe-form-grid">
          <div className="wireframe-form-group">
            <label>Sales Order ID</label>
            <div className="wireframe-select">[SELECT ORDER]</div>
          </div>
          <div className="wireframe-form-group">
            <label>Invoice Type</label>
            <div className="wireframe-select">[STANDARD/PROFORMA/CREDIT]</div>
          </div>
          <div className="wireframe-form-group">
            <label>Invoice Date</label>
            <div className="wireframe-input">[DATE PICKER]</div>
          </div>
          <div className="wireframe-form-group">
            <label>Due Date</label>
            <div className="wireframe-input">[AUTO-CALCULATED]</div>
          </div>
        </div>

        <div className="wireframe-section">
          <h4>Invoice Preview</h4>
          <div className="wireframe-invoice-preview">
            <div className="wireframe-invoice-header">
              <div className="wireframe-company-info">
                <h4>COMPANY NAME</h4>
                <p>123 Business Street<br/>
                City, State 12345<br/>
                Phone: (555) 123-4567</p>
              </div>
              <div className="wireframe-invoice-info">
                <h4>INVOICE</h4>
                <div className="wireframe-info-grid">
                  <div>
                    <label>Invoice #:</label>
                    <span>INV-2024-001234</span>
                  </div>
                  <div>
                    <label>Order #:</label>
                    <span>SO-2024-005678</span>
                  </div>
                  <div>
                    <label>Date:</label>
                    <span>[CURRENT DATE]</span>
                  </div>
                  <div>
                    <label>Due Date:</label>
                    <span>[DUE DATE]</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="wireframe-invoice-customer">
              <h5>Bill To:</h5>
              <div className="wireframe-customer-details">
                <strong>John Doe</strong><br/>
                ABC Corporation<br/>
                123 Main Street, Suite 100<br/>
                New York, NY 10001
              </div>
            </div>

            <div className="wireframe-table">
              <div className="wireframe-table-header">
                <div>Product</div>
                <div>Description</div>
                <div>Qty</div>
                <div>Unit Price</div>
                <div>Total</div>
              </div>
              <div className="wireframe-table-row">
                <div>PROD-001</div>
                <div>Wireless Headphones - Premium Quality</div>
                <div>2</div>
                <div>$89.99</div>
                <div>$179.98</div>
              </div>
              <div className="wireframe-table-row">
                <div>PROD-002</div>
                <div>Bluetooth Speaker - Portable</div>
                <div>1</div>
                <div>$149.99</div>
                <div>$149.99</div>
              </div>
            </div>

            <div className="wireframe-invoice-totals">
              <div className="wireframe-totals-grid">
                <div>
                  <label>Subtotal:</label>
                  <span>$329.97</span>
                </div>
                <div>
                  <label>Tax (8.5%):</label>
                  <span>$28.05</span>
                </div>
                <div>
                  <label>Shipping:</label>
                  <span>$15.00</span>
                </div>
                <div className="wireframe-total-amount">
                  <label>Total Amount:</label>
                  <span>$373.02</span>
                </div>
              </div>
            </div>

            <div className="wireframe-invoice-footer">
              <div className="wireframe-payment-terms">
                <h5>Payment Terms:</h5>
                <p>Net 30 Days - Payment due within 30 days of invoice date</p>
              </div>
              <div className="wireframe-payment-methods">
                <h5>Payment Methods:</h5>
                <p>Bank Transfer, Credit Card, Check</p>
              </div>
            </div>
          </div>
        </div>

        <div className="wireframe-form-grid">
          <div className="wireframe-form-group wireframe-full-width">
            <label>Invoice Notes</label>
            <div className="wireframe-textarea">[ADDITIONAL NOTES OR INSTRUCTIONS]</div>
          </div>
        </div>

        <div className="wireframe-button-group">
          <button className="wireframe-button-primary">Generate Invoice</button>
          <button className="wireframe-button-secondary">Preview PDF</button>
          <button className="wireframe-button-secondary">Email to Customer</button>
          <button className="wireframe-button-secondary">Save as Draft</button>
        </div>
      </div>
    </div>
  );
};

export default GenerateInvoice;
