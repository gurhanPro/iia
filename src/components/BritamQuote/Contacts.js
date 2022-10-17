import React, { useState, useRef } from 'react'
import { Button, Dialog, Grid, TextField, DialogActions, DialogContent, DialogTitle  } from '@mui/material'
import emailjs from '@emailjs/browser';
import { EMAIL_CONSTANTS } from './emailkey';

export default function Contacts({ open, toggleOpenDialog, submitQuoteRequest, 
	payload, setSendingEmailLoader, sentEmailSuccess }) {

	const [firstName, setFirstname] = useState('')
	const [lastName, setLastName] = useState('')
	const [email, setEmail] = useState('')
	const [phone, setPhone] = useState('')

	const form = useRef();
	const firstNameRef = useRef();
	const lastNameRef = useRef();
	const emailRef = useRef();
	const phoneRef = useRef();
	const productTypeRef = useRef();
	const productRef = useRef();
  
   
	const sendEmail = (e) => {
	  e.preventDefault();
  
	  firstNameRef.current.value = firstName
	  lastNameRef.current.value = lastName
	  emailRef.current.value = email
	  phoneRef.current.value = phone
	  productTypeRef.current.value = payload['selected product']
	  productRef.current.value = payload['product type']
	  console.log('ref form: ', form.current );
  
  
	  setSendingEmailLoader(true)

	  emailjs.sendForm(
		EMAIL_CONSTANTS.SERVICE_ID, 
		EMAIL_CONSTANTS.TEMPLATE_ID, 
		form.current,
		EMAIL_CONSTANTS.PUBLIC_API_KEY
		)
		.then((result) => {
			console.log(result);
			setSendingEmailLoader(false)
			sentEmailSuccess()


		}, (error) => {
			console.log(error.text);
			setSendingEmailLoader(false)
		});
	};
	

	const handleChange = (e) => {
		const { value, name } = e.target
		if (name === 'firstName') setFirstname(value)
		if (name === 'lastName') setLastName(value)
		if (name === 'phone') setPhone(value)
		if (name === 'email') setEmail(value)
	}

	return (
		<Dialog
			open={open}
			onClose={() => { toggleOpenDialog() }}
			fullWidth
			maxWidth='sm'

		>
			<DialogTitle>Enter your details</DialogTitle>
			<DialogContent>
				<Grid container style={{ padding: '3%' }} spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}
					direction="row"
					justifyContent="end"
					alignItems="end"
				>
					<Grid xs={6} style={{ marginBottom: '2%' }}>
						<TextField placeholder='first name' name="firstName" value={firstName} onChange={handleChange} />
					</Grid>

					<Grid xs={6} style={{ marginBottom: '2%' }}>
						<TextField placeholder='last name' name="lastName" value={lastName} onChange={handleChange} />
					</Grid>

					<Grid xs={6} style={{ marginBottom: '2%' }}>
						<TextField type="number" placeholder='phone number' name="phone" value={phone} onChange={handleChange} />
					</Grid>

					<Grid xs={6} style={{ marginBottom: '2%' }}>
						<TextField placeholder='email address' name="email" value={email} onChange={handleChange} />
					</Grid>
					<Grid style={{ display: 'none' }}>
						<form ref={form} onSubmit={sendEmail}>
							<label>Name</label>
							<input ref={firstNameRef} type="text" name="firstName" />
							<label>Email</label>
							<input ref={emailRef} type="email" name="email" />
							<label>last name</label>
							<input ref={lastNameRef} name="lastName" />
							<label>Phone</label>
							<input ref={phoneRef} type="text" name="phone" />
							<label>product type</label>
							<input ref={productTypeRef} name="productType" />
							<label>product</label>
							<input ref={productRef} name="product" />
							<label>Message</label>
							<input type="submit" value="Send" />
						</form>
					</Grid>
				</Grid>
			</DialogContent>
			<DialogActions>
				<Button variant='outlined' onClick={() => { toggleOpenDialog() }}>Cancel</Button>
				<Button variant='contained' onClick={sendEmail}>Get Quote</Button>
			</DialogActions>

		</Dialog>

	)
}
