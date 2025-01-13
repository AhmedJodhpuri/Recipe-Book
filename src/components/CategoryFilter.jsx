import React from 'react';

const CategoryFilter = ({ selectedCategory, onCategoryChange }) => {
  // Common recipe categories
  const categories = [
    'All',
    'Main Course',
    'Side Dish',
    'Dessert',
    'Appetizer',
    'Salad',
    'Bread',
    'Breakfast',
    'Soup',
    'Beverage',
    'Sauce',
    'Snack'
  ];

  return (
    <div className="mb-4">
      <select
        value={selectedCategory}
        onChange={(e) => onCategoryChange(e.target.value)}
        className="p-2 border rounded-md text-gray-700 focus:outline-none focus:border-blue-500"
      >
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoryFilter;
