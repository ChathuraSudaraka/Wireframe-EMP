import React from 'react';

const AnalyzeSalesData = () => {
  return (
    <div className="wireframe-component">
      <div className="wireframe-header">
        <h3>Analyze Sales Data</h3>
      </div>
      <div className="wireframe-content">
        <div className="wireframe-form-grid">
          <div className="wireframe-form-group">
            <label>Date Range</label>
            <div className="wireframe-input">[START DATE] - [END DATE]</div>
          </div>
          <div className="wireframe-form-group">
            <label>Sales Representative</label>
            <div className="wireframe-select">[ALL/SPECIFIC REP]</div>
          </div>
          <div className="wireframe-form-group">
            <label>Customer Segment</label>
            <div className="wireframe-select">[ALL/ENTERPRISE/SMB/INDIVIDUAL]</div>
          </div>
          <div className="wireframe-form-group">
            <button className="wireframe-button-primary">Generate Analysis</button>
          </div>
        </div>

        <div className="wireframe-section">
          <h4>Sales Performance Overview</h4>
          <div className="wireframe-stats-grid">
            <div className="wireframe-stat-card">
              <div className="wireframe-stat-number">$2.4M</div>
              <div className="wireframe-stat-label">Total Revenue</div>
              <div className="wireframe-stat-change positive">+15% vs last period</div>
            </div>
            <div className="wireframe-stat-card">
              <div className="wireframe-stat-number">847</div>
              <div className="wireframe-stat-label">Total Deals</div>
              <div className="wireframe-stat-change positive">+8% vs last period</div>
            </div>
            <div className="wireframe-stat-card">
              <div className="wireframe-stat-number">$2,834</div>
              <div className="wireframe-stat-label">Avg Deal Size</div>
              <div className="wireframe-stat-change positive">+12% vs last period</div>
            </div>
            <div className="wireframe-stat-card">
              <div className="wireframe-stat-number">67%</div>
              <div className="wireframe-stat-label">Win Rate</div>
              <div className="wireframe-stat-change negative">-3% vs last period</div>
            </div>
          </div>
        </div>

        <div className="wireframe-section">
          <h4>Sales Trends Chart</h4>
          <div className="wireframe-chart-container">
            <div className="wireframe-chart-header">
              <h5>Monthly Sales Performance</h5>
              <div className="wireframe-chart-controls">
                <button className="wireframe-button-secondary">Revenue</button>
                <button className="wireframe-button-secondary">Deals</button>
                <button className="wireframe-button-secondary">Win Rate</button>
              </div>
            </div>
            <div className="wireframe-chart-placeholder">
              <div className="wireframe-chart-bars">
                <div className="wireframe-bar" style={{height: '60%'}}>Jan</div>
                <div className="wireframe-bar" style={{height: '75%'}}>Feb</div>
                <div className="wireframe-bar" style={{height: '45%'}}>Mar</div>
                <div className="wireframe-bar" style={{height: '80%'}}>Apr</div>
                <div className="wireframe-bar" style={{height: '90%'}}>May</div>
                <div className="wireframe-bar" style={{height: '70%'}}>Jun</div>
              </div>
              <div className="wireframe-chart-labels">
                <span>$0</span>
                <span>$500K</span>
                <span>$1M</span>
                <span>$1.5M</span>
              </div>
            </div>
          </div>
        </div>

        <div className="wireframe-section">
          <h4>Sales Pipeline Analysis</h4>
          <div className="wireframe-pipeline-chart">
            <div className="wireframe-pipeline-stage">
              <h5>Lead</h5>
              <div className="wireframe-stage-count">245</div>
              <div className="wireframe-stage-value">$1.2M</div>
            </div>
            <div className="wireframe-pipeline-arrow">→</div>
            <div className="wireframe-pipeline-stage">
              <h5>Qualified</h5>
              <div className="wireframe-stage-count">156</div>
              <div className="wireframe-stage-value">$890K</div>
            </div>
            <div className="wireframe-pipeline-arrow">→</div>
            <div className="wireframe-pipeline-stage">
              <h5>Proposal</h5>
              <div className="wireframe-stage-count">89</div>
              <div className="wireframe-stage-value">$650K</div>
            </div>
            <div className="wireframe-pipeline-arrow">→</div>
            <div className="wireframe-pipeline-stage">
              <h5>Negotiation</h5>
              <div className="wireframe-stage-count">42</div>
              <div className="wireframe-stage-value">$420K</div>
            </div>
            <div className="wireframe-pipeline-arrow">→</div>
            <div className="wireframe-pipeline-stage">
              <h5>Closed Won</h5>
              <div className="wireframe-stage-count">28</div>
              <div className="wireframe-stage-value">$285K</div>
            </div>
          </div>
        </div>

        <div className="wireframe-section">
          <h4>Top Performing Sales Representatives</h4>
          <div className="wireframe-table">
            <div className="wireframe-table-header">
              <div>Sales Rep</div>
              <div>Total Revenue</div>
              <div>Deals Closed</div>
              <div>Win Rate</div>
              <div>Avg Deal Size</div>
              <div>Performance</div>
            </div>
            <div className="wireframe-table-row">
              <div>Sarah Johnson</div>
              <div>$485,000</div>
              <div>147</div>
              <div>72%</div>
              <div>$3,299</div>
              <div><span className="wireframe-performance-excellent">Excellent</span></div>
            </div>
            <div className="wireframe-table-row">
              <div>Mike Chen</div>
              <div>$412,000</div>
              <div>132</div>
              <div>68%</div>
              <div>$3,121</div>
              <div><span className="wireframe-performance-good">Good</span></div>
            </div>
            <div className="wireframe-table-row">
              <div>John Smith</div>
              <div>$367,000</div>
              <div>89</div>
              <div>65%</div>
              <div>$4,124</div>
              <div><span className="wireframe-performance-good">Good</span></div>
            </div>
            <div className="wireframe-table-row">
              <div>Lisa Brown</div>
              <div>$298,000</div>
              <div>78</div>
              <div>61%</div>
              <div>$3,821</div>
              <div><span className="wireframe-performance-average">Average</span></div>
            </div>
          </div>
        </div>

        <div className="wireframe-section">
          <h4>Customer Acquisition Analysis</h4>
          <div className="wireframe-acquisition-grid">
            <div className="wireframe-acquisition-card">
              <h5>Lead Sources</h5>
              <div className="wireframe-source-list">
                <div className="wireframe-source-item">
                  <span>Website</span>
                  <span>35%</span>
                </div>
                <div className="wireframe-source-item">
                  <span>Referrals</span>
                  <span>28%</span>
                </div>
                <div className="wireframe-source-item">
                  <span>Social Media</span>
                  <span>18%</span>
                </div>
                <div className="wireframe-source-item">
                  <span>Email Campaigns</span>
                  <span>12%</span>
                </div>
                <div className="wireframe-source-item">
                  <span>Trade Shows</span>
                  <span>7%</span>
                </div>
              </div>
            </div>
            <div className="wireframe-acquisition-card">
              <h5>Customer Segments</h5>
              <div className="wireframe-segment-chart">
                <div className="wireframe-segment-item">
                  <div className="wireframe-segment-bar enterprise"></div>
                  <span>Enterprise (45%)</span>
                </div>
                <div className="wireframe-segment-item">
                  <div className="wireframe-segment-bar smb"></div>
                  <span>SMB (35%)</span>
                </div>
                <div className="wireframe-segment-item">
                  <div className="wireframe-segment-bar individual"></div>
                  <span>Individual (20%)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="wireframe-section">
          <h4>Revenue Forecasting</h4>
          <div className="wireframe-forecast-container">
            <div className="wireframe-forecast-chart">
              <h5>Quarterly Revenue Forecast</h5>
              <div className="wireframe-forecast-bars">
                <div className="wireframe-forecast-bar">
                  <div className="wireframe-forecast-actual" style={{height: '80%'}}></div>
                  <div className="wireframe-forecast-projected" style={{height: '90%'}}></div>
                  <span>Q1</span>
                </div>
                <div className="wireframe-forecast-bar">
                  <div className="wireframe-forecast-actual" style={{height: '85%'}}></div>
                  <div className="wireframe-forecast-projected" style={{height: '95%'}}></div>
                  <span>Q2</span>
                </div>
                <div className="wireframe-forecast-bar">
                  <div className="wireframe-forecast-projected" style={{height: '100%'}}></div>
                  <span>Q3</span>
                </div>
                <div className="wireframe-forecast-bar">
                  <div className="wireframe-forecast-projected" style={{height: '105%'}}></div>
                  <span>Q4</span>
                </div>
              </div>
              <div className="wireframe-forecast-legend">
                <div className="wireframe-legend-item">
                  <div className="wireframe-legend-color actual"></div>
                  <span>Actual</span>
                </div>
                <div className="wireframe-legend-item">
                  <div className="wireframe-legend-color projected"></div>
                  <span>Projected</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="wireframe-button-group">
          <button className="wireframe-button-primary">Export Report</button>
          <button className="wireframe-button-secondary">Save Analysis</button>
          <button className="wireframe-button-secondary">Schedule Report</button>
          <button className="wireframe-button-secondary">Share Dashboard</button>
        </div>
      </div>
    </div>
  );
};

export default AnalyzeSalesData;
