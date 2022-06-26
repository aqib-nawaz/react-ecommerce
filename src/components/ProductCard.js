import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const ProductCard = ({ id, title, desc, url, rating, price }) => {
    return (
        <Card
            style={{
                width: "16rem",
                marginTop: "20px",
                padding: "2px",
                boxShadow: `rgb(98 98 98 / 38%) 0px 0px 43px -3px`,
            }}
        >
            <Card.Img
                variant="top"
                src={url}
                alt={title}
                width="100px"
                height="190px"
            />
            <Card.Body>
                <Card.Title style={{fontSize: "18px"}}>{title}</Card.Title>
                <Card.Text>
                    {" "}
                    Price: <span style={{ fontWeight: "bold" }}>${price} </span>{" "}| 
                    <del style={{ color: "gray" }}> ${price + 10}</del>
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                {/* <Card.Link  className="">Card Link</Card.Link>
                <Card.Link >Another Link</Card.Link> */}
                <Link to={`/product/${id}`}>
                    <button
                        style={{ width: "100%", fontWeight: "bold" }}
                        className="btn btn-danger"
                    >
                        {" "}
                        View
                    </button>
                </Link>
            </Card.Footer>
        </Card>
    );
};

export default ProductCard;
