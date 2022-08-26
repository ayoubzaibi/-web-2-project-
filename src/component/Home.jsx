import React from "react";
import Card from "react-bootstrap/Card";
import b4 from "../component/images/banner/b4.jpg";
import Products from "./Products";

const Home = () => {
  return (
    <div className="hero">
      <Card className="bg-dark text-white border-0">
        <Card.Img src={b4} alt="background" height="550px" />
        <Card.ImgOverlay>
          <div className="countainer">
            <Card.Title className="card-title display-3 fw-bolder mb-0">
              NEW ARRIVALS
            </Card.Title>
            <Card.Text className="card-text lead fs-2">
              CHECK OUT THE TRENDS
            </Card.Text>
          </div>
        </Card.ImgOverlay>
      </Card>
      <Products />
    </div>
  );
};

export default Home;
