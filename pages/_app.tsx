import Wrapper from "@/Layout/Wrapper/Wrapper";
import "@/styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function App({ Component, pageProps }: AppProps) {

  const queryClient=new QueryClient();
  return(<>
  <QueryClientProvider client={queryClient}>

  <Wrapper>

<Component {...pageProps} />
<ToastContainer/>
</Wrapper>
  </QueryClientProvider>
  </>
  ) 
}
