import { AboutPage } from "@pages/AboutPage/AboutPage";
import { BlindTypePage } from "@pages/BlindTypePage/BlindTypePage";
import { CatalogPage } from "@pages/CatalogPage/CatalogPage";
import { MainPage } from "@pages/MainPage/MainPage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/catalog" element={<CatalogPage />} />
      <Route path="/blind-type" element={<BlindTypePage />} />
    </Routes>
  );
}

export default App;
