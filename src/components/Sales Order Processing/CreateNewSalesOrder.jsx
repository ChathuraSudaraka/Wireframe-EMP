import React from 'react';

const CreateNewSalesOrder = () => {
  return (
    <div className="wireframe-component">
      <div className="wireframe-header">
        <h3>Create New Sales Order</h3>
      </div>
      <div className="wireframe-content">
        <div className="wireframe-form-grid">
          <div className="wireframe-form-group">
            <label>Order ID</label>
            <div className="wireframe-input">AUTO-GENERATED</div>
          </div>
          <div className="wireframe-form-group">
            <label>Customer Name</label>
            <div className="wireframe-input">[CUSTOMER NAME]</div>
          </div>
          <div className="wireframe-form-group">
            <label>Order Date</label>
            <div className="wireframe-input">[DATE PICKER]</div>
          </div>
          <div className="wireframe-form-group">
            <label>Sales Representative</label>
            <div className="wireframe-input">[CURRENT USER]</div>
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
              <div>Total</div>
              <div>Action</div>
            </div>
            <div className="wireframe-table-row">
              <div>[PRODUCT-001]</div>
              <div>[PRODUCT NAME]</div>
              <div>[QTY]</div>
              <div>[$PRICE]</div>
              <div>[$TOTAL]</div>
              <div>
                <button className="wireframe-button-secondary">Remove</button>
              </div>
            </div>
            <div className="wireframe-table-row">
              <div>[PRODUCT-002]</div>
              <div>[PRODUCT NAME]</div>
              <div>[QTY]</div>
              <div>[$PRICE]</div>
              <div>[$TOTAL]</div>
              <div>
                <button className="wireframe-button-secondary">Remove</button>
              </div>
            </div>
          </div>
          <button className="wireframe-button-secondary">+ Add Product</button>
        </div>

        <div className="wireframe-form-grid">
          <div className="wireframe-form-group">
            <label>Subtotal</label>
            <div className="wireframe-input">$[SUBTOTAL]</div>
          </div>
          <div className="wireframe-form-group">
            <label>Tax Amount</label>
            <div className="wireframe-input">$[TAX]</div>
          </div>
          <div className="wireframe-form-group">
            <label>Total Amount</label>
            <div className="wireframe-input">$[TOTAL]</div>
          </div>
          <div className="wireframe-form-group">
            <label>Payment Terms</label>
            <div className="wireframe-select">[SELECT TERMS]</div>
          </div>
        </div>

        <div className="wireframe-button-group">
          <button className="wireframe-button-primary">Create Order</button>
          <button className="wireframe-button-secondary">Save as Draft</button>
          <button className="wireframe-button-secondary">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default CreateNewSalesOrder;
