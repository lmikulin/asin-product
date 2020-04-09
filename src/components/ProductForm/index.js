import React, {useState} from 'react';
import { useProductStateValue } from '../../context/ProductContext';

const ProductForm = () => {
  const [asin, setAsin] = useState('');
  const { chooseProduct } = useProductStateValue();

  const handleInput = event => {
    const {target: {value}} = event;
    setAsin(value);
  }

  const handleSubmit = () => {
    chooseProduct(asin);
  }

  return <div className="mt-5">
    <form>
      <div className="form-group">
        <label>Amazon Product ASIN</label><br/>
        <input type="text" placeholder="B002QYW8LW" value={asin} onChange={handleInput} />
      </div>
      <button type="button" className="btn btn-outline-dark" onClick={handleSubmit}>Get Product Details</button>
    </form>
  </div>;
}

export default ProductForm;