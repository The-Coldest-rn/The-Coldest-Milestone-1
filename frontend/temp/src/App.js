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
                <Menu element={<logo />} />
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/user/signup" element={<SignUp />} />
                    <Route path="/user/map" element={<Map />} />
                    <Route path="/user/account" element={<Account />} />
                    <Route path="/user/settings" element={<Settings />} />
                    <Route path="/user/results" element={<Results />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;