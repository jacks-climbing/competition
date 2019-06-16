import React from 'react';
import Typography from '@material-ui/core/Typography';

function Registration() {
    return(
        <div id="registration-div">
            
            <Typography variant="h2" id="signup-title">Registration</Typography>
            <br></br><Typography variant="h3" id="signup-title">Ensure your spot-sign up early</Typography>
            <hr/>
            <Typography variant="h4" id="signup-description">Date: October 26, 2019 <br/>Preregistration: $XXX <br/> Day-Of Registration: $XXX</Typography>
            <button id="signup" href="https://docs.google.com/forms/d/1FNyLfm4el5N7c6ufBUj0-AJMG-hXRUn_rqgRS_1LtiE/prefill" >Sign Up</button>
        </div>
    )
}

export default Registration;