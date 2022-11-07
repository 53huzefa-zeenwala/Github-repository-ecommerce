import React from "react";
import {
  CategoryAndFilter,
  Pagination,
  Products,
} from "../../components/ProductsPage";
import { categoriesList, newArrival } from "../../utils/fakedata";

export default function products() {
  return (
    <>
      <CategoryAndFilter categories={categoriesList} />
      <main>
        <Products products={newArrival} />
        <Pagination />
      </main>
    </>
  );
}
