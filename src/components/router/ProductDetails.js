import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import productsData from "./productsData";
import { styled } from 'styled-components'


const ProductDetails = () => {
  const { id } = useParams();
  const product = productsData.find((product) => product.id === parseInt(id));

  const navigate = useNavigate();

  if (!product) {
    return <Div>Product not found</Div>;
  }

  return (
    <Div>
      <h2>{product.name}</h2>
      <img src={product.Image} alt={product.name} />
      <p>{product.description}</p>
      <Button onClick={() => navigate(-1)}>Back</Button>
    </Div>
  );
};

const Div = styled('div')`
   padding: 20px;
`
const Button = styled('button')`
   margin-top: 10px;
   width: 100px;
   height: 30px;
   background-color: blue;
   color: white;
   border: none;
   border-radius: 5px;
&:hover{
   background-color: darkblue;
}
`

export default ProductDetails;
