import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchRecipeDetails } from '../services/api';
import DOMPurify from 'dompurify';

const RecipeDetails = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadRecipeDetails = async () => {
      try {
        const data = await fetchRecipeDetails(id);
        setRecipe(data);
      } catch (err) {
        setError('Failed to load recipe details. Please try again later.');
      }
    };
    loadRecipeDetails();
  }, [id]);

  if (error) return <p className="text-red-500">{error}</p>;
  if (!recipe) return <p>Loading...</p>;

  return (
    <div className="container mx-auto margin-all p-4 rounded-md shadow-md">
      <h1 className="text-2xl font-bold mb-4">{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} className="h-60 w-full object-cover rounded-md mb-4" />
      <p className="mb-2"><strong>Ingredients:</strong></p>
      <ul className="list-disc pl-6 mb-4">
        {recipe.extendedIngredients.map((ingredient) => (
          <li key={ingredient.id}>{ingredient.original}</li>
        ))}
      </ul>
      <p className="mb-2"><strong>Instructions:</strong></p>
      <div
        className="instructions"
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(recipe.instructions), // Sanitizing the HTML
        }}
      />
    </div>
  );
};

export default RecipeDetails;
