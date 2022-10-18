import React, { useEffect, useState } from "react";
import Catalog from "../../components/CatalogPizza/Catalog";
import Header from "../../components/Header/Header";
import Navigation from "../../components/Navigation/Navigation";

const Home = () => {
  const [pizzaData, setPizzaData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [categoryId, setCategoryId] = useState(0);
  const [sort, setSort] = useState({
    name: "популярности",
    sortProperty: "rating",
  });

  const categoty = categoryId > 0 ? `category=${categoryId}` : "";
  const sortByMinus = sort.sortProperty.replace("-", "");
  const order = sort.sortProperty.includes("-") ? "asc" : "desc";
  const pizzaDataURL = `https://633fd406d1fcddf69caa727f.mockapi.io/items?${categoty}&sortBy=${sortByMinus}&order=${order}`;

  useEffect(() => {
    setIsLoading(true);
    fetch(pizzaDataURL)
      .then((response) => response.json())
      .then((data) =>
        setTimeout(() => {
          setPizzaData(data);
          setIsLoading(false);
        }, 500)
      );

    window.scrollTo(0, 0);
  }, [pizzaDataURL]);

  console.log(URL);

  const onClickCategory = (index) => {
    setCategoryId(index);
  };

  return (
    <div style={{ width: "90%", margin: "0 auto" }}>
      <Header />
      <Navigation
        categoryId={categoryId}
        onClickCategory={onClickCategory}
        sort={sort}
        setSort={setSort}
      />
      <Catalog pizzaData={pizzaData} isLoading={isLoading} />
    </div>
  );
};

export default Home;
