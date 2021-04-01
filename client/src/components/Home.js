import React, { useEffect, useState } from "react";
import { Button, Card, CardColumns } from "react-bootstrap";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState([]);

  async function deleteProduct(e, id) {
    e.preventDefault();
    if (window.confirm("Are You sure? Once Product Deleted can't be undone ")) {
      const res = await axios.delete(
        `http://localhost:5000/product/delete/${id}`
      );

      console.log(res);

      setData(res.data.products);
      if (res.status === 200) {
        alert(res.data.msg);
      }
      return res;
    }
  }
  useEffect(() => {
    async function fetchData() {
      const req = await axios.get("http://localhost:5000/product");
      console.log(req.data);
      setData(req.data);
      return req;
    }
    fetchData();
  }, []);

  return (
    <div className='m-5'>
      <Link to='/add-product' className='btn btn-primary mt-3'>
        Create Product
      </Link>
      <CardColumns className='mt-3'>
        {!data ? (
          <h1> No Data found</h1>
        ) : (
          data.map((product) => (
            <div>
              <Card border='dark' style={{ width: "18rem" }}>
                <ProductCard product={product} />
                <Link
                  to={`/edit-product/${product._id}`}
                  className='btn btn-primary m-3'
                >
                  Update
                </Link>
                <Button
                  variant='danger'
                  onClick={(e) => deleteProduct(e, product._id)}
                >
                  Delete
                </Button>
              </Card>
            </div>
          ))
        )}
      </CardColumns>
    </div>
  );
};

export default Home;
