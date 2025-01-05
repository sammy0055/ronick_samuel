import { useState } from "react";

const UserDataDeletion = () => {
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);

  const handleDeleteData = () => {
    setIsProcessing(true);

    // Simulate API call to delete user data
    setTimeout(() => {
      setIsProcessing(false);
      setIsDeleted(true);
    }, 2000);
  };

  const handleConfirm = () => {
    setIsConfirmed(true);
  };

  const handleCancel = () => {
    setIsConfirmed(false);
  };

  return (
    <div className="user-data-deletion">
      <h2>User Data Deletion Instructions</h2>
      <p>
        At Genesis, we are committed to protecting your privacy. If you wish to
        delete your personal data or deactivate your account, please follow the
        instructions below.
      </p>

      <h3>How to Delete Your Data</h3>
      <ol>
        <li>Log in to your account.</li>
        <li>
          Navigate to the settings section by clicking on your profile icon.
        </li>
        <li>Select "Privacy Settings."</li>
        <li>Click on "Delete Account" or "Delete My Data."</li>
        <li>Verify your identity (if prompted).</li>
        <li>Confirm the deletion of your data.</li>
      </ol>

      <h3>Important Notes:</h3>
      <ul>
        <li>Data deletion is permanent and cannot be undone.</li>
        <li>
          If you wish to keep any data, make sure to back it up before
          proceeding.
        </li>
      </ul>

      <h3>Would you like to delete your data?</h3>
      {!isConfirmed ? (
        <div>
          <button onClick={handleConfirm}>Yes, I want to delete my data</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      ) : (
        <div>
          <p>
            Are you sure you want to permanently delete your data? This action
            cannot be undone.
          </p>
          <button onClick={handleDeleteData}>Confirm Deletion</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      )}

      {isProcessing && <p>Processing your data deletion request...</p>}
      {isDeleted && (
        <p>
          Your data has been successfully deleted. If you need assistance,
          please contact support.
        </p>
      )}
    </div>
  );
};

export default UserDataDeletion;
