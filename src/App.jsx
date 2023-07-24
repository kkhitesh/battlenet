import { useState } from "react";
import "./App.css";
import { Login } from "./pages/login";
import { Toaster } from "react-hot-toast";
import { Units } from "./pages/units";

function App() {
  return (
    <div className="flex items-center justify-center">
      <Toaster />
      <Login />
      {/* <Units /> */}
    </div>
  );
}

export default App;
