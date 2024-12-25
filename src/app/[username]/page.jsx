import UsernamePage from "./usernamePage";
import {auth} from "@/auth";
import React from "react";

export default async function page() {
  const session = await auth()
  const user = session?.user;
  const name = user.name
  const username = user.username;

  if(!user){
    redirect(`/login?callbackUrl=/dashboard`);
  }

  return <UsernamePage name={name} username={username} />;
}
