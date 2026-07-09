import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4 text-2xl">
      <h1 className="font-bold">404 - Pàgina no trobada</h1>
      <p>Ho sentim, el pressupost o la pàgina que busques no existeix.</p>
      <Link to="/" className="underline">
        Torna a l'inici
      </Link>
    </div>
  );
}
