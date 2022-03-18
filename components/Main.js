import React from "react";
import BottomPane from "./BottomPane";
import LeftPane from "./LeftPane";
import RightPane from "./RightPane";
import Success from "./Success";
import { useGlobalDateContext } from "../DateContext";
const Main = () => {
  const { dateSelectionStatus, clientInfoDone } = useGlobalDateContext();
  return !clientInfoDone ? (
    <div className="flex flex-col rounded-md shadow-xl mainContainerShadow">
      <div className="flex">
        <LeftPane />
        <RightPane />
      </div>
      <BottomPane />
    </div>
  ) : (
    <div className="flex flex-col rounded-md shadow-xl mainContainerShadow max-w-[679px]">
      <Success />
    </div>
  );
};

export default Main;
