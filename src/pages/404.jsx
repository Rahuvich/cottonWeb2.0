import React from "react";
import MainLayout from "../components/MainLayout";

function NotFoundPage() {
  return (
    <MainLayout title="No se ha encontrado" active="actividad">
      <div>Esta página no existe!</div>
    </MainLayout>
  );
}

export default NotFoundPage;
