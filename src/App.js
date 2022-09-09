import "./App.css";

import React, { useState, useEffect } from "react";
import { Button, TextField, Grid, Container, Divider } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementByAmount } from "./store/user";

function App() {
  const [email, setemail] = useState("");
  const [fullname, setfullname] = useState("");
  const [dateofbirth, setdateofbirth] = useState("");
  const [phone, setphone] = useState("");
  const [address, setaddress] = useState("");
  const [password, setpassword] = useState("");

  const [user, setUser] = useState({ email: "", fullname: "", dateofbirth: "", phone: "", address: "", password: "" });

  useEffect(() => {
    dispatch(incrementByAmount(user));
  }, [user]);
  // const count = useSelector((state) => state.counter.user[0]);
  // const { users } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const onEmailChange = (e) => setemail(e.target.value);
  const onFullNameChange = (e) => {
    setfullname(e.target.value);
  };

  const onSubmit = async () => {
    setUser({ ...user, fullname: fullname, email: email, dateofbirth: dateofbirth, phone: phone, address: address, password: password });
  };
  const onDateChange = (e) => setdateofbirth(e.target.value);
  const onPhoneChange = (e) => setphone(e.target.value);
  const onAddressChange = (e) => setaddress(e.target.value);
  const onPasswordChange = (e) => setpassword(e.target.value);

  // const handleSubmit = () => console.log(textValue);
  // const handleReset = () => setTextValue("");

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
        <Button> clear all list user </Button>
      </Grid>
      <TextField
        margin="dense"
        onChange={onPasswordChange}
        value={password}
        label={"Search Anything"} //optional
      />
    </Container>
  );
}

export default App;
