import React, { useState } from 'react';

const CollectRequiredDocuments = () => {
  const [documents, setDocuments] = useState([
    { id: 1, name: 'Resume/CV', required: true, uploaded: false, file: null },
    { id: 2, name: 'Photo ID (Passport/Driver\'s License)', required: true, uploaded: false, file: null },
    { id: 3, name: 'Social Security Card', required: true, uploaded: false, file: null },
    { id: 4, name: 'Educational Certificates', required: true, uploaded: false, file: null },
    { id: 5, name: 'Previous Employment Letters', required: false, uploaded: false, file: null },
    { id: 6, name: 'Bank Account Details', required: true, uploaded: false, file: null },
    { id: 7, name: 'Emergency Contact Information', required: true, uploaded: false, file: null },
    { id: 8, name: 'Tax Forms (W-4)', required: true, uploaded: false, file: null },
    { id: 9, name: 'Medical Certificates', required: false, uploaded: false, file: null },
    { id: 10, name: 'Background Check Authorization', required: true, uploaded: false, file: null }
  ]);

  const handleFileUpload = (docId, event) => {
    const file = event.target.files[0];
    setDocuments(prev => prev.map(doc => 
      doc.id === docId 
        ? { ...doc, uploaded: !!file, file: file } 
        : doc
    ));
  };

  const getUploadProgress = () => {
    const requiredDocs = documents.filter(doc => doc.required);
    const uploadedRequired = requiredDocs.filter(doc => doc.uploaded);
    return {
      completed: uploadedRequired.length,
      total: requiredDocs.length,
      percentage: Math.round((uploadedRequired.length / requiredDocs.length) * 100)
    };
  };

  const progress = getUploadProgress();

  return (
    <div className="wireframe-component">
      <div className="wireframe-header">
        <h3>📋 Collect Required Documents</h3>
        <div className="wireframe-subtitle">Upload necessary documents for employee onboarding</div>
      </div>
      
      <div className="wireframe-content">
        {/* Progress Section */}
        <div className="wireframe-section">
          <h4>Upload Progress</h4>
          <div className="wireframe-progress-bar">
            <div className="wireframe-progress-fill" style={{width: `${progress.percentage}%`}}></div>
          </div>
          <div className="wireframe-progress-text">
            {progress.completed} of {progress.total} required documents uploaded ({progress.percentage}%)
          </div>
        </div>

        {/* Instructions */}
        <div className="wireframe-section">
          <div className="wireframe-alert wireframe-alert-info">
            <strong>📌 Important Instructions:</strong>
            <ul>
              <li>All required documents must be uploaded before proceeding</li>
              <li>Accepted formats: PDF, JPG, PNG (Max 5MB per file)</li>
              <li>Ensure all documents are clearly readable</li>
              <li>Optional documents can be uploaded later through the employee portal</li>
            </ul>
          </div>
        </div>

        {/* Document List */}
        <div className="wireframe-section">
          <h4>Document Checklist</h4>
          <div className="wireframe-document-list">
            {documents.map(doc => (
              <div key={doc.id} className={`wireframe-document-item ${doc.uploaded ? 'uploaded' : ''}`}>
                <div className="wireframe-document-info">
                  <div className="wireframe-document-name">
                    {doc.name}
                    {doc.required && <span className="wireframe-required">*Required</span>}
                  </div>
                  <div className="wireframe-document-status">
                    {doc.uploaded ? (
                      <span className="wireframe-status-success">✅ Uploaded</span>
                    ) : (
                      <span className="wireframe-status-pending">⏳ Pending</span>
                    )}
                  </div>
                </div>
                <div className="wireframe-document-actions">
                  <input
                    type="file"
                    id={`file-${doc.id}`}
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={(e) => handleFileUpload(doc.id, e)}
                    style={{ display: 'none' }}
                  />
                  <label htmlFor={`file-${doc.id}`} className="wireframe-button wireframe-button-secondary">
                    {doc.uploaded ? 'Replace File' : 'Upload File'}
                  </label>
                  {doc.uploaded && (
                    <button className="wireframe-button wireframe-button-outline">
                      View
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="wireframe-actions">
          <button className="wireframe-button wireframe-button-secondary">
            Save Draft
          </button>
          <button 
            className={`wireframe-button wireframe-button-primary ${progress.percentage < 100 ? 'disabled' : ''}`}
            disabled={progress.percentage < 100}
          >
            Submit Documents
          </button>
        </div>

        {/* Help Section */}
        <div className="wireframe-section">
          <details className="wireframe-collapsible">
            <summary>❓ Need Help?</summary>
            <div className="wireframe-help-content">
              <p><strong>Having trouble uploading documents?</strong></p>
              <ul>
                <li>Contact HR at hr@company.com</li>
                <li>Call: (555) 123-4567</li>
                <li>Visit: Human Resources Office - Floor 2</li>
              </ul>
            </div>
          </details>
        </div>
      </div>
    </div>
  );
};

export default CollectRequiredDocuments;