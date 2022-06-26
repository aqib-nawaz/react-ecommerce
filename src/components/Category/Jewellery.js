import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Jewellery.css";
import ProductCard from "../ProductCard";

const Jewellery = () => {
    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        const url = `https://fakestoreapi.com/products/category/jewelery`;

        const { data } = await axios.get(url);
        setProducts(data);
    };

    useEffect(() => {
        getProducts();
    }, [products]);

    console.log(products);

    return (
        <div className="container ">
            <div className="products-wrapper">
                <h2>
                    Category - <span style={{ color: "red" }}>Jewellery</span>
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

export default Jewellery;
