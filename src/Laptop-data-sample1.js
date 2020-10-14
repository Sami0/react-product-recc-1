import React, { Component } from "react";
//import ReactDOM from "react-dom";
import "./styles.css";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

import LaptopIcon from "@material-ui/icons/Laptop";

const LaptopDATAset1 = [
  {
    id: 1,
    laptopName: "MacBook Air -i5 Processor -8GB",
    RAM: "8GB",
    storage: "512GB",
    priceRange: "($1000-$1500)",
    TotalPrice: "$1,299",
    StoreLink:
      '<a href=https://www.apple.com/shop/buy-mac/macbook-air/space-gray-1.1ghz-quad-core-core-i5-processor-with-turbo-boost-up-to-3.5ghz-512gb" >link</a>'
  },
  {
    id: 2,
    laptopName: " Windows 2020 HP 14 inch HD Laptop",
    RAM: "4GB",
    storage: "128GB",
    priceRange: ">$1000",
    TotalPrice: "$439.99"
  }
];

function IconContainer(props) {
  return (
    <div id="iconContainer">
      <LaptopIcon style={{ fontSize: 150 }} />
    </div>
  );
}

function OneROW(props) {
  const selectedLaptop = LaptopDATAset1.filter((x) => x.id === 1);
  return (
    <div>
      <IconContainer />
      {selectedLaptop.map((x) => (
        <div className="LaptopBox">
          <ul>
            <li className="boldrow">{x.laptopName}</li>
            <br />
            <li> RAM : {x.RAM}</li>
            <br />
            <li> Storage : {x.storage}</li>
            <br />
            <li className="boldrow"> Total price : {x.TotalPrice}</li>
            <br />
            <li className="boldrow"> link : </li>
          </ul>
        </div>
      ))}
    </div>
  );
}

// testing <OneROW />

function LaptopRendering() {
  return <OneROW />;
}
export default LaptopRendering;
