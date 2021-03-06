import styled from 'styled-components';
import { Link } from "react-router-dom";

export const Container = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100px;
  height: 100%;
  background: #373B53;
  position: fixed;
`;

export const Pages = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 35px;
  background: none;
`;

export const LogoArea = styled.div`
  display: flex;
  flex-shrink: 0;
  height: 100px;
  width: 100px;
  background: #6F52ED;
  align-items: center;
  justify-content: center;

`;

export const Navigation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  justify-content: space-between;
`;

export const RedirectPage = styled(Link)`
  display: flex;
  height: 54px;
  width: 54px;
  align-items: center;
  justify-content: center;
  margin-top: ${props => (props.margin >= 0 ? props.margin : 15)}px;
  border-radius: 10px;
  transition: background linear 0.2s;

  &:hover {
    background: #fff;

    svg path {
      stroke: #713BDB;
    }
  }
  svg {
    height: 22px;
    width: 22px;
  }
`;

export const Settings = styled(LogoArea)`
  background: none;
  border-top: 1px solid #494E67;
`;
