import React, { useState } from 'react';
import '../../wireframe.css';
import CreateNewSalesOrder from './CreateNewSalesOrder';
import CheckProductAvailability from './CheckProductAvailability';
import ConfirmCustomerDetails from './ConfirmCustomerDetails';
import GenerateInvoice from './GenerateInvoice';
import TrackOrderStatus from './TrackOrderStatus';
import UpdateOrderInformation from './UpdateOrderInformation';

const SalesOrderProcessing = () => {
  const [activeTab, setActiveTab] = useState('create');

  const tabs = [
    { id: 'create', label: 'Create New Sales Order', component: CreateNewSalesOrder },
    { id: 'availability', label: 'Check Product Availability', component: CheckProductAvailability },
    { id: 'customer', label: 'Confirm Customer Details', component: ConfirmCustomerDetails },
    { id: 'invoice', label: 'Generate Invoice', component: GenerateInvoice },
    { id: 'track', label: 'Track Order Status', component: TrackOrderStatus },
    { id: 'update', label: 'Update Order Information', component: UpdateOrderInformation }
  ];

  const ActiveComponent = tabs.find(tab => tab.id === activeTab)?.component;

  return (
    <div className="wireframe-container">
      <div className="wireframe-header">
        <h1>Sales Order Processing</h1>
        <p>Manage sales orders from creation to delivery - complete order lifecycle management</p>
      </div>

      <div className="wireframe-navigation">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`wireframe-nav-item ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="wireframe-content">
        {ActiveComponent && <ActiveComponent />}
      </div>
    </div>
  );
};

export default SalesOrderProcessing;
