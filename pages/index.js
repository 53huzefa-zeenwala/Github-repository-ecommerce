import { Category, DisplayCategory, Feature, Products, SpecialProducts } from "../components/HomePage";
import { bestSeller, categories, categoriesList, feature, newArrival, onSale, recommend, specialProducts } from "../utils/fakedata";

export default function Home() {
  return (
    <>
      <Category categories={categoriesList}/>
      <Feature feature={feature}/>
      <DisplayCategory categories={categories}/>
      <Products type="new arrival" products={newArrival}/>
      <SpecialProducts specialProducts={specialProducts}/>
      <Products type="Best seller" products={bestSeller}/>
      <Products type="on sales" products={onSale}/>
      <Products type="recommend" products={recommend}/>
    </>
  );
}
