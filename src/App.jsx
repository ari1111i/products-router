import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/UI/header/Header";
import Products from "./components/router/Products";
import ProductDetails from "./components/router/ProductDetails";
import './components/router/productsData'
import "./App.css";
import { styled } from 'styled-components'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
      
    </Router>
  );
}

const Home = () => <H2>Home Page</H2>;

const H2 = styled('h2')`
   margin-left: 630px;
`

export default App;
