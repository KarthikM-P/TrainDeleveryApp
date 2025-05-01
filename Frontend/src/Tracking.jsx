import React from 'react';

const Tracking = ({ sourceStation, destinationStation, trainlocation, trainstatus }) => {
    console.log(trainlocation);

    return (
        <div className="bg-white rounded-lg shadow-lg p-4 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
                <span className="text-sm font-semibold">{sourceStation}</span>
                <span className="text-green-600 font-semibold">{trainlocation}</span>
                <span className="text-sm font-semibold">{destinationStation}</span>
            </div>

            <div className="relative flex flex-col items-center">
                {trainstatus?.map((trainData, index) => (
                    <div key={index} className="relative flex items-center gap-5 p-2 w-full">
                        {/* Time Info */}
                        <div className="flex flex-col items-center text-center">
                            <span className="text-sm text-gray-500">{trainData.actual_arrival_time}</span>
                            <span className="text-sm text-red-500">{trainData.departureTime}</span>
                        </div>

                            {index !== trainstatus.length - 1 && (
                                <div className="absolute top-1/2 left-16 transform -translate-x-1/5 w-2.5 h-full bg-yellow-500 "></div>
                            )}
                        {/* Line & Train Icon Wrapper */}
                        <div className="relative flex flex-col items-center">
                            {/* Yellow Line (Ensuring it Stretches & Visible) */}

                            {/* Train Icon (Ensuring it's Above the Line) */}
                            <div className="relative w-3 h-3 bg-gray-900 text-white rounded-full flex items-center justify-center z-10">
                                <i className="fas fa-train text-xs"></i>
                            </div>
                        </div>

                        {/* Station Details */}
                        <div className="ml-4">
                            <span className="text-sm font-semibold">{trainData.stationName}</span>
                            <p className="text-sm text-gray-500">{trainData.distance} km</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Tracking;
