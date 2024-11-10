import { AboutPage } from "@pages/AboutPage/AboutPage";
import { AuthenticationPage } from "@pages/AuthenticationPage/AuthenticationPage";
import { BlindTypePage } from "@pages/BlindTypePage/BlindTypePage";
import { CatalogPage } from "@pages/CatalogPage/CatalogPage";
import { MainPage } from "@pages/MainPage/MainPage";
import { ReactionTrainerPage } from "@pages/ReactionTrainerPage/ReactionTrainerPage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/catalog" element={<CatalogPage />} />
      <Route path="/blind-type" element={<BlindTypePage />} />
      <Route path="/reaction-trainer" element={<ReactionTrainerPage />} />
      <Route path="/auth" element={<AuthenticationPage />} />
    </Routes>
  );
}

export default App;
