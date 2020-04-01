import React from 'react';
import { bool, func } from 'prop-types';
import { StyledBurger } from './burger.styled';
import MenuIcon from '@material-ui/icons/Menu';

const Burger = ({ open, setOpen }) => {
    return (
        <StyledBurger open={open} onClick={() => setOpen(!open)}>
            <MenuIcon/>
        </StyledBurger>
    )
}
Burger.propTypes = {
    open: bool.isRequired,
    setOpen: func.isRequired,
};

export default Burger;