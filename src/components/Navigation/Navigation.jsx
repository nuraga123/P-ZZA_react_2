import styles from "./styles.module.scss";

import Sort from "../Sort/Sort";
import NavigationItems from "./NavigationItems/NavigationItems";

const Navigation = ({ onClickCategory, categoryId, sort, setSort }) => {
  return (
    <nav className={styles.navigation}>
      <NavigationItems
        categoryId={categoryId}
        onClickCategory={onClickCategory}
      />
      <Sort sort={sort} setSort={setSort} />
    </nav>
  );
};

export default Navigation;
