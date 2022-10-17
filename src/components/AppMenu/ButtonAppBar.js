import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import {Link} from 'react-router-dom'
export default function ButtonAppBar(props) {
  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static"  style={{ backgroundColor: "white", color: "grey" }}>
        <Toolbar>
        <img src={"https://inclusivitysolutions.com/wp-content/uploads/2020/04/Inclusivity-SVG.svg"} alt="inclusivity agency logo"     width="200px" height="50px"/>
         
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' } }} className="navbar">
            {[
              {page: 'Home', link: '/'},   {page: 'About', link: '/about'} ].map((page) => (
              <Link to={page.link} className="link">
              <Button
                key={page.page}
                // onClick={handleCloseNavMenu}
                sx={{ my: 2, color: '#013644', display: 'block' }}
              >
                {page.page}
              </Button>
              </Link>
            ))}
          </Box>
              <Button
                variant="contained"
                color="primary"
                startIcon={<LocalOfferIcon />}
                onClick={props.openQuoteDialog}
                style={{background: '#013644'}}
              >
                Get a quote
              </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
