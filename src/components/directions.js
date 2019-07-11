import React from 'react';
import Grid from '@material-ui/core/Grid';
import jacks_directions from '../images/jacks_directions.png';
import jacks_camping from '../images/jacks_camping.png';
import Typography from '@material-ui/core/Typography';

function Directions() {
    return(
        <div className="white-background-div">
            <Typography variant="h2" className="white-background-text">
                Directions
            </Typography>
            <br />
            <Grid container spacing={3}>
                <Grid item xs>
                    <img src={jacks_directions} alt = 'directions to jacks canyon' className = 'image-contained' />
                </Grid>
                <Grid item xs>
                    <Typography variant="h5" className="black-text">
                    <b>From Phoenix:</b> Drive north on Highway 87. Turn left 0.7 miles past mile marker 31?.
                    <br /> <br />
                    <b>From Flagstaff:</b> Head east to Winslow. From Winslow, drive south on Highway 87. Turn right 0.3 miles past mile marker 314.
                    </Typography>
                </Grid>
            </Grid>
            <br />
            <Grid container spacing={3}>
                <Grid item xs>
                    <Typography variant="h5" className="black-text">
                        Drive through the gate on a dirt road. Please close gate after passing through. 
                        <br  />
                        <i>Junction 1: Right </i>
                        <br /> 
                        <i>Junction 2: Left</i>
                        <br /> 
                        <i>Junction 3: Right</i>
                    </Typography>
                </Grid>
                <Grid item xs>
                    <img src={jacks_camping} alt = 'directions to jacks canyon2' className = 'image-contained' />
                </Grid>
            </Grid>
        </div>
    )
}

export default Directions