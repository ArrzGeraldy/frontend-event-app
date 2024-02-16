"use client";
import Link from "next/link";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import InputSelect from "../ui/shared/InputSelect";
import { useAuthContext } from "@/hooks/useAuthContext";

interface ISetSearch {
  setCategory: React.Dispatch<React.SetStateAction<string>>;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const HeadEventList = ({ setSearch, setCategory }: ISetSearch) => {
  const { user } = useAuthContext();
  const url = user ? "/events/create" : "/login";
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mb-4 w-full gap-4 gap-x-6">
      <Link href={url} className="md:col-span-2 w-fit">
        <Button className="bg-indigo-600 rounded-full w-fit text-xs">
          Create Your Event
        </Button>
      </Link>
      <Input
        onChange={(e) => setSearch(e.target.value)}
        className="bg-gray-100 rounded-full py-2 px-4 md:py-6 focus:outline-none focus:ring-2 focus:ring-indigo-600"
        placeholder="Search"
      />
      <div className="flex flex-col gap-2">
        <InputSelect
          setValue={setCategory}
          style={
            "bg-gray-100 rounded-full py-2 px-4 md:py-6 focus:outline-none focus:ring-2 focus:ring-indigo-600 w-full "
          }
        />
      </div>
    </div>
  );
};

export default HeadEventList;
