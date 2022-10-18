import React, { useState } from "react";

import styles from "./styles.module.scss";

const Sort = ({ sort, setSort }) => {
  const [openSort, setOpenSort] = useState(false);

  const sortList = [
    { name: "популярности (Ascending)", sortProperty: "-rating" },
    { name: "популярности (Descending)", sortProperty: "rating" },
    { name: "по цене (Ascending)", sortProperty: "-price" },
    { name: "по цене (Descending)", sortProperty: "price" },
    { name: "по алфавиту (Ascending)", sortProperty: "-title" },
    { name: "по алфавиту (Descending)", sortProperty: "title" },
  ];

  const sortListActive = (index) => {
    debugger;
    setSort(index);
    setOpenSort(false);
  };

  const sortListMap = sortList.map((item, index) => (
    <li
      onClick={() => sortListActive(item)}
      key={index}
      className={
        sort.sortProperty === item.sortProperty
          ? `${styles.sort__active} ${styles.sort__item}`
          : `${styles.sort__item}`
      }
    >
      {item.name}
    </li>
  ));

  console.log(sort.sortProperty);

  return (
    <div className={styles.sorting}>
      <div style={{ width: "max-content" }}>
        <img
          className={
            openSort
              ? `${styles.sorting__img__active}`
              : `${styles.sorting__img}`
          }
          src="./pizza__images/trigon.svg"
          alt="sorting__img"
        />
        <button className={styles.sorting__title}>Сортировка по:</button>
        <span
          onClick={() => {
            setOpenSort(!openSort);
          }}
          className={styles.sorting__value}
        >
          {sort.name}
        </span>
      </div>

      {openSort && (
        <div className={styles.sort__popup}>
          <ul>{sortListMap}</ul>
        </div>
      )}
    </div>
  );
};

export default Sort;
