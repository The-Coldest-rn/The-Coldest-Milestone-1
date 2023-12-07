import logo from './logo.svg';
import './App.css';
import Menu from "./components/Menu";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Map from './pages/Map';
import Account from './pages/Account';
import Settings from './pages/Settings';
import Results from './pages/Results';

function App() {
  return (
      <Router>
    <div className="App">
      <Menu />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/map" element={<Map />} />
        <Route path="/account" element={<Account />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </div>
      </Router>
  );
}

export default App;
