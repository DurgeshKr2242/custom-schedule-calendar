import React from "react";
import { FaCheck } from "react-icons/fa";
import { useGlobalDateContext } from "../DateContext";

const Success = () => {
  const { selectedDate, selectedTime } = useGlobalDateContext();
  return (
    <div className="flex flex-col items-center gap-2 px-5 min-w-[350px] ">
      <FaCheck />
      <p>We just scheduled a demo for you!</p>
      <p>
        A callender invitation for your upcoming demo session has been sent to
        your email (code.durgesh@gmail.com)
      </p>

      <div className="flex gap-3">
        {selectedDate && (
          <div className="flex flex-col gap-1">
            <p className="text-xs font-[500] text-gray-400/90 uppercase ">
              Date
            </p>
            <p className="font-semibold ">{selectedDate}</p>
          </div>
        )}
        {selectedTime && (
          <div className="flex flex-col gap-1">
            <p className="text-xs font-[500] text-gray-400/90 uppercase ">
              Time
            </p>
            <p className="font-semibold ">{selectedTime}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Success;
