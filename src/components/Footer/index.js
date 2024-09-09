import React, { Component } from 'react'
import { Grid } from '@mui/material'


export default class Footer extends Component {
  render() {
    return (
      <div>
        <Grid container style={{ textAlign: "center", margin: "auto", marginBottom: "0px" }}>
          <Grid container style={{ fontSize: "100%", width: "100%", backgroundColor: "#013644", color: "white", marginBottom: "0px" }}>
            <Grid container style={{ width: "80%", margin: "auto", padding: "1%" }}>
              <Grid item xs={12} sm={12} md={12}><h1 style={{ textAlign: "center" }}>Contact Us</h1></Grid>
              <Grid item xs={12} sm={12} md={12} style={{ textAlign: "centre" }}>
                <h5> Tel: +254 711 308 661</h5>
              </Grid>
              <Grid item xs={12} sm={12} md={12} style={{ textAlign: "centre" }}>
                <h5> email: agencyKe@inclusivitysolutions.com</h5>
              </Grid>
            </Grid>
          </Grid>

        </Grid>
      </div>
    )
  }
}
