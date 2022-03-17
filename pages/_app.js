import "../styles/globals.css";

import { DateProvider } from "../DateContext";

function MyApp({ Component, pageProps }) {
  return (
    <DateProvider>
      <Component {...pageProps} />
    </DateProvider>
  );
}

export default MyApp;
