import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    root: {
        margin: theme.spacing(5)
    }
}));

export const PageWrapper = ({children}) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {children}
        </div>
    );
};

export default PageWrapper;
