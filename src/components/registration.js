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
                <Typography variant="h4" className='sm'>
                    (priced per individual)
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
                <a href="https://www.eventbrite.com/e/jacks-o-lantern-2019-tickets-9686652037" target = 'blank'>
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
                <Typography variant="h4" className='center-text'>
                    (priced per individual)
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
                <a href="https://www.eventbrite.com/e/jacks-o-lantern-2019-tickets-9686652037" target = 'blank'>
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