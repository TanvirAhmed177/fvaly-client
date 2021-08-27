import Banner from "components/home/Banner";
import Products from "components/home/Products";
import React, { useEffect, useState } from "react";
import ProductService from "services/ProductService";
import { IProduct } from "./../../types";

const Home = () => {
  const [products, setProducts] = useState<IProduct[]>([] as IProduct[]);

  useEffect(() => {
    ProductService.getProducts()
      .then((res) => setProducts(res))
      .catch();
  }, []);
  return (
    <div>
      <Banner />
      <Products products={products} />
    </div>
  );
};

export default Home;
