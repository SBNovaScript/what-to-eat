import React, {Fragment} from "react";
import Typography from "@material-ui/core/Typography";
import PageWrapper from "../../components/PageWrapper";

const Contact = () => (
    <PageWrapper>
        <Typography variant={'h2'}>
            {'Have any questions about the food choices?'}
        </Typography>
        <Typography variant={'subtitle2'}>
            {'Please contact me!'}
        </Typography>
    </PageWrapper>
);

export default Contact;