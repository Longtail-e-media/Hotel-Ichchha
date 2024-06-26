import React from "react";
import { HiArrowLongRight } from "react-icons/hi2";
import contactFormData from "../../constants/data";

const ContactForm = () => {
  return (
    <div className="bg-bg-gold-light/60 text-2xl p-12">
      <p className="mb-4">
        Can't find the contact and information you're looking for? Write to us
        via this quick form.
      </p>
      <form className="mt-12 flex flex-wrap justify-between">
        {contactFormData.fields.map((field) => (
          <div key={field.id} className="w-full md:w-1/2">
            <ul className="pb-8 flex flex-col gap-4">
              <li className="w-full pr-2">
                <label htmlFor={field.id} className="text-base text-navy">
                  {field.label}
                </label>
                <input
                  type={field.type}
                  id={field.id}
                  name={field.id}
                  className="text-xl w-full py-2 border-b border-navy/30 focus:outline-none focus:border-gold bg-transparent text-navy"
                  required={field.required}
                />
              </li>
            </ul>
          </div>
        ))}
        <li className="w-full list-none">
          <label
            htmlFor={contactFormData.textarea.id}
            className="text-base text-navy"
          >
            {contactFormData.textarea.label}
          </label>
          <textarea
            id={contactFormData.textarea.id}
            name={contactFormData.textarea.id}
            rows="2"
            className="text-xl w-full py-2 border-b border-navy/30 focus:outline-none focus:border-gold bg-transparent text-navy"
            required={contactFormData.textarea.required}
          ></textarea>
        </li>
        <div className="w-full mt-12">
          <button
            type="submit"
            className="w-full group flex items-center justify-center gap-2 bg-navy text-ivory hover:bg-goldLight hover:text-navy px-6 py-4 rounded-full text-lg transition-all duration-150 ease-linear"
            title="Send Message"
            aria-label="Send Message"
          >
            Send Message
            <HiArrowLongRight className="group-hover:translate-x-2 transition-all duration-300" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
