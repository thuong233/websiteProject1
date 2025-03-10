import React from "react";
import ContactForm from "./ContactForm";

const ContactMeLeft = () => {
  return (
    <div>
      <div className="flex flex-col gap-8 w-full">
        <h2 className="text-white text-3xl mb-4">Contact Us</h2>
        <p className="text-white">
          for hiring stuff smth smth you can yeah lol
          <br />
          just a few clicks away
        </p>
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactMeLeft;
