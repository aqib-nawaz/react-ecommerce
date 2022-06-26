import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Home.css";
import homeBanner from "../images/home.jpg";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";

function Home() {
    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        const url = `https://fakestoreapi.com/products?limit=8`;
        const { data } = await axios.get(url);
        setProducts(data);
    };
    
    useEffect(() => {
        getProducts();

    }, []);

    return (
        <React.Fragment>
            <div className="home-banner">
                <div className="banner-slogan">
                    <h1>Easy Shoping</h1>
                    <p>Proin fermentum leo vel orci porta non pulvinar neque laoreet.
                    Tristique senectus et</p>
                    <button className="btn btn-danger">View More</button>
                </div>
                <img src={homeBanner} alt="home-banner" className="img img-fluid" />
            </div>
            <div className="container">
                <div className="home-wrapper">
                    <h2>
                        Our <span>Products</span>
                    </h2>
                    <div className="products-container">
                        {products.map((p) => (
                            <ProductCard
                                id={p.id}
                                title={p.title}
                                desc={p.description}
                                url={p.image}
                                rating={p.rating.rate}
                                price={p.price}
                                key={p.id}
                            />
                        ))}
                    </div>
                    <Link to="/products">
                        <button id="all-products-btn" className="btn btn-danger">
                            View all products
                        </button>
                    </Link>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Home;
