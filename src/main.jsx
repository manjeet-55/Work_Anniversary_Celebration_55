import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

const registerServiceWorker = async () => {
  if ("serviceWorker" in navigator) {
    try {
      const registration = await navigator.serviceWorker.register(
        "/OneSignalSDKWorker.js"
      );
      console.log("Service Worker registered with scope:", registration.scope);
    } catch (error) {
      console.error("Service Worker registration failed:", error);
    }
  }
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
registerServiceWorker();
