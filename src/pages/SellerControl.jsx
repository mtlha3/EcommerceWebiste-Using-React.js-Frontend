import React from 'react';
import Swal from 'sweetalert2';
import Card from '../components/Card'; // Import the Card component for product display
import './SellerControl.css'; // Create styles for SellerControl

const SellerControl = () => {

  // Function to handle the SweetAlert form for adding a product
  const handleAddProduct = () => {
    Swal.fire({
      title: 'Add Product',
      html: `
        <input type="text" id="productName" class="swal2-input" placeholder="Product Name">
        <input type="text" id="productPrice" class="swal2-input" placeholder="Product Price">
        <input type="text" id="productDescription" class="swal2-input" placeholder="Product Description">
      `,
      confirmButtonText: 'Add Product',
      showCancelButton: true,
      preConfirm: () => {
        const productName = document.getElementById('productName').value;
        const productPrice = document.getElementById('productPrice').value;
        const productDescription = document.getElementById('productDescription').value;

        if (!productName || !productPrice || !productDescription) {
          Swal.showValidationMessage('Please enter all fields');
          return false;
        }

        return { productName, productPrice, productDescription };
      }
    }).then(result => {
      if (result.isConfirmed) {
        // Logic to add product (you can implement API calls here)
        Swal.fire('Product Added', '', 'success');
      }
    });
  };

  // Function to handle the SweetAlert form for editing a product
  const handleEditProduct = () => {
    Swal.fire({
      title: 'Edit Product',
      html: `
        <input type="text" id="productName" class="swal2-input" placeholder="Product Name">
        <input type="text" id="productPrice" class="swal2-input" placeholder="Product Price">
        <input type="text" id="productDescription" class="swal2-input" placeholder="Product Description">
      `,
      confirmButtonText: 'Update Product',
      showCancelButton: true
    }).then(result => {
      if (result.isConfirmed) {
        // Logic to edit product (you can implement API calls here)
        Swal.fire('Product Updated', '', 'success');
      }
    });
  };

  // Function to handle the SweetAlert form for deleting a product
  const handleDeleteProduct = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Delete',
      cancelButtonText: 'Cancel'
    }).then(result => {
      if (result.isConfirmed) {
        // Logic to delete product (you can implement API calls here)
        Swal.fire('Deleted!', 'Product has been deleted.', 'success');
      }
    });
  };

  return (
    <div className="seller-control">
      <header className="seller-header">
        <button className="control-btn" onClick={handleAddProduct}>Add Product</button>
        <button className="control-btn" onClick={handleEditProduct}>Edit Product</button>
        <button className="control-btn" onClick={handleDeleteProduct}>Delete Product</button>
      </header>

      {/* Render the Card component to display products */}
      <div className="product-list">
        <Card userRole="admin" />
      </div>
    </div>
  );
};

export default SellerControl;
