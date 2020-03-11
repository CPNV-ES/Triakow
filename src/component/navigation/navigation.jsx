import React, {useEffect, useState} from 'react'
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Axios from "axios";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from '@material-ui/core/Menu';
import Select from "@material-ui/core/Select";

export function Navigation(props) {
  const [selectedCurrencyKey, setSelectedCurrencyKey] = useState(0);
  const [currencies, setCurrencies] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openMenuRef, setOpenMenuRef] = useState(null);

  useEffect(() => {
    setOpenMenuRef(document.getElementById("openMenu"));

    Axios.get("/data.json").then(res => setCurrencies(Object.keys(res.data)));
  }, []);

  const renderedCurrencies = currencies.map((value, idx) =>
    <MenuItem key={idx} value={idx}>{value}</MenuItem>
  );

  return (
    <AppBar position={"static"} color={"transparent"}>
      <Toolbar>
        <Grid container justify={"flex-end"}>
          <Grid item>
            <Button>Se connecter</Button>
          </Grid>

          <Grid item>
            <div>
              <Button innerRef={openMenuRef} id={"openMenu"} aria-controls="simple-menu" aria-haspopup="true"
                      onClick={_ => setIsMenuOpen(true)}>
                Menu
              </Button>
              <Menu
                id="simple-menu"
                anchorEl={openMenuRef}
                open={isMenuOpen}
                onClose={_ => setIsMenuOpen(false)}
              >
                <MenuItem onClick={_ => setIsMenuOpen(false)}>Consultés récemment</MenuItem>
                <MenuItem onClick={_ => setIsMenuOpen(false)}>Aperçus - réservations</MenuItem>
                <MenuItem onClick={_ => setIsMenuOpen(false)}>Moyen de paiement</MenuItem>
              </Menu>
            </div>
          </Grid>

          <Grid item>
            <Select disableUnderline value={selectedCurrencyKey}
                    onChange={event => setSelectedCurrencyKey(event.target.value)}>
              {renderedCurrencies}
            </Select>
          </Grid>

          <Grid item>
            <Button>FR</Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}