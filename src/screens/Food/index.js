import React, {Fragment} from "react";
import {Typography} from "@material-ui/core";
import FoodCard from "../../components/FoodCard";
import MeatballImage from "../../images/food/meatball.jpg"
import SpaghettiImage from "../../images/food/spagetti.jpg"
import LettuceImage from "../../images/food/lettuce.jpg"


const Food = () => {

    const meatballDescription = 'Meatballs are great. There are so many sauces they can go with!';
    const spaghettiDescription = 'Spaghetti is just so wholesome, you know? It\'s like that really good food you' +
        'can just have whenever.';
    const lettuceDescription = 'Lettuce has that amazing C R O N C H!!!! You just can\'t find that unique blend' +
        'of crunchiness yet softness anywhere else.';

    return (
        <Fragment>
            <Typography variant={'h2'}>
                {'Here is a list of good foods!'}
            </Typography>
            <FoodCard image={MeatballImage} title={'Meatballs'} description={meatballDescription}/>
            <FoodCard image={SpaghettiImage} title={'Spaghetti'} description={spaghettiDescription}/>
            <FoodCard image={LettuceImage} title={'Lettuce'} description={lettuceDescription}/>
        </Fragment>
    );
}
export default Food;