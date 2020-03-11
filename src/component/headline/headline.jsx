import React, {useEffect} from 'react'
import Grid from "@material-ui/core/Grid";
import "./headline.css"
import Logo from "./Trivago.png";
import Typography from "@material-ui/core/Typography";
import {useTranslation} from "react-i18next";

export function Headline() {
  const {t, i18n} = useTranslation();

  useEffect(_ => {
    i18n.changeLanguage("en");
  }, []);
  return (
    <Grid id="headline" container spacing={3} justify={"center"}>
      <Grid item>
        <img alt={"Trivago logo"} id="logo" src={Logo}/>
      </Grid>

      <Grid item>
        <Typography variant="h5"><strong>{t("headline.pitch")}</strong></Typography>
        <Typography variant="body1">Essayez de rechercher une ville, un hôtel ou même un lieu connu.</Typography>
      </Grid>
    </Grid>
  )
}