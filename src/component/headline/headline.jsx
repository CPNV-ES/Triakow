import React from 'react'
import Grid from "@material-ui/core/Grid";
import "./headline.css"
import Logo from "./Trivago.png";
import Typography from "@material-ui/core/Typography";
import {useTranslation} from "react-i18next";
import useMediaQuery from '@material-ui/core/useMediaQuery';

export function Headline() {
  const {t} = useTranslation();

  const displayLogo = useMediaQuery('(min-width:980px)');
  const smallScreen = useMediaQuery('(max-width:600px)');

  return (
    <Grid id="headline" container spacing={3} justify={"center"}>
      <Grid item>
          {displayLogo && <img alt={t("headline.logoAlt")} id="logo" src={Logo}/>}
      </Grid>

      <Grid item>
        <Typography variant="h5"><strong>{smallScreen ? t("headline.pitch.small") : t("headline.pitch.big")}</strong></Typography>
        <Typography variant="body1">{t("headline.try")}</Typography>
      </Grid>
    </Grid>
  )
}