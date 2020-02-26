import React from 'react'
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Axios from "axios";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from '@material-ui/core/Menu';
import Select from "@material-ui/core/Select";

export class Navigation extends React.Component {
  openMenuRef = null;

  constructor(props) {
    super(props);
    this.state = {
      selectedCurrency: 0,
      currencies: [],
      isMenuOpen: false
    }
  }

  componentDidMount() {
    this.loadData()

    //TODO find a way to not use document
    this.openMenuRef = document.getElementById("openMenu")
  }

  loadData() {
    Axios.get("/data.json").then(res => {
      this.setState({
        currencies: Object.keys(res.data)
      })
    })
  }

  render() {
    let currencies = this.renderSelectCurrencies();
    return (
      <AppBar position={"static"} color={"transparent"}>
        <Toolbar>
          <Grid container justify={"flex-end"}>
            <Grid item>
              <Button>Se connecter</Button>
            </Grid>

            <Grid item>
              <div>
                <Button innerRef={this.openMenuRef} id={"openMenu"} aria-controls="simple-menu" aria-haspopup="true"
                        onClick={this.handleOpenMenu}>
                  Menu
                </Button>
                <Menu
                  id="simple-menu"
                  anchorEl={this.openMenuRef}
                  open={this.state.isMenuOpen}
                  onClose={this.handleCloseMenu}
                >
                  <MenuItem onClick={this.handleCloseMenu}>Consultés récemment</MenuItem>
                  <MenuItem onClick={this.handleCloseMenu}>Aperçus - réservations</MenuItem>
                  <MenuItem onClick={this.handleCloseMenu}>Moyen de paiement</MenuItem>
                </Menu>
              </div>
            </Grid>

            <Grid item>
              <Select disableUnderline value={this.state.selectedCurrency}
                      onChange={this.handleCurrencyChange}>
                {currencies}
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

  renderSelectCurrencies() {
    return this.state.currencies.map((value, idx) =>
      <MenuItem key={idx} value={idx}>{value}</MenuItem>
    )
  }

  handleCurrencyChange = event => {
    this.setState({
      selectedCurrency: event.target.value
    })
  };

  handleOpenMenu = event => {
    this.setState({
      isMenuOpen: true
    })
  };

  handleCloseMenu = () => {
    this.setState({
      isMenuOpen: false
    })
  };
}