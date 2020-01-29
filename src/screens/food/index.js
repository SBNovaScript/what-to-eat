import React, {Fragment} from "react";
import {Typography} from "@material-ui/core";
import FoodCard from "../../components/FoodCard";
import MeatballImage from "../../images/food/meatball.jpg"
import SpaghettiImage from "../../images/food/spagetti.jpg"
import LettuceImage from "../../images/food/lettuce.jpg"
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import PageWrapper from "../../components/PageWrapper";

const useStyles = makeStyles(theme => ({
    grid: {
        flexGrow: 1
    }
}));

const Food = () => {
    const classes = useStyles();

    const meatballDescription = 'Meatballs are great. There are so many sauces they can go with!';
    const spaghettiDescription = 'Spaghetti is just so wholesome, you know? It\'s like that really good food you ' +
        'can just have whenever.';
    const lettuceDescription = 'Lettuce has that amazing C R O N C H!!!! You just can\'t find that unique blend ' +
        'of crunchiness yet softness anywhere else.';

    return (
        <PageWrapper>
            <Typography variant={'h2'} gutterBottom>
                {'Here is a list of good foods!'}
            </Typography>
            <Grid container className={classes.grid} spacing={1}>
                <Grid container justify={'center'} spacing={3}>
                    <Grid item>
                        <FoodCard image={MeatballImage} title={'Meatballs'} description={meatballDescription}/>
                    </Grid>
                    <Grid item>
                        <FoodCard image={SpaghettiImage} title={'Spaghetti'} description={spaghettiDescription}/>
                    </Grid>
                    <Grid item>
                        <FoodCard image={LettuceImage} title={'Lettuce'} description={lettuceDescription}/>
                    </Grid>
                </Grid>
            </Grid>
        </PageWrapper>
    );
}

export default Food;