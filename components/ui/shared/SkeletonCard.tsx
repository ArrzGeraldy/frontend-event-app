import React from "react";

const SkeletonCard = () => {
  return (
    <div className="group relative flex min-h-[380px] w-full flex-col overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-lg md:min-h-[438px]">
      <div className="flex-center flex-grow bg-gray-200 animate-pulse mb-1 bg-cover bg-center text-grey-500"></div>
      <div className="px-4 py-4 animate-pulse">
        <span className="bg-gray-200 px-8 py-1 rounded-full "></span>
        <span className="bg-gray-200 px-12 py-1 rounded-full ms-2"></span>
        <p className="mt-4 px-8"></p>
        <div className="mt-4 flex flex-col gap-4">
          <h4 className="font-bold w-56 h-4 bg-gray-200 rounded"></h4>
          <h4 className="w-52 h-4  mt-2 bg-gray-200 rounded"></h4>
        </div>
      </div>
    </div>
  );
};

export default SkeletonCard;
