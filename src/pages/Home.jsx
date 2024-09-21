// src/pages/Home.jsx
import React from 'react';
import { useProduct } from '../context/ProductContext'; // Ensure this is the correct import
import Nav from '../components/Nav';
import ImgSlider from '../components/ImgSlider';
import Card from '../components/Card';

const Home = () => {
  const { products } = useProduct(); // Get products from context

  return (
    <div>
      <Nav />
      <ImgSlider/>
      <h2>Products</h2>
      {products.length > 0 ? (
        <Card products={products} /> // Pass products to Card component
      ) : (
        <p>No products available.</p>
      )}
    </div>
  );
};

export default Home;
