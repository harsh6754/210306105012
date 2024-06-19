import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductList from '../components/ProductList';
import Filter from '../components/Filter';
import Sort from '../components/Sort';
import Pagination from '../components/Pagination';

const AllProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({});
  const [sortBy, setSortBy] = useState('price');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    axios.get('http://api.testserver.com/products', {
      params: {
        ...filters,
        sortBy,
        page: currentPage
      }
    })
      .then(response => {
        setProducts(response.data.products);
        setTotalPages(response.data.totalPages);
      })
      .catch(error => console.error('Error fetching products:', error));
  }, [filters, sortBy, currentPage]);

  return (
    <div className="p-4">
      <Filter categories={['Phone', 'Computer', 'TV','Earphone','Tablet','Charger','Mouse','Keypad','Bluetooth','pendrive','Speaker','Headsets','Laptop','PC']} companies={['AWZ', 'FLP', 'SNP', 'MYN', 'AZO']} setFilters={setFilters} />
      <Sort setSortBy={setSortBy} />
      <ProductList products={products} />
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
    </div>
  );
};

export default AllProductsPage;
