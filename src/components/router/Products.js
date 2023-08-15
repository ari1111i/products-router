import React from "react";
import { Link } from "react-router-dom";
import productsData from "./productsData";
import { styled } from 'styled-components'


const Products = () => {
  return (
    <Div>
      <h2>Products</h2>
      <Ul>
        {productsData.map((product) => (
          <Li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.name}</Link>
          </Li>
        ))}
      </Ul>
    </Div>
  );
};

const Div = styled('div')`
  padding: 20px;
`
const Ul = styled('ul')`
  list-style-type: none;
  padding: 0;
`
const Li = styled('li')`
  margin-bottom: 10px;
`
const A = styled('a')`
  text-decoration: none;
  color: #333;
&:hover{
  text-decoration: underline;
}
`


export default Products;
