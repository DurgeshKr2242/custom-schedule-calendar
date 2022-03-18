import React, { useEffect, useState } from "react";
import { BiChevronRight } from "react-icons/bi";

import { useGlobalDateContext } from "../DateContext";

const displayDaysMap = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

const monthMap = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const displayTime = [
  "9:00",
  "9:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
  "17:30",
  "18:00",
  "18:30",
  "19:00",
  "19:30",
];

// let startTime = 9;
// const endTime = 21;

const Calender = () => {
  const { setSelectedDate, setSelectedTime } = useGlobalDateContext();

  const [month, setMonth] = useState(0);
  const [year, setYear] = useState(0);
  const [firstDayState, setFirstDayState] = useState(0);
  const [selectedDateIndex, setSelectedDateIndex] = useState(null);
  const [selectedTimeIndex, setSelectedTimeIndex] = useState(null);

  const today = new Date();
  const yearVar = today.getFullYear();
  const monthVar = today.getMonth();
  const totalDays = new Date(year, month + 1, 0).getDate();

  useEffect(() => {
    setMonth(monthVar);
    setYear(yearVar);
    setFirstDayState(new Date(yearVar, monthVar, 1).getDay());
    console.log("first day ", firstDayState);
  }, [monthVar, yearVar]);

  useEffect(() => {
    setFirstDayState(new Date(year, month, 1).getDay());
  }, [month, year]);

  const nextHandler = () => {
    if (month < 11) {
      setMonth(month + 1);

      // month++;
    }
    if (month == 11) {
      setYear(year + 1);
      setMonth(0);
    }
  };

  const previousHandler = () => {
    if (month > 0) {
      setMonth(month - 1);
    }
    if (month == 0) {
      setYear(year - 1);
      setMonth(11);
    }
  };

  return (
    <div className="flex flex-col items-start gap-2 px-5 max-h-[340px]">
      <p className="text-sm font-[500] text-gray-400/90">
        Select a date and time
      </p>
      <div className="flex gap-0">
        <div>
          <div className="flex items-center justify-between w-full">
            <p className="text-xl font-semibold">
              {monthMap[month]} {year}
            </p>
            <div className="flex gap-2">
              <BiChevronRight
                className="cursor-pointer bg-[#DEEBFF] text-[#1F86FF]  rounded-md px-1 text-2xl rotate-180"
                onClick={previousHandler}
              />
              <BiChevronRight
                className="cursor-pointer bg-[#DEEBFF] text-[#1F86FF] rounded-md px-1 text-2xl"
                onClick={nextHandler}
              />
            </div>
          </div>

          <div className="flex flex-col max-w-[21rem] mt-6">
            <div className="flex">
              {displayDaysMap.map((day) => {
                return (
                  <p
                    key={day}
                    className="w-12 text-xs font-semibold text-center"
                  >
                    {day}
                  </p>
                );
              })}
            </div>

            <div className="flex flex-wrap mt-4">
              {Array(firstDayState)
                .fill(0)
                .map((_, i) => {
                  return (
                    <p
                      key={i}
                      className="w-12 py-3 text-sm font-semibold text-center align-text-top rounded-md "
                    ></p>
                  );
                })}
              {Array(totalDays)
                .fill()
                .map((_, i) => {
                  return (
                    <p
                      onClick={(e) => {
                        setSelectedDate(
                          `${e.target.textContent} ${monthMap[month]} ${year}`
                        );
                        setSelectedDateIndex(i);
                      }}
                      key={i}
                      className={` w-12 py-3 text-sm font-semibold text-center align-text-top rounded-md cursor-pointer   hover:text-white hover:bg-[#4B82E1] ${
                        selectedDateIndex == i
                          ? "text-white bg-[#4B82E1]"
                          : "text-black/50"
                      }`}
                    >
                      {i + 1}
                    </p>
                  );
                })}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 max-h-[340px] customScrollbar overflow-y-scroll text-[#1F86FF] mt-10 pb-10 px-5">
          {/* <div className="flex flex-col gap-2 max-h-[340px] scrollbar scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-300  overflow-y-scroll text-[#1F86FF] mt-10 pb-10 px-5"> */}
          {displayTime.map((time, i) => {
            return (
              <p
                // onClick={(e) => console.log(e.target.textContent)}
                onClick={(e) => {
                  setSelectedTime(
                    `${e.target.textContent} -
                    ${e.target.textContent.split(":")[0]}:${
                      e.target.textContent.split(":")[1] == "00" ? "15" : "45"
                    }`
                  );
                  setSelectedTimeIndex(i);
                  // console.log(e.target.textContent.split(":")[1]);
                }}
                key={time}
                className={` px-6 py-1 text-sm font-[500] text-center align-text-top border-2 rounded-md cursor-pointer   hover:text-white hover:bg-[#4B82E1] ${
                  selectedTimeIndex == i
                    ? "text-white bg-[#4B82E1]"
                    : "text-[#1F86FF]"
                }`}
              >
                {time}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Calender;
