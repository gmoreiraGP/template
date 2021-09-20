import Head from "next/head";
import { AuthProvider, useAuth } from "../contexts/AuthContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      {Component.requiresAuth && (
        <Head>
      
        </Head>
      )}
      {/* <AuthProvider> */}
        <Component {...pageProps} />
      {/* </AuthProvider> */}
    </>
  );
}

export default MyApp;
