import { contactData } from "@/Data/data";
import React from "react";
import { FaEnvelope, FaMap, FaPhone } from "react-icons/fa";

const ContactInfo = () => {
  return (
    <div>
      <div className="flex items-center space-x-8">
        <div className="w-14 h-14  rounded-full bg-gradient-to-r from-emerald-700 to-emerald-950 flex items-center justify-center flex-col">
          <FaPhone className=" w-6 h-6 text-white " />
        </div>
        <div>
          <h1 className="tx-lg sm:text-xl text-primary">Phone</h1>
          <h1 className=" text-base sm:text-lg text-primary text-opacity-70">
            {contactData.Telemovel}
          </h1>
        </div>
      </div>
      <div className="flex items-center space-x-8 my-8">
        <div className="w-14 h-14  rounded-full bg-gradient-to-r from-emerald-700 to-emerald-950 flex items-center justify-center flex-col">
          <FaEnvelope className=" w-6 h-6 text-white " />
        </div>
        <div>
          <h1 className="tx-lg sm:text-xl text-primary">E-mail Address</h1>
          <h1 className=" text-base sm:text-lg text-primary text-opacity-70">
            {contactData.Email}
          </h1>
        </div>
      </div>
      <div className="flex items-center space-x-8">
        <div className="w-14 h-14  rounded-full bg-gradient-to-r from-emerald-700 to-emerald-950 flex items-center justify-center flex-col">
          <FaMap className=" w-6 h-6 text-white " />
        </div>
        <div>
          <h1 className="tx-lg sm:text-xl text-primary">Address</h1>
          <h1 className=" text-base sm:text-lg text-primary text-opacity-70">
            {contactData.Endereço}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
