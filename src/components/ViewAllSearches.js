import React, { useState, useEffect } from "react";
import axios from "axios";
import { Switch, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Col from "react-bootstrap/Col";
import logo from "./logo.jpg";
import Button from "react-bootstrap/Button";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import ListGroup from "react-bootstrap/ListGroup";

const ViewAllSearches = () => {
  const [ads, setAds] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getAds = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(
          `${process.env.REACT_APP_GETMETHAT_API}/ads`
        );
        console.log(data);
        setAds(data.ads);
        setLoading(false);
      } catch (error) {
        if (error.response) {
          setError(error.response.data.error);
          setTimeout(() => setError(null), 4000);
          setLoading(false);
        } else {
          setError("Network error");
          setTimeout(() => setError(null), 4000);
          setLoading(false);
        }
      }
    };
    !error && getAds();
  }, [error]);

  return ads.map((ad) => (
    <div>
      <Row>
        <Col>
          <Card>
            <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
            <Card.Body>
              <Card.Title>{ad.title}</Card.Title>
            </Card.Body>
            <Card.Body>
              <Button>Name</Button>
              <Button>Type</Button>
              <Button>Base</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  ));
};

export default ViewAllSearches;
