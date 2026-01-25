import { useParams } from "react-router-dom";

export default function CodesharePage() {
  const { id } = useParams<{ id: string }>();

  return <div className="codeshare">Codeshare {id}</div>;
}
