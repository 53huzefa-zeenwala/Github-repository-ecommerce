import React from "react";
import AddForm from "../../../components/AdminPage/ProductsPage/AddEditForm/AddForm";
import Settings from "../../../components/AdminPage/Settings";

export default function newproduct() {
  return (
    <>
      <Settings />
      <main>
        <AddForm />
      </main>
    </>
  );
}
