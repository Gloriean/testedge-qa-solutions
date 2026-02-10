import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import QAAudit from "./pages/QAAudit";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          {/* Route wrapper for pages that need the main layout */}
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/about" element={<Layout><About /></Layout>} />
          <Route path="/qa-audit" element={<Layout><QAAudit /></Layout>} />
          <Route path="/contact" element={<Layout><Contact /></Layout>} />

          {/* 404 Page usually has layout too, or could be standalone. Using layout for consistency */}
          <Route path="*" element={<Layout><NotFound /></Layout>} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;
