import { Route, Routes } from "react-router-dom";

import LandingPage from "./pages/landing";
import NotFoundPage from "./pages/notFound";
import CoverPhotoPage from "./pages/coverphoto";
import LoginPage from "./pages/login";
import BlogsPage from "./pages/blogs";
import ResourcesPage from "./pages/resources";
import EventsPage from "./pages/events";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/blogs" element={<BlogsPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/coverphotos" element={<CoverPhotoPage />} />
      <Route path="/resources" element={<ResourcesPage />} />
      <Route path="/events" element={<EventsPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
