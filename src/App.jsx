import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import GetRequest from "./GetRequest";
import PostRequest from "./PostRequest";
function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <h2>App</h2>
      <PostRequest />
      {/* <GetRequest /> */}
    </QueryClientProvider>
  );
}

export default App;
