import { SearchInput } from "@conundrum/ui-kit";
import { FC, useState } from "react";
import { useSelector } from "react-redux";
import { AppAccordion } from "src/components/AppAccordion/AppAccordion";
import { RootState } from "src/store/store";
import { SCatalog } from "./styles/SCatalog";

export const Catalog: FC = () => {
  const [query, setQuery] = useState<string>("");

  const applications = useSelector(
    (state: RootState) => state.applicationReducer.list
  );
  const filteredApplications = applications.filter((application) =>
    application.name.toLowerCase().includes(query.toLowerCase())
  );

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <SCatalog>
      <SearchInput
        placeholder={"Поиск по названию"}
        onSearch={handleSearch}
        debounceTime={300}
      />
      <AppAccordion items={filteredApplications} />
    </SCatalog>
  );
};
