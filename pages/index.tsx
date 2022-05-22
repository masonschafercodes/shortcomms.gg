import type { NextPage } from "next";
import { useRouter } from 'next/router'

const Home: NextPage = () => {
  const router = useRouter()
  return (
    <div className="w-full flex justify-center items-center text-center">
      <div className="flex flex-col justify-center items-center mt-24 gap-5 font-mono">
        <h1 className="text-3xl font-bold text-gray-800">
          Welcome to, shortcomms.gg!
        </h1>
        <p className="text-xl text-gray-600">
          Create simple simple voice chat rooms with shortcomms.gg.
        </p>
        <button onClick={() => router.push('/rooms/create')} className="py-2 px-5 bg-blue-400 text-white rounded-2xl hover:bg-blue-600">
          create a new room
        </button>
      </div>
    </div>
  );
};

export default Home;
