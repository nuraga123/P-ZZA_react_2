import React from "react";
import Product from "./Product/Product";

import styles from "./styles.module.scss";

import Skeleton from "../Skeleton/Skeleton";

const Catalog = ({ isLoading, pizzaData }) => {
  const productList = pizzaData.map((item) => (
    <Product {...item} key={item.id} />
  ));

  return (
    <div className={styles.products__list}>
      <h1 className={styles.title}>Все пиццы</h1>
      <div className={styles.products}>
        {isLoading
          ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
          : productList}
      </div>
    </div>
  );
};

export default Catalog;
