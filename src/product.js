import React, { useState, useEffect } from "react";
// import "bootstrap/dist/css/bootstrap.css";
import "./index.css"

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
    <div class="py-5 px-5">
      <header class="bg-slate-100">
        ASSESSMENT
      </header>
      <div class="flex justify-center py-5">
        <table class="border border-black table-auto">
          <tbody class="border border-black">
            <tr mx-auto>
              <td class="pl-4">
                  <input type="file"></input>
              </td>


              <td class="border border-black px-4 py-2">
                <input
                  type="text"
                  placeholder="Product Name"
                  name="prod_name"
                  value={newProd.prod_name}
                  onChange={handleInputChange}
                  class="border"
                ></input>
                <br />
                <br />
                <input
                  type="number"
                  placeholder="Stock"
                  name="stock"
                  onChange={handleInputChange}
                  class="border"
                ></input>
                <br /> <br />
                <button
                  type="submit"
                  onClick={handleAddProduct}
                  class="text-gray-500 border border-gray-300 rounded px-1"
                >
                  Submit
                </button>
              </td>
            </tr>
          </tbody>
          {prods.map((current, index) => (
            <tbody key={index}>
              <tr class="border border-black">
                <div class="flex items-center justify-center h-full pl-4">
                  <td>
                    <img
                      src={current.image}
                      alt="Product"
                      class="w-32 h-32"
                    />
                  </td>
                </div>

                <td class="border border-black px-4">
                  <h5>{current.prod_name}</h5>
                  <button
                    onClick={() => incrementCounter(index)}
                    class="border rounded px-py"
                  >
                    +
                  </button>
                  &nbsp;
                  <button
                    onClick={() => decrementCounter(index)}
                    class="border rounded px-py"
                  >
                    -
                  </button>
                  <small>&nbsp;&nbsp;Stock: {current.stock}</small>
                  <br /> <br />
                  <button
                    onClick={() => removeProduct(index)}
                    class="text-gray-500 border border-gray-300 rounded px-1"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div >

  );
}

export default Product;
