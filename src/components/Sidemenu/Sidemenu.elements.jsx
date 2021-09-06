import React from 'react';
import styled from 'styled-components';

export const SideMenuContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  left: 0;
  width: ${(props) => props.theme.sidemenu_width};
  background: white;
  z-index: 100000;
  position: fixed;
  top: 0rem;
  height: 100%;
  display: block;
  overflow-y: auto;
  flex-direction: column;
  box-shadow: 0px 8px 10px -5px rgb(0 0 0 / 20%), 0px 16px 24px 2px rgb(0 0 0 / 14%),
    0px 6px 30px 5px rgb(0 0 0 / 12%);
`;

const SideMenuOption = styled.li`
  color: ${(props) => props.theme.icon_color};
  text-decoration: bold;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  user-select: none;
  font-weight: bold;
  width: 100%;
  &:hover {
    background: ${({ theme }) => theme.scrollbar_thumb_hover_color};
  }
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  border-bottom: 1px solid #b8b8b8;
  cursor: pointer;
  padding: 15px 0;
`;

export function SideMenuItem({ text }) {
  return <SideMenuOption>{text}</SideMenuOption>;
}
