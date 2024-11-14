import Home from "./pages/home/home.jsx"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import './App.css';
import Navbar from "./components/navbar";
import Footer from "./components/footer/footer.jsx";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
