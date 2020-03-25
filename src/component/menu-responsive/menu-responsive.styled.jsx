import styled from 'styled-components';

export const StyledMenuResponsive = styled.nav`
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  text-align: right;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  background-color: orange;

  a {
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    color: black;
    text-decoration: none;
    transition: color 0.3s linear;
    
    }
  }
`;