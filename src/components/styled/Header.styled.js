import styled from 'styled-components';

export const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  background-color: #f8f8f8;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  margin-left: 50px;
  @media (max-width: 768px) {
    font-size: 1rem;
    text-align: center;
    margin: 0;
  }
  img {
    width: 100px;
    height: auto;
  }
`;

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #fff;
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
  justify-content: center;
  align-items: center;
  list-style: none;
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
    color: #333;
    font-size: 1.2rem;
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