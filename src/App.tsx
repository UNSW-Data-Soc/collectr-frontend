import { Route, Routes } from "react-router-dom";

import LandingPage from "./pages/landing";
import BlogsPage from "./pages/blogs";
import NotFoundPage from "./pages/notFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/blogs" element={<BlogsPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
