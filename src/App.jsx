import { Route, Routes } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./assets/style/main.css";
import "./assets/style/import/funcky.css";
import Home from "./pages/Home.jsx";
import Courses from "./pages/Courses.jsx";
import Contact from "./pages/Contact.jsx";
import Pricing from "./pages/Pricing.jsx";
import About from "./pages/About.jsx";
import Topbanner from "./component/atoms/Topbanner.jsx";
// import Navbar from "./component/Home/Navbar";
import DefaultLayout from "./layout/DefultLayout";

function App() {
  return (
    <main>
      <Router>
        <Topbanner />
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<DefaultLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="courses" element={<Courses />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </Router>
    </main>
  );
}

export default App;
