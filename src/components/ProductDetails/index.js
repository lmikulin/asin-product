import React from 'react';
import { useProductStateValue } from '../../context/ProductContext';

const Breadcrumb = ({list}) => {
  return <ol className="breadcrumb" style={{backgroundColor: 'initial', padding: '0.5rem 0'}}>
    {list.map(({name}) => <li key={name} className="breadcrumb-item">{name}</li>)}
  </ol>
}

const Ranking = ({list}) => {
  return <table className="table">
    <caption>Bestseller Rank</caption>
    <tbody>
      {list.map(({category, rank}) => <tr key={category}>
        <th scope="row">{category}</th>
        <td>{rank}</td>
      </tr>)}
    </tbody>
  </table>
}

const ProductPanel = ({ product }) => {
  const {
    title,
    asin,
    categories,
    bestsellers_rank,
    main_image,
    dimensions
  } = product;

  return <div>
    <Breadcrumb list={categories} />
    <h4>{title}</h4>
    <figure>
      <img src={main_image.link} alt={title} width="180"/>
      <figcaption>{dimensions}</figcaption>
    </figure>
    <p>{asin}</p>
    {bestsellers_rank && <Ranking list={bestsellers_rank} />}
  </div>;
}

const ProductDetails = () => {
  const { product } = useProductStateValue();

  return product ?
    <ProductPanel product={product}/> :
    <p>Product Details...</p>;
}

export default ProductDetails;