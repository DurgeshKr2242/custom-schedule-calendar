import React from "react";
import BottomPane from "./BottomPane";
import LeftPane from "./LeftPane";
import RightPane from "./RightPane";

const Main = () => {
  return (
    <div className="flex flex-col rounded-md shadow-xl mainContainerShadow">
      <div className="flex">
        <LeftPane />
        <RightPane />
      </div>
      <BottomPane />
    </div>
  );
};

export default Main;
