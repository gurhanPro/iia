import React, { Component } from 'react'
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Grid } from '@mui/material'


export default class BritamFaqs extends Component {
  render() {
    return (
      <Grid container style={{ textAlign: "center", margin: "2%" }}>
        <Grid item xs={12} sm={12} md={12}>
          <div style={{ textAlign: "centre", padding: "10px" }}><h1 >FREQUENTLY ASKED QUESTIONS</h1></div>

          <ExpansionPanel style={{ textAlign: "left", margin: "auto", width: "80%" }}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography >1.	What is Group Last Expense?</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography class="accordionAnswer">
                This is a group funeral insurance cover that pays a lump sum amount in the event of death of a specified member of a group.
                  </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>

          <ExpansionPanel style={{ textAlign: "left", margin: "auto", width: "80%" }}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>2.	How much is the payable amount of the Last Expense benefit?</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
            <Typography class="accordionAnswer">
                Benefits range from a minimal sum assured amount of Kshs.50,000 to Kshs.500,000.                   </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>

          <ExpansionPanel style={{ textAlign: "left", margin: "auto", width: "80%" }}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>3.	Who is covered? </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
            <Typography class="accordionAnswer">
                Covers the principal, spouse, children, and parents and extends to Parents in-law.                   </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>

          <ExpansionPanel style={{ textAlign: "left", margin: "auto", width: "80%" }}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>4.	What is the scope of the benefit being offered? </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
            <Typography class="accordionAnswer">
                It offers a cover for both accidental and natural causes of death.                   </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>

          <ExpansionPanel style={{ textAlign: "left", margin: "auto", width: "80%" }}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>5.	What is the duration of the cover? </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
            <Typography class="accordionAnswer">
                The cover runs for one year and is renewable annually upon expiry.                   </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>

          <ExpansionPanel style={{ textAlign: "left", margin: "auto", width: "80%" }}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>6.	 Is the waiting period applicable? If Yes, for what period of time? </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
            <Typography class="accordionAnswer">
                Yes, 1(one) month on death due to illness or natural causes for the Nuclear family (Spouse and Dependents) and a 3(three) months waiting period for Parent and Parents-In-law. No waiting period on accidental deaths.                   </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>

          <ExpansionPanel style={{ textAlign: "left", margin: "auto", width: "80%" }}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>7.	What are the eligibility criteria? </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
            <Typography class="accordionAnswer">
                <ul>
                  <li>	Main Member/Spouse: Minimum entry age is 18 years. Maximum entry age is 65 years at entry. Maximum coverage age 70 years.</li>
                  <li>	Children: Minimum entry age is 30 days. Maximum 18 years at entry. Maximum coverage age 18 years to 25 years for fulltime students.</li>
                  <li>	Parents/Parents- In-law: Minimum entry age is 40 years. Maximum entry age is 75 years. Maximum coverage age 80 years.</li>
                </ul> </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>

          <ExpansionPanel style={{ textAlign: "left", margin: "auto", width: "80%" }}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>8.	What are the required documents for the group to be insured? </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
            <Typography class="accordionAnswer">
                <ul>	 <li>	Group Profile: Registered name.</li>
                  <li>	Contacts details: Physical address and Telephone number.</li>
                  <li>	Occupation of the group.</li>
                  <li>	KRA PIN number.</li>
                  <li>	Schedule of covered lives.</li>
                </ul>
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>

          <ExpansionPanel style={{ textAlign: "left", margin: "auto", width: "80%" }}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>10.	How long does it take for a claim to be processed? </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
            <Typography class="accordionAnswer">
                All valid claims will be paid out within 48 hours with effect from the time the insurer receives all the required documents.                   </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>

          <ExpansionPanel style={{ textAlign: "left", margin: "auto", width: "80%" }}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>11.	How does one claim?</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
            <Typography class="accordionAnswer">
                Claimant receives a claim form from the corporate human resource or the group contact person ∙ Claimant completes, attaches the copies of the following documents and sends it to Britam through their Human resource or contact person:
                <br />
                <br />
                <ul>
                  <li> Copy of ID (Birth Certificate for children/dependants). </li>
                  <li> Copy of the burial permit/death certificate.  </li>
                  <li> ID copy of claimant principal.  </li>
                  <li> Police abstract for accidental deaths and post mortem reports where required.  </li>
                </ul>
                <br />
                  After verification of the documents, Britam pays directly to the claimant through mobile money or bank transfer.
                  </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>

        </Grid>
      </Grid>
    )
  }
}
