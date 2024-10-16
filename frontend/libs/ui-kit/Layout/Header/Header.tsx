import { Menu } from "antd";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const SHeader = styled.header`
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: space-between;
  background-color: #604cc3;

  ul li {
    color: #fff !important;
  }
`;

const SLogo = styled.div`
  margin: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;

  img {
    width: 60px;
    heigth: 60px;
  }

  span {
    font-size: 0.8rem;
    font-weight: 700;
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
      <SLogo>
        <img src="../../src/assets/conundrum.svg" width={50} height={50} />
        <span>Conondrum</span>
      </SLogo>
      <Menu
        theme="dark"
        mode="horizontal"
        style={{
          flex: 1,
          minWidth: 0,
          backgroundColor: "#604CC3",
          fontWeight: 600,
          fontSize: 16,
        }}
        items={items}
      />
    </SHeader>
  );
};
