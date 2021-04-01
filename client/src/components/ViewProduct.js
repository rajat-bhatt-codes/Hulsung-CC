import React from "react";
import { Button, Jumbotron, Container } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";

const ViewProduct = ({ product }) => {
  const deleteProduct = async () => {
    if (window.confirm("Are You sure? Once Product Deleted can't be undone ")) {
      const res = await axios.delete(
        `http://localhost:5000/product/delete/${product._id}`
      );

      console.log(res);
      if (res.status === 200) {
        alert(res.data);
        <Redirect to='/' />;
      }
    }
  };
  return (
    <div>
      <Jumbotron fluid>
        <Container>
          <h1>{product.name}</h1>
          <p>
            This is a modified jumbotron that occupies the entire horizontal
            space of its parent.
          </p>
          <Link to='/add-product' className='btn btn-primary m-3'>
            Update
          </Link>
          <Button variant='danger' onClick={deleteProduct}>
            Delete
          </Button>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default ViewProduct;
