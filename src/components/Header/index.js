import {responsiveFontSizes, Toolbar, Typography} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {NavLink} from "react-router-dom";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";

const useStyles = makeStyles(theme => ({
    title: {
        textAlign: 'center',
        color: theme.palette.primary.light,
        [theme.breakpoints.down('md')]: {
            fontSize: '2.4rem'
        }
    },
    appBar: {
        background: theme.palette.common.white,
    },
    toolBar: {
        justifyContent: 'center'
    }
}));

const Header = styles => {
    const classes = useStyles();

    const HeaderMenu = () => (
        <Toolbar className={classes.toolBar}>
            <Button color={'primary'} component={NavLink} to={'/'}>
                <Typography variant={'subtitle1'}>
                    {'Home'}
                </Typography>
            </Button>
            <Button color={'primary'} component={NavLink} to={'/food'}>
                <Typography variant={'subtitle1'}>
                    {'Food'}
                </Typography>
            </Button>
            <Button color={'primary'} component={NavLink} to={'/contact'}>
                <Typography variant={'subtitle1'}>
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