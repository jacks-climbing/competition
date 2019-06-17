import React from 'react';
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLeaf, faHandPointRight } from '@fortawesome/free-solid-svg-icons'


function Rules() {
    return(
        <div id="white-background-div">
            <Typography variant="h2" id="white-background-text">
                Rules
            </Typography>
            <br/>
            <div id = 'rules-div'>
            <Typography variant="h5">
            <FontAwesomeIcon icon={faHandPointRight} /> NO POOPING IN THE CANYON! <br />
            <FontAwesomeIcon icon={faHandPointRight} /> Double check your partner <br />
            <FontAwesomeIcon icon={faHandPointRight} /> Wear a helmet while climbing and belaying<br />
            </Typography>
            </div>
            <Typography variant="h2" id="white-background-text">
                Crag Stewardship
            </Typography>
            <br/>
            <div id= 'rules-div'>
            <Typography variant="h5">
            <FontAwesomeIcon icon={faLeaf} /> <b>Leave No Trace</b> by packing everything out, including your poo <br />
            <FontAwesomeIcon icon={faLeaf} /> <b>Respect</b> other climbers, wildlife, and plants (don't be a dick) <br />
            <FontAwesomeIcon icon={faLeaf} /> <b>Listen</b> to nature - this means no speakers or boomboxes <br />
            <FontAwesomeIcon icon={faLeaf} /> <b>Stay on trails</b> whenever possible
            </Typography>
            </div>
        </div>
    )
}

export default Rules;