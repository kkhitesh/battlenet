import "./App.css";
import { Login } from "./pages/login";
import { Toaster } from "react-hot-toast";
import { Units } from "./pages/units";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./utils/ProtectedRoute";
import LoginRoute from "./utils/LoginRoute";

function App() {
  return (
    <div className="flex items-center justify-center h-screen">
      <Toaster />
      {/* <Login /> */}
      {/* <Units /> */}
      <Router>
        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<Units />} />
          </Route>
          <Route element={<LoginRoute />}>
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
