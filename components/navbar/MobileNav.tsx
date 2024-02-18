"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { PiList } from "react-icons/pi";
import Image from "next/image";
import Link from "next/link";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger className="md:hidden flex">
        <PiList size={30} />
      </SheetTrigger>
      <SheetContent className="w-7/12 ">
        <SheetHeader className="">
          <SheetTitle>
            <div className="flex border-b-2 mb-4">
              <h4 className="text-2xl font-bold mb-2">Menu</h4>
            </div>
          </SheetTitle>
          <SheetDescription className="flex justify-start text-start">
            <div className="flex flex-col ">
              <Link href={"/"} className="text-lg py-2 w-full">
                Home
              </Link>
              <Link href={"/"} className="text-lg py-2 w-full">
                Event
              </Link>
              <Link href={"/"} className="text-lg py-2 w-full">
                Contact
              </Link>
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
