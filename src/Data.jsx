import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
const Data = () => {
  const [getdata, setGetdata] = useState([]);
//   const [start, setStart] = useState();
  useEffect(() => {
    axios
      .get("https://ramlingsurvase.herokuapp.com/data")
      .then((all) => setGetdata(all.data))
      .catch(() => console.log("errr"));
  });
  const click1 = (ele) => {
    let {  name, price, quantity, brand } = ele;
    localStorage.setItem("ID", ele._id);
    localStorage.setItem("Name", name);
    localStorage.setItem("Price", price);
    localStorage.setItem("Quantity", quantity);
    localStorage.setItem("Brand", brand);
    // console.log(ele._id);
    // axios
    //   .delete(`http://localhost:5000/auth/update`, { name: ele })
    //   .then((all) => console.log("data"))
    //   .catch(() => console.log("errr"));
  };

  const click = (ele) => {
    console.log(ele);
    axios
      .delete(`https://ramlingsurvase.herokuapp.com/delete/${ele._id}`)
      .then((all) => console.log("datadelete"))
      .catch(() => console.log("errr"));
  };

  return (
    <>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Sr.No</th>
            <th scope="col">name</th>
            <th scope="col">brand</th>
            <th scope="col">quantity</th>
            <th scope="col">price</th>
            <th scope="col">delete</th>
            <th scope="col">update</th>
          </tr>
        </thead>
        <tbody>
          {getdata.map((ele, i) => {
            return (
              <>
                <tr>
                  <th scope="row">{i + 1}</th>
                  <td>{ele.name}</td>
                  <td>{ele.brand}</td>
                  <td>{ele.quantity}</td>
                  <td>{ele.price}</td>
                  <td>
                    <button onClick={() => click(ele)}>delete</button>
                  </td>
                  <td>
                    <button onClick={() => click1(ele)}>
                      <Link to="/login">update</Link>
                    </button>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
export default Data;
