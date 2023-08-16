import React from 'react';
import { pageInfo } from '../constants/constants';
import { StyledH2, StyledLink } from '../Styled';

const Home = () => (
  <div className="home">
    {pageInfo.map(({ heading, description, link }) => (
      <div key={heading} className="cont">
        <StyledH2 color="lightseagreen" fontSize="1.6rem">
          {heading}
        </StyledH2>
        <p style={{ lineHeight: '30px' }}>{description}</p>
        {link && (
          <>
            <span> 👉</span>
            {' '}
            <StyledLink color="lightsalmon" key={link.text} to={link.path}>
              {link.text}
            </StyledLink>
          </>
        )}
      </div>
    ))}
  </div>
);

export default Home;
