import React from 'react'
import Grid from "@material-ui/core/Grid";
import "./headline.css"
import Logo from "./Trivago.png";
import Typography from "@material-ui/core/Typography";
import {useTranslation} from "react-i18next";

export function Headline() {
  const {t} = useTranslation();

  return (
    <Grid id="headline" container spacing={3} justify={"center"}>
      <Grid item>
        <img alt={t("headline.logoAlt")} id="logo" src={Logo}/>
      </Grid>

      <Grid item>
        <Typography variant="h5"><strong>{t("headline.pitch")}</strong></Typography>
        <Typography variant="body1">{t("headline.try")}</Typography>
      </Grid>
    </Grid>
  )
}