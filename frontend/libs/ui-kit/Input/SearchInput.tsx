import { Input } from "antd";
import { FC, useMemo } from "react";
import styled from "styled-components";

const { Search } = Input;

interface ISearchInput {
  placeholder: string;
  filters?: boolean;
  onSearch: (value: React.ChangeEvent<HTMLInputElement>) => void;
  debounceTime?: number;
}

const SSearch = styled.div`
  width: 100%;
`;

const debounce = (callback, delay) => {
  return (...args) => {
    let timeout;
    if (timeout) {
      clearTimeout(timeout);
    }
    setTimeout(() => {
      timeout = null;
      callback.apply(this, args);
    }, delay);
  };
};

export const SearchInput: FC<ISearchInput> = ({
  placeholder,
  onSearch,
  debounceTime = 300,
}) => {
  const debouncedOnSearch = useMemo(
    () => debounce(onSearch, debounceTime),
    [onSearch, debounceTime]
  );

  return (
    <SSearch>
      <Search
        placeholder={placeholder}
        onChange={debouncedOnSearch}
        size="large"
      />
    </SSearch>
  );
};
