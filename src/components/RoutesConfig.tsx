import { Routes, Route } from "react-router-dom";
import { HomePage } from "./HomePage";
import { ProjectDetail1 } from "../pages/ProjectDetail1";
import { ProjectDetail2 } from "../pages/ProjectDetail2";

export function RoutesConfig() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/project/defiwise" element={<ProjectDetail1 />} />
      <Route path="/project/ingenias" element={<ProjectDetail2 />} />
      {/* Agrega más rutas a futuro */}
    </Routes>
  );
}
