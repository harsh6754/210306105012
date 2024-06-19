import React from 'react';

const Sort = ({ setSortBy }) => {
  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  return (
    <div className="mb-4">
      <select onChange={handleSortChange} className="p-2 border">
        <option value="price">Price</option>
        <option value="rating">Rating</option>
        <option value="discount">Discount</option>
      </select>
    </div>
  );
};

export default Sort;
