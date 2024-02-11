"use client";
import React, { useState } from "react";
import { PiWarningCircle, PiX } from "react-icons/pi";
interface Idelete {
  setIsDeleted: React.Dispatch<React.SetStateAction<string>>;
}
const Toast = ({ setIsDeleted }: Idelete) => {
  const [close, setClose] = useState(false);
  const handleClose = () => {
    setClose(true);
    setTimeout(() => {
      setIsDeleted("");
    }, 600);
  };
  return (
    <>
      <div
        className={
          close
            ? "toast px-4 py-4 rounded-lg drop-shadow-lg border toast_close"
            : "toast px-4 py-4 rounded-lg drop-shadow-lg border"
        }
      >
        <div
          className="absolute top-2 right-3 cursor-pointer"
          onClick={handleClose}
        >
          <PiX size={18} />
        </div>
        <div className="flex items-center gap-2">
          <PiWarningCircle size={36} className="text-red-600" />
          <div>
            <span className="text-sm font-bold">Failed delete event</span>
            <p className="text-sm">Sorry please try again later.</p>
          </div>
        </div>
        <div className="w-full h-1 rounded-lg absolute bottom-0 left-0  bg-red-600"></div>
      </div>
    </>
  );
};

export default Toast;
