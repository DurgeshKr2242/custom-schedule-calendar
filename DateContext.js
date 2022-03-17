import React, { useEffect, useState, useContext } from "react";

const DateContext = React.createContext();

const DateProvider = ({ children }) => {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [dateSelectionStatus, setDateSelectionStatus] = useState(false);

  return (
    <DateContext.Provider
      value={{
        selectedDate,
        setSelectedDate,
        selectedTime,
        setSelectedTime,
        dateSelectionStatus,
        setDateSelectionStatus,
      }}
    >
      {children}
    </DateContext.Provider>
  );
};

export const useGlobalDateContext = () => {
  return useContext(DateContext);
};

export { DateContext, DateProvider };
