import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Products.css";
import ProductCard from "./ProductCard";

const Products = () => {
    const [products, setProducts] = useState([]);

    const getAllProducts = async () => {
        const url = `https://fakestoreapi.com/products`;

        const { data } = await axios.get(url);
        setProducts(data);
    };

    useEffect(() => {
        getAllProducts();
    }, []);

    console.log(products);

    return (
        <div className="container ">
            <div className="products-wrapper">
                <h2>All  <span style={{color: "red"}}>Products</span></h2>
                <div className="products">
                    {products.map((p) => (
                        <ProductCard id={p.id} title={p.title} price={p.price} url={p.image} key={p.id} />
                    ))}
                </div>
                
            </div>
        </div>
    );
};

export default Products;
