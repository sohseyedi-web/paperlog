import "../styles/globals.css";
import { QueryClient, QueryClientProvider } from "react-query";
import Navbar from "../components/Navbar";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

export default MyApp;
