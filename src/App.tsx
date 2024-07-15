import { Route, Routes } from "react-router-dom";

import LandingPage from "./pages/landing";
import NotFoundPage from "./pages/notFound";
import CoverPhotoPage from "./pages/coverphoto";
import LoginPage from "./pages/login";
import EventsPage from "./pages/events";
import SponsorshipsPage from "./pages/sponsorships";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/coverphotos" element={<CoverPhotoPage />} />
      <Route path="/events" element={<EventsPage />} />
      <Route path="/sponsorships" element={<SponsorshipsPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
