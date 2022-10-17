import React, { Component } from 'react'
import { Grid, Button, CircularProgress, Dialog } from '@mui/material'
import './quote.css'
import ProductSelection from './ProductSelection';
import Contacts from './Contacts';


export default class BritamQuote extends Component {
  constructor(props) {
    super(props);
    this.state = {

      nProductType: '',
      selectedGroupProduct: '',
      selectedFamilyProduct: '',

      selectedIndividualProductsTypes: '',
      selectedIndividualSelfProduct: '',
      selectedIndividualBusinessProduct: '',

      selectedProduct: '',

      openContactsDialog: false,
      payload: {},

      sendingEmailLoader: false,
      sendEmailSucess: false,
      sendEmailFail: false,
    }
  }



  handleNProductTypeSelected(product) {
    this.setState({ nProductType: product })
  }
  handleGroupProductSelected(product) {
    this.setState({ selectedGroupProduct: product, selectedProduct: product })
  }
  handleFamilyProductSelected(product) {
    this.setState({ selectedFamilyProduct: product, selectedProduct: product })
  }

  handleIndividualProductsTypesSelected(product) {
    this.setState({ selectedIndividualProductsTypes: product })
  }

  handleIndividualSelfSelected(product) {
    this.setState({ selectedIndividualSelfProduct: product, selectedProduct: product })
  }

  handleIndividualBusinessSelected(product) {
    this.setState({ selectedIndividualBusinessProduct: product, selectedProduct: product })
  }


  handleSelectBenefit(product) {
    this.setState({ selectedProduct: product, selectedProductError: false })
  }

  handleProductcategoryChange = (event) => {
    const category = event.target.value;
    this.setState({
      selectedProductCategory: category,
    });
  };

  letsGoWithQuote() {
    const { nProductType, selectedProduct, selectedIndividualProductsTypes } = this.state

    const payload = { 'product type': nProductType }

    if (nProductType === 'individual' && selectedIndividualProductsTypes) {
      payload['selected sub indiv'] = selectedIndividualProductsTypes
    }
    payload['selected product'] = selectedProduct

    console.log(payload);
    this.setState({ payload, openContactsDialog: !this.state.openContactsDialog })
  }

  sentEmailSuccess() {
    this.setState({
      openContactsDialog: false,
      sendEmailSucess: true,
    })
  }

  resetSuccessAlert() {
    this.setState({
      sendEmailSucess: false,
    })
    this.props.closeQuoteDialog()

  }

  render() {
    const prodTypes = ['group', 'individual', 'family']

    const groupProducts = ['LAST EXPENCE', 'PERSONAL ACCIDENT', 'MEDICAL COVER', 'OTHERS']

    const individualProductsTypes = ['For my self', 'For my business']
    const individualSelfProducts = ['MEDICAL COVER', 'Motor Vehical Cover']
    const individualBusinessProducts = ['FIRE AND BURGLAR', 'Work Injury Benefits Act (WIBA)', 'Loss of income', 'Other']

    const familyProducts = ['LAST EXPENCE', 'PERSONAL ACCIDENT', 'MEDICAL COVER', 'OTHERS']

    return (
      <>
        <Grid style={{ width: "90%", margin: "auto", backgroundColor: "white" }} >
          <div style={{ fontSize: "25px", textAlign: "center", marginBottom: '3%' }}>
            <h1 style={{ fontSize: "40px", textDecoration: "underline", color: "#013644", margin: "20px" }}>INSTANT QUOTE</h1>
            <br />
            <p style={{ marginTop: '3%' }}>I would like cover for </p>

            <div>
              <ProductSelection
                products={prodTypes}
                selectedProduct={this.state.nProductType}
                handleSelected={this.handleNProductTypeSelected.bind(this)}
                showDownIcon={true}
              />

              {this.state.nProductType === 'individual' &&
                <>
                  <ProductSelection
                    products={individualProductsTypes}
                    selectedProduct={this.state.selectedIndividualProductsTypes}
                    handleSelected={this.handleIndividualProductsTypesSelected.bind(this)}
                    showDownIcon={true}
                  />

                  {this.state.selectedIndividualProductsTypes === 'For my self' && <ProductSelection
                    products={individualSelfProducts}
                    selectedProduct={this.state.selectedIndividualSelfProduct}
                    handleSelected={this.handleIndividualSelfSelected.bind(this)}
                    showDownIcon={false}
                  />}

                  {this.state.selectedIndividualProductsTypes === 'For my business' && <ProductSelection
                    products={individualBusinessProducts}
                    selectedProduct={this.state.selectedIndividualBusinessProduct}
                    handleSelected={this.handleIndividualBusinessSelected.bind(this)}
                    showDownIcon={false}
                  />}

                </>}

              {this.state.nProductType === 'group' && <ProductSelection
                products={groupProducts}
                selectedProduct={this.state.selectedGroupProduct}
                handleSelected={this.handleGroupProductSelected.bind(this)}
                showDownIcon={false}
              />}

              {this.state.nProductType === 'family' && <ProductSelection
                products={familyProducts}
                selectedProduct={this.state.selectedFamilyProduct}
                handleSelected={this.handleFamilyProductSelected.bind(this)}
                showDownIcon={false}
              />}
              {!this.state.nProductType && <p style={{ fontSize: "50%", color: '#013644' }}>Click on your preferred cover type</p>}
            </div>

            <br />
            <br />
            <Button
              color="primary"
              variant={'contained'}
              value={this.state.benefit}
              onClick={this.letsGoWithQuote.bind(this)}
              style={{ margin: "5px", padding: '2% 8%', backgroundColor: "#013644", fontSize: "70%" }}
            >Get me a quote on this cover</Button>


          </div>



        </Grid>

        <Contacts
          open={this.state.openContactsDialog}
          toggleOpenDialog={() => { this.setState({ openContactsDialog: !this.state.openContactsDialog }) }}
          payload={this.state.payload}
          setSendingEmailLoader={(bool) => { this.setState({ sendingEmailLoader: bool }) }}
          sentEmailSuccess={this.sentEmailSuccess.bind(this)}
        />

        <Dialog
          success
          show={this.state.sendEmailSucess}
          title={'Your request has been sent'}
          confirmBtnText={'OK'}
          onConfirm={() => this.resetSuccessAlert()}
          showCancel={false}
          confirmBtnCssClass
        >
          <p>An agent will call you back</p>
        </Dialog>

        {
          this.state.sendingEmailLoader && 
          <Dialog
          open={true}
        >
          <CircularProgress />
        </Dialog>
       
        }
      </>
    )
  }
}
