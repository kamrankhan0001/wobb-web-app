import React from 'react';

const ProgressBar = ({ progress }) => (
  <div className="w-full bg-gray-200 rounded-full h-2">
    <div
      className="bg-blue-500 h-2 rounded-full"
      style={{ width: `${progress}%` }}
    ></div>
  </div>
);

export default ProgressBar;
