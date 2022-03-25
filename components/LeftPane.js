import React from "react";
import { FcClock } from "react-icons/fc";

import { useGlobalDateContext } from "../DateContext";

const LeftPane = () => {
  const { selectedDate, selectedTime } = useGlobalDateContext();

  return (
    <div className="flex flex-col justify-between px-5 py-8 border-r-2 border-gray-300/30">
      <div className="flex flex-col items-start gap-2">
        <p className="text-sm font-[500] text-gray-400/90">Walkthrough</p>
        <p className="text-xl font-bold">Schedule a Demo</p>
        <p className="flex justify-center items-center gap-1 bg-[#DEEBFF] text-[14px] px-2 py-1 font-semibold rounded-md text-[#1a73e8]">
          <FcClock /> 10-20mins
        </p>
      </div>

      <div className="flex flex-col gap-3">
        {selectedDate && (
          <div className="flex flex-col gap-1">
            <p className="text-xs font-[500] text-gray-400/90 uppercase ">
              Date
            </p>
            <p className="font-semibold">{selectedDate}</p>
          </div>
        )}
        {selectedTime && (
          <div className="flex flex-col gap-1">
            <p className="text-xs font-[500] text-gray-400/90 uppercase ">
              Time
            </p>
            <p className="font-semibold">{selectedTime}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LeftPane;
