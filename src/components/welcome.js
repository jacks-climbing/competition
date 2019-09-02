import React from 'react';
import Media from 'react-media';

function Welcome(){
    return(
        <div id="title">
            <Media query="(max-width: 599px)">
          {matches =>
            matches ? (
                <div>
            
            <h2>
            <br /><br /><br />
            Jacks Canyon, Arizona 
            <br />
            October 26, 2019</h2>
            
            <h1 className = 'sm'>
            
            <br />
            Jacks O' Lantern 
            <br/>
            Second Annual
            <br />
            Climbing Competition
            </h1>
            
            </div>
                
            ) : (
                <div>
                    <h1>
            <br />
            Jacks O' Lantern 
            <br/>
            Second Annual
            <br />
            Climbing Competition
            </h1>
            <h2>Jacks Canyon, Arizona | October 26, 2019</h2>
                </div>
                
            )
          }
        </Media>
            
        </div>
    )
}

export default Welcome;