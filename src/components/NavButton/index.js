import React from "react";
import {NavLink} from "react-router-dom";
import {Typography} from "@material-ui/core";
import Button from "@material-ui/core/Button";

const NavButton = to => (
    <Button color={'primary'} component={NavLink} to={to}>
        <Typography variant={'p'}>
            {'test'}
        </Typography>
    </Button>
);

export default NavButton;