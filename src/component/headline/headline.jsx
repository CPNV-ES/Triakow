import React from 'react'
import Grid from "@material-ui/core/Grid";
import "./headline.css"
import Typography from "@material-ui/core/Typography";
import useMediaQuery from '@material-ui/core/useMediaQuery';

export function Headline(props) {
  const isLogoDisplayed = useMediaQuery('(min-width:980px)');
  const isSmallScreen = useMediaQuery('(max-width:600px)');

  return (
    <Grid id="headline" container spacing={3} justify={"center"}>
      <Grid item>
        {isLogoDisplayed && <img alt={props.label.logoAlt} id="logo" src={props.logoSrc}/>}
      </Grid>

      <Grid item>
        <Typography
          variant="h5"><strong>{isSmallScreen ? props.label.pitch.small : props.label.pitch.big}</strong></Typography>
        <Typography variant="body1">{props.label.try}</Typography>
      </Grid>
    </Grid>
  )
}
