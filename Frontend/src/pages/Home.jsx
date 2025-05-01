import React from "react";
import Navbar from "../Navbar";
import TrainStatus from "../components/TrainStatus";
import Mainmenu from "../Order/Mainmenu";



const Home = ({searchQuery, data, setdata, addAmount, setAddAmount}) => {
  return (
    <>
    <Navbar/>
    <div className="font-sans bg-white text-gray-900" >

      <header className="relative h-screen flex items-center justify-center bg-cover bg-center" style={{  backgroundImage: `url('/logo.jpg')`, border:'10px solid red', overflow: 'hidden'  }}>
        <div className="absolute inset-0 bg-opacity-50 "></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white p-6">
          <h1 className="text-5xl font-bold">Track & Treat </h1>
          <p className="text-lg mt-4">Fast, Fresh, and on Track!</p>
          <button className="mt-6 px-6 py-3 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600">Order Now</button>
        </div>
      </header>

      {/* Location Finder */}
      <section className="py-16 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold">Order From Train</h2>
        <div className="mt-6 flex justify-center">
          <TrainStatus/>
        
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold">Our Menu</h2>
        
        <div  className="bg-white rounded-lg shadow-lg p-6">

          <Mainmenu searchQuery={searchQuery} data={data} setdata={setdata} addAmount={addAmount} setAddAmount={setAddAmount} />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-6">
        <p>&copy; 2025 Track & Treat Co. All Rights Reserved.</p>
      </footer>
    </div>
  </>
  );
};

export default Home;
