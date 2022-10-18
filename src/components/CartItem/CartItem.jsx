import React from "react";

import {
  MinusCircleOutlined,
  PlusCircleOutlined,
  CloseCircleOutlined,
} from "@ant-design/icons";

import styles from "./styles.module.scss";

const CartItem = ({ imageUrl, name, price, sizes, types }) => {
  return (
    <div className={styles.container}>
      <div className={styles.product}>
        <img
          src={imageUrl}
          alt={name}
          width="80"
          style={{ marginRight: "15px" }}
        />
        <div className={styles.product__text}>
          <h1 className={styles.name}>{name}</h1>
          <p className={styles.description}>
            {`${types[0] ? "тонкое тесто" : "толстое тесто"}, ${sizes[0]} см.`}
          </p>
        </div>
      </div>

      <div className={styles.counter}>
        <MinusCircleOutlined className={styles.sign} />
        <p className={styles.count}>1</p>
        <PlusCircleOutlined className={styles.sign} />
      </div>

      <div className={styles.count}>{price}00 ₽</div>
      <div className={styles.delete}>
        <CloseCircleOutlined />
      </div>
    </div>
  );
};

export default CartItem;
