// JS Packages
import React from "react";

// local files
import { TodoProvider } from "../todoContext";
import { AppUI } from "./AppUI"

function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  )
  ;
}

export default App;
