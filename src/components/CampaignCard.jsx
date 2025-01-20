
import React from 'react';
import ProgressBar from './ProgressBar';

const CampaignCard = ({ campaign, onViewDetails }) => (
  <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition hover:scale-105 duration-300">
    {/* Campaign Image */}
    <div className="relative">
      <img
        src={campaign.image}
        alt={campaign.brand}
        className="w-full h-48 object-cover"
      />
      <div className="absolute top-2 left-2 bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded">
        {campaign.payout}
      </div>
    </div>

    {/* Campaign Details */}
    <div className="p-6">
      {/* Brand Name */}
      <h2 className="text-xl font-bold text-gray-800 mb-2">{campaign.brand}</h2>

      {/* Description */}
      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
        {campaign.description}
      </p>

      {/* Vouchers and Available Slots */}
      <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
        <span>
          <strong className="text-gray-800">Vouchers:</strong> Available
        </span>
        <span>
          <strong className="text-gray-800">Slots:</strong>{' '}
          {campaign.totalSlots - campaign.hired} left
        </span>
      </div>

      {/* Hiring Progress */}
      <div className="mb-4">
        <div className="flex justify-between items-center text-sm text-gray-500 mb-1">
          <span>Hired: {campaign.hired}</span>
          <span>Total Slots: {campaign.totalSlots}</span>
        </div>
        <ProgressBar progress={(campaign.hired / campaign.totalSlots) * 100} />
      </div>

      {/* Call to Action */}
      <button
        className="w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700"
        onClick={onViewDetails}
      >
        View Details
      </button>
    </div>
  </div>
);

export default CampaignCard;
