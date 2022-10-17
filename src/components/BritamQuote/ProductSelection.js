import React from 'react'
import { Button } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


export default function ProductSelection({ products, handleSelected, selectedProduct, showDownIcon }) {

	return (
		<div>
			{
				products.map((product) => {
					return <Button
						color="primary"
						variant={selectedProduct === product ? "contained" : "outlined"}
						onClick={() => { handleSelected(product) }}
						style={{ margin: "5px", textDecoration: 'lowerCase' }}
					>{product}</Button>
				})
			}
			<br />
			{selectedProduct && showDownIcon && <KeyboardArrowDownIcon />}
		</div>
	)
}
