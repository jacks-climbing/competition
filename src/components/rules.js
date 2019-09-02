import React from 'react';
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLeaf, faHandPointRight } from '@fortawesome/free-solid-svg-icons'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Media from 'react-media';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    minHeight:'600pt',
  },
  papersm: {
    color: theme.palette.text.secondary,
    width:'100%',
  },
}));





function Rules() {
    const classes = useStyles();
    return(
        <div className="white-background-div">
<Media query="(max-width: 1050px)">
          {matches =>
            matches ? (
            <div>
            <div className={classes.root}>

                    <Paper className={classes.papersm}>
                    <Typography variant="h3" className="white-background-text">
                        Rules
                    </Typography>
                    
                    <Typography variant="body1" align="left">
                    <br/>
                        <FontAwesomeIcon icon={faHandPointRight} /> <b>Score Points</b> by leading a clean ascent. You can climb each pitch twice. Both your score and your partners will count toward your team's total. <br />
                        <FontAwesomeIcon icon={faHandPointRight} /> <b>Don't</b> French freeing or victory whips. You must clip the anchors and be in full control. <br />
                        <FontAwesomeIcon icon={faHandPointRight} /> <b>Don't</b> free solo, skip bolts, top-rope, follow, or yo-yo <br />
                        <FontAwesomeIcon icon={faHandPointRight} /> <b>Do</b> stick clip up to the second draw, leave your draws up, be ready to climb <br />
                        <FontAwesomeIcon icon={faHandPointRight} /> Wear a helmet while climbing and belaying<br />
                        <FontAwesomeIcon icon={faHandPointRight} /> Be respectful of other climbers and don't hog routes <br />
                        <FontAwesomeIcon icon={faHandPointRight} /> Double check your partner <br />
                        <FontAwesomeIcon icon={faHandPointRight} /> Wear a helmet while climbing and belaying<br />
                        <FontAwesomeIcon icon={faHandPointRight} /> Not following the above rules may result in disqualification<br />


                    </Typography>
                    </Paper>
                    <br /><br />
                    <Paper className={classes.papersm}>
                    <Typography variant="h3" className="white-background-text">
                        Crag Stewardship
                    </Typography>
                    <Typography variant="h6" align="left">
                        <br/>
                        <FontAwesomeIcon icon={faLeaf} /> <b>Leave No Trace Ethics</b> are a mandatory comp requirement <br />
                        <FontAwesomeIcon icon={faLeaf} /> <b>Pack it out.</b> Pack out all trash and feces. There is an outhouse at the rim of the canyon.<br />
                        <FontAwesomeIcon icon={faLeaf} /> <b>Respect</b> other climbers, wildlife, and plants <br />
                        <FontAwesomeIcon icon={faLeaf} /> <b>Listen</b> to nature - this means no speakers or boomboxes <br />
                        <FontAwesomeIcon icon={faLeaf} /> <b>Stay on trails</b> whenever possible<br />
                        <FontAwesomeIcon icon={faLeaf} /> <b>Erase tick marks</b> <br />
                        <FontAwesomeIcon icon={faLeaf} /> <b>Share campfires and extinguish them completely</b>
                    </Typography>
                    </Paper>

    </div>
            </div>
                
            ) : (
            <div>
                 <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs>
                    <Paper className={classes.paper}>
                    <Typography variant="h2" className="white-background-text">
                        Rules
                    </Typography>
                    
                    <Typography variant="h5">
                    <br/>
                    <FontAwesomeIcon icon={faHandPointRight} /> <b>Score Points</b> by leading a clean ascent. You can climb each pitch twice. Both your score and your partners will count toward your team's total. <br />
                        <FontAwesomeIcon icon={faHandPointRight} /> <b>Don't</b> French freeing or victory whips. You must clip the anchors and be in full control. <br />
                        <FontAwesomeIcon icon={faHandPointRight} /> <b>Don't</b> free solo, skip bolts, top-rope, follow, or yo-yo <br />
                        <FontAwesomeIcon icon={faHandPointRight} /> <b>Do</b> stick clip up to the second draw, leave your draws up, be ready to climb <br />
                        <FontAwesomeIcon icon={faHandPointRight} /> Wear a helmet while climbing and belaying<br />
                        <FontAwesomeIcon icon={faHandPointRight} /> Be respectful of other climbers and don't hog routes <br />
                        <FontAwesomeIcon icon={faHandPointRight} /> Double check your partner <br />
                        <FontAwesomeIcon icon={faHandPointRight} /> Wear a helmet while climbing and belaying<br />
                        <FontAwesomeIcon icon={faHandPointRight} /> Not following the above rules may result in disqualification<br />
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
                        <FontAwesomeIcon icon={faLeaf} /> <b>Leave No Trace Ethics</b> are a mandatory comp requirement <br />
                        <FontAwesomeIcon icon={faLeaf} /> <b>Pack it out.</b> Pack out all trash and feces. There is an outhouse at the rim of the canyon.<br />
                        <FontAwesomeIcon icon={faLeaf} /> <b>Respect</b> other climbers, wildlife, and plants <br />
                        <FontAwesomeIcon icon={faLeaf} /> <b>Listen</b> to nature - this means no speakers or boomboxes <br />
                        <FontAwesomeIcon icon={faLeaf} /> <b>Stay on trails</b> whenever possible<br />
                        <FontAwesomeIcon icon={faLeaf} /> <b>Erase tick marks</b> <br />
                        <FontAwesomeIcon icon={faLeaf} /> <b>Share campfires and extinguish them completely</b>
                    </Typography>
                    </Paper>
                    </Grid>
                </Grid>
    </div>   
            </div>
                
            )
          }
        </Media>



            
            <div id= 'rules-div'>

            </div>
        </div>
    )
}

export default Rules;