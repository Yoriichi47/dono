import UsernamePage from "./usernamePage";
import {auth} from "@/auth";
import React from "react";

export default async function page({ params }) {
  const session = await auth()
  const user = session?.user;

  const { username } = await params;
  const decodedName = decodeURIComponent(username);

  if(!user){
    redirect(`/login?callbackUrl=/dashboard`);
  }

  return <UsernamePage username={decodedName} />;
}
