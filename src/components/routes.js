import React from 'react';
import { Typography } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faMountain } from '@fortawesome/free-solid-svg-icons'
import Grid from '@material-ui/core/Grid';

function Routes() {
    return(
        <div id="route-list-outer">
            <div id="route-list-inner">
                <Typography variant="h2"  className="center-text black-text">
                    Routes
                </Typography>
                <br />
                <a target = "blank" href = "#">
                    <button style={ { margin:"auto" } } id="route-button">
                        Competition Scoresheet (coming soon)
                    </button>
                </a>
                <br/>
                <Typography variant="h4" style={ { paddingTop:"50px" } } className="black-text"> 
                    All routes in the competition routelist are described in both the Jacks Canyon Climbing Guidebook and Mountain Project.
                <br /><br />
                <Grid container spacing={3}>
                    <Grid item xs>
                    <a target="blank" href="https://www.amazon.com/Jacks-Canyon-Climbing-Deidre-Burton/dp/1438287674/ref=asc_df_1438287674/?tag=hyprod-20&linkCode=df0&hvadid=312029833857&hvpos=1o1&hvnetw=g&hvrand=7971453527403393384&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9030087&hvtargid=pla-570650814703&psc=1&tag=&ref=&adgrpid=58874700701&hvpone=&hvptwo=&hvadid=312029833857&hvpos=1o1&hvnetw=g&hvrand=7971453527403393384&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9030087&hvtargid=pla-570650814703">
                        <button style={ { margin:"auto" } } id="route-button">
                            <FontAwesomeIcon icon={faBook} />
                            <br />
                            Guidebook 
                        </button>    
                    </a>                     
                    
                    </Grid>
                    <Grid item xs>
                    <a target="blank" href="https://www.mountainproject.com/area/105799277/jacks-canyon">
                        <button style={ { margin:"auto" } } id="route-button">
                            <FontAwesomeIcon icon={faMountain} />
                            <br />
                            Mountain Project
                        </button>
                    </a> 
                    
                    
                    </Grid>
                </Grid>
                </Typography>
            </div>
        </div>
    )
}

export default Routes