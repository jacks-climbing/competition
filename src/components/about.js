import React from 'react';
import Typography from '@material-ui/core/Typography';
import Itinerary from './itinerary';
import { makeStyles } from '@material-ui/core/styles';
import Media from 'react-media';



import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  card: {
    minWidth: '400px',
    maxWidth:'50%',
    height: 235,
    fontColor:'#ba0a0a',
    fontSize:'14px',
    alignContent:'center',
  },
}));

function About() {
    const classes = useStyles();
    return(
        <div className="white-background-div">
            <Card style={{ paddingTop: "100px", paddingBottom: "100px"}}>
                <CardContent>
            <Typography variant="h2" className="white-background-text" style={{marginBottom:"10px"}}>
                About
            </Typography>
            <br/>
            <Typography variant="h5" className="white-background-text">
                The Jacks O' Lantern Climbing Competition pits climber against crag by the light of the moon.<br/> 
                Grab your headlamp and your bravest climbing partner for this spooky event! 
                <br />
                <br />
                This event is brought to you by Bad Bolt Climbing.
            </Typography>
            </CardContent>
            </Card>
            <br/>
            <br />
            <br />
            <Card style={{ paddingTop: "100px", paddingBottom: "100px"}}>
                <CardContent>
            <Typography variant="h2" className="white-background-text" style={{marginBottom:"100px"}}>
                Categories
            </Typography>
            

        <Media query="(max-width: 599px)">
          {matches =>
            matches ? (
                <div className ='center-text'>
                <Card className={classes.card}>
                <CardContent>
                    <Typography variant="h5" className="white-background-text">
                    <div className = 'float-left'><b>Jack Splat</b></div> 
                    <div className = 'float-right'>Up to 5.9</div>
                    <br /><hr/>
                    <div className = 'float-left'><b>Jack of All Trades</b></div> 
                    <div className = 'float-right'>Up to 5.10d</div>
                    <br /><hr/>
                    <div className = 'float-left'><b>Jacked Up</b></div> 
                    <div className = 'float-right'>Up to 5.12a</div>
                    <br /><hr/>
                    <div className = 'float-left'><b>Totally Jacked</b></div> 
                    <div className = 'float-right'>5.12b and up</div>
                    <br />
                    </Typography>
                </CardContent>
                </Card>
                <br /><br />
                <Typography variant="h5" className="white-background-text" align="left">
                Categories are based on the hardest outdoor red point of either partner in the past two years. For example, if you red point 5.11a then you should be in “Jacked Up.” 
                Please do not sign up for a category below your best outdoor red point. Be honest and try hard.
                Note that your category will be bumped up if your score sheet relects a harder category.
                </Typography>
                </div>
                
            ) : (
                <div>
                    <div className ='float-left2'>
                    <Card className={classes.card}>
                <CardContent>
                    <Typography variant="h5" className="white-background-text">
                    <div className = 'float-left'><b>Jack Splat</b></div> 
                    <div className = 'float-right'>Up to 5.9</div>
                    <br /><hr/>
                    <div className = 'float-left'><b>Jack of All Trades</b></div> 
                    <div className = 'float-right'>Up to 5.10d</div>
                    <br /><hr/>
                    <div className = 'float-left'><b>Jacked Up</b></div> 
                    <div className = 'float-right'>Up to 5.12a</div>
                    <br /><hr/>
                    <div className = 'float-left'><b>Totally Jacked</b></div> 
                    <div className = 'float-right'>5.12b and up</div>
                    <br />
                    </Typography>
                </CardContent>
                </Card>
                </div>
                <div className = 'float-right2'>
                <Typography variant="h5" className="white-background-text" align="left">
                Categories are based on the hardest outdoor red point of either partner in the past two years. For example, if you red point 5.11a then you should be in “Jacked Up.” 
                Please do not sign up for a category below your best outdoor red point. Be honest and try hard.
                Note that your category will be bumped up if your score sheet relects a harder category.
                </Typography>
                </div>
                
                </div>
                
            )
          }
        </Media>
         
           </CardContent>
           </Card>
            
        <div>
        <Card style={{ paddingTop: "100px", paddingBottom: "100px"}}>
                <CardContent>
            <Typography variant="h2" className="white-background-text" style={{marginTop:"100px"}}>
                Itinerary
            </Typography>
            <Itinerary />
            </CardContent>
            </Card>
            </div>
        </div>
    )
}

export default About;