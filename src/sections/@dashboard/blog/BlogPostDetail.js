import * as React from "react";
import Box from "@mui/material/Box";
import { Grid, Container } from '@mui/material';
import MainFeaturedPost from './MainFeaturedPost';
import Main from './Main';
import Sidebar from './Sidebar';
import NavBar from "../../../components/navbar";
import post1 from './blog-post.1.md';
import post2 from './blog-post.2.md';
import post3 from './blog-post.3.md';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function ({ mode, theme, colorMode }) {
    const { postId } = useParams();
    const races = useSelector((state) => state.races.races);
    const raceDetails = races.find((race) => race._id === postId);

    console.log(raceDetails);

    if (!raceDetails) {
        return <div>Race details not found</div>;
    }

    const mainFeaturedPost = {
        title: raceDetails.name,
        description: "size: " + raceDetails.size + "\nspeed: " + raceDetails.speed,
        image: raceDetails.image,
        imageText: 'main image description',
    };

    const sidebar = {
        title: 'About',
        description:
            'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
        archives: [
            { title: 'March 2020', url: '#' },
            { title: 'February 2020', url: '#' },
            { title: 'January 2020', url: '#' },
            { title: 'November 1999', url: '#' },
            { title: 'October 1999', url: '#' },
            { title: 'September 1999', url: '#' },
            { title: 'August 1999', url: '#' },
            { title: 'July 1999', url: '#' },
            { title: 'June 1999', url: '#' },
            { title: 'May 1999', url: '#' },
            { title: 'April 1999', url: '#' },
        ],

    };

    const posts = [post1, post2, post3];

    return (
        <NavBar mode={mode} theme={theme} colorMode={colorMode}>
            <Box>
                <Container maxWidth="lg" sx={{ marginTop: '100px' }} >
                    <main>
                        <MainFeaturedPost post={mainFeaturedPost} />
                        <Grid container spacing={5} sx={{ mt: 3 }}>
                            <Main title="From the firehose" posts={posts} />
                            <Sidebar
                                title={sidebar.title}
                                description={sidebar.description}
                                archives={sidebar.archives}
                            />
                        </Grid>
                    </main>
                </Container>
            </Box>
        </NavBar>
    );

}