import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="text-white min-h-[50vh] flex flex-col justify-center items-center gap-3">
        <h1 className="text-5xl font-bold w-full text-center">Dono-It</h1>
        <p>
          Get your projects funded by your supporters. Get started now!!!
        </p>
        <div className="my-2">
          <Link href="/login">
          <button
            type="button"
            className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Start Now
          </button>
          </Link>
          <button
            type="button"
            className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Read More
          </button>
        </div>
      </div>
      <div className="bg-white opacity-10 h-1"></div>
      <div className="text-white flex flex-col items-center justify-evenly min-h-[40vh] ">
        <h2 className="text-3xl font-bold">Get help from your fans</h2>
        <div className="flex w-full justify-around">
          <div className="block max-w-sm p-6  border rounded-xl shadow bg-black border-gray-700 ">
            <h3 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">box1</h3>
            <p className="font-normal text-gray-700 dark:text-gray-400">box1 desc</p>
          </div>
          <div className="block max-w-sm p-6  border rounded-xl shadow bg-black border-gray-700 ">
            <h3 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">box2</h3>
            <p className="font-normal text-gray-700 dark:text-gray-400">box2 desc</p>
          </div>
          <div className="block max-w-sm p-6  border rounded-xl shadow bg-black border-gray-700 ">
            <h3 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">box3</h3>
            <p className="font-normal text-gray-700 dark:text-gray-400">box3 desc</p>
          </div>      
        </div>
      </div>
      <div className="bg-white opacity-10 h-1"></div>
      <div className="text-white flex flex-col items-center justify-evenly min-h-[40vh] ">
      <h2 className="text-3xl font-bold">More About Us</h2>
        <div className="flex w-full justify-around">
          <div className="block max-w-sm p-6  border rounded-xl shadow bg-black border-gray-700 ">
            <h3 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Title</h3>  
            {/* Remove the box */}
            <p className="font-normal text-gray-700 dark:text-gray-400">desc</p>
          </div>
        </div>
      </div>
    </>
  );
}
