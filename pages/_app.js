import React from "react";
import Head from "next/head";
import "./global.css";
import Headroom from "react-headroom";
import MainNav from "../components/MainNav";

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
        <title>E-Store</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <div className="bg-white w-full">
       <Headroom>
        <MainNav />
       </Headroom>
      <Component {...pageProps} />
      </div>
    </React.Fragment>
  );
}

export default MyApp;
