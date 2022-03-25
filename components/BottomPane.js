import React from "react";

import { useGlobalDateContext } from "../DateContext";

import { MdKeyboardBackspace } from "react-icons/md";

const BottomPane = () => {
  const {
    selectedDate,
    selectedTime,
    dateSelectionStatus,
    setDateSelectionStatus,
    setClientInfoDone,
  } = useGlobalDateContext();

  return (
    <div className="flex justify-between w-full px-5 py-3 bg-white border-t-2 rounded-b-md border-gray-300/30">
      {!dateSelectionStatus ? (
        <button
          onClick={() => setDateSelectionStatus(false)}
          disabled
          className="bg-[#1a73e8] flex items-center justify-center gap-1   w-36 disabled:cursor-default disabled:bg-opacity-50  text-sm  text-white px-3 py-2.5 rounded-md transition-all duration-200 ease-in font-bold"
        >
          <MdKeyboardBackspace /> Back
        </button>
      ) : (
        // <button
        //   disabled
        //   onClick={() => setDateSelectionStatus(false)}
        //   className="flex bg-[#1a73e8] items-center gap-1 disabled:cursor-default disabled:bg-opacity-50  text-sm  text-white px-3 py-2.5 rounded-md transition-all duration-200 ease-in font-bold"
        // >
        //   <MdKeyboardBackspace /> Back
        // </button>
        <button
          onClick={() => setDateSelectionStatus(false)}
          className="bg-[#1a73e8] flex items-center justify-center gap-1   w-36 disabled:cursor-default disabled:bg-opacity-50  text-sm  text-white px-3 py-2.5 rounded-md transition-all duration-200 ease-in font-bold"
        >
          <MdKeyboardBackspace /> Back
        </button>

        // <button
        //   onClick={() => setDateSelectionStatus(false)}
        //   className="flex items-center gap-1 font-bold bg-[#DEEBFF] px-7 rounded-[4px] py-2 text-sm text-[#3B82F6]"
        // >
        //   <MdKeyboardBackspace /> Back
        // </button>
      )}

      {!dateSelectionStatus ? (
        selectedDate == "" || selectedTime == "" ? (
          <button
            disabled
            className="bg-[#1a73e8] flex items-center justify-center gap-1   w-36 disabled:cursor-default disabled:bg-opacity-50  text-sm  text-white px-3 py-2.5 rounded-md transition-all duration-200 ease-in font-bold"
          >
            Next Step
          </button>
        ) : (
          // <button
          //   disabled
          //   className="bg-[#3B82F6]/50 font-bold text-white px-7 rounded-[4px] py-2 text-sm"
          // >
          //   Next Step
          // </button>
          <button
            onClick={() => setDateSelectionStatus(true)}
            className="bg-[#1a73e8] flex items-center justify-center gap-1   w-36 disabled:cursor-default disabled:bg-opacity-50  text-sm  text-white px-3 py-2.5 rounded-md transition-all duration-200 ease-in font-bold"
          >
            Next Step
          </button>
          // <button
          //   onClick={() => setDateSelectionStatus(true)}
          //   className="bg-[#3B82F6] font-bold text-white px-7 rounded-[4px] py-2 text-sm"
          // >
          //   Next Step
          // </button>
        )
      ) : (
        <button
          onClick={() => setClientInfoDone(true)}
          className="bg-[#1a73e8] flex items-center justify-center gap-1   w-36 disabled:cursor-default disabled:bg-opacity-50  text-sm  text-white px-3 py-2.5 rounded-md transition-all duration-200 ease-in font-bold"
        >
          Schedule Demo
        </button>

        // <button
        //   onClick={() => setClientInfoDone(true)}
        //   className="bg-[#3B82F6] font-bold text-white px-7 rounded-[4px] py-2 text-sm"
        // >
        //   Schedule Demo
        // </button>
      )}
    </div>
  );
};

export default BottomPane;
