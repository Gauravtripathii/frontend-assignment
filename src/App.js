import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Doctor from "./components/Doctor";
import Contact from "./components/Contact";
import Medicine from "./components/Medicine";
import Nav from "./components/Nav";

import "./style/App.css";
import "./style/Content.css";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="circle-top"></div>
        <div className="circle-bottom"></div>
        <div className="trans"></div>
        <div className="main">
          <Nav />
          <div className="Content">
            <Routes>
              <Route path="/" element={<Navigate to="/doctor" />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/doctor" element={<Doctor />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/medicine" element={<Medicine />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
