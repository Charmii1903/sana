import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Birthday from "./pages/Birthday";
import Message from "./pages/Message";
import Memory from "./pages/Memory";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/birthday" element={<Birthday />} />
        <Route path="/message" element={<Message />} />
        <Route path="/memory" element={<Memory />} />
      </Routes>
    </Router>
  );
}

export default App;
