import { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface InputSelectProps {
  style: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const InputSelect = ({ setValue, style }: InputSelectProps) => {
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
    <Select onValueChange={(value) => setValue(value)}>
      <SelectTrigger className={style}>
        <SelectValue placeholder="Category" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">All</SelectItem>
        {categories.map((category: any, i) => (
          <SelectItem key={i} value={category.category}>
            {category.category}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default InputSelect;
