import React from 'react';
import { AppBar , Toolbar, IconButton, MenuItem, Menu, Button} from '@mui/material'
import {makeStyles} from '@mui/styles'
 import MoreIcon from '@mui/icons-material/MoreVert';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

// const useStyles = makeStyles((theme) => ({
//   grow: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   title: {
//     display: 'none',
//     [theme.breakpoints.up('sm')]: {
//       display: 'block',
//     },
//   },
//   inputRoot: {
//     color: 'inherit',
//   },
//   inputInput: {
//     padding: theme.spacing(1, 1, 1, 0),
//     paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
//     transition: theme.transitions.create('width'),
//     width: '100%',
//     [theme.breakpoints.up('md')]: {
//       width: '20ch',
//     },
//   },
//   sectionDesktop: {
//     display: 'none',
//     marginRight: '8px',
//     [theme.breakpoints.up('md')]: {
//       display: 'flex',
//     },
//   },
//   sectionMobile: {
//     display: 'flex',
//     [theme.breakpoints.up('md')]: {
//       display: 'none',
//     },
//   },
// }));

export default function InclusivityAgencyNavbar(props) {
  // const classes = useStyles();
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <Button
          variant="contained"
          color="secondary"
          startIcon={<LocalOfferIcon />}
          onClick={props.openQuoteDialog}
        >
          Get a quote
      </Button>
      </MenuItem>

    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static" style={{ backgroundColor: "white", color: "grey" }}>
        <Toolbar>
          <img src={"https://inclusivitysolutions.com/wp-content/uploads/2020/04/Inclusivity-SVG.svg"} alt="inclusivity agency logo"     width="200px" height="50px"/>

          <div className={classes.grow} />

          <div className={classes.sectionDesktop}>
            <Button
              variant="contained"
              color="secondary"
              startIcon={<LocalOfferIcon />}
              onClick={props.openQuoteDialog}
            >
              Get a quote
      </Button>
          </div>


          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </div>
  );
}
