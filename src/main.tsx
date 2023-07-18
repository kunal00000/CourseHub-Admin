import { MantineProvider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import { Notifications } from "@mantine/notifications";
import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";

import App from "./App.tsx";
import "./index.css";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <MantineProvider
      theme={{ fontFamily: "Verdana, sans-serif" }}
      withGlobalStyles
      withNormalizeCSS
    >
      <ModalsProvider>
        <Notifications limit={5} />
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </ModalsProvider>
    </MantineProvider>
  </React.StrictMode>,
);
