// src/components/Card.jsx
import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import './Card.css';

const Card = () => {
  const { cart, addToCart } = useCart(); // Use the context
  const [products, setProducts] = useState([]);

  // Fetch product data from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="card-container">
      {products.map((product) => (
        <div className="card" key={product.id}>
          <img src={product.image} alt={product.title} className="product-image" />
          <h3 className="product-title">{product.title}</h3>
          <p className="product-description">{product.description.slice(0, 100)}...</p>
          <p className="product-price">${product.price.toFixed(2)}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default Card;
