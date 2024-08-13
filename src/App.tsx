import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App mt-16 bg-gray-800">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
