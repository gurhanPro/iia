import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import MoreIcon from '@mui/icons-material/MoreVert';
import Button from '@material-ui/core/Button';
import CallIcon from '@mui/icons-material/Call';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    marginRight: '8px',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

export default function BritamNavbar(props) {
  const classes = useStyles();
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

      <MenuItem>
        <Button
          style={{ backgroundColor: "#013644", color: "white" }}
          variant="contained"
          onClick={props.openCallMeBackDialog}
          startIcon={<CallIcon />}
        >
          Claim Call Back
      </Button>
      </MenuItem>

      <MenuItem>
        <Button
          variant="outlined"
          color="secondary"
          startIcon={<ExitToAppIcon />}
          onClick={props.openLoginDialog}

        >
          Login
      </Button>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static" style={{ backgroundColor: "white", color: "grey" }}>
        <Toolbar>
          <img src={"https://www.britam.com/image/company_logo?img_id=85007&t=1598916810842"} alt="britam"/>

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


          <div className={classes.sectionDesktop}>
            <Button
              style={{ backgroundColor: "#013644", color: "white" }}
              variant="contained"
              onClick={props.openCallMeBackDialog}
              startIcon={<CallIcon />}
            >
              Claim Call Back
      </Button>
          </div>
          <div className={classes.sectionDesktop}>
            {
              props.loginLogoutLabel() === 'Login' ?
                <Button
                  variant="outlined"
                  color="secondary"
                  startIcon={<ExitToAppIcon />}
                  onClick={props.openLoginDialog}
                >
                  {props.loginLogoutLabel()}
                </Button> :
                <Button
                  variant="outlined"
                  color="secondary"
                  startIcon={<ExitToAppIcon />}
                  onClick={props.logout}
                >
                  {props.loginLogoutLabel()}
                </Button>
            }

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
