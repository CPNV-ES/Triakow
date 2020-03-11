import React from 'react'
import Grid from "@material-ui/core/Grid";
import "./headline.css"
import Logo from "./Trivago.png";
import Typography from "@material-ui/core/Typography";

export function Headline() {
  return (
    <Grid id="headline" container spacing={3} justify={"center"}>
      <Grid item>
        <img alt={"Trivago logo"} id="logo" src={Logo}/>
      </Grid>

      <Grid item>
        <Typography variant="h5"><strong>Trouvez l’hôtel idéal et comparez les prix de différents sites
          Web</strong></Typography>
        <Typography variant="body1">Essayez de rechercher une ville, un hôtel ou même un lieu connu.</Typography>
      </Grid>
    </Grid>
  )
}