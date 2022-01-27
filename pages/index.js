import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { signIn, useSession, getProviders } from "next-auth/react";
import styles from "../styles/Home.module.css";
import { FormCharacterInputField } from "../UI/Components/FormControl";

export default function Home({ authProviders }) {
  let [devKeys, currentKeys] = useState("");
  const DEVKEYMAXX = 2;
  const regKEY = /^[A-Z]\\/;
  const devModeSecret = "dev";
  const { data: session, status } = useSession();
  useEffect(() => {
    if (devKeys !== devModeSecret && devKeys.length > DEVKEYMAXX) {
      currentKeys("");
      return;
    }

    if (window !== undefined) {
      if (devKeys !== devModeSecret) {
        window.addEventListener("keydown", (event) => {
          console.log(event);
          currentKeys((prevState) => prevState + event.key);
        });
      }
    }
  }, []);
  console.log(devKeys);
  return (
    <>
      <div className="comp">
        {status === "authenticated" ? (
          <h1>You Are loggin in as {session.user.email}</h1>
        ) : (
          <>
            <h1>Choose how you want to Sign-In </h1>
            <div className="div">
              {Object.values(authProviders).map((provider) => (
                <div key={provider.name}>
                  <button onClick={() => signIn(provider.id)}>
                    Sign in with {provider.name}
                  </button>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
      {devKeys === devModeSecret && (
        <div className="devmode">
          <h1>Dev Mode Activated</h1>
        </div>
      )}
    </>
  );
}
export async function getServerSideProps(context) {
  const authProviders = await getProviders();
  return {
    props: { authProviders },
  };
}
