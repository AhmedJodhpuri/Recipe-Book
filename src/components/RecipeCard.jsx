import { Link } from 'react-router-dom';

const RecipeCard = ({ recipe }) => {
  return (
    <Link to={`/recipe/${recipe.id}`} className="block">
    <div className="border p-4 rounded-md shadow-md hover:shadow-lg">
      <img src={recipe.image} alt={recipe.title} className="w-full h-40 object-cover rounded-md" />
      {/* <h2 className="text-lg font-bold mt-2">{recipe.title}</h2> */}
      <h2 className="text-lg font-bold mt-2">
      {recipe.title.length > 40 ? `${recipe.title.substring(0, 35)}...` : recipe.title}
      </h2>

      <p className="text-gray-600 text-sm mt-1">
  {recipe.summary ? recipe.summary.replace(/<[^>]*>/g, '').substring(0, 100) : 'No summary available...'}
</p>
      <Link to={`/recipe/${recipe.id}`} className="text-blue-500 hover:underline mt-2 block">View Details</Link>
    </div>
    </Link>
  );
};

export default RecipeCard;
