import React from 'react';
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCampground } from '@fortawesome/free-solid-svg-icons'

function Camping() {
    return(
        <div id="camping">
            <Grid container spacing={3}>
                <Grid item xs>
                    <Typography variant="h2"  className="align-left white-text">
                            Camping
                    </Typography>
                    <Typography variant="h5"  className="align-left white-text">
                            <br />
                            Camping is free. Please respect other campers and the site by:
                            <br /><br />
                            <FontAwesomeIcon icon={faCampground} /> Minimizing noise after sundown
                            <br />
                            <FontAwesomeIcon icon={faCampground} /> Camp and park in areas with compacted soil
                            <br /> 
                            <FontAwesomeIcon icon={faCampground} /> Do not disturb vegetation
                            <br /> 
                            <FontAwesomeIcon icon={faCampground} /> #2 in the outhouse
                    </Typography>
                </Grid>
                <Grid item xs></Grid>
            </Grid>
        </div>

    )
}

export default Camping;