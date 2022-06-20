import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./style/App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="circle-top"></div>
        <div className="circle-bottom"></div>
        <div className="trans"></div>
        <div className="main"></div>
      </div>
    </Router>
  );
}

export default App;
