import React from "react";

import { Button } from "antd";

import { NavLink } from "react-router-dom";

import styles from "./styles.module.scss";

import CartItem from "../../components/CartItem/CartItem";

import Logo from "../../components/Logo/Logo";

import data from "../../data/pizza.json";

const Cart = () => {
  console.log(data);

  return (
    <div className={styles.cart}>
      <div style={{ marginTop: "30px" }}>
        <Logo />
      </div>

      <div className={styles.container}>
        <div className={styles.container__top}>
          <img src="pizza__images/cart-logo.svg" alt="cart-logo" />
          <div className={styles.delete__block}>
            <img src="pizza__images/delete.svg" alt="delete" />
            <p className={styles.delete__title}>Очистить корзину</p>
          </div>
        </div>

        <div className={styles.list}>
          {data.map((item) => (
            <CartItem {...item} key={item.id} />
          ))}
        </div>

        <div className={styles.cart__price}>
          <p>
            Всего пицц: <strong>1 шт.</strong>
          </p>
          <p>
            Сумма заказа: <b>900 ₽</b>
          </p>
        </div>

        <div className={styles.cart__buttom}>
          <NavLink to="/home">
            <Button type="primary" className={styles.button}>
              Вернуться назад
            </Button>
          </NavLink>

          <Button type="primary" className={styles.btn}>
            Оплатить сейчас
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
