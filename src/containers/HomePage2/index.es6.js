import React, { Component } from 'react'
import { Grid, Dialog, DialogContent, Button} from '@mui/material';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import BritamQuote from '../../components/BritamQuote';
import './landingPage.css'
import Footer from '../../components/Footer';
import ButtonAppBar from '../../components/AppMenu/ButtonAppBar';

export class HomePage extends Component {
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
        <Grid container class="hero-image-home header-section-home" style={{ paddingLeft: '5%' }} >
          <Grid item lg={6} xs={12} sm={6} md={6} class="gridItem1" style={{ color: 'white', paddingTop: '2%' }}>
          <p class="p1">xxx Inclusivity Solutions Insurance</p>
            <h1 class="title">Insure your employees, church groups or </h1><h1>any other group members with Inclusivity Solutions Insurance</h1>
            <p class="p2">This is a unique product that guarantees a cash pay-out to provide a befitting farewell </p><p> in case of the demise of a member of
            an alumni group
            </p>
            <br />
            <Button
              variant="contained"
              color="secondary"
              startIcon={<LocalOfferIcon />}
              style={{ background: '#013644', marginRight: "15px", marginBottom: "15px", shadow: "1px 1px 2px white, 0 0 25px #013644, 0 0 5px white" }}
              size="large"
              onClick={() => this.setState({ openQuoteDialog: true })}

            >
              Get a quote
            </Button>
      <br/>
   
          </Grid>
          <img src={require('./powered_by_inclusivity_logo.png')} style={{float: 'right', marginTop: '10%'}} alt="powered by inclusivity" />

        </Grid>

        <BritamQuote  />
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
export default HomePage