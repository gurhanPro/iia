import React from 'react';
import SweetAlert from "react-bootstrap-sweetalert";
import { buttonStyle } from './styles.js';

export default function AlertDialog(props) {
    return (
      <SweetAlert
        style={{ display: "block", marginTop: "80px", fontSize: "200%" }}
        confirmBtnStyle = { props.reverseConfirmAndCancelButtons ? buttonStyle.danger : buttonStyle.success }
        cancelBtnStyle = { props.reverseConfirmAndCancelButtons ? buttonStyle.success : buttonStyle.danger }
        {...props }
      >
        {props.children}
      </SweetAlert>
    )
}