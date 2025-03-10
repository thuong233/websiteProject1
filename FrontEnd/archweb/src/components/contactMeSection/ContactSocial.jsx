import React from "react";
import SingleContactSocial from "./SingleContactSocial";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial link="#" Icon={FaWhatsapp} />
      <SingleContactSocial link="#" Icon={FaInstagram} />
      <SingleContactSocial link="#" Icon={FaLinkedin} />
    </div>
  );
};

export default ContactSocial;
