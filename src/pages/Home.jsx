
import { useEffect, useState } from 'react';
import RecipeList from '../components/RecipeList';
import { fetchRecipes } from '../services/api';
import CategoryFilter from '../components/CategoryFilter';

const Home = ({ recipes, setRecipes }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredRecipes, setFilteredRecipes] = useState([]);

  useEffect(() => {
    const loadInitialRecipes = async () => {
      try {
        const data = await fetchRecipes();
        setRecipes(data);
      } catch (error) {
        console.error('Failed to load initial recipes:', error);
      }
    };

    if (recipes.length === 0) {
      loadInitialRecipes();
    }
  }, []);

  useEffect(() => {
    filterRecipes();
  }, [selectedCategory, recipes]);

  const filterRecipes = () => {
    if (selectedCategory === 'All') {
      setFilteredRecipes(recipes);
    } else {
      const filtered = recipes.filter(recipe => 
        recipe.dishTypes?.includes(selectedCategory.toLowerCase()) ||
        recipe.type === selectedCategory.toLowerCase()
      );
      setFilteredRecipes(filtered);
    }
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="container mx-auto mt-6">
      <h1 className="text-2xl font-bold mb-4">Recipes</h1>
      {/* <CategoryFilter 
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      /> */}
      {filteredRecipes.length > 0 ? (
        <RecipeList recipes={filteredRecipes} />
      ) : (
        <p> Loading...</p>
      )}
    </div>
  );
};

export default Home;