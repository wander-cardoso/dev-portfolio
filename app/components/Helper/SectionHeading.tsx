import React, { ReactNode } from "react";

//define props type
type Props = {
  children: ReactNode;
};

const SectionHeading = ({ children }: Props) => {
  return (
    <h1 className=" w-fit h-auto text-center px-4 rounded-lg  py-1 mx-auto text-2xl sm:text-3xl md:text-4xl uppercase -rotate-6 "
    
    style={{
      backgroundColor: "var(--bg-mobile)",
      color: "var(--text-secondary)",
      border: "1px solid var(--accent)",
     
    }}>
      {children}
    </h1>
  );
};

export default SectionHeading;
