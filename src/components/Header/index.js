import {List, ListItem, Toolbar, Typography} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {NavLink} from "react-router-dom";
import React, {Fragment} from "react";
import {makeStyles} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";

const useStyles = makeStyles(theme => ({
    title: {
        textAlign: 'center',
        color: theme.palette.primary.light
    },
    appBar: {
        background: theme.palette.common.white,
    },
    toolBar: {
        alignContent: 'center'
    }
}));

const Header = () => {
    const classes = useStyles();

    const HeaderMenu = () => (
        <Toolbar>
            <Button color={'primary'} component={NavLink} to={'/'}>
                <Typography variant={'p'}>
                    {'Home'}
                </Typography>
            </Button>
            <Button color={'primary'} component={NavLink} to={'/food'}>
                <Typography variant={'p'}>
                    {'Food'}
                </Typography>
            </Button>
            <Button color={'primary'} component={NavLink} to={'/contact'}>
                <Typography variant={'p'}>
                    {'Contact'}
                </Typography>
            </Button>
        </Toolbar>
    );

    return (
        <AppBar position={'relative'} className={classes.appBar}>
            <Typography variant={'h1'} className={classes.title}>
                {'What Should I Eat?'}
            </Typography>
            <HeaderMenu/>
        </AppBar>
    );
}

export default Header;