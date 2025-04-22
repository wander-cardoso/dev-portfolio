/* eslint-disable react/no-unescaped-entities */
import React from "react";

const ContactForm = () => {
  return (
    <div className="bg-black/50 rounded-lg p-4 m-10  w-auto ">
      <h1 className="text-bg text-2xl md:text-3xl lg:text-[2.5rem] font-bold ">
        Let's Work Together?
      </h1>
      <p className="text-gray-200 mt-3 lg:text-base text-xs md:text-sm ">
        If you’d like to get in touch with me, you can do so through these links
        or the form...
      </p>
      <form className="mt-8 block w-full overflow-hidden">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <input
            type="text"
            placeholder="First name"
            className="flex-1 bg-black text-primary placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] bordere-gray-200 border-opacity-15 outline-none w-full"
          />
          <input
            type="text"
            placeholder="Last name"
            className="flex-1 bg-black text-primary placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] bordere-gray-200 border-opacity-15 outline-none w-full"
          />
        </div>

        <div className="flex flex-col mt-5 md:flex-row items-center justify-between gap-4">
          <input
            type="email"
            placeholder="E-mail address"
            className="flex-1 bg-black text-primary placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] bordere-gray-200 border-opacity-15 outline-none w-full"
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="flex-1 bg-black text-primary placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] bordere-gray-200 border-opacity-15 outline-none w-full"
          />
        </div>
        <div>
          <select className="w-full mt-5 bg-black text-primary placeholder:text-gray-600 px-4 py-3.5 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outiline-none">
            <option value="" disabled selected>
              {" "}
              Select an option
            </option>
            <option value="frontend">Frontend Development</option>
            <option value="backend">Backend Development</option>
            <option value="fullstack">Fullstack Development</option>
          </select>
        </div>
        <textarea
          rows={7}
          placeholder="Message"
          className="w-full mt-5 bg-black text-primary placeholder:text-gray-600 px-4 py-3.5 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outiline-none"
        ></textarea>
        <div className="mt-4">
          <button className="px-8 py-3.5 bg-tertiary hover:bg-emerald-800 transition-all duration-150 rounded-full text-primary">
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
