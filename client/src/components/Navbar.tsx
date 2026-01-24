import { Link } from "react-router-dom";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <header className="header bg-foreground">
      <div className="logo text-white">Logo</div>
      <nav className="flex gap-2 sm:gap-4 md:gap-6 lg:gap-8">
        <Button asChild className="bg-border hover:bg-border-hover">
          <Link to="/sign-up">Sign Up</Link>
        </Button>
        <Button
          asChild
          className="bg-transparent border-border border-2 hover:bg-transparent"
        >
          <Link to="/login">Login</Link>
        </Button>
      </nav>
    </header>
  );
}
