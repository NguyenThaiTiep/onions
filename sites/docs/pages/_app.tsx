import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@onions/core";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      theme={{
        colors: {
          primary: "#f44336",
        },
      }}
    >
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
