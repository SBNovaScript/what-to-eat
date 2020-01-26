import React, {Fragment} from "react";
import Typography from "@material-ui/core/Typography";

const Home = () => (
    <Fragment>
        <Typography variant={'h2'}>
            {'Hello!'}
        </Typography>
        <Typography variant={'p'}>
            {'This website is used to find out what to eat!' +
            'There are many great things that you can eat,' +
            'Of which you can find a good portion of them on this website.'}
        </Typography>
        <Typography variant={'p'}>
            {'Hope you enjoy!'}
        </Typography>
    </Fragment>
);

export default Home;