import React, { ReactNode } from "react";

//define props type
type Props = {
  children: ReactNode;
};

const SectionHeading = ({ children }: Props) => {
  return <h1 className=" bg-green-950 w-fit text-center text-white px-4 rounded-sm py-3 mx-auto text-2xl sm:text-3xl md:text-4xl uppercase -rotate-6">{children}</h1>;
};

export default SectionHeading;
