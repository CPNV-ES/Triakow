import React from 'react'
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import {DatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import Grid from "@material-ui/core/Grid";
import MomentUtils from "@date-io/moment";
import {useFormik} from 'formik';

export function Search(props) {
  const formik = useFormik({
    initialValues: props.initialValues,
    onSubmit: props.onSubmit,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <MuiPickersUtilsProvider utils={MomentUtils} locale={props.language}>
        <Grid container spacing={3} justify={"center"}>
          <Grid item>
            <TextField name={"city"}
                       value={formik.values.city}
                       onChange={formik.handleChange}
                       placeholder={props.cityPlaceholder}/>
          </Grid>

          <Grid item>
            <DatePicker label={props.label.checkIn}
                        value={formik.values.startAt}
                        onChange={(date) => formik.setFieldValue("startAt", date)}/>
          </Grid>

          <Grid item>
            <DatePicker label={props.label.checkOut}
                        value={formik.values.endAt}
                        onChange={(date) => formik.setFieldValue("endAt", date)}/>
          </Grid>

          <Grid item>
            <Select name={"room"} value={formik.values.room} onChange={formik.handleChange}>
              <MenuItem value={0}>{props.label.room.single}</MenuItem>
              <MenuItem value={1}>{props.label.room.double}</MenuItem>
              <MenuItem value={2}>{props.label.room.family}</MenuItem>
              <MenuItem value={3}>{props.label.room.multiple}</MenuItem>
            </Select>
          </Grid>

          <Grid item>
            <Button type="submit" variant="contained" color="primary">
              {props.label.search}
            </Button>
          </Grid>
        </Grid>
      </MuiPickersUtilsProvider>
    </form>
  );
}
