import React from 'react';
import { bool } from 'prop-types';
import { StyledMenuResponsive } from './menu-responsive.styled';

const MenuResponsive = ({ open }) => {
    return (
        <StyledMenuResponsive open={open}>
            <a href="/">
                <span>Consultés récemments</span>
            </a>
            <a href="/">
                <span>Aperçus - Réservations</span>
            </a>
            <a href="/">
                <span>Moyen de paiement</span>
            </a>
            <a href="/">
                <span>Se Connecter</span>
            </a>
            <h3>Options</h3>
            <a href="/">
                <span>Pays</span>
            </a>
            <a href="/">
                <span>Devise</span>
            </a>
            <a href="/">
                <span>Langue</span>
            </a>
        </StyledMenuResponsive>
    )
}
MenuResponsive.propTypes = {
    open: bool.isRequired,
}
export default MenuResponsive;