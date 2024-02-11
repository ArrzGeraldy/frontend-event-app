interface InputProps {
  label: string;
  placeholder: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const InputText = ({ label, value, setValue, placeholder }: InputProps) => {
  return (
    <div className="flex flex-col gap-2">
      <label>{label}</label>
      <input
        type="title"
        id="title"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        className="border-2 px-3 bg-gray-50 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400"
      />
    </div>
  );
};

export default InputText;
