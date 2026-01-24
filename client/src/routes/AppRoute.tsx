import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUpPage from "@/pages/SignUpPage";
import LoginPage from "@/pages/LoginPage";
import HomePage from "@/pages/HomePage";
import Navbar from "@/components/Navbar";
import CodesharePage from "@/pages/CodesharePage";

export default function AppRoute() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/:id" element={<CodesharePage />} />
      </Routes>
    </Router>
  );
}
