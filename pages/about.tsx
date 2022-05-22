import React from 'react'
import { useRouter } from 'next/router'

export default function AboutPage() {
    const router = useRouter()
    return (
        <div className='w-full flex justify-center items-center text-center'>
        <div className="flex flex-col justify-center items-center mt-24 gap-5 font-mono w-1/3">
          <h1 className="text-3xl font-bold text-gray-800">
            About shortcomms.gg
          </h1>
          <p className="text-lg text-gray-600">
            shortcomms.gg is a simple voice chat room service that lets you create rooms in seconds.
            We aim to make voice chat rooms as simple as possible. This is great for those that don't have
            the option of something larger like Discord!
          </p>
          <button onClick={() => router.push('/rooms/create')} className='py-2 px-5 bg-blue-400 text-white rounded-2xl hover:bg-blue-600'>
            create a new room
          </button>
        </div>
        </div>
    );
}
