import React from 'react'
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import {DatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import Grid from "@material-ui/core/Grid";
import MomentUtils from "@date-io/moment";
import {useFormik} from 'formik';
import SearchIcon from '@material-ui/icons/Search';
import {makeStyles} from "@material-ui/core/styles";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import useTheme from "@material-ui/core/styles/useTheme";

const useStyle = makeStyles((theme) => {
  return {
    container: {
      [theme.breakpoints.down('sm')]: {
        maxWidth: "90%",
        margin: "auto",
        backgroundColor: "#f3f3f3"
      },
      [theme.breakpoints.up('md')]: {
        justifyContent: "center"
      }
    }
  }
});

export function Search(props) {
  const theme = useTheme();
  const isMagnifierDisplayed = useMediaQuery(theme.breakpoints.between('md', 'md'));

  const classes = useStyle();
  const formik = useFormik({
    initialValues: props.initialValues,
    onSubmit: props.onSubmit,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <MuiPickersUtilsProvider utils={MomentUtils} locale={props.language}>
        <Grid container spacing={3} justify={"space-between"} alignItems={"flex-end"}
              className={classes.container}>
          <Grid item xs={12} md={"auto"}>
            <TextField name={"city"}
                       value={formik.values.city}
                       onChange={formik.handleChange}
                       placeholder={props.label.cityPlaceholder}
                       fullWidth={true}
            />
          </Grid>

          <Grid item xs={6} sm={4} md={"auto"}>
            <DatePicker label={props.label.checkIn}
                        value={formik.values.startAt}
                        onChange={(date) => formik.setFieldValue("startAt", date)}
                        fullWidth={true}
            />
          </Grid>

          <Grid item xs={6} sm={4} md={"auto"}>
            <DatePicker label={props.label.checkOut}
                        value={formik.values.endAt}
                        onChange={(date) => formik.setFieldValue("endAt", date)}
                        fullWidth={true}
            />
          </Grid>

          <Grid item xs={12} sm={4} md={"auto"}>
            <Select name={"room"} value={formik.values.room} onChange={formik.handleChange} fullWidth={true}>
              <MenuItem value={0}>{props.label.room.single}</MenuItem>
              <MenuItem value={1}>{props.label.room.double}</MenuItem>
              <MenuItem value={2}>{props.label.room.family}</MenuItem>
              <MenuItem value={3}>{props.label.room.multiple}</MenuItem>
            </Select>
          </Grid>

          <Grid item xs={12} md={"auto"}>
            <Button type="submit" variant="contained" color="primary" fullWidth={true}>
              {isMagnifierDisplayed ? <SearchIcon/> : props.label.search}
            </Button>
          </Grid>
        </Grid>
      </MuiPickersUtilsProvider>
    </form>
  );
}
