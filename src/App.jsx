import Navbar from "./components/Navbar";
import AddNewJob from "./pages/AddNewJob";
import EditJob from "./pages/EditJob";
import Home from "./pages/Home";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-new-job" element={<AddNewJob />} />
        <Route path="/update-job/:id" element={<EditJob />} />
      </Routes>
    </Router>
  );
}

export default App;
