import React, {useState} from 'react'
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import {DatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import moment from 'moment'
import Grid from "@material-ui/core/Grid";
import {useTranslation} from "react-i18next";
import MomentUtils from "@date-io/moment";

import "moment/locale/fr";
import "moment/locale/en-gb";
import "moment/locale/it";
import "moment/locale/de";

export function Search() {
  const [city, setCity] = useState("");
  const [room, setRoom] = useState(0);
  const [startAt, setStartAt] = useState(moment());
  const [endAt, setEndAt] = useState(moment());

  const {t, i18n} = useTranslation();

  return (
    <MuiPickersUtilsProvider utils={MomentUtils} locale={i18n.language}>
      <Grid container spacing={3} justify={"center"}>
        <Grid item>
          <TextField value={city} onChange={(event => setCity(event.target.value))} placeholder="Londres"/>
        </Grid>

        <Grid item>
          <DatePicker value={startAt} onChange={setStartAt}/>
        </Grid>

        <Grid item>
          <DatePicker value={endAt} onChange={setEndAt}/>
        </Grid>

        <Grid item>
          <Select value={room} onChange={event => setRoom(event.target.value)}>
            <MenuItem value={0}>{t("search.room.item.single")}</MenuItem>
            <MenuItem value={1}>{t("search.room.item.double")}</MenuItem>
            <MenuItem value={2}>{t("search.room.item.family")}</MenuItem>
            <MenuItem value={3}>{t("search.room.item.multiple")}</MenuItem>
          </Select>
        </Grid>

        <Grid item>
          <Button variant="contained" color="primary">
            {t("search.searchLabel")}
          </Button>
        </Grid>
      </Grid>
    </MuiPickersUtilsProvider>
  );
}