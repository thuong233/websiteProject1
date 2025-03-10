import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4 text-white">
      <SingleInfo text="arquitectos@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="+90 555 666 77" Image={FiPhone} />
      <SingleInfo
        text="Av 55 eleanor street random, random, Laos"
        Image={IoLocationOutline}
      />
    </div>
  );
};

export default ContactInfo;
