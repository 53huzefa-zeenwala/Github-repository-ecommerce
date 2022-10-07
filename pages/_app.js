import Alert from "../components/Alert";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { StateContext } from "../context/Statecontext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
      <Navbar />
      <Component {...pageProps} />
      <Alert />
      <Footer />
    </StateContext>
  );
}

export default MyApp;
