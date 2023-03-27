import { createTheme, NextUIProvider } from "@nextui-org/react";
import type { AppProps } from "next/app";
import { Montserrat } from "next/font/google";
import "@/styles/global.css";

const montserrat = Montserrat({ subsets: ["latin"] });

const theme = createTheme({
  type: "dark",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider theme={theme}>
      <main className={montserrat.className}>
        <Component {...pageProps} />
      </main>
    </NextUIProvider>
  );
}
