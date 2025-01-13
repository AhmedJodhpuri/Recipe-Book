import axios from 'axios';

const API_KEY = process.env.REACT_APP_SPOONACULAR_API_KEY;
const BASE_URL = 'https://api.spoonacular.com/recipes';

export const fetchRecipes = async (query = '', category = '') => {
  try {
    const params = {
      apiKey: API_KEY,
      query,
      ...(category && category !== 'All' && { type: category.toLowerCase() })
    };

    const response = await axios.get(`${BASE_URL}/complexSearch`, { params });
    return response.data.results;
  } catch (error) {
    console.error('API Error:', error.response?.data || error.message);
    throw error;
  }
};

export const fetchRecipeDetails = async (id) => {
  const response = await axios.get(`${BASE_URL}/${id}/information`, {
    params: { apiKey: API_KEY },
  });
  return response.data;
};

// export const fetchSearchedRecipes = async (query) => {
//   const response = await axios.get(`${BASE_URL}/complexSearch`, {
//     params: { apiKey: API_KEY, query },
//   });
//   return response.data.results;
// };
