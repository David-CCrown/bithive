'use client';

import { useCallback } from "react";
import { Button } from "./ui/button";

import {useUser } from "@civic/auth-web3/react"
import { LogOutIcon } from "lucide-react";
import { toast } from "sonner";

const AuthCivicButton = () => {

    const {signIn } = useUser();

    const doSignIn = useCallback(() => {

    signIn()
      .then(() => {
        toast("Sign-in completed successfully", {duration: 2000, style: {backgroundColor: "green", color: "white"}});
      })
      .catch((err) => {
        toast(err.message, {duration: 2000, style: {backgroundColor: "red", color: "white"}});
      });
    }, [signIn]);
    
    return (
        <Button className="cursor-pointer" onClick={doSignIn}>Get Started</Button>
    )
}

export const LogoutCivicButton = () => { 
    const { signOut } = useUser();

    const doSignOut = useCallback(() => {
        signOut()
          .then(() => {
            toast("Sign-out completed successfully", {duration: 2000, style: {backgroundColor: "green", color: "white"}});
          })
          .catch((err) => {
            toast(err.message, {duration: 2000, style: {backgroundColor: "red", color: "white"}});
          });
      }, [signOut]);

    return (
      <Button className="cursor-pointer text-destructive font-[600]"  variant="ghost" onClick={doSignOut}>
        <LogOutIcon className="w-4 h-4 mr-2" />
        Logout
        </Button>
    )
}

export default AuthCivicButton;