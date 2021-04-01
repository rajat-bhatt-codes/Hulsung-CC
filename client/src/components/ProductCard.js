import React from "react";
import { Card, ListGroup } from "react-bootstrap";

const ProductCard = ({ product }) => {
  return (
    <div>
      <Card.Header>{product.name}</Card.Header>
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>
          <strong>Description:</strong> {product.short_desc}
        </Card.Text>
      </Card.Body>
      <ListGroup>
        <ListGroup.Item>Camera:{product.camera}</ListGroup.Item>
        <ListGroup.Item>Storage:{product.storage}</ListGroup.Item>
        <ListGroup.Item>Ram:{product.ram}</ListGroup.Item>
        <ListGroup.Item>Operating system:{product.os}</ListGroup.Item>
        <ListGroup.Item>Colour:{product.color}</ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default ProductCard;
