import React from "react";

type PropsType = {
  title: string;
  children: React.ReactNode;
};
const Section = ({ title, children }: PropsType) => {
  return (
    <div className="mb-10">
      <h3 className="uppercase text-3xl font-bold mb-8 text-center text-text-color">
        {title}
      </h3>
      <div>{children}</div>
    </div>
  );
};

export default Section;
