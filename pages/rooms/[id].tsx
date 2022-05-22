import { useRouter } from "next/router";
import React from "react";

export default function ChatRoom() {
    const router = useRouter();
    const { id } = router.query;
  return (
    <div className="w-full flex justify-center items-center text-center">
      <div className="flex flex-col justify-center items-center mt-24 gap-5 font-mono w-1/3">
        <h1 className="text-3xl font-bold text-gray-800">
            Welcome to, shortcomms.gg!
        </h1>
        <p className="text-xl text-gray-600">
            {id}
        </p>
      </div>
    </div>
  );
}
