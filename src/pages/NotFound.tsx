import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-6xl px-10 flex flex-col items-center justify-center min-h-screen gap-4 text-center">
      <h1 className="font-bold text-4xl">404 - Pàgina no trobada</h1>
      <p className="text-md">
        Ho sentim, el pressupost o la pàgina que busques no existeix.
      </p>
      <Link to="/" className="underline">
        Torna a l'inici
      </Link>
    </div>
  );
}
