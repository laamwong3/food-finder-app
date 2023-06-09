import { createTheme, NextUIProvider, useSSR } from "@nextui-org/react";
import type { AppProps } from "next/app";
import { Montserrat } from "next/font/google";
import "@/styles/global.css";
import { trpc } from "@/utils/trpc";

const montserrat = Montserrat({ subsets: ["latin"] });

const theme = createTheme({
  type: "dark",
  theme: {
    colors: {
      background: "#26292B",
    },
  },
});

function App({ Component, pageProps }: AppProps) {
  const { isBrowser } = useSSR();

  return isBrowser ? (
    <NextUIProvider theme={theme}>
      <main className={montserrat.className}>
        <Component {...pageProps} />
      </main>
    </NextUIProvider>
  ) : null;
}

export default trpc.withTRPC(App);
