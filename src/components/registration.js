import React from 'react';
import Typography from '@material-ui/core/Typography';

function Registration() {
    return(
        <div id="signup-div">
            <div id = 'signup-div-left'>
                <Typography variant="h2" id = 'center-text'>
                    2019 Registration
                </Typography>
                <Typography variant="h4" id="left-text">
                <table>
                <tr>
                    <th>Early Bird </th>
                   <th>Pre-register</th>
                    <th>Walk-in</th>
                </tr>
                <tr>
                    <td>September 1</td>
                    <td>October 24</td>
                    <td>October 26</td>
                </tr>
                <tr>
                    <td>$15</td>
                    <td>$20</td>
                    <td>$25</td>
                </tr>
                </table>
                </Typography>
            
                <button id="signup-button" href="https://docs.google.com/forms/d/1FNyLfm4el5N7c6ufBUj0-AJMG-hXRUn_rqgRS_1LtiE/prefill">
                    Sign Up
                </button>
            </div>
        </div>
    )
}

export default Registration;