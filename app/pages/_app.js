import store from "@/app/store";
import Navbar from "@/components/layout/Navbar";
import Notification from "@/components/layout/Notification";
import "@/styles/globals.css";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Notification />
      <Navbar />
      <Component {...pageProps} />
    </Provider>
  );
}
