import React from "react";
import ContactInfo from "./ContactInfo";
import ContactSocial from "./ContactSocial";

const ContactMeRight = () => {
  return (
    <div className=" relative flex flex-col items-center justify-center gap-12">
      <div className="absolute top-0 -right-4 w-72 h-72 bg-orange rounded-full filter blur-lg opacity-70 sm:w-96 sm:h-96 animate-blob "></div>
      <div className="absolute top-0 -left-4  w-72 h-72 bg-white rounded-full filter blur-lg opacity-70 sm:w-96 sm:h-96 animate-blob"></div>
      <img
        src="../../public/images-20250212T212142Z-001/images/bolortoya.png"
        alt="Contact Us"
        className="max-w-[500px] z-10"
      />
      <ContactInfo />
      <ContactSocial />
    </div>
  );
};

export default ContactMeRight;
