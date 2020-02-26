import React from 'react'
import Grid from "@material-ui/core/Grid";
import "./headline.css"
import Logo from "./Trivago.png";
import Typography from "@material-ui/core/Typography";


export class Headline extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <Grid container spacing={3} justify={"center"}>
        <Grid item>
          <img alt={"Trivago logo"} id="logo" src={Logo}/>
        </Grid>

        <Grid item>
          <Typography variant="h5">Trouvez l’hôtel idéal et comparez les prix de différents sites
            Web</Typography>
          <Typography variant="h6">Essayez de rechercher une ville, un hôtel ou même un lieu connu.</Typography>
        </Grid>
      </Grid>
    )
  }
}