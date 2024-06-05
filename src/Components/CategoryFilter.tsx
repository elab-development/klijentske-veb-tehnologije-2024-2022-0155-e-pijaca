import React from 'react';
import '../css/VocePovrce.css';

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <div className="category">
      <h3>Kategorije</h3>
      <ul>
        {categories.map((category) => (
          <li
            key={category}
            onClick={() => onSelectCategory(category)}
            style={{ cursor: 'pointer', fontWeight: selectedCategory === category ? 'bold' : 'normal' }}
          >

            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryFilter;

