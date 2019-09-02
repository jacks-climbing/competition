import React from 'react';
import { Typography } from '@material-ui/core';

function Sponsors() {
    return (
        <div className ='white-background-div'>
            <Typography variant="h2"  className="center-text black-text">
                Sponsors
            </Typography>
            <br /> <br />
                    
            <Typography variant="h6" className="center-text black-text">
                Contact <a href='malito:jacks.o.lantern.comp@gmail.com'>jacks.o.lantern.comp@gmail.com</a> to sponsor the Jacks O Lantern Climbing Fest
                <br /> <br /> <br />
            </Typography>
            <div className = 'design-div'>

                <i>Website Design by Ryan and Megs</i>
            </div>
        </div>
    )
}

export default Sponsors;