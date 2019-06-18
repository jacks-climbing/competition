import React from 'react';
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

function Routes() {
    return(
        <div id="route-list-outer">
            <div id="route-list-inner">
                <Typography variant="h2"  className="align-left black-text">
                    Routes
                </Typography>
                <Grid container spacing={3}>
                    <Grid className="align-left" xs={12} sm={9}>
                        <Typography variant="h4" style={ { paddingTop:"50px" } } className="black-text">
                            Check out&nbsp;
                            <a href="https://www.amazon.com/Jacks-Canyon-Climbing-Deidre-Burton/dp/1438287674/ref=asc_df_1438287674/?tag=hyprod-20&linkCode=df0&hvadid=312029833857&hvpos=1o1&hvnetw=g&hvrand=7971453527403393384&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9030087&hvtargid=pla-570650814703&psc=1&tag=&ref=&adgrpid=58874700701&hvpone=&hvptwo=&hvadid=312029833857&hvpos=1o1&hvnetw=g&hvrand=7971453527403393384&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9030087&hvtargid=pla-570650814703">
                                Jack's Canyon Sport Climbing</a> guidebook and&nbsp; 
                            <a href="https://www.mountainproject.com/area/105799277/jacks-canyon">
                                Mountain Project</a> for descriptions of climbing routes. <br/><br/>The competition routelist features all routes found in the guidebook and Mountain Project.
 
                        </Typography>
                    </Grid>
                    <Grid xs={12} sm={3} className="center-text">
                        <button style={ { margin:"auto" } } id="route-button" href="#">Download Routelist</button>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Routes