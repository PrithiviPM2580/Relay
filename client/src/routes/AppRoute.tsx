import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "@/pages/SignUp";
import Login from "@/pages/Login";

export default function AppRoute() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div>Home Page</div>} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}
