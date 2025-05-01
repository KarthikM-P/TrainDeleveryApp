import { useState } from 'react';
import React from "react";
import { Routes, Route } from "react-router-dom";
import pizzamenu from '../db.json';
import Cart from './Order/Cart';
import Home from './pages/Home'
import Payment from './Order/Payment';
const App = () => {
  const [data, setdata] = useState(pizzamenu);
  const [searchQuery] = useState("");
  const [addAmount, setAddAmount] = useState(0)
  const basePrice = addAmount;
  const gstRate = 12;
  function handlePayment(price, gstRate){
    return price * (1 + gstRate / 100)
  }
  const finalPrice = handlePayment(basePrice, gstRate);
  return (
    <>
 
        <Routes>
          <Route path="/" element={<Home searchQuery={searchQuery} data={data} setdata={setdata} addAmount={addAmount} setAddAmount={setAddAmount}/>} />
          <Route path="/cart" element={<Cart  data={data} setdata={setdata} addAmount={addAmount} setAddAmount={setAddAmount} basePrice={basePrice} gst={gstRate} handlePayment={handlePayment} finalPrice={finalPrice} />} />
          <Route path="/payment" element={<Payment  data={data} setdata={setdata} addAmount={addAmount} setAddAmount={setAddAmount} basePrice={basePrice} gst={gstRate} handlePayment={handlePayment} finalPrice={finalPrice} />} />
        </Routes>

      
    </>
  );
};

export default App;
