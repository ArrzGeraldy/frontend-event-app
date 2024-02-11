import Image from "next/image";

const Footer = () => {
  return (
    <footer className="py-4 border-t-2 mt-12 flex items-center justify-center">
      <div className="flex items-center justify-center">
        <Image
          src="/assets/images/logo-2.svg"
          width={68}
          height={38}
          alt="..."
          className="h-12"
        />{" "}
        <span className="font-semibold">Sociale</span>
      </div>
    </footer>
  );
};

export default Footer;
