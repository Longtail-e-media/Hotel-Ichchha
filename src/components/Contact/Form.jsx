import React from "react";
import { HiArrowLongRight } from "react-icons/hi2";
import contactFormData from "../../constants/data";
import { useFormik } from "formik";
import * as yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const validationSchema = yup.object(
    contactFormData.fields.reduce(
      (schema, field) => {
        schema[field.id] =
          field.type === "email"
            ? yup
                .string()
                .email("Invalid email format")
                .required(`${field.label} is required`)
            : yup.string().required(`${field.label} is required`);
        return schema;
      },
      {
        [contactFormData.textarea.id]: yup
          .string()
          .required(`${contactFormData.textarea.label} is required`),
      }
    )
  );

  const formik = useFormik({
    initialValues: contactFormData.fields.reduce(
      (values, field) => {
        values[field.id] = "";
        return values;
      },
      {
        [contactFormData.textarea.id]: "",
      }
    ),
    validationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      try {
        const response = await fetch(
          "https://www.hotelichchha.com/enquiry_mail_react.php",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
          }
        );

        if (response.ok) {
          toast.success("Message sent successfully!");
          formik.resetForm();
        } else {
          toast.error("Failed to send message.");
        }
      } catch (error) {
        toast.error("An error occurred. Please try again.");
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div className="bg-bg-gold-light/60 text-2xl p-12">
      <p className="mb-4">
        Can't find the contact and information you're looking for? Write to us
        via this quick form.
      </p>
      <form
        onSubmit={formik.handleSubmit}
        className="mt-12 flex flex-wrap justify-between"
      >
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
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values[field.id]}
                />
                {formik.touched[field.id] && formik.errors[field.id] ? (
                  <div className="text-red-600 text-sm mt-1">
                    {formik.errors[field.id]}
                  </div>
                ) : null}
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
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values[contactFormData.textarea.id]}
          ></textarea>
          {formik.touched[contactFormData.textarea.id] &&
          formik.errors[contactFormData.textarea.id] ? (
            <div className="text-red-600 text-sm mt-1">
              {formik.errors[contactFormData.textarea.id]}
            </div>
          ) : null}
        </li>
        <div className="w-full mt-12">
          <button
            type="submit"
            className="w-full group flex items-center justify-center gap-2 bg-navy text-ivory hover:bg-goldLight hover:text-navy px-6 py-4 rounded-full text-lg transition-all duration-150 ease-linear"
            title="Send Message"
            aria-label="Send Message"
            disabled={formik.isSubmitting}
          >
            Send Message
            <HiArrowLongRight className="group-hover:translate-x-2 transition-all duration-300" />
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default ContactForm;
