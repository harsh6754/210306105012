import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AllProductsPage from './components/AllProductsPage';
import ProductDetailPage from './components/ProductDetailPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AllProductsPage />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
      </Routes>
    </Router>
  );
};

export default App;
