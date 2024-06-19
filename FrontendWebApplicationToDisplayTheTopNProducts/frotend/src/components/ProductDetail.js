import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`http://api.testserver.com/products/${id}`)
      .then(response => setProduct(response.data))
      .catch(error => console.error('Error fetching product details:', error));
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="max-w-3xl mx-auto p-4">
      <img src={product.image} alt={product.name} className="w-full h-96 object-cover" />
      <h1 className="text-2xl font-bold mt-4">{product.name}</h1>
      <p>Company: {product.company}</p>
      <p>Category: {product.category}</p>
      <p>Price: ${product.price}</p>
      <p>Rating: {product.rating}</p>
      <p>Discount: {product.discount}%</p>
      <p>Availability: {product.available ? 'In Stock' : 'Out of Stock'}</p>
    </div>
  );
};

export default ProductDetail;
