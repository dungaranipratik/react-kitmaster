import React from 'react';
import { makeStyles, Container, Box, Link, IconButton, Button, Menu } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import styles from './app-header.module.scss';
import ThemeSwitch from '../theme-switch/theme-switch.component';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import {NavLink} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.background.paper,
    color: theme.palette.text.primary,
  },
}));


const AppHeader = () => {
  const classes = useStyles();
  return (
    <>
      <div >
        <div className={styles.header}>
          <Container>
            <Box display="flex" flexWrap="wrap" alignItems="center" justifyContent="space-between" >
            <Box>
              <IconButton aria-label="delete">
                <SearchIcon />
              </IconButton>
            </Box>
            <Box>
              <Link href="#">
                <img
                  src="https://www.jnext.co.in/wp-content/uploads/2019/06/logo-org-transparent.png"
                  alt=""
                  width="100"
                  height="70"
                />
              </Link>
            </Box>
            <Box>
              <Button variant="contained" color="secondary">
                Sell an Article
              </Button>
              <IconButton aria-label="delete">
                <ShoppingCartIcon />
              </IconButton>
              <IconButton aria-label="delete">
                <FavoriteBorderIcon />
              </IconButton>
              <IconButton aria-label="delete">
                <NotificationsNoneIcon />
              </IconButton>
              <IconButton aria-label="delete">
                <PermIdentityIcon />
              </IconButton>
            </Box>
          </Box>
          </Container>
        </div>

        <div>

        </div>
        <div className={styles.header_menu}>
          <Container>
            <Box display="flex" flexWrap="wrap" alignItems="center" justifyContent="space-between">
              <Box>
                <ul className={styles['menuitems']}>
                  <li><NavLink to="#">Women</NavLink ></li>
                  <li><NavLink to="#">Men</NavLink ></li>
                  <li><NavLink to="#">Designer</NavLink ></li>
                  <li><NavLink to="#">Jwelry & Watches</NavLink ></li>
                  <li><NavLink to="#">Kids</NavLink ></li>
                  <li><NavLink to="#">Sports</NavLink ></li>
                  <li><NavLink to="#">Rental</NavLink ></li>
                </ul>
              </Box>
              <Box>
                  <ul className={styles.menuitems}>
                    <li><NavLink to="#">Shop</NavLink></li>
                    <li><NavLink to="#">For Good</NavLink></li>
                  </ul>
              </Box>
            </Box>
          </Container>
        </div>
      </div>
    </>
  );
};

export default AppHeader;
