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
  background-color: rgba(0, 0, 0, 0.3);
`;

const StyledH3 = styled.h3`
  color: #fff;
  margin-right: 10rem;
  font-size: 2rem;
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
  padding: 1.8rem;
  font-size: 1.4rem;
  border: 1px solid #ccc;
`;

const StyledH2 = styled.h2`
  font-size: ${(props) => (props.fontSize ? props.fontSize : {})};
  color: ${(props) => (props.color ? props.color : {})};
`;

const Styledp = styled.p`
text-align: left;
font-size: 18px;
color: #fff;
lineH-height: 30px
`;

export {
  StyledLink, StyledNav, StyledH3, StyledButton, StyledH2, Styledp,
};
