import React from "react";

type PropsType = {
  children: React.ReactNode;
};
const PageFrame = ({ children }: PropsType) => {
  return (
    <div className="container px-2">
      <div className="main py-6 overflow-x-hidden">
        <div className="main-body py-4 ">{children}</div>
      </div>
    </div>
  );
};

export default PageFrame;
