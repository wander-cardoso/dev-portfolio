import React from "react";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div className="pt-16 pb-16 bg-bgslate">
      <div className="grid grid-cols-1 lg:grid-cols-3 w-[90%] sm:w-[80%] mx-auto items-center gap-10 mt-10">
        {/*Contact Form*/}
        <div className="lg:col-span-2">
          <ContactForm />
        </div>
        {/*Contact Info*/}
        <div className="mx-auto">
          <ContactInfo />
        </div>
      </div>
    </div>
  );
};

export default Contact;
