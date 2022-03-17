import React from "react";

import { BiChevronRight } from "react-icons/bi";
import Calender from "./Calender";
import ClientInfo from "./ClientInfo";
import { useGlobalDateContext } from "../DateContext";

const RightPane = () => {
  const { dateSelectionStatus } = useGlobalDateContext();

  return (
    <div className="py-8 min-w-[498px] min-h-[408px]">
      {!dateSelectionStatus ? <Calender /> : <ClientInfo />}
    </div>
  );
};

export default RightPane;
