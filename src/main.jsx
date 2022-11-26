import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const shinCodeInfo = {
  name: "shincode",
  age: 24,
};

const ShinCodeContext = createContext(shinCodeInfo);

ReactDOM.createRoot(document.getElementById("root")).render(
  <ShinCodeContext.Provider value={shinCodeInfo}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ShinCodeContext.Provider>
);

export default ShinCodeContext;
