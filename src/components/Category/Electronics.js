import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Electronics.css";
import ProductCard from "../ProductCard";

const Electronics = () => {
    const [products, setProducts] = useState([]);

    const getAllProducts = async () => {
        const url = `https://fakestoreapi.com/products/category/electronics`;

        const { data } = await axios.get(url);
        setProducts(data);
    };

    useEffect(() => {
        getAllProducts();
    }, []);

    return (
        <div className="container ">
            <div className="products-wrapper">
                <h2>
                    Category - <span style={{ color: "red" }}>Electronics</span>
                </h2>
                <div className="products">
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

export default Electronics;
