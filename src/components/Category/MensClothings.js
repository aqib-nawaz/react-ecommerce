import React, { useEffect, useState } from "react";
import axios from "axios";
import './MensClothing.css'
import ProductCard from "../ProductCard";

const MensClothing = () => {
    const [products, setProducts] = useState([]);

    const getAllProducts = async () => {
        const url = `https://fakestoreapi.com/products/category/men's%20clothing`;
        const { data } = await axios.get(url);
        setProducts(data);
    };

    useEffect(() => {
        getAllProducts();
    }, []);


    return (
        <div className="container">
            <div className="products-wrapper">
                <h2>
                    Category - <span style={{ color: "red" }}>Men's Clothing</span>
                </h2>
                <div className="men-products">
                    {products.map((p) => (
                        <ProductCard
                            id={p.id}
                            title={p.title}
                            price={p.price}
                            url={p.image}
                            key={p.id}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MensClothing;
