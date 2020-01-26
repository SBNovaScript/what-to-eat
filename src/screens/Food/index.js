import React, {Fragment} from "react";
import {List, ListItem, ListItemText, Typography} from "@material-ui/core";

const Food = () => (
    <Fragment>
        <Typography variant={'h2'}>
            {'Here are a list of good foods!'}
        </Typography>
        <List>
            <ListItem>
                <ListItemText primary={'Meatballs'} />
            </ListItem>
            <ListItem>
                <ListItemText primary={'Spaghetti'} />
            </ListItem>
            <ListItem>
                <ListItemText primary={'Cheese'} />
            </ListItem>
            <ListItem>
                <ListItemText primary={'Lettuce'} />
            </ListItem>
        </List>
    </Fragment>
);

export default Food;