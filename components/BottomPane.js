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
          disabled
          onClick={() => setDateSelectionStatus(false)}
          className="flex items-center gap-1 font-bold bg-[#DEEBFF]/50 px-7 rounded-[4px] py-2 text-sm text-[#3B82F6]"
        >
          <MdKeyboardBackspace /> Back
        </button>
      ) : (
        <button
          onClick={() => setDateSelectionStatus(false)}
          className="flex items-center gap-1 font-bold bg-[#DEEBFF] px-7 rounded-[4px] py-2 text-sm text-[#3B82F6]"
        >
          <MdKeyboardBackspace /> Back
        </button>
      )}

      {!dateSelectionStatus ? (
        selectedDate == "" || selectedTime == "" ? (
          <button
            disabled
            className="bg-[#3B82F6]/50 font-bold text-white px-7 rounded-[4px] py-2 text-sm"
          >
            Next Step
          </button>
        ) : (
          <button
            onClick={() => setDateSelectionStatus(true)}
            className="bg-[#3B82F6] font-bold text-white px-7 rounded-[4px] py-2 text-sm"
          >
            Next Step
          </button>
        )
      ) : (
        <button
          onClick={() => setClientInfoDone(true)}
          className="bg-[#3B82F6] font-bold text-white px-7 rounded-[4px] py-2 text-sm"
        >
          Schedule Demo
        </button>
      )}
    </div>
  );
};

export default BottomPane;
