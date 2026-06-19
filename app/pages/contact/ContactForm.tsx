"use client";

/* eslint-disable react/no-unescaped-entities */

import React, { useState } from "react";

const ContactForm = () => {
  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = (formData: FormData) => {
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const message = formData.get("message") as string;

    if (!email || !phone || !message) {
      return "Please fill out all required fields.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return "Invalid email address.";
    }

    return null;
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();

  const form = event.currentTarget;

  setResult("");
  setIsLoading(true);

  const formData = new FormData(form);

  const validationError = validateForm(formData);

  if (validationError) {
    setResult(validationError);
    setIsLoading(false);
    return;
  }

  formData.append(
    "access_key",
    process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || ""
  );

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("✅ Form submitted successfully!");
      form.reset();
    } else {
      setResult(`❌ Error: ${data.message}`);
    }
  } catch (error) {
    console.error("Fetch error:", error);
    setResult("❌ Something went wrong. Check console.");
  } finally {
    setIsLoading(false);
  }
};

  return (
    <div id="contact" className="bg-black/50 rounded-lg p-4 m-10 w-auto">
      <h1 className="text-2xl md:text-3xl lg:text-[2.5rem] font-bold">
        Let's Work Together?
      </h1>

      <p className="text-gray-200 mt-3 lg:text-base text-xs md:text-sm">
        If you'd like to get in touch with me, use the links or fill out the
        form below.
      </p>

      <form onSubmit={onSubmit} className="mt-8 w-full">
        <div className="flex flex-col md:flex-row gap-4">
          <input
            name="first_name"
            type="text"
            placeholder="First name"
            required
            className="w-full bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border border-gray-700 outline-none"
          />

          <input
            name="last_name"
            type="text"
            placeholder="Last name"
            required
            className="w-full bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border border-gray-700 outline-none"
          />
        </div>

        <div className="flex flex-col md:flex-row gap-4 mt-5">
          <input
            name="email"
            type="email"
            placeholder="Email address"
            required
            className="w-full bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border border-gray-700 outline-none"
          />

          <input
            name="phone"
            type="text"
            placeholder="Phone number"
            required
            className="w-full bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border border-gray-700 outline-none"
          />
        </div>

        <div className="mt-5">
          <select
            name="service"
            defaultValue=""
            className="w-full bg-black text-white px-4 py-3.5 rounded-md border border-gray-700 outline-none"
          >
            <option value="" disabled>
              Select a service
            </option>
            <option value="frontend">Frontend Development</option>
            <option value="backend">Backend Development</option>
            <option value="fullstack">Fullstack Development</option>
          </select>
        </div>

        <textarea
          name="message"
          rows={7}
          placeholder="Your message"
          required
          className="w-full mt-5 bg-black text-white placeholder:text-gray-600 px-4 py-3.5 rounded-md border border-gray-700 outline-none"
        />

        <div className="mt-4 flex flex-col gap-2">
          <button
            type="submit"
            disabled={isLoading}
            className="px-8 py-3.5 bg-emerald-600 hover:bg-emerald-800 transition-all duration-150 rounded-full text-white flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Sending...
              </>
            ) : (
              "Send Message"
            )}
          </button>

          {result && <p className="text-white text-sm">{result}</p>}
        </div>
      </form>
    </div>
  );
};

export default ContactForm;