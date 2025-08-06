import { Routes, Route } from 'react-router-dom';   // Just Routes, Route
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Login from './pages/Login';
import Scrap from './pages/Scrap';

//import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/scrap" element={<Scrap />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
