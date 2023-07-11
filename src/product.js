import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";

import item1 from "./image/item1.png";
import item2 from "./image/item2.png";
import item3 from "./image/item3.png";
import item4 from "./image/item4.png";

function Product() {
  const prod = [
    {
      prod_name:
        "Brilliant Blue Botanical Stainless Steel Traveler Tumbler (16oz)",
      stock: 5,
      image: item1,
    },
    {
      prod_name: "Brilliant Blue Stainless Steel Traveler Tumbler (16oz)",
      stock: 6,
      image: item2,
    },
    {
      prod_name:
        "Knockout Pink Botanical Stainless Steel Hydration Bottle (20oz)",
      stock: 2,
      image: item3,
    },
    {
      prod_name: "Knockout Pink Stainless Steel Hydration Bottle (20oz)",
      stock: 1,
      image: item4,
    },
  ];

  const [prods, setProds] = useState(prod);
  const [newProd, setNewProd] = useState({
    prod_name: "",
    stock: 0,
    image: "",
  });

  const handleInputChange = (e) => {
    setNewProd((prevNewProd) => ({
      ...prevNewProd,
      [e.target.name]: e.target.value,
    }));
  };

  const handleAddProduct = () => {
    setProds((prevProds) => [...prevProds, newProd]);
    setNewProd({ prod_name: "", stock: 0, image: "" });
  };

  const incrementCounter = (index) => {
    setProds((prevProds) => {
      const updatedProds = [...prevProds];
      updatedProds[index] = {
        ...updatedProds[index],
        stock: parseInt(updatedProds[index].stock) + 1,
      };
      console.log(updatedProds[index]);
      return updatedProds;
    });
  };

  const decrementCounter = (index) => {
    setProds((prevProds) => {
      const updatedProds = [...prevProds];
      if (updatedProds[index].stock > 0) {
        updatedProds[index] = {
          ...updatedProds[index],
          stock: parseInt(updatedProds[index].stock) - 1,
        };
      }
      console.log(updatedProds[index]);
      return updatedProds;
    });
  };

  const removeProduct = (index) => {
    setProds((prevProds) => {
      const updatedProds = [...prevProds];
      updatedProds.splice(index, 1);
      return updatedProds;
    });
  };

  return (
    <div className="card">
      <div className="card-header">
        <b>ASSESSMENT</b>
      </div>
      <div className="class-body my-5 mx-5">
        <table className="table table-bordered dark">
          <tbody>
            <tr mx-auto>
              <td className="d-flex justify-content-center align-items-center">
                <input type="file"></input>
              </td>

              <td>
                <input
                  type="text"
                  placeholder="Product Name"
                  name="prod_name"
                  value={newProd.prod_name}
                  onChange={handleInputChange}
                ></input>
                <br />
                <br />
                <input
                  type="number"
                  placeholder="Stock"
                  name="stock"
                  // value={newProd.stock}
                  onChange={handleInputChange}
                ></input>
                <br /> <br />
                <button
                  class="btn btn-outline-dark"
                  type="submit"
                  onClick={handleAddProduct}
                >
                  Submit
                </button>
              </td>
            </tr>
          </tbody>
          {prods.map((current, index) => (
            <tbody key={index}>
              <tr>
                <td class="w-50">
                  <img
                    src={current.image}
                    className="w-25 mx-auto d-block"
                    alt="Product"
                  />
                </td>
                <td class="px-3">
                  <h5>{current.prod_name}</h5>
                  <button
                    class="btn btn-outline-success"
                    onClick={() => incrementCounter(index)}
                  >
                    +
                  </button>
                  &nbsp;
                  <button
                    class="btn btn-outline-warning"
                    onClick={() => decrementCounter(index)}
                  >
                    -
                  </button>
                  <small>&nbsp;&nbsp;Stock: {current.stock}</small>
                  <br /> <br />
                  <button
                    class="btn btn-outline-danger"
                    onClick={() => removeProduct(index)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
}

export default Product;
