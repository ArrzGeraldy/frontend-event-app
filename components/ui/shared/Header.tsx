"use client";
import Desktop from "@/components/navbar/Desktop";
import MobileNav from "@/components/navbar/MobileNav";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../button";
import { useAuthContext } from "@/hooks/useAuthContext";
import DropDownUser from "./DropDownUser";

const Header = () => {
  const { user } = useAuthContext();

  return (
    <header className="w-full border-b px-4 md:w-5/6 mx-auto">
      <div className="flex items-center justify-between h-20">
        <Link href={"/"} className="flex items-center">
          <Image
            src="/assets/images/logo-2.svg"
            width={68}
            height={38}
            alt="..."
            className="h-14"
          />
          <h4 className="text-2xl md:text-3xl font-bold">Sociale</h4>
        </Link>
        <Desktop />
        <div className="flex gap-4 items-center">
          {user ? null : (
            <Link href={`/login`}>
              <Button className="px-4 text-sm md:px-8">Login</Button>
            </Link>
          )}
          {user ? <DropDownUser /> : null}

          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
