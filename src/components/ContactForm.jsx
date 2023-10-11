"use client";

import { useState } from "react";
import Script from "next/script";

export default function ContactForm() {
  const [formMessage, setFormMessage] = useState(null);
  const [showForm, setShowForm] = useState("visible");

  const submitForm = (event) => {
    event.preventDefault();

    if (window.emailjs) {
      window.emailjs
        .sendForm("service_cu360zc", "contact_form", "#contact-form")
        .then(
          function () {
            event.target.reset();
            setShowForm("invisible");
            setFormMessage("Your message has been sent!");
          },
          function (error) {
            setFormMessage("Sorry, there was an error sending your message.");
          }
        );
    } else {
      console.error("emailjs is not defined");
    }
  };

  const closeModal = (close) => {
    close ? document.querySelector("[data-modal]").close() : null;
    setFormMessage(null);
  };

  return (
    <>
      <div
        onClick={(e) => {
          closeModal(e.target.className.includes("modal"));
        }}
      >
        <Script
          src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"
          onLoad={() => window.emailjs?.init("JsxgJrsqfzIxAeIPS")}
        />

        <dialog className="modal lg:w-[80%] xl:max-w-[40%]" data-modal>
          <section className="bg-white dark:bg-gray-900">
            <div className="flex justify-end" onClick={() => closeModal(true)}>
              <div className="my-5 mr-3 text-base sm:text-lg md:text-lg poppins relative overflow-hidden px-6 py-1 group rounded-full bg-violet-400 text-slate-950 cursor-pointer">
                <div className="absolute top-0 right-full w-full h-full bg-violet-100 opacity-20 group-hover:translate-x-full x-0 duration-200"></div>
                <h4 className="relative">Close</h4>
              </div>
            </div>
            <div className="py-4 px-4 mx-auto max-w-screen-md">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
                Contact Me
              </h2>
              {formMessage && (
                <div
                  id="success-message"
                  className={`text-3xl flex justify-center align-center mt-10 text-violet-700 `}
                >
                  {formMessage}
                </div>
              )}
              <form
                action="#"
                className={`space-y-8 sm:space-y-10 pb-10 lg:max-w-[80%] mx-auto ${showForm}`}
                id="contact-form"
                onSubmit={(e) => {
                  submitForm(e);
                }}
              >
                <div>
                  <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
                    Want to get in touch? Send me a message!
                  </p>
                  <input type="hidden" name="contact_number" />
                  <label
                    htmlFor="user_name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="user_name"
                    className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="Your Name"
                    name="user_name"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="user_email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    id="user_email"
                    name="user_email"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="name@email.com"
                    required
                  />
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                  >
                    Your message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Leave a comment..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="py-3 bg-violet-400 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Send message
                </button>
              </form>
            </div>
          </section>
        </dialog>
      </div>
    </>
  );
}
