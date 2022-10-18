import React from "react";
import { useState } from "react";
import ButtonAddProduct from "../../ButtonAddProduct/ButtonAddProduct";

import styles from "./styles.module.scss";

const Product = ({ name, price, imageUrl, sizes, category, types, rating }) => {
  const [active, setActive] = useState(0);
  const [active2, setActive2] = useState(0);

  const typesName = ["тонкое", "традиционное"];

  const sizesList = sizes.map((item, index) => (
    <button
      onClick={() => setActive(index)}
      key={index}
      className={
        active === index
          ? `${styles.active} ${styles.button}`
          : `${styles.button}`
      }
    >
      {item} см.
    </button>
  ));

  const typesList = types.map((item, index) => (
    <button
      onClick={() => setActive2(index)}
      key={index}
      className={
        active2 === index
          ? `${styles.active} ${styles.button}`
          : ` ${styles.button}`
      }
    >
      {typesName[item]}
    </button>
  ));

  return (
    <div className={styles.container}>
      <img className={styles.image} src={imageUrl} alt={name} />
      <h1 className={styles.title}>{name}</h1>
      <div className={styles.container__btn}>
        <div className={styles.buttons}>{typesList}</div>

        <div className={styles.buttons}>{sizesList}</div>
      </div>

      <div className={styles.add__block}>
        <h1 className={styles.price}>от {price} $</h1>

        <ButtonAddProduct />
      </div>
    </div>
  );
};

export default Product;
