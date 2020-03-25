import React from 'react'
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import {PopupMenu} from "../common/popupMenu/popupMenu";
import useMediaQuery from '@material-ui/core/useMediaQuery';

export function Navigation(props) {
  const isLogoDisplayed = useMediaQuery('(max-width:979px)');
  const renderedCurrencies = props.currencies.map((value, idx) =>
    <MenuItem key={idx} value={idx}>{value}</MenuItem>
  );

  return (
    <AppBar position={"static"} color={"transparent"}>
      <Toolbar>
        {isLogoDisplayed && <img alt={props.label.logoAlt} id="logosmall" src={props.logoSrc}/>}
        <Grid container justify={"flex-end"}>

          <Grid item>
            <Button>{props.label.connection}</Button>
          </Grid>

          <Grid item>
            <PopupMenu
              id={"openMenu"}
              label={props.label.menu}
              items={[
                {label: props.label.recentlyConsulted},
                {label: props.label.previewReservation},
                {label: props.label.paymentMethod}
              ]}
            />
          </Grid>

          <Grid item>
            <Select disableUnderline value={props.selectedCurrencyKey}
                    onChange={event => props.setSelectedCurrencyKey(event.target.value)}>
              {renderedCurrencies}
            </Select>
          </Grid>

          <Grid item>
            <PopupMenu
              id={"openMenuLang"}
              label={props.language}
              items={props.availableLanguages.map(lang => {
                return {
                  label: lang,
                  value: lang,
                  onClick: props.setLanguage
                }
              })}
            />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}
