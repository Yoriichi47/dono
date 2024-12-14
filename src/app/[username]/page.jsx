import React from "react";

const Username = ({ params }) => {
  return (
    <>
      <div className="cover w-full">
        <img
          className="border-4 h-[400px] border-green-800 w-full object-cover"
          src="https://cdn-useast1.kapwing.com/static/templates/anime-discord-banner-regular-1f6b5f44.webp"
          alt=""
        />
        <div className="flex w-full">
          <img
            className="rounded-full border-4 mx-5 border-red-400 w-[120px] h-[120px]"
            src="https://i.ytimg.com/vi/rvX8cS-v2XM/maxresdefault.jpg"
            alt=""
          />
          <div className="text-center my-auto">
            <h1 className="text-2xl font-bold ">@{params.username}</h1>
            <p className="mt-2 text-gray-400">1000 followers, 1,000 posts</p>
          </div>
        </div>
      </div>
      <div className="gap-4 flex flex-col">
        <div className="border supporters p-3 my-3">
          <h1 className="text-2xl mb-1 underline font-bold">Supporters</h1>
          <div className="border-t pt-2 supportList">
            <ul className="text-center text-gray-400">
              <li>Asus donated $10</li>
              <li>HP donated $50</li>
              <li>ASRock donated $10</li>
            </ul>
          </div>
        </div>
        <div className="border makePayment p-3 my-3">
          <h1 className="text-2xl mb-1 underline font-bold">Make Payment</h1>
          <div className="border-t pt-2 supportList">
            <div className="flex flex-col w-2/5 mx-auto items-center">
              <div className="flex w-full gap-3">

              <input
                className="rounded-lg focus:outline-none focus:outline-gray-700 bg-gray-800 text-white p-2 my-2 w-4/5"
                type="text"
                placeholder="Enter your name"
                />
              <input
                className="rounded-lg focus:outline-none focus:outline-gray-700 bg-gray-800 text-white p-2 my-2"
                type="text"
                placeholder="Enter Amount"
                />
                </div>
              <input
                className="rounded-lg focus:outline-none focus:outline-gray-700 bg-gray-800 text-white p-2 my-2 w-full"
                type="text"
                placeholder="Enter the message"
              />

              <button className="bg-gray-800 transition-all hover:bg-gray-700 text-white p-2 mt-1 rounded-md">
                Donate
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Username;
