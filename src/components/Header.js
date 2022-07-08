import React, { useState } from 'react'
import {AppBar, Toolbar, makeStyles, Typography } from '@material-ui/core';
import { Menu } from '@material-ui/icons/';
import SlideBar from './SlideBar';
import { useContext } from 'react';
import { NewsDataContext } from '../Contexts/NewsDataContext';

const useStyles = makeStyles({
    header: {
        paddingTop: 4,
        background: '#fff',
        height: 72
    },
    logo: {
        height: '56px',
        margin: 'auto',
        paddingRight: '53px',
        color: '#f54236',
        marginTop: 15,
        fontSize: 25,
        fontWeight: 'bold'
    },
    menu: {
        color: '#000',
        '&:hover': {
            cursor: 'pointer'
        }
    }
})

const Header = () => {
    const classes = useStyles();
    const url = 'https://assets.inshorts.com/website_assets/images/logo_inshorts.png';
    const {handleToogleDrawerVisibility} = useContext(NewsDataContext);
    return (
        <AppBar className={classes.header}>
            <Toolbar>
                <SlideBar />
                <Menu className={classes.menu} onClick={handleToogleDrawerVisibility}/>
                {/* <img src={url} alt="logo" className={classes.logo}/> */}
                <Typography className={classes.logo} >Fast-Track-News</Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Header
