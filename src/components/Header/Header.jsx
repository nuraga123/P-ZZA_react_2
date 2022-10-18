import React from "react";
import CartLogo from "../CartLogo/CartLogo";
import Logo from "../Logo/Logo";

import styles from "./styles.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <CartLogo />
    </header>
  );
};

export default Header;
