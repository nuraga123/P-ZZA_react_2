import React from "react";

import { Link } from "react-router-dom";

import styles from "./styles.module.scss";

const CartLogo = () => {
  return (
    <Link to="/cart">
      <div className={styles.btn_container}>
        <span className={styles.btn_container__text}>520 ₽</span>
        <div className={styles.btn_container__cart}>
          <img src="pizza__images/separator.svg" alt="separator" />
          <img
            className={styles.btn_container__image}
            src="pizza__images/cart.svg"
            alt="cart"
          />
          <span className={styles.btn_container__text}>3</span>
        </div>
      </div>
    </Link>
  );
};

export default CartLogo;
