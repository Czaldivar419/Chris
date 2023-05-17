import styled from 'styled-components';

export const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

export const Logo = styled.h1`
  text-align: left;
  font-size: 3rem;
  vertical-align: middle;
  line-height: .2;
  text-shadow: 1px 1px 0 #ffffff, 2px 2px 0 #eeeeee;

  @media only screen and (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media only screen and (max-width: 480px) {
    font-size: 2rem;
    margin-bottom: 20px;
  }
`;

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #ebebeb;
  position: sticky;
  top: 0;
  z-index: 10;
  transition: line-height .3s ease-in-out;
  line-height: ${({ isOpen }) => (isOpen ? "5rem" : "3.5rem")};
`;

export const HamburgerContainer = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
  }
`;

export const Hamburger = styled.div`
  font-size: 2rem;
  cursor: pointer;
  display: ${({ isOpen }) => (isOpen ? "none" : "block")};
`;

export const TransparentButton = styled.div`
  font-size: 2rem;
  width: 2rem;
  height: 2rem;
`;

export const NavLinks = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  font-size: 26px;
  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    top: 80px;
    left: ${({ isOpen }) => (isOpen ? "0" : "-120%")};
    width: 100%;
    height: calc(100vh - 80px);
    background-color: #fff;
    transition: all 0.7s ease-in-out;
    margin-top: .5rem;
  }
  li:not(:last-child) {
    text-align: center;
  }
  li:last-child {
    text-align: center;
  }
  a {
    text-decoration: none;
    color: #9e9f9f;
    font-size: 1.3rem;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 1px;
    transition: all 0.3s ease-in-out;
    padding: 1rem;
    &:hover {
      color: #666;
    }
  }
`;

export const ExitButton = styled.div`
  display: none;
  font-size: 2rem;
  cursor: pointer;
  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? "block" : "none")};
    position: absolute;
    top: 1rem;
    right: 1rem;
  }
`;