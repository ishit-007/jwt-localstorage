import './App.css';
import { Routes,Route } from 'react-router-dom';
import Hello from './components/Hello';
import Login from './components/Login';
import Header from './components/Header';
import LogoutSuccess from './components/LogoutSuccess';

function App() {
  return (
    <div className="App">
      <Header />

        <Routes>
          <Route exact path="/about" element={<Hello />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/logout" element={<LogoutSuccess />} />
        </Routes>

      
    </div>
  );
}

export default App;
