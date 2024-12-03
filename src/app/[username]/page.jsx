import React from "react";

const Username = ({ params }) => {
   return (
    <div className="cover w-full relative">
      <img
        className="border-4 h-[400px] border-green-800 w-full object-cover"
        src="https://cdn-useast1.kapwing.com/static/templates/anime-discord-banner-regular-1f6b5f44.webp"
        alt=""
      />
      <div className="absolute -bottom-24 w-full rounded-full">
        <img
          className="rounded-full border-4 mx-auto  border-red-400 w-[120px] h-[120px]"
          src="https://instagram.fyzd1-3.fna.fbcdn.net/v/t39.30808-6/367432292_309247534992699_5322738182855038881_n.jpg?stp=dst-jpg_e35_p1080x1080_sh0.08_tt6&_nc_ht=instagram.fyzd1-3.fna.fbcdn.net&_nc_cat=103&_nc_ohc=bKRHxaabj-0Q7kNvgHKuuzG&_nc_gid=de5c441c90714840af72df98d54e2d31&edm=ANTKIIoAAAAA&ccb=7-5&oh=00_AYApwXracSlfTMNLtWhMQGo984B-r_-QR9K08Z1R3bMLKg&oe=675434D4&_nc_sid=d885a2"
          alt=""
        />
        <h1 className="text-2xl font-bold text-center">@{params.username}</h1>
      </div>
    </div>
  );
};

export default Username;
