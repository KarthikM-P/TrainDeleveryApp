import React from 'react';

const Payment = ({ data, addAmount, finalPrice }) => {
  return (
    <div className="p-6 max-w-xl mx-auto border border-gray-300 rounded-xl shadow-md space-y-4">
      <h2 className="text-2xl font-semibold text-center mb-4">Payment Details</h2>

      <div className="space-y-2">
        {data.map((item) => (
          <div key={item.id} className="flex justify-between items-center p-3 bg-gray-100 rounded-lg shadow-sm">
            {item.availability && (
              <span className="text-lg font-medium text-gray-800">{item.name} - ₹{item.price}</span>
            )}
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center p-3 bg-gray-200 rounded-lg shadow-sm">
        <p className="font-semibold text-gray-700"><strong>Total amount:</strong> ₹{addAmount}</p>
      </div>

      <div className="flex justify-between items-center p-3 bg-gray-200 rounded-lg shadow-sm">
        <p className="font-semibold text-gray-700"><strong>Final Price with GST:</strong> ₹{finalPrice}</p>
      </div>

      <div className="space-y-4 mt-6">
        <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg shadow-sm">
          <div className="flex flex-col items-start">
            <strong className="text-lg">Train Location:</strong>
            <p className="text-gray-500">[Train Location Placeholder]</p>
          </div>
        </div>

        <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg shadow-sm">
          <div className="flex flex-col items-start">
            <strong className="text-lg">Next Station Location:</strong>
            <p className="text-gray-500">[Station Location Placeholder]</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
