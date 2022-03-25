import React, { useEffect, useState } from "react";
import { useGlobalDateContext } from "../DateContext";
import { FaCheck } from "react-icons/fa";
import Input from "./common/Input";
const ClientInfo = () => {
  const {
    emailId,
    setEmailId,
    clientInfoDone,
    setClientInfoDone,
    phoneNo,
    setPhoneNo,
    name,
    setName,
  } = useGlobalDateContext();

  const [validEmail, setValidEmail] = useState(null);
  const [validPhone, setValidPhone] = useState(null);

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  const validatePhone = (phone) => {
    return String(phone)
      .toLowerCase()
      .match(
        /^((\+|0{0,2})([0-9]){1,3})?[-.●\s]?\(?([0-9]{2,3})\)?[-.●\s]?([0-9]{3})[-.●\s]?([0-9]{4})$/
      );
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setValidEmail(validateEmail(emailId));
    }, 1000);
    return () => clearTimeout(timeout);
  }, [emailId]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setValidPhone(validatePhone(phoneNo));
    }, 1000);
    return () => clearTimeout(timeout);
  }, [phoneNo]);

  return (
    <div className="flex flex-col items-start gap-2 px-5 min-w-[350px] ">
      <p className="text-sm font-semibold text-gray-400">
        Enter Your Information
      </p>
      <div className="flex items-center justify-between w-full">
        <p className="text-xl font-semibold">Personal Data</p>
      </div>
      <div className="flex flex-col w-full gap-4 pr-20 mt-4 text-sm font-semibold">
        <div className="relative flex flex-col gap-2">
          <Input
            label="Your Full Name"
            name="name"
            handleChange={(e) => setName(e.target.value)}
            value={name}
            required
            placeholder="Enter Your Full Name"
            type="text"
          />
          {/* <label className="text-sm font-semibold text-gray-600" htmlFor="name">
            Your Full Name
          </label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 text-sm font-semibold text-gray-600 border-2 rounded-md  focus:outline-none focus:ring-2 focus:border-0 focus:ring-[#1F86FF]"
            type="text"
            id="name"
            placeholder="Enter Your Full Name"
          /> */}
          {name.length > 4 && (
            <div className="rounded-full bg-[#DEEBFF]/70 text-green-500 p-1 absolute right-2 top-[55%] text-xs">
              <FaCheck />
            </div>
          )}
        </div>
        <div className="relative flex flex-col gap-2 ">
          <Input
            label="Your Email Address"
            name="email"
            handleChange={(e) => setEmailId(e.target.value)}
            value={emailId}
            required
            placeholder="Enter Your Email Address"
            type="email"
          />
          {/* <label
            className="text-sm font-semibold text-gray-600"
            htmlFor="email"
          >
            Your Email Address
          </label>
          <input
            value={emailId}
            onChange={(e) => setEmailId(e.target.value)}
            className="w-full px-4 py-2 text-sm font-semibold text-gray-600 border-2 rounded-md focus:outline-none focus:ring-2 focus:border-0 focus:ring-[#1F86FF]"
            type="text"
            id="email"
            placeholder="Enter Your Email Address"
          /> */}
          {validEmail && (
            <div className="rounded-full bg-[#DEEBFF]/70 text-green-500 p-1 absolute right-2 top-[55%] text-xs">
              <FaCheck />
            </div>
          )}
        </div>
        <div className="relative flex flex-col gap-2 ">
          <Input
            label="Phone Number"
            name="phone"
            handleChange={(e) => setPhoneNo(e.target.value)}
            value={phoneNo}
            required
            placeholder="Enter Your Phone Number"
            type="tel"
          />
          {/* <label
            className="text-sm font-semibold text-gray-600"
            htmlFor="number"
          >
            Password
          </label>
          <input
            value={phoneNo}
            onChange={(e) => setPhoneNo(e.target.value)}
            className="w-full px-4 py-2 text-sm font-semibold text-gray-600 border-2 rounded-md focus:outline-none focus:ring-2 focus:border-0 focus:ring-[#1F86FF]"
            type="tel"
            id="number"
            placeholder="Enter Password"
          /> */}
          {validPhone && (
            <div className="rounded-full bg-[#DEEBFF]/70 text-green-500 p-1 absolute right-2 top-[55%] text-xs">
              <FaCheck />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ClientInfo;
