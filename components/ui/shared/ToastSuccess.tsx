"use client";
import { useState } from "react";
import { PiEraser, PiTrashSimple, PiWarningCircle, PiX } from "react-icons/pi";
interface Idelete {
  setIsDeleted: React.Dispatch<React.SetStateAction<string>>;
}

const ToastSuccess = ({ setIsDeleted }: Idelete) => {
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
          <div className="bg-black text-white p-1 rounded-lg">
            <PiEraser size={28} />
          </div>
          <div>
            <span className="text-sm font-bold">Event deleted</span>
            <p className="text-xs">The event has been permanently removed</p>
          </div>
        </div>
        <div className="w-full h-1 rounded-lg absolute bottom-0 left-0  bg-black"></div>
      </div>
    </>
  );
};

export default ToastSuccess;
