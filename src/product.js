import React, { useState, useEffect } from "react";
import "./index.css"


import { useSelector, useDispatch } from "react-redux";
import { addProduct, incrementStock, decrementStock, removeProduct } from "./redux/productSlice";


function Product() {

  const dispatch = useDispatch();
  const prods = useSelector((state) => state?.products);
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
    dispatch(addProduct(newProd));
    setNewProd({ prod_name: "", stock: 0, image: "" });
  };

  const incrementCounter = (productName) => {
    dispatch(incrementStock(productName));
  };

  const decrementCounter = (productName) => {
    dispatch(decrementStock(productName));
  };

  const handleRemoveProduct = (productName) => {
    dispatch(removeProduct(productName));
  };

  return (
    <div class="py-5 px-5">
      <header class="bg-slate-100">
        ASSESSMENT
      </header>
      <div class="flex justify-center py-5">
        <table class="border border-black table-auto rounded-tl-lg">
            <tbody class="border border-black rounded-md">
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
                    onClick={() => handleAddProduct()}
                    class="text-gray-500 border border-gray-300 rounded px-2"
                  >
                    Submit
                  </button>
                </td>
              </tr>
            </tbody>
            {prods?.map((current, index) => (
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
                      onClick={() =>
                        incrementCounter(current.prod_name)}
                      class="border rounded px-2 py-1"
                    >
                      +
                    </button>
                    &nbsp;
                    <button
                      onClick={() => decrementCounter(current.prod_name)}
                      class="border rounded px-2 py-1"
                    >
                      -
                    </button>
                    <small>&nbsp;&nbsp;Stock: {current.stock}</small>
                    <br /> <br />
                    <button
                      onClick={() => handleRemoveProduct(current.prod_name)}
                      class="text-gray-500 border border-gray-300 rounded px-2"
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