import React from "react";
import { useNavigate } from "react-router-dom";

export default function Landing() {
  const nav = useNavigate();
  return (
    <div className="min-h-screen flex items-center justify-center">
      <h1
        className="text-4xl font-semibold select-none text-white"
        onClick={() => nav("/home")}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') nav('/home');
        }}
        aria-label="Gå vidare"
      >
        Samuel Åhlander
      </h1>
    </div>
  );
}

