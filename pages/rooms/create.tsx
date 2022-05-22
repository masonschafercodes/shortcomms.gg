import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  roomName: string;
  userName: string;
};

export default function CreateNewRoom() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  return (
    <div className="w-full flex justify-center items-center text-center">
      <div className="flex flex-col justify-center items-center mt-24 gap-5 font-mono">
        <h1 className="text-3xl font-bold text-gray-800">Create a new room</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col justify-center items-center gap-5 font-mono"
        >
          <div className="flex flex-col items-start justify-center gap-1">
            <label htmlFor="roomName">Room Name</label>
            <input
              id="roomName"
              className="py-2 px-5 bg-gray-100 text-gray-700 rounded-2xl hover:bg-gray-200 border-gray-700 border"
              placeholder="room name"
              {...register("roomName", { required: true, minLength: 5, maxLength: 20 })}
            />
          </div>
          {errors.roomName && (
            <span className="bg-red-200 p-2 rounded border border-red-300 text-red-500">
              {errors.roomName.type === "required" ? "Room name is required." : "Room name must be between 5 and 20 characters."}
            </span>
          )}

<div className="flex flex-col items-start justify-center gap-1">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              className="py-2 px-5 bg-gray-100 text-gray-700 rounded-2xl hover:bg-gray-200 border-gray-700 border"
              placeholder="username"
              {...register("userName", { required: true, minLength: 5, maxLength: 20 })}
            />
          </div>
          {errors.userName && (
            <span className="bg-red-200 p-2 rounded border border-red-300 text-red-500">
              {errors.userName.type === "required" ? "Room name is required." : "Room name must be between 5 and 20 characters."}
            </span>
          )}

          <button className="py-2 px-5 bg-blue-400 text-white rounded-2xl hover:bg-blue-600">
            create a new room
          </button>
        </form>
      </div>
    </div>
  );
}
