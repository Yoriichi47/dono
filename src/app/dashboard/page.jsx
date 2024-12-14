"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const { data: session, update } = useSession();
  const router = useRouter();
  const [form, setForm] = useState({});

  const loginPageSend = () => {
    setTimeout(() => {
      router.push("/login");
    }, 1100);
  };

  useEffect(() => {
    if (!session) {
      loginPageSend();
    } else {
      getData();
    }
  }, []);

  const getData = async () => {
    let user = await fetchUser(session.user.name);
    setForm(user);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    let a = await updateProfile(e, session.user.name);
  };

  if (!session) {
    return (
      <div className="text-white">
        <h1>Redirecting to login page</h1>
        {loginPageSend()}
      </div>
    );
  }
  return (
    <>
      <div className="container mx-auto py-5 px-6 ">
        <h1 className="text-center my-5 text-3xl font-bold">
          Welcome to your Dashboard
        </h1>

        <form className="max-w-2xl flex flex-col mx-auto" action={handleSubmit}>
          <div className="my-2 mx-auto w-4/5">
            <input
              value={form.name ? form.name : ""}
              onChange={handleChange}
              type="text"
              name="name"
              placeholder="Enter your name"
              id="name"
              className="block w-full p-2 py-3 rounded-md  text-white text-xs focus:outline-none focus:outline-gray-600 bg-gray-800"
            />
          </div>
          {/* input for email */}
          <div className="my-2 mx-auto w-4/5">
            <input
              value={form.email ? form.email : ""}
              onChange={handleChange}
              type="email"
              name="email"
              placeholder="Enter your email"
              id="email"
              className="block w-full p-2 py-3 rounded-md  text-white text-xs focus:outline-none focus:outline-gray-600 bg-gray-800"
            />
          </div>
          {/* input forusername */}
          <div className="my-2 mx-auto w-4/5">
            <input
              value={form.username ? form.username : ""}
              onChange={handleChange}
              type="text"
              name="username"
              id="username"
              placeholder="Enter your username"
              className="block w-full p-2 py-3 rounded-md  text-white text-xs focus:outline-none focus:outline-gray-600 bg-gray-800"
            />
          </div>
          {/* input for profile picture of input type text */}
          <div className="my-2 mx-auto w-4/5">
            <input
              value={form.profilepic ? form.profilepic : ""}
              onChange={handleChange}
              type="text"
              name="profilepic"
              placeholder="Profile Picture"
              id="profilepic"
              className="block w-full p-2 py-3 rounded-md  text-white text-xs focus:outline-none focus:outline-gray-600 bg-gray-800"
            />
          </div>

          {/* input for cover pic  */}
          <div className="my-2 mx-auto w-4/5">
            
            <input
              value={form.coverpic ? form.coverpic : ""}
              onChange={handleChange}
              type="text"
              name="coverpic"
              placeholder="Cover Picture"
              id="coverpic"
              className="block w-full p-2 py-3 rounded-md  text-white text-xs focus:outline-none focus:outline-gray-600 bg-gray-800"
            />
          </div>
          {/* input stripe id */}
          <div className="my-2 mx-auto w-4/5">
            
            <input
              value={form.stripeid ? form.stripeid : ""}
              onChange={handleChange}
              type="text"
              name="stripeid"
              id="stripeid"
              placeholder="Stripe Id"
              className="block w-full p-2 py-3 rounded-md  text-white text-xs focus:outline-none focus:outline-gray-600 bg-gray-800"
            />
          </div>
          {/* input stripe secret */}
          <div className="my-2 mx-auto w-4/5">
            
            <input
              value={form.stripesecret ? form.stripesecret : ""}
              onChange={handleChange}
              placeholder="Stripe Secret"
              type="text"
              name="stripesecret"
              id="stripesecret"
              className="block w-full p-2 py-3 rounded-md  text-white text-xs focus:outline-none focus:outline-gray-600 bg-gray-800"
            />
          </div>

          {/* Submit Button  */}
          <div className="my-6 flex">
            <button
              type="submit"
              className="bg-gray-800 transition-all hover:bg-gray-700 text-white p-2 mt-1 rounded-md w-1/4 m-auto"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Dashboard;
