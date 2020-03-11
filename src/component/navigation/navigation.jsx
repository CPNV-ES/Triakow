import React, {useEffect, useState} from 'react'
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Axios from "axios";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import {useTranslation} from "react-i18next";
import {PopupMenu} from "../common/popupMenu/popupMenu";

const AVAILABLE_LANGUAGE = ["FR", "EN", "DE", "IT"];

export function Navigation() {
  const [selectedCurrencyKey, setSelectedCurrencyKey] = useState(0);
  const [currencies, setCurrencies] = useState([]);

  const {t, i18n} = useTranslation();

  useEffect(() => {
    Axios.get("/data.json").then(res => setCurrencies(Object.keys(res.data)));
  }, []);

  useEffect(() => {
    setSelectedCurrencyKey(currencies.indexOf(t("defaultCurrency")));
    document.title = t("title")
  }, [i18n.language, currencies]);

  const renderedCurrencies = currencies.map((value, idx) =>
    <MenuItem key={idx} value={idx}>{value}</MenuItem>
  );

  return (
    <AppBar position={"static"} color={"transparent"}>
      <Toolbar>
        <Grid container justify={"flex-end"}>
          <Grid item>
            <Button>{t("navigation.connectLabel")}</Button>
          </Grid>

          <Grid item>
            <PopupMenu
              id={"openMenu"}
              label={t("navigation.menu.label")}
              items={[
                {label: t("navigation.menu.item.recentlyConsulted"),},
                {label: t("navigation.menu.item.previewReservation"),},
                {label: t("navigation.menu.item.paymentMethod"),}
              ]}
            />
          </Grid>

          <Grid item>
            <Select disableUnderline value={selectedCurrencyKey}
                    onChange={event => setSelectedCurrencyKey(event.target.value)}>
              {renderedCurrencies}
            </Select>
          </Grid>

          <Grid item>
            <PopupMenu
              id={"openMenuLang"}
              label={i18n.language}
              items={AVAILABLE_LANGUAGE.map(lang => {
                return {
                  label: lang,
                  value: lang,
                  onClick: (language) => i18n.changeLanguage(language)
                }
              })}
            />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}