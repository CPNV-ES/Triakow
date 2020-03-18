import React from 'react'
import Grid from "@material-ui/core/Grid";
import "./headline.css"
import Typography from "@material-ui/core/Typography";

export function Headline(props) {
  return (
    <Grid id="headline" container spacing={3} justify={"center"}>
      <Grid item>
        <img alt={props.logo.alt} id="logo" src={props.logo.src}/>
      </Grid>

      <Grid item>
        <Typography variant="h5"><strong>{props.pitch}</strong></Typography>
        <Typography variant="body1">{props.try}</Typography>
      </Grid>
    </Grid>
  )
}
