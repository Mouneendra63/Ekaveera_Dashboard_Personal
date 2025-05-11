import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import AdminDashboard from "./pages/temp";
import Card from './components/404'
import MedicalLogo from "./pages/landingpage";
function AppWrapper() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={< MedicalLogo/>} />
        <Route path="/ekaveeradashboard" element={<AdminDashboard />} />
        <Route path="*" element={<Card />} />
      </Routes>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;
