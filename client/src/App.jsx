import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Landing from "./components/Landing";
import Menu from "./components/Menu";

function Home() {
  return <main className="p-4"><h1>Hem</h1></main>;
}

const Layout = () => {
  const { pathname } = useLocation();
  return (
    <div className="min-h-screen w-full bg-black">
      {pathname !== "/" && <Menu />}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
};

export default function App() {
  return <Router><Layout /></Router>;
}
