import Link from "next/link";
import React from "react";
import { PiUserCircle, PiNotepad, PiPlusCircle } from "react-icons/pi";
interface Iset {
  active: string;
  setActive: React.Dispatch<React.SetStateAction<string>>;
}
const AsideItems = ({ active, setActive }: Iset) => {
  return (
    <div className="w-3/4 mx-auto text-xs md:text-sm">
      <h1 className="font-semibold text-2xl hidden lg:block mt-4">Welcome</h1>
      <div className="flex justify-between lg:flex-col lg:gap-2 text-gray-500 lg:mt-4">
        <button
          onClick={() => setActive("profile")}
          className={
            active === "profile"
              ? "rounded-md text-black transition-all w-max flex flex-col lg:px-2 py-2 items-center lg:flex-row lg:gap-2 lg:w-full lg:bg-black lg:text-gray-300"
              : "rounded-md hover:text-black transition-all w-max flex flex-col lg:px-2 py-2 items-center lg:flex-row lg:gap-2 lg:w-full"
          }
        >
          <PiUserCircle size={32} />
          <span>Profile</span>
        </button>
        <button
          onClick={() => setActive("myEvents")}
          className={
            active === "myEvents"
              ? "rounded-md text-black transition-all w-max flex flex-col lg:px-2 py-2 items-center lg:flex-row lg:gap-2 lg:w-full lg:bg-black lg:text-gray-300"
              : "rounded-md hover:text-black transition-all w-max flex flex-col lg:px-2 py-2 items-center lg:flex-row lg:gap-2 lg:w-full"
          }
        >
          <PiNotepad size={32} />
          <span>My Events</span>
        </button>
        <Link
          href={"/events/create"}
          className="rounded-md hover:text-black transition-all w-max flex flex-col lg:px-2 py-2 items-center lg:flex-row lg:gap-2 lg:w-full"
        >
          <PiPlusCircle size={32} />
          <span>Create Events</span>
        </Link>
      </div>
    </div>
  );
};

export default AsideItems;
