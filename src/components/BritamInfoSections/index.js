import React, { Component } from 'react'
import MonetizationOnRoundedIcon from '@mui/icons-material/MonetizationOnRounded';
import TimerRoundedIcon from '@mui/icons-material/TimerRounded';
import LocalHospitalRoundedIcon from '@mui/icons-material/LocalHospitalRounded';
import LocalAtmRoundedIcon from '@mui/icons-material/LocalAtmRounded';
import { Grid } from '@mui/material'


export default class BritamInfoSections extends Component {
  render() {
    return (
      <div>
        <Grid container style={{ textAlign: "center", margin: "auto", marginBottom: "0px", marginTop: "10%" }}>

          <Grid container style={{ fontSize: "150%", width: "100%", backgroundColor: "#013644", color: "white", marginBottom: "70px" }}>
            <Grid container style={{ width: "80%", margin: "auto", paddingTop: "5%", paddingBottom: "5%", }}>
              <Grid item xs={12} sm={12} md={12}><h1 style={{ textAlign: "center", paddingBottom: "5%" }}>Our product range</h1></Grid>
              <Grid item xs={6} sm={3} md={3}>
                <p><MonetizationOnRoundedIcon style={{ fontSize: "150%" }} /></p>
                <h5> Group Last Expense</h5>
              </Grid>
              <Grid item xs={6} sm={3} md={3}>
                <p><LocalHospitalRoundedIcon style={{ fontSize: "150%" }} /></p>
                <h5> Personal Accident</h5>
              </Grid>
              <Grid item xs={6} sm={3} md={3}>
                <p><LocalHospitalRoundedIcon style={{ fontSize: "150%" }} /></p>
                <h5> Medical Cover</h5>
              </Grid>
              <Grid item xs={6} sm={3} md={3}>
                <p><LocalAtmRoundedIcon style={{ fontSize: "150%" }} /></p>
                <h5> Fire and Burglar</h5>
              </Grid>
              <br />
              <br />
              <Grid item xs={6} sm={3} md={3}>
                <p><MonetizationOnRoundedIcon style={{ fontSize: "150%" }} /></p>
                <h5> Work Injury Benefit Act (WIBA)</h5>
              </Grid>

              <Grid item xs={6} sm={3} md={3}>
                <p><TimerRoundedIcon style={{ fontSize: "150%" }} /></p>
                <h5> Loss of income</h5>
              </Grid>

              <Grid item xs={6} sm={3} md={3}>
                <p><TimerRoundedIcon style={{ fontSize: "150%" }} /></p>
                <h5>Property Cover</h5>
              </Grid>

              <Grid item xs={6} sm={3} md={3}>
                <p><TimerRoundedIcon style={{ fontSize: "150%" }} /></p>
                <h5>Health Cover</h5>
              </Grid>
            </Grid>
          </Grid>

          <Grid container style={{ fontSize: "150%", width: "100%", backgroundColor: "#fff", color: "white", marginBottom: "70px" }}>
            <Grid container style={{ width: "70%", margin: "auto", paddingTop: "5%", paddingBottom: "5%", }}>
              <Grid item xs={12} sm={12} md={12}><h1 style={{ color:'#000', textAlign: "center", paddingBottom: "5%" }}>Who we work with</h1></Grid>
              <Grid item xs={12}>
                <img  src={require('./work-with.png')} alt="who we work with" width="100%"/>
              </Grid>

            </Grid>
          </Grid>
        </Grid>
      </div>
    )
  }
}
