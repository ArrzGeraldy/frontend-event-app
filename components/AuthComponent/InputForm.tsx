interface InputFormProps {
  email: string;
  password: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
}
const InputForm = ({
  email,
  password,
  setEmail,
  setPassword,
}: InputFormProps) => {
  return (
    <div className="flex flex-col gap-4 text-sm">
      <div className="flex flex-col gap-2 ">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name=""
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="name@gmail.com"
          className="border-2 px-3 py-2 rounded-md focus:outline-none focus:ring-1  focus:ring-indigo-600"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="Password">Password</label>
        <input
          type="password"
          name=""
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="border-2 px-3 py-2 rounded-md focus:outline-none focus:ring-1  focus:ring-indigo-600"
        />
      </div>
    </div>
  );
};

export default InputForm;
