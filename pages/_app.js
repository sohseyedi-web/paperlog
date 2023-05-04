import "../styles/globals.css";
import { QueryClient, QueryClientProvider } from "react-query";
import Navbar from "../components/Navbar";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <Component {...pageProps} />
      <Toaster position="top-center"/>
    </QueryClientProvider>
  );
}

export default MyApp;
