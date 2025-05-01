import React, { useEffect, useState } from "react";
import { useGetTrainDetailsQuery, useGetLiveTrainStatusQuery } from "../Redux/TrainApi";
import Tracking from "../Tracking";

const TrainStatus = () => {
  const [searchQuery, setSearchQuery] = useState({ trainNumber: "", departureDate: "" });
  const [fetchData, setFetchData] = useState(false);
  

  const { data: trainDetails, error: trainError, isFetching: isFetchingDetails } = useGetTrainDetailsQuery(
    searchQuery.trainNumber, 
    { skip: !fetchData || !searchQuery.trainNumber }
  );
  
  
  const { data: trainstatus, error: statusError, isFetching: isFetchingStatus } = useGetLiveTrainStatusQuery(
    { trainNumber: searchQuery.trainNumber, departureDate: searchQuery.departureDate },
    { skip: !fetchData || !searchQuery.trainNumber || !searchQuery.departureDate }
  );
  const location = trainstatus?.body.train_status_message?.match(/<b>(.*?)<\/b>/);
  const [trainlocation, setTrainLocation] = useState('');
  console.log("Train Location:", trainlocation);


  if (trainstatus?.body?.train_status_message) {
    console.log("Train Status:", trainstatus.body.train_status_message);
  }

  if (trainDetails?.body?.[0]?.trains[0].trainName) {
    console.log("Train Title:", [trainDetails.body[0].trains[0].schedule.map((stationName)=>(
      <h3>{stationName.stationName}</h3>,
      <li>{stationName.arrivalTime}</li>,
      <li>{stationName.departureTime}</li>
    ))]);
  }
  useEffect(() => {
    setTrainLocation( location && location[1]);
  },[location])

  const handleSearch = () => {
    if (searchQuery.trainNumber && searchQuery.departureDate) {
      setFetchData(true);
      
    }
  };
  
  // Example usage:
//   const exampleStation = [trainstatus?.body.stations.map((station)=>(
//     station.stationName
// ))]
      
//       console.log(exampleStation)
  

  
  const sourceStation = trainDetails?.body[0].trains[0].origin;
  const destinationStation = trainDetails?.body[0].trains[0].destination;
  
  
  

  
  return (
    <div className="flex justify-center items-center shadow-2xl rounded-l p-5">
          <div className="p-6 bg-gray-100 rounded-lg border-1 flex flex-col">
          {fetchData === false ?(<div className="flex flex-col">
                <input
                type="text"
                placeholder="Enter Train Number"
                value={searchQuery.trainNumber}
                onChange={(e) => setSearchQuery({ ...searchQuery, trainNumber: e.target.value })}
                className="border p-2 m-2 "
              />
              <input
                type="text"
                placeholder="Enter Date (YYYYMMDD)"
                value={searchQuery.departureDate}
                onChange={(e) => setSearchQuery({ ...searchQuery, departureDate: e.target.value })}
                className="border p-2 m-2 "
              />
              <button onClick={handleSearch} className="bg-blue-500 text-white px-4 py-2 m-2">
                Get Status
              </button>

          </div>):null}
          

        
          {isFetchingDetails && <p className="text-blue-500">Fetching train details...</p>}
          {isFetchingStatus && <p className="text-blue-500">Fetching live train status...</p>}
        

          {trainError && <p className="text-red-500">Error fetching train details.</p>}
          {statusError && <p className="text-red-500">Error fetching live train status.</p>}

         {fetchData === true ? (
           <div className="w-screen p-5">
            <p onClick={()=>{if (searchQuery.trainNumber && searchQuery.departureDate) {
              setFetchData(false);
            }}} className="bg-blue-500 text-white px-4 py-2 m-2">Back</p>
            
            <div className="w-screen mt-2 flex items-center justify-center">
              <Tracking sourceStation={sourceStation} destinationStation={destinationStation} trainlocation={trainlocation} trainstatus={trainstatus?.body.stations}/>
            </div>
          </div>
         ): null} 
        </div>
        {fetchData === false ? (<div>
          <img src="/trainimg.png" alt="" />
        </div>): null}
    </div>
    
  );
};

export default TrainStatus;
