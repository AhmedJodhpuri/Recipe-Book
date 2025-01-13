import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

const Navbar = ({ onSearch }) => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">Recipe Book</Link>
        <SearchBar onSearch={onSearch} />
      </div>
    </nav>
  );
};

export default Navbar;