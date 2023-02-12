import React from "react";

type PropsType = {
  title: string;
  children: React.ReactNode;
};
const Section = ({ title, children }: PropsType) => {
  return (
    <div className="mb-10">
      <h3 className="capitalize text-4xl font-semibold mb-8 text-primary-color-strong">
        {title}
      </h3>
      <div>{children}</div>
    </div>
  );
};

export default Section;
