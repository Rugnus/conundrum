import { Menu } from "antd";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const SHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  ul li {
    color: #fff !important;
  }
`;

export const Header = () => {
  const navigate = useNavigate();

  const items = [
    {
      key: "1",
      label: "Главная",
      onClick: () => navigate("/"),
    },
    {
      key: "2",
      label: "Каталог",
      onClick: () => navigate("/catalog"),
    },
    {
      key: "3",
      label: "О нас",
      onClick: () => navigate("/about"),
    },
  ];

  return (
    <SHeader>
      <Menu
        theme="dark"
        mode="horizontal"
        style={{
          flex: 1,
          minWidth: 0,
          backgroundColor: "#604CC3",
        }}
        items={items}
      />
    </SHeader>
  );
};
