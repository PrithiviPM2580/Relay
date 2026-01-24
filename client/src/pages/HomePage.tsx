import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <div className="home">
      <h1 className="home-title">Share Code in Real Time</h1>
      <p className="home-para">
        A powerful online code editor for interviews, live debugging, teaching,
        and real-time collaboration with developers anywhere.
      </p>
      <Button className="bg-border hover:bg-border-hover cursor-pointer">
        Share the Code
      </Button>
    </div>
  );
}
