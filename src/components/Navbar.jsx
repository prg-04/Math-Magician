import React from 'react';
import { Links } from '../constants/constants';
import { StyledLink, StyledNav } from '../Styled';

const Navbar = () => (
  <StyledNav>
    <div>
      <StyledLink to="/" fontSize="2rem" weight="900" color="limegreen">Math Magicians</StyledLink>
    </div>

    <ul style={{ display: 'flex', gap: '2rem' }}>
      {Links.map((link) => (
        <StyledLink
          key={link.name}
          color="#fff"
          fontSize="1.2rem"
          to={link.path}
        >
          {link.name}
        </StyledLink>
      ))}
    </ul>
  </StyledNav>
);

export default Navbar;
