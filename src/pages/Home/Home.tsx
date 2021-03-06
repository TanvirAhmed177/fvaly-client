import Banner from "components/home/Banner";
import Products from "components/home/Products";
import useAsync from "hooks/useAsync";
import React from "react";

import ProductService from "services/ProductService";

const Home = () => {
  const { data, isLoading } = useAsync(ProductService.getProducts);
  return (
    <div>
      <Banner />
      <Products isLoading={isLoading} products={data} />
    </div>
  );
};

export default Home;
