import React from 'react';
import ProductForm from './components/ProductForm';
import ProductDetails from './components/ProductDetails';
import './AsinProduct.scss';

function AsinProduct() {
  return (
    <div className="asin-product container-fluid">
      <div style={{display: 'flex'}}>
        <div style={{width: '200px'}}>
          <ProductForm />
        </div>
        <div style={{flexGrow: '1'}}>
          <ProductDetails />
        </div>
      </div>
    </div>
  );
}

export default AsinProduct;
