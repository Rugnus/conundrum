import { Layout } from "@conundrum/ui-kit";
import { FC } from "react";
import { Catalog } from "src/features/Catalog/Catalog";

export const CatalogPage: FC = () => {
  return (
    <Layout title="Каталог">
      <Catalog />
    </Layout>
  );
};
