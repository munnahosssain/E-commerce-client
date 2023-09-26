import React from "react";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <div className="min-h-[calc(100vh-88px)]">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Main;
