import { useSession } from "next-auth/react";
import Unauthenticated from "./Unauthenticated";
export const AuthenticationGate = ({ children }) => {
  const { data: session, status } = useSession();
  console.log({ session });
  return status === "authenticated" ? (
    <>{children}</>
  ) : (
    <>
      <Unauthenticated />
    </>
  );
};
