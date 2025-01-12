import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Home.tsx' // remove later after testing is done 
import Login from './Login.tsx'
import Navbar from './Navbar.tsx'
import Welcome from './Welcome.tsx'
//
// <Route path="/choice" element={<Choice />} />
function App() {
  return (
    <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
    </Routes>
    </Router>
  );
}

export default App;
