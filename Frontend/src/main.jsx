import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {SidebarProvider} from "./context/SidebarContext.jsx";
import { Provider } from "react-redux";
import store from "./app/store";
import { AlertMessageProvider } from "./context/AlertMesssageContext.jsx";
import { CartModalProvider } from "./context/CartModalContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SidebarProvider>
      <AlertMessageProvider>
        <CartModalProvider>
        <Provider store={store}>
          <App />
        </Provider>
        </CartModalProvider>
      </AlertMessageProvider>
    </SidebarProvider>
  </StrictMode>
);
