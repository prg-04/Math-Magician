import React, { useRef } from 'react';
import { HiMenuAlt3, HiOutlineX } from 'react-icons/hi';
import { Links } from '../constants/constants';
import { StyledLink, StyledNav } from '../Styled';

const Navbar = () => {
  const linkRef = useRef();
  const menuRef = useRef();

  const handleClick = () => {
    linkRef.current.classList.toggle('show-links');
    menuRef.current.childNodes[0].classList.toggle('active');
    menuRef.current.childNodes[1].classList.toggle('active');
  };
  const handleClose = () => {
    linkRef.current.classList.toggle('show-links');
    menuRef.current.childNodes[0].classList.toggle('active');
    menuRef.current.childNodes[1].classList.toggle('active');
  };

  const handleClicked = () => {
    linkRef.current.classList.remove('show-links');
    menuRef.current.childNodes[0].classList.remove('active');
    menuRef.current.childNodes[1].classList.remove('active');
  };

  return (
    <StyledNav>
      <div>
        <StyledLink to="/" fontSize="2rem" weight="900" color="limegreen">
          Math Magicians
        </StyledLink>
      </div>
      <ul className="links" ref={linkRef}>
        {Links.map((link) => (
          <StyledLink
            key={link.name}
            color="#fff"
            fontSize="1.2rem"
            to={link.path}
            onClick={handleClicked}
          >
            {link.name}
          </StyledLink>
        ))}
      </ul>
      <div className="toggle-menu" ref={menuRef}>
        <HiMenuAlt3 className="menu" onClick={handleClick} />
        <HiOutlineX className="close" onClick={handleClose} />
      </div>
    </StyledNav>
  );
};

export default Navbar;
