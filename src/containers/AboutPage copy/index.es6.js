import React, { Component } from 'react'
import { connect } from 'react-redux';
import { hashHistory } from 'react-router';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Grid, DialogContent, Button, Backdrop, InputAdornment, TextField } from '@mui/material'
import Dialog from '@material-ui/core/Dialog';
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import BritamQuote from '../../components/BritamQuote';
import BritamInfoSections from '../../components/BritamInfoSections';
import InclusivityAgencyNavbar from '../../components/InclusivityAgencyNavbar';
import AlertDialog from '../../components/AlertDialog/index.es6';
import './about.css'
import { saveQuoteInStateRequest, getGroupProductsRequest, createGroupClaimCallBackRequest, resetCreateGroupClaimCallBack } from './actions.es6';
import { userLoginRequest, userLogout } from '../Login/actions.es6';

export class HomePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      openCallMeBackDialog: false,
      openLoginDialog: false,
      openQuoteDialog: false,
      goToRegister: false,
      msisdn: '',
      msisdnError: false,
      msisdnErrorMessage: '',
      loginDetails: {
        username: '',
        password: '',
      }

    }
  }

  componentWillMount() {
    this.props.dispatch(getGroupProductsRequest("britamguid"));
  }

  componentDidUpdate() {
    if (this.props.loginData.AuthData && this.state.openLoginDialog) {
      this.setState({ openLoginDialog: false });
    }
    if (
      this.props.loginData.AuthData &&
      this.props.loginData.AuthData.access_token &&
      this.props.loginData.sessionOpen
    ) {
      if (this.state.goToRegister) {
        hashHistory.push('/admin/group-registeration');
      } else {
        hashHistory.push('/admin');
      }
    }
  }

  handleChangeCallMeBackDetails(e) {
    this.setState({
      msisdn: e.target.value
    })
  }

  handleChangeLoginDetails(e) {
    const name = [e.target.name]
    const loginDetails = this.state.loginDetails
    loginDetails[name] = e.target.value
    this.setState({
      loginDetails
    })
  }

  submitCallMeBackDetails() {
    this.setState({ openCallMeBackDialog: false, openThankYouDialog: true })
  }

  login() {
    let loginData = this.state.loginDetails;
    this.props.dispatch(userLoginRequest(loginData));
    if (this.props.quoteData.quote) {
      this.setState({ goToRegister: true })
    }
  }

  logout() {
    this.props.dispatch(userLogout());
  }

  letsGoWithQuote(quote) {
    this.props.dispatch(saveQuoteInStateRequest(quote))

    if (!this.props.loginData.AuthData) {
      this.setState({ openLoginDialog: true })
    } else {
      hashHistory.push('/admin/group-registeration');
    }
  }

  loginLogoutLabel() {
    if (!this.props.loginData.AuthData) {
      return "Login"
    }
    return "Logout"
  }

  createGroupClaimCallBack() {
    const errorList = []

    if (!this.state.msisdn) {
      errorList.push("please enter your phone number")
    }
    this.setState({ errorList })

    if (errorList.length !== 0) {
      this.setState({ showErrorAlert: true })
      return;
    }
    const msisdn = "00254" + this.state.msisdn
    this.props.dispatch(createGroupClaimCallBackRequest(msisdn))
  }
  resetCreateGroupClaimCallBack() {
    this.setState({ openCallMeBackDialog: false, msisdn: '' })
    this.props.dispatch(resetCreateGroupClaimCallBack())
  }

  handleMsisdnInput(e) {
    if (e.target.value.length !== 9) {
      this.setState({
        msisdnErrorMessage: "9 digits required",
        msisdnError: true
      })
    } else {
      this.setState({
        msisdnErrorMessage: "",
        msisdnError: false
      })
    }
    this.setState({
      msisdn: e.target.value
    })
  }

  displayValidationErrors(errorMessage, errorMessage2) {
    const { errorList } = this.state;

    if (!errorList || errorList.length === 0) {
      return ""
    }

    if (errorList.includes(errorMessage)) {
      return errorMessage
    }
  }

  render() {
    const { claimCallback, claimCallbackError, claimCallbackLoader } = this.props.quoteData
    return (
      <Grid style={{ width: "90%", margin: "auto", backgroundColor: "white" }} >
        <InclusivityAgencyNavbar
          openCallMeBackDialog={() => this.setState({ openCallMeBackDialog: true })}
          openLoginDialog={() => this.setState({ openLoginDialog: true })}
          openQuoteDialog={() => this.setState({ openQuoteDialog: true })}
          closeCallMeBackDialog={() => this.setState({ openCallMeBackDialog: false })}
          loginLogoutLabel={this.loginLogoutLabel.bind(this)}
          login={this.login.bind(this)}
          logout={this.logout.bind(this)}
        />

        <Grid container class="hero-image-about header-section" style={{ paddingLeft: '5%' }} >
          <Grid item lg={6} xs={12} sm={6} md={6} class="gridItem1" style={{ color: 'white', paddingTop: '2%' }}>
            <p class="p1">Britam Group last expense about</p>
            <h1 class="title">Insure your employees, church groups or </h1><h1>any other group members with britam</h1>
            <p class="p2">This is a unique product that guarantees a cash pay-out to provide a befitting farewell </p><p> in case of the demise of a member of
            an alumni group
            </p>
            <br />
            <Button
              variant="contained"
              color="secondary"
              startIcon={<LocalOfferIcon />}
              style={{ marginRight: "15px", marginBottom: "15px", shadow: "1px 1px 2px white, 0 0 25px #013644, 0 0 5px white" }}
              size="large"
              onClick={() => this.setState({ openQuoteDialog: true })}

            >
              Get a quote
            </Button>

            {/* <Button
              variant="contained"
              onClick={() => { this.setState({ openCallMeBackDialog: true }) }}
              startIcon={<CallIcon />}
              size="large"
              style={{ backgroundColor: "#013644", color: "white", marginRight: "15px", marginBottom: "15px", shadow: "1px 1px 2px white, 0 0 25px #013644, 0 0 5px white" }}
            >
              Claim Call Back
      </Button> */}
      <br/>
   
          </Grid>
          <img src={require('./powered_by_inclusivity_logo.png')} style={{float: 'right', marginTop: '10%'}} alt="powered by inclusivity" />  />

        </Grid>

        <BritamQuote letsGoWithQuote={this.letsGoWithQuote.bind(this)} products={this.props.quoteData.groupProducts} 
         
        />
        <BritamInfoSections />

        <Dialog
          open={this.state.openThankYouDialog}
          onClose={() => this.setState({ openThankYouDialog: false })}
          maxWidth="xl"
        >
          <DialogContent>
            <div style={{ textAlign: "center" }}>
              <br />
              <h3>Thank you and expect our call</h3>
              <br />

              <Button style={{ backgroundColor: "#013644", color: "white", textAlign: "center" }} size="large"
                onClick={() => this.setState({ openThankYouDialog: false })}
              > ok </Button>
              <br />
              <br />

            </div>
          </DialogContent>

        </Dialog>
        <Dialog
          open={this.state.openCallMeBackDialog}
          onClose={() => this.setState({ openCallMeBackDialog: false })}
        >
          <DialogContent style={{ margin: "auto", textAlign: "center" }}>
            <h3 style={{ color: "#013644" }}>call me back to make a claim</h3>
            <p>Leave your phone number here and our agents will call you to make a claim</p>
            <br />
            <br />
              <Grid item xs={12} sm={12} md={12} class="grid-item-margin">
                <br />
                <TextField id="outlined-basic" variant="outlined"
                  fullWidth
                  value={this.state.msisdn}
                  onChange={this.handleMsisdnInput.bind(this)}
                  type="number"
                  InputProps={{
                    startAdornment: <InputAdornment position="start" style={{marginRight: '0px'}}>{'0'}</InputAdornment>,
                  }}
                  onInput={(e) => {
                    e.target.value = Math.max(0, parseInt(e.target.value)).toString().slice(0, 9)
                  }}
                  error={this.state.msisdnError}
                  helperText={this.state.msisdnErrorMessage}
                />
                <p style={{ color: "red" }} > {this.displayValidationErrors("please enter your phone number")} </p>
                <br />
              </Grid>

              <Grid item xs={12} sm={12} md={12}>
                <br />
                <br />
                <Button
                  style={{ margin: "5px", backgroundColor: "#013644" }}
                  variant="contained"
                  color="primary"
                  fullWidth
                  type="submit"
                  onClick={this.createGroupClaimCallBack.bind(this)}
                >Claim Call Back</Button>  </Grid>
          </DialogContent>
        </Dialog>




        <Dialog
          open={this.state.openLoginDialog}
          onClose={() => this.setState({ openLoginDialog: false })}

        >
          <DialogContent style={{ margin: "auto", width: "80%", textAlign: "center", paddingBottom: "5%" }}>
            <h3 style={{ color: "#013644" }}>Login</h3>
            <p>Enter your username and password</p>
            <br />
            <ValidatorForm onSubmit={this.login.bind(this)}>
              {this.props.loginData.loader ?
                <CircularProgress /> : ''
              }

              {this.props.loginData.errors ?
                <p style={{ color: 'red' }}>
                  {this.props.loginData.errors}
                </p> : ''
              }


              <Grid container >
                <Grid item xs={12} sm={12} md={12}>
                  <TextValidator
                    fullWidth id="outlined-basic"
                    label="username"
                    variant="outlined"
                    style={{ margin: "5px" }}
                    name="username"
                    onChange={this.handleChangeLoginDetails.bind(this)}
                    value={this.state.loginDetails.username}
                    validators={['required']}
                    errorMessages={"Please enter your username"}
                  />

                </Grid>

                <Grid item xs={12} sm={12} md={12}>
                  <TextValidator
                    fullWidth id="outlined-basic"
                    label="password"
                    type="password"
                    variant="outlined"
                    style={{ margin: "5px" }}
                    name="password"
                    onChange={this.handleChangeLoginDetails.bind(this)}
                    value={this.state.loginDetails.password}
                    validators={['required']}
                    errorMessages={"Please enter your password"}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={12} style={{ paddingTop: '3%' }}>
                  <Button
                    style={{ margin: "5px", backgroundColor: "#013644" }}
                    variant="contained"
                    color="primary"
                    fullWidth
                    type="submit"
                    size="large"
                  >Login</Button>
                  <Button>don't have an account? Register</Button>  </Grid>
              </Grid>
            </ValidatorForm>

          </DialogContent>
        </Dialog>


        <Dialog
          open={this.state.openQuoteDialog}
          onClose={() => this.setState({ openQuoteDialog: false })}
          fullWidth
          maxWidth="lg"
        >
          <DialogContent style={{ margin: "auto", width: "100%", textAlign: "center", paddingBottom: "5%" }}>
            <BritamQuote letsGoWithQuote={this.letsGoWithQuote.bind(this)} products={this.props.quoteData.groupProducts}
            
            closeQuoteDialog={()=> {this.setState({ openQuoteDialog: false })}}
            />
          </DialogContent>
        </Dialog>


        <AlertDialog
          success
          show={!!claimCallback}
          title={'Your request has been saved'}
          confirmBtnText={'OK'}
          onConfirm={() => this.resetCreateGroupClaimCallBack()}
          showCancel={false}
          confirmBtnCssClass
        >
          <p>An agent will call you back</p>
        </AlertDialog>;

        <AlertDialog
          show={!!claimCallbackError}
          danger
          title={'Error submitting callback request'}
          onConfirm={() => this.props.dispatch(resetCreateGroupClaimCallBack())}
          confirmBtnText={'Try again another number'}
          confirmBtnCssClass
          showCancel={false}
        >
          {claimCallbackError ? claimCallbackError.message : ''}
        </AlertDialog>

        <Backdrop style={{ color: '#fff', zIndex: 1000 }} open={claimCallbackLoader}>
          <CircularProgress size={80} color="inherit" />
          <h3 style={{ marginTop: '10%', marginLeft: '-15%' }}>.....Saving your callback request....</h3>
        </Backdrop>

      </Grid>
    )
  }
}
export default connect(state => ({
  quoteData: state.britamQuote,
  loginData: state.login,
  globalData: state.global,
}))(HomePage);