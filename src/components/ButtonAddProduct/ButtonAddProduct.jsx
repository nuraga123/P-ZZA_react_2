import React, { useState } from "react";

import styles from "./styles.module.scss";

const ButtonAddProduct = () => {
  const [count, setCount] = useState(0);

  return (
    <button
      onClick={() => setCount(count + 1)}
      disabled={count >= 10}
      className={styles.btn}
    >
      <svg
        className={styles.btn__img}
        width="12"
        height="12"
        viewBox="0 0 12 12"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z" />
      </svg>
      <span className={styles.btn__title}>Добавить</span>

      {count > 0 ? (
        <div className={styles.btn__count__wrapper}>
          <span className={styles.btn__count}>{count}</span>
        </div>
      ) : (
        ""
      )}
    </button>
  );
};

export default ButtonAddProduct;
