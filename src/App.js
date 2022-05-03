import { Routes, Route, Link } from "react-router-dom";
import AppBar from "./components/shared/appBar";
import Home from "./components/home/home";
import Download from "./components/download/download";
import './App.css';

function App() {
  return (
    <div className="container-fluid p-0">
      <AppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="download" element={<Download />} />
      </Routes>
    </div>
  );
}

export default App;
