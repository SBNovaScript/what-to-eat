import React, {Fragment} from "react";
import Typography from "@material-ui/core/Typography";
import PageWrapper from "../../components/PageWrapper";

const Home = () => (
    <PageWrapper>
        <Typography variant={'h2'}>
            {'Hello!'}
        </Typography>
        <Typography variant={'subtitle2'}>
            {'This website is used to find out what to eat!' +
            'There are many great things that you can eat,' +
            'Of which you can find a good portion of them on this website.'}
        </Typography>
        <Typography variant={'subtitle2'}>
            {'Hope you enjoy!'}
        </Typography>
    </PageWrapper>
);

export default Home;