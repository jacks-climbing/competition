import React from 'react';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';


import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';



const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  card: {
    maxWidth: 345,
    minWidth: 300,
    height: 450,

    fontColor:'#ba0a0a',
    fontSize:'14px',
  },
  friday: {
      backgroundColor:'#ff984a',
      textAlign: 'center',
      fontSize: '20px',
  },
  sat: {
    backgroundColor:'#ff6d00',
    textAlign: 'center',
},
    sun: {
        backgroundColor:'#b54e00',
        textAlign: 'center',
    },

}));

  

function Itinerary() {
    const classes = useStyles();
    return(
        <div className="white-background-div">
  
                <Grid container spacing={3}>
                    
                    <Grid item xs={12} sm={4}>
                        <Card className={classes.card}>
                            <CardHeader className = {classes.friday}
                            title="Friday"
                            />
                            <CardContent>
                                <Typography component="p">
                                7pm <div className = 'float-right'>Climber Games</div>
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={4}>
                        <Card className={classes.card}>
                            <CardHeader className = {classes.sat}
                            title="Saturday"
                            />
                            <CardContent>
                                <Typography component="p">
                                8am <div className = 'float-right'>Yoga </div>
                                <hr /><hr />
                                <center><b>Totally Jacked/Jacked Up</b></center> <br />
                                11:30am <div className = 'float-right'>Rules and Comp Info</div><br />
                                12pm <div className = 'float-right'>Start Competition</div><hr />
                                <center><b>Jack of All Trades/Jack Splat</b></center> <br />
                                3:30pm <div className = 'float-right'>Rules and Comp Info</div><br />
                                5pm <div className = 'float-right'>Start Competition</div>
                                <hr /><hr />
                                12am <div className = 'float-right'>End of Competition </div><hr />
                                12:30am <div className = 'float-right'>Submit Score Cards</div>
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={4}>
                        <Card className={classes.card}>
                            <CardHeader className = {classes.sun}
                            title="Sunday"
                            />
                            <CardContent>
                                <Typography component="p">
                                8am <div className = 'float-right'>Yoga</div> <hr />
                                9am <div className = 'float-right'>Group Breakfast</div> <hr />
                                10am <div className = 'float-right'>Access Fund Raffle</div>
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
        </div>

    )
}

export default Itinerary;