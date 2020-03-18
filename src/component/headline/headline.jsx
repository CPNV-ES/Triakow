import React from 'react'
import Grid from "@material-ui/core/Grid";
import "./headline.css"
import Typography from "@material-ui/core/Typography";

export function Headline(props) {
  return (
    <Grid id="headline" container spacing={3} justify={"center"}>
      <Grid item>
        <img alt={props.label.logoAlt} id="logo" src={props.logoSrc}/>
      </Grid>

      <Grid item>
        <Typography variant="h5"><strong>{props.label.pitch}</strong></Typography>
        <Typography variant="body1">{props.label.try}</Typography>
      </Grid>
    </Grid>
  )
}
