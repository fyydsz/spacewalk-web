import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import NotFound from "./components/Pages/NotFound";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import "./App.css"


const App: React.FC = () => {
  return (
    <MainLayout />
  );
};

const MainLayout: React.FC = () => {
  const location = useLocation();
  const isNotFound = location.pathname !== "/";
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", ""); // Ambil ID dari hash
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100); // Delay dikit biar elemen udah ada sebelum scroll
      }
    }
  }, [location]); // Run setiap path berubah

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {!isNotFound && <About />}
    </div>
  );
};

export default App;