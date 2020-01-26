import React, {Fragment} from "react";
import {ListItemText, Typography} from "@material-ui/core";
import FoodCard from "../../components/FoodCard";
import MeatballImage from "../../images/food/meatball.jpg"


const Food = () => (
        <Fragment>
            <Typography variant={'h2'}>
                {'Here is a list of good foods!'}
            </Typography>
            <FoodCard image={MeatballImage} title={'meatballs'}/>
            <ListItemText primary={'Spaghetti'}/>
            <ListItemText primary={'Cheese'}/>
            <ListItemText primary={'Lettuce'}/>
        </Fragment>
    );

export default Food;