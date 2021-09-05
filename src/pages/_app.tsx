import { AppProps } from "next/dist/shared/lib/router/router";
import Head from "next/head";
import GlobalStyles from "../styles/global";

function MyApp({ Component, pageProps }:AppProps) {
  return (
    <>
      <Head>
        <title>React Avançado - Boilerplate </title>
        <link rel="shortcut icon" href="/img/icon-512.png"/>
        <link rel="apple-touch-icon" href="/img/icon-512.png"/>
        <meta name="description" content="project" />
      </Head>
      <Component {...pageProps} />
      <GlobalStyles />
    </>

  )
}

export default MyApp;