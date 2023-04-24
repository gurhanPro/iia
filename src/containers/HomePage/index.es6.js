import React, { Component } from 'react'
import { Grid, Button, Dialog, DialogContent } from '@mui/material'
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import BritamInfoSections from '../../components/BritamInfoSections';
import './about.css'
import Footer from '../../components/Footer';
import ButtonAppBar from '../../components/AppMenu/ButtonAppBar';
import BritamQuote from '../../components/BritamQuote';

export class AboutPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      openQuoteDialog: false,
    }
  }

  render() {
    return (
      <Grid style={{ width: "90%", margin: "auto", backgroundColor: "white" }} >
        <ButtonAppBar
           openQuoteDialog={() => this.setState({ openQuoteDialog: true })}
        />

        <Grid container class="hero-image-about header-section-about" style={{ paddingLeft: '5%' }} >
          <Grid item lg={4} xs={12} sm={4} md={4} class="gridItem1" style={{ color: 'white', paddingTop: '15%' }}>
            <p class="p4">INCLUSIVITY SOLUTIONS INSURANCE AGENCY- KENYA </p>
            <h1>Comprehensive Insurance Solutions for <br/> an All-Round Protection.</h1>
            <p class="p2">At Inclusivity Insurance Agency, we offer solutions for your Sacco, Businesses and Employees. 
            </p>
            <br />
            <Button
              variant="contained"
              color="secondary"
              startIcon={<LocalOfferIcon />}
              style={{ marginRight: "15px", marginBottom: "15px", background: '#013644', shadow: "1px 1px 2px white, 0 0 25px #013644, 0 0 5px white" }}
              size="large"
              onClick={() => this.setState({ openQuoteDialog: true })}
            >
              Get free consultation
            </Button>

      <br/>
   
          </Grid>
          <img src={require('./powered_by_inclusivity_logo.png')} style={{float: 'right', marginTop: '10%'}} alt="powered by inclusivity" />  

        </Grid>
        <BritamQuote  />

        <BritamInfoSections />
        <Footer />

        <Dialog
          open={this.state.openQuoteDialog}
          onClose={() => this.setState({ openQuoteDialog: false })}
          fullWidth
          maxWidth="lg"
        >
          <DialogContent style={{ margin: "auto", width: "100%", textAlign: "center", paddingBottom: "5%" }}>
            <BritamQuote
            
            closeQuoteDialog={()=> {this.setState({ openQuoteDialog: false })}}
            />
          </DialogContent>
        </Dialog>


      </Grid>
    )
  }
}
export default AboutPage;