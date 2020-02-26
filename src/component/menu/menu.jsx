import React from 'react'
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Axios from "axios";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

export class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCurrency: 0,
      currencies: [],
    }
  }

  componentDidMount() {
    this.loadData()
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
              <Button>Menu</Button>
            </Grid>

            <Grid item>
              <Select value={this.state.selectedCurrency} onChange={this.handleCurrencyChange}>
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
  }
}