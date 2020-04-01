import React, { useState, useRef } from 'react'
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import {PopupMenu} from "../common/popupMenu/popupMenu";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Burger from "../burger/burger";
import MenuResponsive from "../menu-responsive";
import { useOnClickOutside } from '../../hook';


export function Navigation(props) {
  const isLogoDisplayed = useMediaQuery('(max-width:979px)');
  const renderedCurrencies = props.currencies.map((value, idx) =>
    <MenuItem key={idx} value={idx}>{value}</MenuItem>


  );
    const [open, setOpen] = useState(false);

    const node = useRef();
    useOnClickOutside(node, () => setOpen(false));

    const displayBurger = useMediaQuery('(max-width:979px)');
    const displayMenu = useMediaQuery('(min-width:979px)');

  return (
    <AppBar position={"static"} color={"transparent"}>
      <Toolbar>
        {isLogoDisplayed && <img alt={props.label.logoAlt} id="logosmall" src={props.logoSrc}/>}
        <Grid container justify={"flex-end"}>

          <Grid item>
            <Button>{props.label.connection}</Button>
          </Grid>

          <Grid item>
              {displayMenu && <PopupMenu
              id={"openMenu"}
              label={props.label.menu}
              items={[
                {label: props.label.recentlyConsulted},
                {label: props.label.previewReservation},
                {label: props.label.paymentMethod}
              ]}
            />}
          </Grid>

          <Grid item>
              {displayMenu && <Select disableUnderline value={props.selectedCurrencyKey}
                    onChange={event => props.setSelectedCurrencyKey(event.target.value)}>
              {renderedCurrencies}
            </Select>}
          </Grid>

          <Grid item>
              {displayMenu && <PopupMenu
              id={"openMenuLang"}
              label={props.language}
              items={props.availableLanguages.map(lang => {
                return {
                  label: lang,
                  value: lang,
                  onClick: props.setLanguage
                }
              })}
            />}
          </Grid>

          <Grid item>
              <div ref={node}>
                  { displayBurger && <Burger open={open} setOpen={setOpen} />}
              </div>
          </Grid>
          <MenuResponsive open={open} setOpen={setOpen} />

        </Grid>
      </Toolbar>
    </AppBar>
  )
}
