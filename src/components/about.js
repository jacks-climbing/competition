import React from 'react';
import Typography from '@material-ui/core/Typography';
import Itinerary from './itinerary';

function About() {
    return(
        <div className="white-background-div">
            <Typography variant="h2" className="white-background-text">
                About
            </Typography>
            <br/>
            <Typography variant="h5" className="white-background-text">
                The Jacks O' Lantern Climbing Competition pits climber against crag by the light of the moon.<br/> 
                Grab your headlamp and your bravest climbing partner for this spooky event! 
                <br />
                <br />
                This event is brought to you by Bad Bolt Climbing.
            </Typography>
            <Itinerary />
        </div>
    )
}

export default About;