import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
export default function ButtonAppBar(props) {
  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static"  style={{ backgroundColor: "white", color: "grey" }}>
        <Toolbar>
        <img src={"https://inclusivitysolutions.com/wp-content/uploads/2020/04/Inclusivity-SVG.svg"} alt="inclusivity agency logo"     width="200px" height="50px"/>
         
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          </Typography>
              <Button
                variant="contained"
                color="primary"
                startIcon={<LocalOfferIcon />}
                onClick={props.openQuoteDialog}
                style={{background: '#013644'}}
              >
                Get free consultation
              </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
