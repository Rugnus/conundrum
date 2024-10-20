import { Input } from "antd";
import { FC } from "react";
import styled from "styled-components";

const { Search } = Input;

interface ISearchInput {
  placeholder: string;
  filters?: boolean;
  onSearch: (value: string) => void;
}

const SSearch = styled.div`
  width: 100%;
`;

export const SearchInput: FC<ISearchInput> = ({ placeholder, onSearch }) => {
  return (
    <SSearch>
      <Search placeholder={placeholder} onSearch={onSearch} size="large" />
    </SSearch>
  );
};
