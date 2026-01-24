import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUpPage from "@/pages/SignUpPage";
import LoginPage from "@/pages/LoginPage";

export default function AppRoute() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div>Home Page</div>} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}
