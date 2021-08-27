import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Search from "./Search";

const Nav = () => {
  const [bgNav, setBgNav] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    function handleScroll() {
      if (window.pageYOffset > 50) {
        setBgNav(true);
      } else setBgNav(false);
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  return (
    <Container bg={bgNav}>
      <Logo
        src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg"
        alt="logo"
      />
      <Search />
      <Profile
        src="https://baominh.tech/wp-content/uploads/2020/09/nhan-dan-facebook.png"
        alt="avata"
      />
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  z-index: 10;
  top: 0px;
  left: 0px;
  width: 100%;
  padding: ${(props) => (props.bg ? "15px 30px" : "20px 30px")};
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${(props) => (props.bg ? "#000" : "transparent")};
  transition: 0.2s ease;
`;
const Logo = styled.img`
  width: 80px;
`;
const Profile = styled.img`
  width: 40px;
`;

export default Nav;
