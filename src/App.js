import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import RecipeDetails from "./pages/RecipeDetails";
import { useState } from "react";

const App = () => {
  const [recipes, setRecipes] = useState([]);
  
  const onSearch = (data) => {
    setRecipes(data);
  };

  return (
    <Router>
      <Navbar onSearch={onSearch} />
      <Routes>
        <Route path="/" element={<Home recipes={recipes} setRecipes={setRecipes} />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
      </Routes>
    </Router>
  );
};

export default App;