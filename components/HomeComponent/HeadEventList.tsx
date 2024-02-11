import Link from "next/link";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ISetSearch {
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const HeadEventList = ({ setSearch }: ISetSearch) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mb-4 w-full gap-4 gap-x-6">
      <Link href={"/events/create"} className="md:col-span-2">
        <Button className="bg-indigo-600 rounded-full w-fit text-xs">
          Create Your Event
        </Button>
      </Link>
      <Input
        onChange={(e) => setSearch(e.target.value)}
        className="bg-gray-100 rounded-full py-2 px-4 md:py-6 focus:outline-none focus:ring-2 focus:ring-indigo-600"
        placeholder="Search"
      />
      <Select>
        <SelectTrigger className=" bg-gray-100 rounded-full py-2 px-4 md:py-6 focus:outline-none focus:ring-2 focus:ring-indigo-600 ">
          <SelectValue placeholder="Theme" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default HeadEventList;
