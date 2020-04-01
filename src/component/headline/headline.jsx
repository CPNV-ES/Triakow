import React from 'react'
import Grid from "@material-ui/core/Grid";
import "./headline.css"
import Typography from "@material-ui/core/Typography";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {makeStyles} from "@material-ui/core/styles";
import useTheme from "@material-ui/core/styles/useTheme";

const useStyle = makeStyles((theme) => {
  return {
    container: {
      [theme.breakpoints.down('sm')]: {
        maxWidth: "90%",
        margin: "auto",
        justifyContent: "flex-start"
      }
    }
  }
});

export function Headline(props) {
  const theme = useTheme();
  const classes = useStyle();
  const isLogoDisplayed = useMediaQuery('(min-width:980px)');
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid id="headline" container spacing={3} justify={"center"} className={classes.container}>
      {isLogoDisplayed &&
      <Grid item>
        <img alt={props.label.logoAlt} id="logo" src={props.logoSrc}/>
      </Grid>
      }

      <Grid item>
        <Typography
          variant="h5"><strong>{isSmallScreen ? props.label.pitch.small : props.label.pitch.big}</strong></Typography>
        <Typography variant="body1">{props.label.try}</Typography>
      </Grid>
    </Grid>
  )
}
