import styles from "./styles.module.scss";

import Button from "antd/lib/button/button";

import React from "react";

const NavigationItems = ({ categoryId, onClickCategory }) => {
  const navigationName = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  console.log(`categoryId: ${categoryId}`);

  return (
    <div className={styles.nav__content}>
      {navigationName.map((item, index) => (
        <Button
          type="primary"
          onClick={() => onClickCategory(index)}
          className={
            categoryId === index
              ? `${styles.button__active} ${styles.button}`
              : `${styles.button}`
          }
          key={index}
        >
          {item}
        </Button>
      ))}
    </div>
  );
};

export default NavigationItems;
