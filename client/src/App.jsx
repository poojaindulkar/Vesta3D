import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Customizer from "./pages/Customizer";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Canvas from "./canvas";

function App() {
  const user = localStorage.getItem("token");

  return (
    <Router> {/* Wrap your App content in a Router */}
      <main className="app transition-all-ease-in">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          <Route path="/" element={<Home />} />

        </Routes>

        <Customizer />
        <Canvas />
      </main>
    </Router>
  );
}

export default App;
