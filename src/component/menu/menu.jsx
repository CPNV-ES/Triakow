import React from 'react'
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

export class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
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
              <Button>CHF</Button>
            </Grid>

            <Grid item>
              <Button>FR</Button>
            </Grid>
          </Grid>
        </Toolbar>


      </AppBar>
    )
  }
}