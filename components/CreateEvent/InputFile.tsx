import Image from "next/image";
import React, { useState } from "react";
import { PiCloudArrowUp, PiPencilSimpleLine } from "react-icons/pi";

interface InputFileProps {
  tempImage: string;
  setFile: React.Dispatch<React.SetStateAction<any>>;
  setTempImage: React.Dispatch<React.SetStateAction<string>>;
}

const InputFile = ({ tempImage, setFile, setTempImage }: InputFileProps) => {
  const [validSize, setValidSize] = useState(true);
  return (
    <div className="flex flex-col items-center justify-center h-full relative">
      {tempImage.length > 0 ? (
        <div onClick={() => document.getElementById("file-uploader")?.click()}>
          <PiPencilSimpleLine
            size={40}
            className="hover:bg-black transition-all hover:text-gray-200 rounded-md py-2 text-gray-300 bg-gray-900  drop-shadow-md cursor pointer absolute top-2 right-2 cursor-pointer"
          />
        </div>
      ) : null}

      {tempImage.length > 0 ? (
        <Image
          width={500}
          height={200}
          src={tempImage}
          alt="..."
          className="h-80 w-full object-cover object-center rounded-md"
        />
      ) : (
        <div className="flex flex-col items-center justify-center h-full">
          <PiCloudArrowUp
            size={80}
            className="cursor-pointer text-gray-600"
            onClick={() => document.getElementById("file-uploader")?.click()}
          />
          <h4 className="">Upload your image</h4>
          {validSize ? null : (
            <div className="text-red-600 text-sm">
              File to large <br />
              Max file 1 MB
            </div>
          )}
        </div>
      )}

      <input
        type="file"
        name="image"
        accept="image/*"
        id="file-uploader"
        className="hidden"
        onChange={({ target: { files } }) => {
          if (files && files[0]) {
            if (files[0].size > 1000000) {
              setValidSize(false);
              setFile("");
              setTempImage("");
            } else {
              setValidSize(true);
              setFile(files[0]);
              setTempImage(URL.createObjectURL(files[0]));
            }
          }
        }}
      />
    </div>
  );
};

export default InputFile;
