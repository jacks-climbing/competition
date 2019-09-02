import React from 'react';
import Typography from '@material-ui/core/Typography';
import Media from 'react-media';
function Registration() {
    return(
        <div id="signup-div">
            

        <Media query="(max-width: 599px)">
          {matches =>
            matches ? (
            <div>
                <Typography variant="h2" className='center-text'>
                    2019 Registration
                </Typography>
            <Typography variant="h4" className = 'sm'>
                <table className = 'sm'>
                <tr>
                    <th>Early Bird </th>
                   <th>Pre-register</th>
                    <th>Walk-in</th>
                </tr>
                <tr>
                    <td>September 30</td>
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
                <button id="signup-buttonsm">
                    Sign Up
                </button>
                </a>
            </div>
                
            ) : (

            <div>
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
                    <td>September 30</td>
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
        </Media>



                

        </div>
    )
}

export default Registration;