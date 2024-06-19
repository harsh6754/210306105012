import React from 'react';
import { Link } from 'react-router-dom';

const ProductList = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map(product => (
        <div key={product.id} className="border p-4 rounded-lg">
          <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
          <h2 className="text-lg font-bold mt-2">{product.name}</h2>
          <p>Company: {product.company}</p>
          <p>Category: {product.category}</p>
          <p>Price: ${product.price}</p>
          <p>Rating: {product.rating}</p>
          <p>Discount: {product.discount}%</p>
          <p>Availability: {product.available ? 'In Stock' : 'Out of Stock'}</p>
          <Link to={`/product/${product.id}`} className="text-blue-500 mt-2 inline-block">View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
