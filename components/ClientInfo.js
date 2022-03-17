import React from "react";

const ClientInfo = () => {
  return (
    <div className="flex flex-col items-start gap-2 px-5 min-w-[350px] ">
      <p className="text-sm font-semibold text-gray-400">
        Enter Your Information
      </p>
      <div className="flex items-center justify-between w-full">
        <p className="text-xl font-semibold">Personal Data</p>
      </div>
      <div className="flex flex-col w-full gap-4 pr-20 mt-4 text-sm font-semibold">
        <div className="flex flex-col gap-2 ">
          <label className="text-sm font-semibold text-gray-600" htmlFor="name">
            Your name
          </label>
          <input
            className="w-full px-4 py-2 text-sm font-semibold text-gray-600 border-2 rounded-md  focus:outline-none focus:ring-2 focus:border-0 focus:ring-[#1F86FF]"
            type="text"
            id="name"
            placeholder="Please enter your full name"
          />
        </div>
        <div className="flex flex-col gap-2 ">
          <label
            className="text-sm font-semibold text-gray-600"
            htmlFor="email"
          >
            Your work e-mail address
          </label>
          <input
            className="w-full px-4 py-2 text-sm font-semibold text-gray-600 border-2 rounded-md focus:outline-none focus:ring-2 focus:border-0 focus:ring-[#1F86FF]"
            type="text"
            id="email"
            placeholder="Please enter your e-mail address"
          />
        </div>
        <div className="flex flex-col gap-2 ">
          <label
            className="text-sm font-semibold text-gray-600"
            htmlFor="number"
          >
            Phone number
          </label>
          <input
            className="w-full px-4 py-2 text-sm font-semibold text-gray-600 border-2 rounded-md focus:outline-none focus:ring-2 focus:border-0 focus:ring-[#1F86FF]"
            type="tel"
            id="number"
            placeholder="Please enter phone number"
          />
        </div>
      </div>
    </div>
  );
};

export default ClientInfo;
