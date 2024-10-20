import { SearchInput } from "@conundrum/ui-kit";
import { FC } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppAccordion } from "src/components/AppAccordion/AppAccordion";
import { RootState } from "src/store/store";
import { SCatalog } from "./styles/SCatalog";

export const Catalog: FC = () => {
  const navigate = useNavigate();

  const applications = useSelector(
    (state: RootState) => state.applicationReducer.list
  );

  const onCardClick = () => {
    navigate("/blind-type");
  };

  const onSearch = () => {
    console.log("search");
  };

  return (
    <SCatalog>
      <SearchInput placeholder={"Поиск по названию"} onSearch={onSearch} />
      <AppAccordion items={applications} />
    </SCatalog>
  );
};
