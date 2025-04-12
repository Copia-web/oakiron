'use server';

import { auth, signIn, signOut } from "@/auth";
import { redirect } from "next/dist/server/api-utils";

export const login =async()=>{
      await signIn("github")
}

export const signoutUser =async()=>{
      await  signOut();
       
}

export const sessions =async()=>{
    const session = await auth();
    if(session)
    return {username: session.user}
    return null;
}

