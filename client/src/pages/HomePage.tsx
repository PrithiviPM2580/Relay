import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { generateShortId } from "@/utils/index";

export default function HomePage() {
  const navigate = useNavigate();

  const handleShare = () => {
    const newId = generateShortId();
    navigate(`/${newId}`);
  };

  return (
    <div className="home">
      <h1 className="home-title">Share Code in Real Time</h1>
      <p className="home-para">
        A powerful online code editor for interviews, live debugging, teaching,
        and real-time collaboration with developers anywhere.
      </p>
      <Button
        className="bg-border hover:bg-border-hover cursor-pointer"
        onClick={handleShare}
      >
        Share the Code
      </Button>
    </div>
  );
}
