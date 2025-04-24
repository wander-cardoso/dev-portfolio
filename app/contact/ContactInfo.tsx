import { contactData } from "@/Data/data";
import React from "react";
import { FaEnvelope, FaMap, FaPhone } from "react-icons/fa";

const ContactInfo = () => {
  return (
    <div>
      <a href="tel:+351932748700" target="_blank" rel="noopener noreferrer">
        <div className="flex items-center space-x-8">
          <div className="contact__link_icon">
            <FaPhone className=" contact__link_text " />
          </div>
          <div>
            <h1 className="tx-lg sm:text-xl ">Phone</h1>
            <h1 className=" text-base sm:text-lg  text-opacity-70">
              {contactData.Telemovel}
            </h1>
          </div>
        </div>
      </a>

      <a
        href="mailto:wander.hsmc@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="flex items-center space-x-8 my-8">
          <div className="contact__link_icon">
            <FaEnvelope className=" contact__link_text " />
          </div>
          <div>
            <h1 className="tx-lg sm:text-xl ">E-mail Address</h1>
            <h1 className=" text-base sm:text-lg  text-opacity-70">
              {contactData.Email}
            </h1>
          </div>
        </div>
      </a>

      <a
        href="https://www.google.com/maps/place/Braga+(S%C3%A3o+V%C3%ADtor),+Braga/@41.5570289,-8.4284117,14z/data=!3m1!4b1!4m6!3m5!1s0xd24fe9ab6f483ab:0x500ebbde4904ed0!8m2!3d41.555267!4d-8.4047163!16s%2Fm%2F043lbzv?hl=pt_PT&entry=ttu&g_ep=EgoyMDI1MDQyMC4wIKXMDSoASAFQAw%3D%3D"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="flex items-center space-x-8">
          <div className="contact__link_icon">
            <FaMap className="contact__link_text" />
          </div>
          <div>
            <h1 className="text-lg sm:text-xl ">Address</h1>
            <h1 className="text-base sm:text-lg  text-opacity-70">
              {contactData.Endereço}
            </h1>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ContactInfo;
