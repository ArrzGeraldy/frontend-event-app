"use client";
import Image from "next/image";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { PiCaretDown } from "react-icons/pi";
import Link from "next/link";
import { useLogout } from "@/hooks/useLogout";
import { useRouter } from "next/navigation";

const DropDownUser = () => {
  const router = useRouter();
  const { logout } = useLogout();

  const handleLogout = () => {
    logout();
    return router.refresh();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-1">
        <Image
          width={40}
          height={40}
          src={"/assets/images/blank-profile.png"}
          alt="..."
          className="rounded-full border border-gray-500 w-10"
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link href={"/dashboard"}>Profile</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>Settings</DropdownMenuItem>
        <DropdownMenuItem>
          <div onClick={handleLogout}>Log out</div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropDownUser;
