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
    height: 250,

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
            <div className={classes.root}>
                <Grid container spacing={3}>
                    
                    <Grid item xs>
                        <Card className={classes.card}>
                            <CardHeader className = {classes.friday}
                            title="Friday"
                            />
                            <CardContent>
                                <Typography component="p">
                                7pm Climber Games
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs>
                        <Card className={classes.card}>
                            <CardHeader className = {classes.sat}
                            title="Saturday"
                            />
                            <CardContent>
                                <Typography component="p">
                                8am Yoga <hr />
                                12pm Advanced/Intermediate Start <hr />
                                8pm Beginner Start <hr />
                                Midnight cease climbing
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs>
                        <Card className={classes.card}>
                            <CardHeader className = {classes.sun}
                            title="Sunday"
                            />
                            <CardContent>
                                <Typography component="p">
                                8am Yoga <hr />
                                9am Group Breakfast <hr />
                                11am Access Fund Raffle
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
        </div>
    </div>
    )
}

export default Itinerary;