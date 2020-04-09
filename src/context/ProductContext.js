import React, { useState, createContext, useContext } from 'react';
import { getProductInfo } from '../api/rainforest';
import { getDatabase, saveProduct, getProduct } from '../helpers/db';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [product, setProduct] = useState();

  const fetchProduct = (db, asin) => {
    getProductInfo(asin, data => {
      const { product } = data;

      // save in context
      setProduct(product);

      // store in the database
      saveProduct(db, product);
    })
  }

  const handleDbResult = (db, asin, data) => {
    if (data) {
      setProduct(data);
    } else {
      fetchProduct(db, asin);
    }
  }

  const chooseProduct = asin => {
    // fetch the product from the database first
    const db = getDatabase();

    getProduct(db, asin, handleDbResult, fetchProduct);
  }

  const value = {
    product,
    chooseProduct
  };

  return <ProductContext.Provider value={value}>
    {children}
  </ProductContext.Provider>
}

export const useProductStateValue = () => useContext(ProductContext);