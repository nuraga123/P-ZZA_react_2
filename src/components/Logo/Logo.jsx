import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

const Logo = () => {
  return (
    <div style={{ padding: "40px 0" }}>
      <Link to="/">
        <div className={styles.logo}>
          <img
            className={styles.logo__image}
            src="pizza__images/pizza.svg"
            alt="piiza"
          />
          <div>
            <h1 className={styles.logo__title}>REACT PIZZA</h1>
            <p className={styles.description}>
              самая вкусная пицца во вселенной1
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Logo;
