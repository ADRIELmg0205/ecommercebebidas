import "@/styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return(
    <ClerkProvider>
    <div className="font-bodyfont">
      <Component {...pageProps} />
    </div>
    </ClerkProvider>
  );
}
