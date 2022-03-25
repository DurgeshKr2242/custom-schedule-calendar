import React from "react";
import { FaCheck } from "react-icons/fa";
import { useGlobalDateContext } from "../DateContext";

const Success = () => {
  const { selectedDate, selectedTime, emailId } = useGlobalDateContext();
  return (
    <div className="flex flex-col items-center justify-center gap-8 py-8 min-w-[498px] min-h-[408px] h-full">
      <div className="rounded-full bg-[#DEEBFF] text-[#1a73e8] p-3 text-lg">
        <FaCheck />
      </div>
      <div className="flex flex-col items-center justify-center w-full gap-3">
        <p className="text-xl font-bold">We just scheduled a demo for you!</p>
        <p className="text-xs font-[500] text-gray-400/90 px-40 text-center">
          A callender invitation for your upcoming demo session has been sent to
          your email{" "}
          <span className="font-semibold text-gray-500">({emailId})</span>
        </p>
      </div>

      <div className="flex justify-between w-full px-48 ">
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

      <div className="flex flex-col gap-2">
        <button className="bg-[#1a73e8] text-white px-5 rounded-lg py-2 text-sm font-[500]">
          Get Back Home
        </button>
        <button className="text-[#1a73e8] px-5 rounded-lg py-2 text-sm font-[500]">
          Resend Email
        </button>
      </div>
    </div>
  );
};

export default Success;
