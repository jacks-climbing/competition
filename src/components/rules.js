import React from 'react';
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLeaf, faHandPointRight } from '@fortawesome/free-solid-svg-icons'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));





function Rules() {
    const classes = useStyles();
    return(
        <div className="white-background-div">
            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs>
                    <Paper className={classes.paper}>
                    <Typography variant="h2" className="white-background-text">
                        Rules
                    </Typography>
                    
                    <Typography variant="h5">
                    <br/>
                        <FontAwesomeIcon icon={faHandPointRight} /> NO POOPING IN THE CANYON! <br />
                        <FontAwesomeIcon icon={faHandPointRight} /> Double check your partner <br />
                        <FontAwesomeIcon icon={faHandPointRight} /> Wear a helmet while climbing and belaying<br />
                    </Typography>
                    </Paper>
                    </Grid>
                    <Grid item xs>
                    <Paper className={classes.paper}>
                    <Typography variant="h2" className="white-background-text">
                        Crag Stewardship
                    </Typography>
                    <Typography variant="h5">
                        <br/>
                        <FontAwesomeIcon icon={faLeaf} /> <b>Leave No Trace</b> by packing everything out, including your poo <br />
                        <FontAwesomeIcon icon={faLeaf} /> <b>Respect</b> other climbers, wildlife, and plants (don't be a dick) <br />
                        <FontAwesomeIcon icon={faLeaf} /> <b>Listen</b> to nature - this means no speakers or boomboxes <br />
                        <FontAwesomeIcon icon={faLeaf} /> <b>Stay on trails</b> whenever possible
                    </Typography>
                    </Paper>
                    </Grid>
                </Grid>
    </div>
            <div id= 'rules-div'>

            </div>
        </div>
    )
}

export default Rules;