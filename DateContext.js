import React, { useEffect, useState, useContext } from "react";

const DateContext = React.createContext();

const DateProvider = ({ children }) => {
  const [dateSelectionStatus, setDateSelectionStatus] = useState(false);
  const [clientInfoDone, setClientInfoDone] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [emailId, setEmailId] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [name, setName] = useState("");
  return (
    <DateContext.Provider
      value={{
        selectedDate,
        setSelectedDate,
        selectedTime,
        setSelectedTime,
        dateSelectionStatus,
        setDateSelectionStatus,
        clientInfoDone,
        setClientInfoDone,
        emailId,
        setEmailId,
        phoneNo,
        setPhoneNo,
        name,
        setName,
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
