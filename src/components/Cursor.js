import React from 'react';
import styled from 'styled-components';

const StyledCursor = styled.div`
  width: 3rem;
  height: 3rem;
  border: 2px solid #ffbf00;
  border-radius: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  pointer-events: none;
  transition: all 0.4s ease;
  transition-property: border, transform, height, width;
  transform-origin: 150% 150%;
  z-index: 1000;
`;


const Cursor = () => {

    return (
        <StyledCursor className="cursor">
        </StyledCursor>
    )
};

export default Cursor;