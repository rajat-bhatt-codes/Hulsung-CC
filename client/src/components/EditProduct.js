import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const EditProduct = ({ match }) => {
  const [formData, setFormData] = useState({
    name: "",
    short_desc: "",
    desc: "",
    camera: "16MP",
    storage: "32gb",
    color: "Black",
    os: "Android",
    ram: "4gb",
  });
  const { name, short_desc, desc, camera, storage, color, os, ram } = formData;

  const onChange = (e) =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  const handleReset = () => {
    setFormData({
      name: "",
      short_desc: "",
      desc: "",
      camera: "16MP",
      storage: "32gb",
      color: "Black",
      os: "Android",
      ram: "4gb",
    });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify(formData);
    const res = await axios.put(
      `http://localhost:5000/product/edit/${match.params.id}`,
      body,
      config
    );

    console.log(res);
    if (res.status === 200) {
      alert(res.data.msg);
    }
    handleReset();
  };
  return (
    <div className='m-5'>
      <h1>Edit Product</h1>
      <Link to='/' className='btn btn-primary mt-3'>
        Go Back
      </Link>
      <Form
        className='mt-5'
        style={{ width: "60%" }}
        onSubmit={(e) => onSubmit(e)}
      >
        <Form.Group controlId='exampleForm.ControlInput1'>
          <Form.Label>
            <b>Product Name</b>
          </Form.Label>
          <Form.Control
            type='text'
            name='name'
            value={name}
            onChange={(e) => onChange(e)}
            required
          />
        </Form.Group>
        <Form.Group controlId='exampleForm.ControlSelect1'>
          <Form.Label>
            <b>Storage Options</b>
          </Form.Label>
          <Form.Control
            as='select'
            name='storage'
            value={storage}
            onChange={(e) => onChange(e)}
          >
            <option>32gb</option>
            <option>64gb</option>
            <option>128gb</option>
            <option>256gb</option>
            <option>512gb</option>
            <option>None</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId='exampleForm.ControlSelect1'>
          <Form.Label>
            <b>RAM Options</b>
          </Form.Label>
          <Form.Control
            as='select'
            name='ram'
            value={ram}
            onChange={(e) => onChange(e)}
          >
            <option>4gb</option>
            <option>8gb</option>
            <option>16gb</option>
            <option>32gb</option>
            <option>None</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId='exampleForm.ControlInput1'>
          <Form.Label>
            <b>Colour</b>
          </Form.Label>
          <Form.Control
            type='text'
            name='color'
            value={color}
            onChange={(e) => onChange(e)}
            required
          />
        </Form.Group>

        <Form.Group controlId='exampleForm.ControlSelect1'>
          <Form.Label>
            <b>Camera Options</b>
          </Form.Label>
          <Form.Control
            as='select'
            name='camera'
            value={camera}
            onChange={(e) => onChange(e)}
          >
            <option>16MP</option>
            <option>32MP</option>
            <option>64MP</option>
            <option>108MP</option>
            <option>Other</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId='exampleForm.ControlSelect1'>
          <Form.Label>
            <b>Operating System</b>
          </Form.Label>
          <Form.Control
            as='select'
            name='os'
            value={os}
            onChange={(e) => onChange(e)}
          >
            <option>Android</option>
            <option>IOS</option>
            <option>windows</option>
            <option>Other</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId='exampleForm.ControlTextarea1'>
          <Form.Label>
            <b>Short Decription</b>
          </Form.Label>
          <Form.Control
            as='textarea'
            rows={3}
            type='text'
            name='short_desc'
            value={short_desc}
            onChange={(e) => onChange(e)}
            required
          />
        </Form.Group>
        <Form.Group controlId='exampleForm.ControlTextarea1'>
          <Form.Label>
            <b>Description</b>
          </Form.Label>
          <Form.Control
            as='textarea'
            rows={3}
            type='text'
            name='desc'
            value={desc}
            onChange={(e) => onChange(e)}
            required
          />
        </Form.Group>

        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default EditProduct;
