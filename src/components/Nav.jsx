import React, { useState } from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useProduct } from '../context/ProductContext'; // Assuming you have a ProductContext for products

const Nav = () => {
    const { getTotalItems } = useCart();
    const { products } = useProduct(); // Get products from context
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);

    const handleSearch = (event) => {
        const term = event.target.value;
        setSearchTerm(term);

        // Filter products based on input
        if (term) {
            const filtered = products.filter(product => 
                product.title.toLowerCase().startsWith(term.toLowerCase())
            );
            setFilteredProducts(filtered);
        } else {
            setFilteredProducts([]);
        }
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <Link className="navbar-brand fw-bold" to="/">APNI DUKAN</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="line-1"></span>
                        <span className="line-2"></span>
                        <span className="line-3"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <input 
                                    type="search" 
                                    placeholder='Search Product' 
                                    className='p-2' 
                                    value={searchTerm}
                                    onChange={handleSearch} // Update search term
                                />
                                {filteredProducts.length > 0 && (
                                    <ul className="search-results">
                                        {filteredProducts.map(product => (
                                            <li key={product.id}>
                                                <Link to={`/product/${product.id}`}>{product.title}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                            <li className="nav-item">
                                <Link to="/signin">
                                    <button type="button" className="btn btn-light btn-outline-dark">Login</button>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/seller">
                                    <button type="button" className="btn btn-light btn-outline-dark">Become a Seller</button>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="cart" to="/cart">
                                    <i className="fa-solid fa-cart-shopping fa-xl" style={{ color: "#ffffff" }}></i>
                                    {getTotalItems() > 0 && (
                                        <span className="cart-count">{getTotalItems()}</span>
                                    )}
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Nav;
