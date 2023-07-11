import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
// import { prodData } from "./data";

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

  //   const updateCounter = prod.map((item) => {item.stock});
  // const [counter, setCounter] = useState(updateCounter);

  //   const incrementCounter = () => {
  //     setCounter((counter) => updateCounter + 1);
  //   };

  //   const decrementCounter = () => {
  //     setCounter((counter) => updateCounter - 1);
  //   };

  const [prods, setProd] = useState(prod);
  // const [updateState, setUpdateState] = useState(0);
  return (
    // <div className="my-3">
    <div class="card">
      <div class="card-header">
        <a href="./newIte `m.js">Add New Item</a>
      </div>
      <div class="class-body my-5 mx-5">
        <table>
          {prods.map((current) => (
            <tbody>
              <tr>
                <td className="border border-dark rounded">
                  <img
                    src={current.image}
                    className="w-25 mx-auto d-block"
                    alt="Product"
                  />
                </td>
                <td>
                  <h5>{current.prod_name}</h5>
                  {/* <button onClick={incrementCounter}>+</button>
                <button onClick={decrementCounter}>-</button> */}
                  <small>Stock: {current.stock}</small>
                  {/* <button on */}
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
    // </div>
  );
}

export default Product;
