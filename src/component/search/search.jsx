import React from 'react'
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import {DatePicker} from "@material-ui/pickers";
import moment from 'moment'
import Grid from "@material-ui/core/Grid";

export class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "",
      room: 0,
      startAt: moment(),
      endAt: moment(),
    }
  }

  render() {
    return (
      <Grid container spacing={3} justify={"center"}>
        <Grid item>
          <TextField value={this.state.city} onChange={this.handleCityChange} placeholder="Londres"/>
        </Grid>

        <Grid item>
          <DatePicker value={this.state.startAt} onChange={this.handleStartAtChange}/>
        </Grid>

        <Grid item>
          <DatePicker value={this.state.endAt} onChange={this.handleEndAtChange}/>
        </Grid>

        <Grid item>
          <Select value={this.state.room} onChange={this.handleRoomChange}>
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
    )
  }

  handleCityChange = event => {
    this.setState({
      city: event.target.value
    })
  };

  handleRoomChange = event => {
    this.setState({
      room: event.target.value
    })
  };

  handleStartAtChange = date => {
    this.setState({
      startAt: date
    })
  };

  handleEndAtChange = date => {
    this.setState({
      endAt: date
    })
  }
}