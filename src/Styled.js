import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  cursor: pointer;
  font-weight: ${(props) => (props.weight ? props.weight : {})};
  text-decoration: none;
  color: ${(props) => (props.color ? props.color : {})};
  font-size: ${(props) => (props.fontSize ? props.fontSize : {})};
`;

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  background-color: rgba(0, 0, 0, 1.0);
  position: fixed;
  width: 100%;
  padding: 1.5rem;
  top: 0;
  left: 0;
  z-index: 10;

  @media screen and (min-width: 600px) {
    background-color: rgba(0, 0, 0, 0.8);
  }
`;

const StyledH3 = styled.h3`
  color: #fff;
  font-size: 1.5rem;


  @media screen and (min-width: 600px) {
    font-size: 2rem;
  }

  @media screen and (min-width: 1200px) {
    margin-top: 2rem;
    margin-right: 6rem;
  }
`;

const StyledButton = styled.button`
  background-color: ${(props) => (props.idx === 3
    || props.idx === 7
    || props.idx === 11
    || props.idx === 15
    || props.idx === 18
    ? '#ffb500'
    : '#fff')};
  grid-column: ${(props) => (props.idx === 16 ? 'span 2 ' : 'auto')};
  padding: 1.5rem;
  font-size: 1.4rem;
  border: 1px solid #ccc;

  @media screen and (min-width: 600px) {
    padding: 1.8rem;
  }
`;

const StyledH2 = styled.h2`
  font-size: ${(props) => (props.fontSize ? props.fontSize : {})};
  color: ${(props) => (props.color ? props.color : {})};
`;

const Styledp = styled.p`
  text-align: left;
  font-size: 18px;
  color: #fff;
  line-height: 20px;
`;

export {
  StyledLink, StyledNav, StyledH3, StyledButton, StyledH2, Styledp,
};
