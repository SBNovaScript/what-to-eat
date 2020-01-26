import React from "react";
import Card from "@material-ui/core/Card";
import {makeStyles} from "@material-ui/core/styles";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import {CardContent} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: 345
    },
    media: {
        height: 140
    }
}));

const FoodCard = ({image, title, description}) => {
    const classes = useStyles();
    return (
    <Card className={classes.card}>
        <CardActionArea>
            <CardMedia className={classes.media} image={image} title={title}/>
            <CardContent>
                <Typography gutterBottom variant={'h5'} component={'h2'}>
                    {title}
                </Typography>
                <Typography variant={'body2'} component={'p'} color={'textSecondary'}>
                    {description}
                </Typography>
            </CardContent>
        </CardActionArea>
    </Card>
)};

export default FoodCard;