import React from 'react';
import styled from 'styled-components';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaSearch } from 'react-icons/fa';

export const Nav = styled.nav`
  background: #1c5476;
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%),
    0px 1px 10px 0px rgb(0 0 0 / 12%);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: ${(props) => props.theme.navbar_height};
  position: fixed;
  top: 0;
  z-index: 99;
  padding: 0rem 1.5rem;
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  user-select: none;
`;

export function IconLogo() {
  return (
    <LogoContainer>
      <GiHamburgerMenu color="white" size="1.5rem" />
    </LogoContainer>
  );
}

const FormSearch = styled.form`
  display: flex;
  display: row;
  position: absolute;
  left: 10rem;
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.15);
`;

const InputSearch = styled.input`
  padding: 0 10px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  background-color: rgba(255, 255, 255, 0.15);
  color: currentColor;
`;

const SearchButton = styled.button`
  display: flex;
  justify-content: center;
  align-content: center;
  padding: 0.5rem 0.75rem;
  border: 1px solid rgba(255, 255, 255, 0.15);
  background-color: rgba(255, 255, 255, 0.15);
  color: #fff;
`;

export function SearchBar() {
  return (
    <FormSearch>
      <SearchButton>
        <FaSearch size="1rem" />
      </SearchButton>
      <InputSearch type="text" placeholder="Search" />
    </FormSearch>
  );
}

export const ProfileImg = styled.img`
  border-radius: 50%;
  width: 3.5rem;
  height: auto;
`;
