import axios from "axios";
import React from "react";
import EditForm from "../../../../components/AdminPage/ProductsPage/AddEditForm/EditForm";
import Settings from "../../../../components/AdminPage/Settings";

export default function editproduct({ product }) {
  return (
    <>
      <Settings />
      <main>
        <EditForm product={product} />
      </main>
    </>
  );
}

export async function getServerSideProps({ params }) {
  const res = await axios.get(
    `http://localhost:3000/api/products/${params.id}`
  );

  return {
    props: {
      product: res.data,
    },
  };
}
