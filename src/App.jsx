// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import Seller from './pages/Seller';
import SellerControl from './pages/SellerControl';
import { ProductProvider } from './context/ProductContext';
import SearchResults from './pages/SearchResults';
import { CartProvider } from './context/CartContext'; // Import CartProvider
import Cart from './pages/Cart';

const App = () => {
  return (
    <ProductProvider>
      <CartProvider> {/* Wrap with CartProvider */}
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<SignInPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/seller" element={<Seller />} />
            <Route path="/sellercontrol" element={<SellerControl />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/search" element={<SearchResults />} />
          </Routes>
        </Router>
      </CartProvider>
    </ProductProvider>
  );
};

export default App;
