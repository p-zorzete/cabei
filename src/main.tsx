import { ConfigProvider } from "antd";
import ReactDOM from "react-dom/client";
import ptBR from "antd/locale/pt_BR";
import React from "react";
import App from "./App";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ConfigProvider locale={ptBR}>
      <App />
    </ConfigProvider>
  </React.StrictMode>
)