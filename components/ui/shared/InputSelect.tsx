import { useEffect, useState } from "react";

interface InputSelectProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const InputSelect = ({ value, setValue }: InputSelectProps) => {
  const [categories, setCategories] = useState([]);
  const getCategory = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API}/category`);
    const json = await response.json();
    setCategories(json.category);
  };
  useEffect(() => {
    getCategory();
  }, []);
  return (
    <select
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className="border-2 px-3 bg-gray-50 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400 text-sm md:text-md"
    >
      {categories.map((category: any, i) => (
        <option key={i} value={category.category} className="">
          {category.category}
        </option>
      ))}
    </select>
  );
};

export default InputSelect;
