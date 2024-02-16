"use client";
import { SetStateAction, useEffect, useState } from "react";
import { PiCloudArrowUp } from "react-icons/pi";
import Image from "next/image";
import { useAuthContext } from "@/hooks/useAuthContext";
import InputText from "@/components/ui/shared/InputText";
import InputSelect from "@/components/ui/shared/InputSelect";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { useCreateEvent } from "@/hooks/useCreateEvent";
import { redirect } from "next/navigation";
import InputFile from "@/components/CreateEvent/InputFile";

const page = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [tempImage, setTempImage] = useState("");
  const [location, setLocation] = useState("");
  const [file, setFile] = useState<File | "">("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [startDate, setStartDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endDate, setEndDate] = useState("");
  const [endTime, setEndTime] = useState("");
  const [free, setFree] = useState(false);
  const { user } = useAuthContext();
  const startEvent = startDate + ", " + startTime;
  const endEvent = endDate + ", " + endTime;
  const { create, isError, isLoading, isSuccess } = useCreateEvent();
  const scrollTop = () => {
    scrollTo({
      behavior: "auto",
      top: 0,
    });
  };

  const handleFree = () => {
    setPrice("0");
    setFree((prev) => !prev);
  };

  const createEvent = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    await create(
      title,
      desc,
      category,
      location,
      startEvent,
      endEvent,
      price,
      file,
      user
    );
  };

  const handleSuccessResponse = () => {
    setTitle("");
    setDesc("");
    setTempImage("");
    setLocation("");
    setFile("");
    setPrice("");
    setCategory("");
    setStartDate("");
    setStartTime("");
    setEndDate("");
    setEndTime("");
    setFree(false);
    // Atau jika Anda ingin menggabungkan beberapa setState menjadi satu:
    // setFormData({ title: "", desc: "", tempImage: "", ... });
  };

  useEffect(() => {
    if (isSuccess) handleSuccessResponse();
    if (!user) redirect("/login");
    scrollTop();
  }, [isError, isSuccess, user]);

  return (
    <>
      <section className="py-10 text-center">
        <h1 className="text-4xl font-bold">Create Event</h1>
      </section>
      <form
        action=""
        onSubmit={createEvent}
        className="w-3/4 mx-auto text-sm lg:text-lg"
      >
        {isError && (
          <div className="bg-red-200 text-red-900 text-sm py-4 px-4 rounded my-2">
            Failed create event
          </div>
        )}
        {isSuccess && (
          <div className="bg-green-200 text-green-900 text-sm py-4 px-4 rounded my-2">
            Success create event
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* title */}
          <InputText
            label={"Title"}
            placeholder="title"
            value={title}
            setValue={setTitle}
          />
          {/* category */}
          <div className="flex flex-col gap-2">
            <label htmlFor="">Category</label>
            <InputSelect
              setValue={setCategory}
              style={
                "border-2 px-3 bg-gray-50 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400 text-sm md:text-md"
              }
            />
          </div>
          {/* start event */}
          <div className="flex flex-col gap-2">
            <label>Start Event</label>
            <div className="flex">
              <input
                type="date"
                name=""
                id="title"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                placeholder="title"
                className="border-2 px-3 w-1/2 bg-gray-50 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400"
              />
              <input
                type="time"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
                placeholder="kljk"
                className="border-2 px-3 w-1/2 bg-gray-50 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400"
              />
            </div>
          </div>
          {/* end event */}
          <div className="flex flex-col gap-2">
            <label>End Event</label>
            <div className=" flex-1">
              <input
                type="date"
                name=""
                id="title"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                placeholder="title"
                className="border-2 px-3 w-1/2 bg-gray-50 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400"
              />
              <input
                type="time"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
                placeholder="kljk"
                className="border-2 px-3 w-1/2 bg-gray-50 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400"
              />
            </div>
          </div>
          {/* desc,location,price */}
          <div className="flex flex-col gap-4">
            {/* desc */}
            <div className="flex flex-col gap-2">
              <label>Description</label>
              <textarea
                name="des"
                id=""
                className="border-2 px-3 bg-gray-50 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
              ></textarea>
            </div>
            {/* location */}
            <div className="flex flex-col gap-2">
              <label>Location</label>
              <textarea
                name="des"
                id=""
                className="border-2 px-3 bg-gray-50 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              ></textarea>
            </div>
            {/* price */}
            <div className="relative">
              <div className="flex flex-col gap-2">
                <label>Price</label>
                <input
                  type="number"
                  id="title"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder="price"
                  disabled={free}
                  className={
                    free
                      ? "border-2 px-3 bg-gray-200 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400 cursor-not-allowed"
                      : `border-2 px-3 bg-gray-50 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400`
                  }
                />
              </div>
              <div className="flex items-center gap-1 absolute top-12 right-4">
                <Checkbox
                  className=""
                  onCheckedChange={handleFree}
                  checked={free}
                />
                <Label htmlFor="email">It's Free</Label>
              </div>
            </div>
          </div>
          {/* image */}
          <div className="w-full border-2 rounded-md h-80 bg-gray-50 ">
            <InputFile
              setFile={setFile}
              setTempImage={setTempImage}
              tempImage={tempImage}
            />
          </div>
        </div>
        <div className="flex gap-4 mt-6">
          <Button
            disabled={isLoading}
            className={isLoading ? `cursor-wait` : ``}
          >
            Submit
          </Button>
          <Button type="button">Cancel</Button>
        </div>
      </form>
    </>
  );
};

export default page;
