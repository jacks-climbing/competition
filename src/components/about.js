import React from 'react';
import Typography from '@material-ui/core/Typography';

function About() {
    return(
        <div id="about-div">
            <Typography variant="h2" id="about-text">
                About
            </Typography>
            <br/>
            <Typography variant="h5" id="about-text">
                The Jacks O' Lantern Climbing Competition pits climber against crag. 
                Grab your headlamp and your bravest climbing partner for this spooky event!
            </Typography>
        </div>
    )
}

export default About;