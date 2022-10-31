import React from "react";
import { useState } from "react";
import lampara from "../images/lampara.jpeg";
import lampara2 from "../images/lampara2.jpeg";
import lampara3 from "../images/lampara3.jpeg";
import lampara4 from "../images/lampara4.jpeg";
import lampara5 from "../images/lampara5.jpeg";
import lampara6 from "../images/lampara6.jpeg";
import lampara7 from "../images/lampara7.jpeg";
import lampara8 from "../images/lampara8.jpeg";
import lampara9 from "../images/lampara9.jpeg";

export const Products = () => {
  const [product, setProduct] = useState([
    {
      id: 1,
      img: lampara,
      name: "Product XYZ",
      category: lampara,
      price: 20000,
    },
    {
      id: 2,
      img: lampara2,
      name: "Product XYZ",
      category: lampara,
      price: 18000,
    },
    {
      id: 3,
      img: lampara3,
      name: "Product XYZ",
      category: lampara,
      price: 17000,
    },
    {
      id: 4,
      img: lampara4,
      name: "Product XYZ",
      category: lampara,
      price: 12000,
    },
    {
      id: 5,
      img: lampara5,
      name: "Product XYZ",
      category: lampara,
      price: 23000,
    },
    ,
    {
      id: 6,
      img: lampara6,
      name: "Product XYZ",
      category: lampara,
      price: 21000,
    }
    ,
    {
      id: 7,
      img: lampara7,
      name: "Product XYZ",
      category: lampara,
      price: 28000,
    }
    ,
    {
      id: 8,
      img: lampara8,
      name: "Product XYZ",
      category: lampara,
      price: 16000,
    }
  ]);
  const number = product.price;
  const formateado = (number) => {
    return number.toLocaleString("ES-es", {
      style: "currency",
      currency: "CLP",
    });
  };
  return (
    <div className="container__products">
      {product.map((product) => {
        return (
          <div className="card" key={product.id}>
            <div>
              <img src={product.img} />
              <p className="card__title">{product.name}</p>
              <p className="card__price">{formateado(product.price)}</p>
              <button className="card__button">Ver producto</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
