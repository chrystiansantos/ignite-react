import type { AppProps } from "next/app";

import { Roboto } from "@next/font/google";

import "../styles/global.scss";
import { SessionProvider } from "next-auth/react";
import { Header } from "../components/Header";

const roboto = Roboto({
  weight: ["400", "700", "900"],
  style: ["normal"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={roboto.className}>
      <SessionProvider session={pageProps.session}>
        <Header />
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
      </SessionProvider>
    </div>
  );
}
