import "../styles/tailwind.css";
import "../styles/style.min.css";

// react
import { useEffect } from "react";

// react query
import { QueryClient, QueryClientProvider } from "react-query";

// live chat widget
import { Crisp } from "crisp-sdk-web";

// contexts
import { StartFormProvider } from "../contexts/StartFormContext";
import { StartProvider } from "../contexts/StartContext";

function MyApp({ Component, pageProps }) {
  // load crisp chat widget
  useEffect(() => {
    Crisp.configure("3f85b7f8-2a37-4a0e-ab6d-556042a375f1");
  }, []);

  // react query
  const client = new QueryClient();

  return (
    <>
      <QueryClientProvider client={client}>
        <StartFormProvider>
          <StartProvider>
            <Component {...pageProps} />;
          </StartProvider>
        </StartFormProvider>
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
