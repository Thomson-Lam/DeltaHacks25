import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Home.tsx' // remove later after testing is done 
import Login from './Login.tsx'
import Action from './Action.tsx'
import Welcome from './Welcome.tsx'
 
// <Route path="/choice" element={<Choice />} />
function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Welcome />} /> {/* TODO: change to welcome after done*/}
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="Action" element={<Action />} />
    </Routes>
    </Router>
  );
}

export default App;
