import React from 'react';
import '../../wireframe.css';

const GenerateSalesReports = ({ onNavigate }) => {
  return (
    <div className="wireframe-container">
      <div className="wireframe-header">
        <h1>Generate Sales Reports</h1>
        <button 
          className="wireframe-back-btn"
          onClick={() => onNavigate('main')}
        >
          ← Back to CRM Dashboard
        </button>
      </div>

      <div className="wireframe-content">
        <div className="wireframe-section">
          <h2>Report Configuration</h2>
          <div className="wireframe-grid">
            <div className="wireframe-form-group">
              <label>Report Type</label>
              <select className="wireframe-select">
                <option>Sales Performance Report</option>
                <option>Customer Analysis Report</option>
                <option>Revenue Analysis Report</option>
                <option>Lead Conversion Report</option>
                <option>Activity Summary Report</option>
                <option>Territory Performance Report</option>
              </select>
            </div>
            <div className="wireframe-form-group">
              <label>Date Range</label>
              <select className="wireframe-select">
                <option>Last 30 Days</option>
                <option>Last Quarter</option>
                <option>Last 6 Months</option>
                <option>Last Year</option>
                <option>Custom Range</option>
              </select>
            </div>
            <div className="wireframe-form-group">
              <label>From Date</label>
              <input type="date" className="wireframe-input" />
            </div>
            <div className="wireframe-form-group">
              <label>To Date</label>
              <input type="date" className="wireframe-input" />
            </div>
          </div>
        </div>

        <div className="wireframe-section">
          <h2>Filter Options</h2>
          <div className="wireframe-grid">
            <div className="wireframe-form-group">
              <label>Sales Representative</label>
              <select className="wireframe-select">
                <option>All Representatives</option>
                <option>John Smith</option>
                <option>Sarah Johnson</option>
                <option>Mike Davis</option>
                <option>Emily Wilson</option>
              </select>
            </div>
            <div className="wireframe-form-group">
              <label>Customer Segment</label>
              <select className="wireframe-select">
                <option>All Segments</option>
                <option>Enterprise</option>
                <option>Small Business</option>
                <option>Individual</option>
                <option>Government</option>
              </select>
            </div>
            <div className="wireframe-form-group">
              <label>Product Category</label>
              <select className="wireframe-select">
                <option>All Categories</option>
                <option>Software</option>
                <option>Hardware</option>
                <option>Services</option>
                <option>Consulting</option>
              </select>
            </div>
            <div className="wireframe-form-group">
              <label>Territory</label>
              <select className="wireframe-select">
                <option>All Territories</option>
                <option>North America</option>
                <option>Europe</option>
                <option>Asia Pacific</option>
                <option>Latin America</option>
              </select>
            </div>
          </div>
        </div>

        <div className="wireframe-section">
          <h2>Report Format & Delivery</h2>
          <div className="wireframe-grid">
            <div className="wireframe-form-group">
              <label>Output Format</label>
              <div className="wireframe-radio-group">
                <label className="wireframe-radio">
                  <input type="radio" name="format" defaultChecked />
                  PDF Report
                </label>
                <label className="wireframe-radio">
                  <input type="radio" name="format" />
                  Excel Spreadsheet
                </label>
                <label className="wireframe-radio">
                  <input type="radio" name="format" />
                  CSV Data Export
                </label>
                <label className="wireframe-radio">
                  <input type="radio" name="format" />
                  PowerPoint Presentation
                </label>
              </div>
            </div>
            <div className="wireframe-form-group">
              <label>Delivery Method</label>
              <div className="wireframe-checkbox-group">
                <label className="wireframe-checkbox">
                  <input type="checkbox" defaultChecked />
                  Download Now
                </label>
                <label className="wireframe-checkbox">
                  <input type="checkbox" />
                  Email to Recipients
                </label>
                <label className="wireframe-checkbox">
                  <input type="checkbox" />
                  Schedule Recurring
                </label>
                <label className="wireframe-checkbox">
                  <input type="checkbox" />
                  Save to Dashboard
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="wireframe-section">
          <h2>Report Preview</h2>
          <div className="sales-report-preview">
            <div className="report-header">
              <h3>Sales Performance Report</h3>
              <p>Generated: Current Date | Period: Last 30 Days</p>
            </div>
            
            <div className="report-metrics">
              <div className="metric-card">
                <h4>Total Revenue</h4>
                <span className="metric-value">$245,680</span>
                <span className="metric-change positive">+12.5%</span>
              </div>
              <div className="metric-card">
                <h4>New Customers</h4>
                <span className="metric-value">47</span>
                <span className="metric-change positive">+8.2%</span>
              </div>
              <div className="metric-card">
                <h4>Conversion Rate</h4>
                <span className="metric-value">23.5%</span>
                <span className="metric-change negative">-2.1%</span>
              </div>
              <div className="metric-card">
                <h4>Avg Deal Size</h4>
                <span className="metric-value">$5,227</span>
                <span className="metric-change positive">+5.7%</span>
              </div>
            </div>

            <div className="report-chart">
              <h4>Revenue Trend</h4>
              <div className="chart-placeholder">
                [Sales Chart - Line Graph]
              </div>
            </div>

            <div className="report-table">
              <h4>Top Performers</h4>
              <table className="wireframe-table">
                <thead>
                  <tr>
                    <th>Representative</th>
                    <th>Revenue</th>
                    <th>Deals Closed</th>
                    <th>Conversion %</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>John Smith</td>
                    <td>$67,450</td>
                    <td>12</td>
                    <td>28.5%</td>
                  </tr>
                  <tr>
                    <td>Sarah Johnson</td>
                    <td>$54,220</td>
                    <td>9</td>
                    <td>25.2%</td>
                  </tr>
                  <tr>
                    <td>Mike Davis</td>
                    <td>$48,890</td>
                    <td>11</td>
                    <td>22.1%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="wireframe-section">
          <h2>Email Recipients</h2>
          <div className="wireframe-form-group">
            <label>Send Report To</label>
            <div className="recipient-list">
              <div className="recipient-item">
                <span>manager@company.com</span>
                <button className="wireframe-btn-small">Remove</button>
              </div>
              <div className="recipient-item">
                <span>director@company.com</span>
                <button className="wireframe-btn-small">Remove</button>
              </div>
              <div className="add-recipient">
                <input type="email" placeholder="Add email address" className="wireframe-input" />
                <button className="wireframe-btn-small">Add</button>
              </div>
            </div>
          </div>
        </div>

        <div className="wireframe-actions">
          <button className="wireframe-btn-primary">Generate Report</button>
          <button className="wireframe-btn-secondary">Preview Full Report</button>
          <button className="wireframe-btn-secondary">Save Configuration</button>
          <button className="wireframe-btn-outline">Schedule Report</button>
        </div>
      </div>
    </div>
  );
};

export default GenerateSalesReports;
