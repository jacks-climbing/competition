import React from 'react';
import Typography from '@material-ui/core/Typography';

function Registration() {
    return(
        <div id="signup-div">
            <div id = 'signup-div-left'>
                <Typography variant="h2" className='center-text'>
                    2019 Registration
                </Typography>
                <Typography variant="h4">
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
                    <td>$10</td>
                    <td>$15</td>
                    <td>$20</td>
                </tr>
                </table>
                </Typography>
                <a href="https://docs.google.com/forms/d/1FNyLfm4el5N7c6ufBUj0-AJMG-hXRUn_rqgRS_1LtiE/prefill" target = 'blank'>
                <button id="signup-button">
                    Sign Up
                </button>
                </a>
            </div>
        </div>
    )
}

export default Registration;