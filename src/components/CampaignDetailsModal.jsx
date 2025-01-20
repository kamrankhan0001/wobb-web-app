import React from 'react';

const CampaignDetailsModal = ({ campaign, onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-white w-11/12 md:w-2/3 lg:w-1/2 rounded-lg shadow-lg p-6">
      <button
        className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
        onClick={onClose}
      >
        ✕
      </button>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">{campaign.brand}</h2>
      <img
        src={campaign.image}
        alt={campaign.brand}
        className="w-full h-64 object-cover rounded-lg mb-4"
      />
      <p className="text-gray-600 mb-4">{campaign.description}</p>
      <div className="text-sm text-gray-500 mb-4">
        <p>
          <strong>Payout:</strong> {campaign.payout}
        </p>
        <p>
          <strong>Hired:</strong> {campaign.hired}
        </p>
        <p>
          <strong>Total Slots:</strong> {campaign.totalSlots}
        </p>
      </div>
      <button
        className="bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700"
        onClick={onClose}
      >
        Close
      </button>
    </div>
  </div>
);

export default CampaignDetailsModal;
