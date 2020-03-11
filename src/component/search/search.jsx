import React, {useState} from 'react'
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import {DatePicker} from "@material-ui/pickers";
import moment from 'moment'
import Grid from "@material-ui/core/Grid";


export function Search() {
  const [city, setCity] = useState("");
  const [room, setRoom] = useState(0);
  const [startAt, setStartAt] = useState(moment());
  const [endAt, setEndAt] = useState(moment());

  return (
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
          <MenuItem value={0}>Chambre simple</MenuItem>
          <MenuItem value={1}>Chambre double</MenuItem>
          <MenuItem value={2}>Chambres familiales</MenuItem>
          <MenuItem value={3}>Chambres multiples</MenuItem>
        </Select>
      </Grid>

      <Grid item>
        <Button variant="contained" color="primary">
          Chercher
        </Button>
      </Grid>
    </Grid>
  );
}