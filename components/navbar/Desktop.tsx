import Link from "next/link";

const Desktop = () => {
  return (
    <div className="md:flex gap-4 hidden">
      <Link href={"/"} className="text-lg">
        Home
      </Link>
      <Link href={"#event"} className="text-lg">
        Event
      </Link>
      <Link href={"/"} className="text-lg">
        Contact
      </Link>
    </div>
  );
};

export default Desktop;
