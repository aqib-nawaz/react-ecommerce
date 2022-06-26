import axios from "axios";
import "./Product.css";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Product() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [product, setProduct] = useState([]);

    const getProduct = async (id) => {
        const url = `https://fakestoreapi.com/products/${id}`;
        const { data } = await axios.get(url);
        setProduct(data);
    };

    useEffect(() => {
        getProduct(id);
    }, [id]);

    
    return (
        <div className="container">
            <div className="product-wrapper">
                <div className="product-img">
                    <img src={product.image} alt={product.title} />
                </div>
                <div className="product-details">
                    <div className="title">
                        <h2>{product.title}</h2>
                    </div>
                    <div className="description">
                        <p>{product.description}</p>
                    </div>
                    <div className="category">
                        <b>Category: </b><p>{product.category}</p>
                    </div>
                    <div className="price">
                        <b>Price: </b>
                        <span>${product.price}</span>
                    </div>
                    <div className="actions">
                        <button
                            className="btn btn-danger"
                            onClick={() => {
                                navigate(-1);
                            }}
                        >
                            Back
                        </button>
                        <button className="btn btn-success">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;
