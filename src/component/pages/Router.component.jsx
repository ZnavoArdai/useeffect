import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./about.component";
import Home from "./home.component";
import Game from "./game/Game.component";
import No from "./not.component";
import Hola from "./not-found/not-found";
const Router = () => {
  return (
    <>
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="game" element={<Game />} />
        <Route path="noFound" element={<No />} />
        <Route path="*" element={<Hola />} />
      </Routes>
    </>
  );
};

export default Router;
