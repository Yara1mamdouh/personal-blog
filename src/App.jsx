import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import PostDetails from "./pages/PostDetails";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/post/:id" element={<PostDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;