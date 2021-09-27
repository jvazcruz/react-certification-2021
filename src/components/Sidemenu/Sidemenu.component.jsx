import React from 'react';
import { SideMenuContainer, SideMenuItem } from './Sidemenu.elements';

function SideMenu() {
  return (
    <>
      <SideMenuContainer>
        <SideMenuItem text="Home" />
        <SideMenuItem text="Liked" />
      </SideMenuContainer>
    </>
  );
}

export default SideMenu;
