import React from "react";

import Button from "antd/lib/button/button";

import Header from "../../components/Header/Header";

import styles from "./styles.module.scss";
import { NavLink} from "react-router-dom";


export const NotFound = () => {


  return (
    <div>
      <Header />
      <div className={styles.content}>
        <h1 className={styles.title}>упс, ошибка 😕</h1>
        <p
          style={{ marginTop: "10px", color: "#777777" }}
          className={styles.title}
        >
          к сожалению данная страница не найдена
        </p>
        <img className={styles.image} src="pizza__images/error.svg" alt="404" />

        <NavLink to="/home">
          <Button type="primary" className={styles.button}>
            Вернуться назад
          </Button>
        </NavLink>
      </div>
    </div>
  );
};
