import React from 'react';

const Filter = ({ categories, companies, setFilters }) => {
  const handleFilterChange = (e) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="mb-4">
      <select name="category" onChange={handleFilterChange} className="mr-2 p-2 border">
        <option value="">All Categories</option>
        {categories.map(category => (
          <option key={category} value={category}>{category}</option>
        ))}
      </select>
      <select name="company" onChange={handleFilterChange} className="mr-2 p-2 border">
        <option value="">All Companies</option>
        {companies.map(company => (
          <option key={company} value={company}>{company}</option>
        ))}
      </select>
      <select name="rating" onChange={handleFilterChange} className="mr-2 p-2 border">
        <option value="">All Ratings</option>
        {[5, 4, 3, 2, 1].map(rating => (
          <option key={rating} value={rating}>{rating} & up</option>
        ))}
      </select>
      <select name="availability" onChange={handleFilterChange} className="mr-2 p-2 border">
        <option value="">All</option>
        <option value="true">In Stock</option>
        <option value="false">Out of Stock</option>
      </select>
    </div>
  );
};

export default Filter;
