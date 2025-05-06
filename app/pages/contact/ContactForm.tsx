/* eslint-disable react/no-unescaped-entities */
"use client";

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
    setResult("");
    setIsLoading(true);

    const formData = new FormData(event.target as HTMLFormElement);

    // Validation before sending
    const validationError = validateForm(formData);
    if (validationError) {
      setResult(validationError);
      setIsLoading(false);
      return;
    }

    formData.append("access_key", "ab0947e4-81ed-49da-a2b2-9902b3eb1785");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("✅ Form submitted successfully!");
      (event.target as HTMLFormElement).reset();
    } else {
      setResult("❌ Error: " + data.message);
    }

    setIsLoading(false);
  };

  return (
    <div
      id="contact"
      className="bg-black/20 rounded-lg p-4 m-10 w-auto overflow-hidden"
    >
      <h1 className="text-bg text-2xl md:text-3xl lg:text-[2.5rem] font-bold">
        Let's Work Together?
      </h1>
      <p className="text-gray-200 mt-3 lg:text-base text-xs md:text-sm">
        If you'd like to get in touch with me, use the links or fill out the
        form below 👇
      </p>

      <form onSubmit={onSubmit} className="mt-8 block w-full overflow-hidden">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <input
            name="first_name"
            type="text"
            placeholder="First name"
            required
            className="onsubmit"
          />
          <input
            name="last_name"
            type="text"
            placeholder="Last name"
            required
            className="onsubmit"
          />
        </div>

        <div className="flex flex-col mt-5 md:flex-row items-center justify-between gap-4">
          <input
            name="email"
            type="email"
            placeholder="Email address"
            required
            className="onsubmit"
          />
          <input
            name="phone"
            type="text"
            placeholder="Phone number"
            required
            className="onsubmit"
          />
        </div>

        <div>
          <select
            name="service"
            defaultValue=""
            className="w-full mt-5  px-4 py-3.5 rounded-md  outline-none"
            style={{
              backgroundColor: "var(--bg-primary)",
              color: "var(--text-secondary)",
              border: "1.5px solid var(--accent)",
            }}
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
          placeholder="Your message! 😁"
          required
          className="w-full mt-5 px-4 py-3.5 rounded-md border  outline-none"
          style={{
            backgroundColor: "var(--bg-primary)",
            color: "var(--text-secondary)",
            border: "1.5px solid var(--accent)",
          }}
        ></textarea>

        <div className="mt-4 flex flex-col gap-2">
          <button type="submit" disabled={isLoading} className="onsubmit">
            {isLoading ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Sending...
              </>
            ) : (
              "Send Message"
            )}
          </button>
          <p
            className="text-textprimary rounded-md text-center text-base"
            style={{
              backgroundColor: "var(--bg-primary)",
              color: "var(--text-secondary)",
            }}
          >
            {result}
          </p>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
