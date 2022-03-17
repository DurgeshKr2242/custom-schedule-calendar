import React from "react";

import { useGlobalDateContext } from "../DateContext";

import { MdKeyboardBackspace } from "react-icons/md";

const BottomPane = () => {
  const {
    selectedDate,
    selectedTime,
    dateSelectionStatus,
    setDateSelectionStatus,
  } = useGlobalDateContext();

  return (
    <div className="flex justify-between w-full px-5 py-3 bg-white border-t-2 rounded-b-md border-gray-300/30">
      {!dateSelectionStatus ? (
        <button
          disabled
          onClick={() => setDateSelectionStatus(false)}
          className="flex items-center gap-1 font-[500] bg-[#DEEBFF]/50 px-5 rounded-lg py-2 text-sm text-[#1F86FF]"
        >
          <MdKeyboardBackspace /> Back
        </button>
      ) : (
        <button
          onClick={() => setDateSelectionStatus(false)}
          className="flex items-center gap-1 font-[500] bg-[#DEEBFF] px-5 rounded-lg py-2 text-sm text-[#1F86FF]"
        >
          <MdKeyboardBackspace /> Back
        </button>
      )}

      {!dateSelectionStatus ? (
        selectedDate == "" || selectedTime == "" ? (
          <button
            disabled
            className="bg-[#1F86FF]/50 text-white px-5 rounded-lg py-2 text-sm"
          >
            Next Step
          </button>
        ) : (
          <button
            onClick={() => setDateSelectionStatus(true)}
            className="bg-[#1F86FF] text-white px-5 rounded-lg py-2 text-sm"
          >
            Next Step
          </button>
        )
      ) : (
        <button className="bg-[#1F86FF] text-white px-5 rounded-lg py-2 text-sm">
          Schedule Demo
        </button>
      )}
    </div>
  );
};

export default BottomPane;
