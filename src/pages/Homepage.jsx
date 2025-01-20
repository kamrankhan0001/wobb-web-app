import React, { useState } from 'react';
import CampaignCard from '../components/CampaignCard';
import brandAImage from '../assets/img1.png'; // Import images for proper bundling
import brandBImage from '../assets/img2.png';
import brandCImage from '../assets/img3.jpg';
import CampaignDetailsModal from '../components/CampaignDetailsModal';

const campaigns = [
  {
    brand: 'addidas',
    image: brandAImage, // Use the imported image
    description: 'Collaborate with addidas to promote their latest product.',
    payout: 'Barter',
    hired: 5,
    totalSlots: 10,
  },
  {
    brand: 'ZARA',
    image: brandBImage, // Use the imported image
    description: 'Join ZARA for a rewarding campaign.',
    payout: 'Fixed Pay',
    hired: 8,
    totalSlots: 15,
  },
  {
    brand: 'G A P',
    image: brandCImage, // Use the imported image
    description: 'Explore G A P’s exciting opportunities.',
    payout: 'Refunds',
    hired: 4,
    totalSlots: 12,
  },
  {
    brand: 'addidas',
    image: brandAImage, // Use the imported image
    description: 'Collaborate with addidas to promote their latest product.',
    payout: 'Barter',
    hired: 5,
    totalSlots: 10,
  },
  {
    brand: 'ZARA',
    image: brandBImage, // Use the imported image
    description: 'Join ZARA for a rewarding campaign.',
    payout: 'Fixed Pay',
    hired: 8,
    totalSlots: 15,
  },
  {
    brand: 'G A P',
    image: brandCImage, // Use the imported image
    description: 'Explore G P A’s exciting opportunities.',
    payout: 'Refunds',
    hired: 4,
    totalSlots: 12,
  },
];

const Homepage = () => {
    const [selectedCampaign, setSelectedCampaign] = useState(null);
  
    const handleViewDetails = (campaign) => {
      setSelectedCampaign(campaign);
    };
  
    const closeDetails = () => {
      setSelectedCampaign(null);
    };
  
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-10">
          Active Campaigns
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {campaigns.map((campaign, index) => (
            <CampaignCard
              key={index}
              campaign={campaign}
              onViewDetails={() => handleViewDetails(campaign)}
            />
          ))}
        </div>
        {/* Modal for Campaign Details */}
        {selectedCampaign && (
          <CampaignDetailsModal
            campaign={selectedCampaign}
            onClose={closeDetails}
          />
        )}
      </div>
    );
  };

export default Homepage;
