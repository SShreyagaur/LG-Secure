// src/components/Navbar.tsx
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-red-600 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="text-2xl font-bold">LG Secure</div>
        <div className="space-x-6">
          <Link to="/quiz" className="hover:underline">Quiz</Link>
          <Link to="/scraper" className="hover:underline">Scraper</Link>
          <Link to="/login" className="border border-white px-4 py-1 rounded hover:bg-white hover:text-red-600 transition">Login</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

