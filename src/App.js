import "./App.css";

import React, { useState, useEffect, useRef } from "react";
import { Button, TextField, Grid, Container, Divider } from "@mui/material";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { incrementByAmount, clear } from "./store/user";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import PropTypes from "prop-types";
import Tab from "@mui/material/Tab";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  console.log(value);

  return (
    <div role="tabpanel" hidden={value !== index} id={`full-width-tabpanel-${index}`} aria-labelledby={`full-width-tab-${index}`} {...other}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

function App() {
  const [email, setemail] = useState("");
  const [fullname, setfullname] = useState("");
  const [dateofbirth, setdateofbirth] = useState("");
  const [phone, setphone] = useState("");
  const [address, setaddress] = useState("");
  const [password, setpassword] = useState("");
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const [user, setUser] = useState({ email: "", fullname: "", dateofbirth: "", phone: "", address: "", password: "" });

  // const count = useSelector((state) => state.counter.user[0]);
  const users = useSelector((state) => state.counter.user);
  const dispatch = useDispatch();

  const onEmailChange = (e) => setemail(e.target.value);
  const onFullNameChange = (e) => {
    setfullname(e.target.value);
  };

  const clearAll = () => {
    dispatch(clear());
  };

  // const user2 = useSelector((state) => state.counter.user);
  const onSubmit = async () => {
    setUser({ ...user, fullname: fullname, email: email, dateofbirth: dateofbirth, phone: phone, address: address, password: password });
  };
  const onDateChange = (e) => setdateofbirth(e.target.value);
  const onPhoneChange = (e) => setphone(e.target.value);
  const onAddressChange = (e) => setaddress(e.target.value);
  const onPasswordChange = (e) => setpassword(e.target.value);

  const bull = (
    <Box component="span" sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}>
      •
    </Box>
  );
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      // Your useEffect code here to be run on update
      dispatch(incrementByAmount(user));
    }
  }, [user]);
  return (
    <Container>
      <Grid container direction="column">
        <Grid>
          <h1> Personal Information</h1>
          <p>this information will be displayed publicy so be careful what you share</p>
        </Grid>
        <Grid>
          Full Name
          <br />
          <TextField
            margin="dense"
            onChange={onFullNameChange}
            value={fullname}
            label={"Text Value"} //optional
          />
        </Grid>
        <Grid>
          Email Address
          <br />
          <TextField
            margin="dense"
            onChange={onEmailChange}
            value={email}
            label={"Text Value"} //optional
          />
        </Grid>
        <Grid>
          Date of Birth
          <br />
          <TextField
            margin="dense"
            type="date"
            onChange={onDateChange}
            value={dateofbirth} //optional
          />
        </Grid>
        <Grid>
          Address
          <br />
          <TextField
            margin="dense"
            onChange={onAddressChange}
            value={address}
            label={"Text Value"} //optional
          />
        </Grid>

        <Grid>
          Password
          <br />
          <TextField
            margin="dense"
            onChange={onPasswordChange}
            value={password}
            label={"Text Value"} //optional
          />
        </Grid>
        <Grid container>
          <Grid item xs={4}>
            <Button>Cancel</Button>
            <Button onClick={onSubmit}>Submit</Button>
          </Grid>

          <Grid item xs={8}>
            <Button>Auto Generate</Button>
          </Grid>
        </Grid>
      </Grid>

      <Divider></Divider>
      <Grid container direction="row" justifyContent="center" alignItems="center">
        <Button onClick={clearAll}> clear all list user </Button>
      </Grid>
      <TextField
        margin="dense"
        onChange={onPasswordChange}
        value={password}
        label={"Search Anything"} //optional
      />

      <Grid container direction="row">
        {users.map(({ fullname, email, address, phone, password, dateofbirth }) => {
          return (
            <Grid xs={3}>
              <Card sx={{ minWidth: 275 }}>
                <CardContent>
                  <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Hi, My name is {fullname}
                  </Typography>
                  <Typography variant="h5" component="div">
                    be{bull}nev{bull}o{bull}lent
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    adjective
                  </Typography>
                  <Typography variant="body2">
                    well meaning and kindly.
                    <br />
                    {'"a benevolent smile"'}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Box sx={{ bgcolor: "background.paper", width: 500 }}>
                    <AppBar position="static">
                      <Tabs value={value} onChange={handleChange} indicatorColor="secondary" textColor="inherit" variant="fullWidth" aria-label="full width tabs example">
                        <Tab label="Item One" {...a11yProps(0)} />
                        <Tab label="Item Two" {...a11yProps(1)} />
                        <Tab label="Item Three" {...a11yProps(2)} />
                      </Tabs>
                    </AppBar>
                    {/* <SwipeableViews axis={theme.direction === "rtl" ? "x-reverse" : "x"} index={value} onChangeIndex={handleChangeIndex}>
                      <TabPanel value={value} index={0} dir={theme.direction}>
                        Item One
                      </TabPanel>
                      <TabPanel value={value} index={1} dir={theme.direction}>
                        Item Two
                      </TabPanel>
                      <TabPanel value={value} index={2} dir={theme.direction}>
                        Item Three
                      </TabPanel>
                    </SwipeableViews> */}
                  </Box>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}

export default App;
