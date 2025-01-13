import { useState } from "react";
import { fetchRecipes } from "../services/api";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleSearch = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
        if (!query) {
            const data = await fetchRecipes(); 
            console.log('Search data:', data); // Add this to debug
            if (data) {
                onSearch(data);
            }
        } else {
            const data = await fetchRecipes(query);
            console.log('Search data:', data); // Add this to debug  
            if (data) {
                onSearch(data);
            }
        }
    } catch (error) {
        console.error('Search error:', error); // Add this to debug
        setError('Failed to load recipes. Please try again later.');
    } finally {
        setLoading(false);
    }
};


  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search recipes..."
          className="border p-2 rounded-md text-black"
          disabled={loading}
        />
        <button
          type="submit"
          className={`${
            loading ? 'bg-gray-400' : 'bg-blue-500'
          } text-black p-2 rounded-md ml-2`}
          disabled={loading}
        >
          {loading ? 'Searching...' : 'Search'}
        </button>
      </form>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
};

export default SearchBar;