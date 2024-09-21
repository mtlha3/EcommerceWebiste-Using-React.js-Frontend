// src/pages/SearchResults.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';
import { useProduct } from '../context/ProductContext';

const SearchResults = () => {
    const { products } = useProduct(); // Get all products
    const location = useLocation();
    const query = new URLSearchParams(location.search).get('query').toLowerCase(); // Extract query parameter

    // Filter products based on the search query
    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().startsWith(query)
    );

    return (
        <div className="search-results">
            <h2>Search Results for "{query}"</h2>
            {filteredProducts.length === 0 ? (
                <p>No products found.</p>
            ) : (
                <ul>
                    {filteredProducts.map(product => (
                        <li key={product.id}>
                            <h3>{product.title}</h3>
                            <p>${product.price.toFixed(2)}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SearchResults;
