import React from 'react';
import Grid from '@material-ui/core/Grid';
import jacks_directions from '../images/jacks_directions.png';
import jacks_camping from '../images/jacks_canyon.png';
import Typography from '@material-ui/core/Typography';
import Media from 'react-media';

function Directions() {
    return(
        <div className="white-background-div">
            <Typography variant="h2" className="white-background-text">
                Directions
            </Typography>
            <br />

            <Media query="(max-width: 900px)">
          {matches =>
            matches ? (
            <div>
                <img src={jacks_directions} alt = 'directions to jacks canyon' className = 'image-contained' />
                <br /> <br />
                    <Typography variant="h5" className="black-text">
                    If using Google Maps, navigate to <a href="https://goo.gl/maps/TK6684iyyDNiknXY7">Jacks Canyon Campground</a>.<br/>
                    <b>From Phoenix:</b> Drive north on Highway 87 past Payson. Turn left on the dirt road at the following GPS Coordinates: <a href="https://goo.gl/maps/62c8SxyH5n9iuPkb6">34°44'33.2"N 111°03'08.3"W</a>
                    <br /> <br />
                    <b>From Flagstaff:</b> Head east to Winslow. From Winslow, drive south on Highway 87. Turn right 0.3 miles past mile marker 314, at the same coordinates described, above.
                    </Typography>
                    <br /> <br />
                    <img src={jacks_camping} alt = 'directions to jacks canyon2' className = 'image-contained' />
                    <br /> <br />

                    <Typography variant="h5" className="black-text align-right">
                        Drive through the gate on a dirt road. Please close gate after passing through. Follow the main dirt road to the campground (see map and description below).
                        The trail into the canyon and to the base of the climbs begins at the campground. Sign in and meet prior to your start time at the table set up at the campground.
                        <br  /><br />
                        More detailed directions from the gate to the campground: <br />
                        Junction 1: Right
                        <br /> 
                        Junction 2: Left
                        <br /> 
                        Junction 3: Right
                    </Typography>
                    

            </div>
                
            ) : (
            <div>
                  <Grid container spacing={3}>
                <Grid item xs>
                    <img src={jacks_directions} alt = 'directions to jacks canyon' className = 'image-contained' />
                </Grid>
                <Grid item xs>
                <Typography variant="h5" className="black-text">
                    If using Google Maps, navigate to <a href="https://goo.gl/maps/TK6684iyyDNiknXY7">Jacks Canyon Campground</a>.<br/>
                    <br />
                    <b>From Phoenix:</b> Drive north on Highway 87 past Payson. Turn left on the dirt road at the following GPS Coordinates: <a href="https://goo.gl/maps/62c8SxyH5n9iuPkb6">34°44'33.2"N 111°03'08.3"W</a>
                    <br /> <br />
                    <b>From Flagstaff:</b> Head east to Winslow. From Winslow, drive south on Highway 87. Turn right 0.3 miles past mile marker 314, at the same coordinates listed, above.
                    </Typography>
                </Grid>
            </Grid>
            <br />
            <Grid container spacing={3}>
                <Grid item xs>
                    <Typography variant="h5" className="black-text align-right">
                        Drive through the gate on a dirt road. Please close gate after passing through. Follow the main dirt road to the campground (see map and description below).
                        The trail into the canyon and to the base of the climbs begins at the campground. Sign in and meet prior to your start time at the table set up at the campground.
                        <br  /><br />
                        More detailed directions from the gate to the campground: <br />
                        Junction 1: Right
                        <br /> 
                        Junction 2: Left
                        <br /> 
                        Junction 3: Right
                    </Typography>
                </Grid>
                <Grid item xs>
                    <img src={jacks_camping} alt = 'directions to jacks canyon2' className = 'image-contained' />
                </Grid>
            </Grid>  
            </div>
                
            )
          }
        </Media>


            
        </div>
    )
}

export default Directions