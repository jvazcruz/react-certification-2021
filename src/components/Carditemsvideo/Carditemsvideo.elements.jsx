import React from 'react';
import styled from 'styled-components';

export const CardVideoDisplayerContainer = styled.div`
  display: flex;
  flex: 1 1 0%;
  display: flex;
  flex-flow: row wrap;
  position: absolute;
  justify-content: center;
  padding-bottom: 2rem;
  padding: 20px;
  margin: 0px auto;
  top: ${(props) => props.theme.navbar_height};
  left: ${(props) => props.theme.sidemenu_width};
  width: calc(100vw - ${(props) => props.theme.sidemenu_width});
`;

export const CardVideoContainer = styled.div`
  width: calc((100vw - ${({ theme }) => theme.sidemenu_width}) / 1 - 4rem - 0.01px);
  aspect-ratio: 16/14;
  margin: 10px;
  color: rgba(0, 0, 0, 0.87);
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%),
    0px 1px 3px 0px rgb(0 0 0 / 12%);
  @media (min-width: 750px) {
    width: calc((100vw - ${({ theme }) => theme.sidemenu_width}) / 3 - 4rem - 0.01px);
  }
  @media (min-width: 1000px) {
    width: calc((100vw - ${({ theme }) => theme.sidemenu_width}) / 4 - 4rem - 0.01px);
  }
  &:hover {
    cursor: pointer;
  }
`;

export const CardVideoImage = styled.img`
  width: 100%;
  aspect-ratio: 16/9;
  height: auto;
  background: yellow;
`;

const CardVideoBottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  aspect-ratio: 16/5;
  align-items: center;
  justify-content: center;
  padding: 16px;
`;

const CardVideoTitle = styled.h2`
  color: ${(props) => props.theme.text_color};
  padding: 0.5rem 0.3rem;
  text-align: center;
  padding: 16px;
  font-size: 1.25rem;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: 500;
  line-height: 1.6;
  letter-spacing: 0.0075em;
`;

const CardVideoDescription = styled.p`
  color: ${(props) => props.theme.text_color};
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-bottom: 0.5rem;
  font-size: 0.875rem;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: 400;
  line-height: 1.43;
  letter-spacing: 0.01071em;
`;

export function CardVideoBottom({ title, description }) {
  return (
    <>
      <CardVideoBottomContainer>
        <CardVideoTitle>{title}</CardVideoTitle>
        <CardVideoDescription>{description}</CardVideoDescription>
      </CardVideoBottomContainer>
    </>
  );
}
