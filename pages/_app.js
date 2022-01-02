import "../styles/globals.css";
import { SessionProvider, useSession } from "next-auth/react";
function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider refetchInterval={0} session={pageProps.session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
