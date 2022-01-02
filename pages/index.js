import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { signIn, signOut, useSession, getCsrfToken } from "next-auth/react";
import styles from "../styles/Home.module.css";
import { FormCharacterInputField } from "../UI/Components/FormControl";

export default function Home() {
  const { data: session, status } = useSession();
  return (
    <>
      <div className="comp">
        {status === "authenticated" ? (
          <h1>You Are loggin in as {session.user.email}</h1>
        ) : (
          <h1>You Are not Loggin In.</h1>
        )}
        <h1 className="text-3xl font-bold underline">App working</h1>
        <FormCharacterInputField
          type={"text"}
          label={"Name"}
          theme={"dark"}
          name={"name"}
          labelClassNames={"text-4xl mr-8 grow-1"}
          fieldClassNames={"bg-slate-300 rounded-md w-75 h-16 p-2 grow-2"}
        />
        <div className="div">
          <Link passHref={true} href="/api/auth/signin">
            <button className="h-20 w-70 bg-slate-700 rounded-lg p-5">
              Sign In Using Google
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
