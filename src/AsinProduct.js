import React from 'react';
import ProductForm from './components/ProductForm';
import ProductDetails from './components/ProductDetails';

import './AsinProduct.scss';

function AsinProduct() {
  return (
    <div className="container-fluid">
      <div className="d-flex">
        <div className="product-form ml-5">
          <ProductForm />
        </div>
        <div className="product-details ml-5">
          <ProductDetails />
        </div>
      </div>
    </div>
  );
}

export default AsinProduct;
