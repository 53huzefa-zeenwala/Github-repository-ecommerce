import ProductsPage from "../../../components/AdminPage/ProductsPage";
import axios from "axios";
import Settings from "../../../components/AdminPage/Settings";

export default function products({products}) {
  return (
    <>
      <Settings />
      <ProductsPage {...{products}} />
    </>
  );
}

export async function getServerSideProps () {
  const products = await axios.get("http://localhost:3000/api/products")
  return {
    props: {
      products: products.data
    }
  }
}
