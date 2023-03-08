import "./App.css";
import { Routes, Route } from "react-router-dom";
import Hello from "./components/Hello";
import Login from "./components/Login";
import Header from "./components/Header";
import LogoutSuccess from "./components/LogoutSuccess";
// import BEcontent from "./components/BEcontent";
import ProtectedRoute from "./components/ProtectedRoute";
import BEcontent from "./components/BEcontent";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route exact path="/fromBackend" element={<BEcontent />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/logout" element={<LogoutSuccess />} />
        <Route
          exact
          path="/about"
          element={
            <ProtectedRoute>
              <Hello />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
