import { ArchiveX } from 'lucide-react';
import React from "react";
import { useNavigate } from 'react-router-dom';

const Cart = ({ data, setdata, addAmount, setAddAmount, finalPrice }) => {

  const navigate = useNavigate();

  function handlechange(ids, price) {
    setdata(data.map((unique) => (
      ids === unique.id ? { ...unique, availability: !unique.availability } : unique
    )));
    setAddAmount(amounts => amounts - price);
  }

  console.log(`Final Price with GST: ₹${finalPrice}`);

  return (
    <div className='flex items-center justify-center  h-screen w-full'>
        <div className="p-4 max-w-xl mx-auto ">
        <h1 className="text-2xl font-bold mb-4 flex items-center justify-center">Your List</h1>
        {data.map((item) => (
          <div key={item.id}>
            {item.availability && (
              <div className="flex items-center justify-between bg-red-500 text-white p-3 mb-2 rounded-xl shadow-md">
                <div className="flex items-center space-x-4">
                  <h3 className="font-semibold">{item.name}</h3>
                  <p>₹{item.price}</p>
                </div>
                <button onClick={() => handlechange(item.id, item.price)} className="hover:bg-red-700 p-2 rounded-md">
                  <ArchiveX className="w-5 h-5" />
                </button>
              </div>
            )}
          </div>
        ))}

        <div className="flex items-center justify-between gap-6 mt-6 p-3 bg-gray-100 rounded-xl shadow-md">
          <h2 className="text-xl font-bold">Total amount: ₹{addAmount}</h2>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition" onClick={() => navigate('/payment')}>Payment</button>
        </div>
      </div>
    </div>
    
  );
};

export default Cart;
