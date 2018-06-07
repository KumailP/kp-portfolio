import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Grow from '@material-ui/core/Grow';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


const styles = theme => ({
    avatar: {
      width: '200px',
      height: '200px',
      margin: '0 auto'
    },
    paperStyle: {
        paddingTop: '20px'
    }
  });

class About extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            mounted: false
        }
    }
    componentDidMount(){
        this.setState({mounted: true})
    }
    render(){
        
        const { classes } = this.props;
        return(
            <Grow in={this.state.mounted} timeout={500}>
                <Paper elevation={4} className={classes.paperStyle}>
                    <Avatar alt="Kumail Pirzada" src="images/self.jpg" className={classes.avatar} />
                    <br/>
                    <Typography align="center" variant="title">Ahmed Kumail Pirzada</Typography>
                    <br/>
                    <Typography align="center" variant="title">I am a JavaScript developer</Typography>
                    <br/>
                    <Typography align="center" variant="body1">Hello! I'm Kumail. I am a JavaScript developer and full time Computer Science student.</Typography>
                    <br/>
                    <ExpansionPanel>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography variant="subheading">Education</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                        <List>
                            <ListItem component="a" href="http://www.dsu.edu.pk/index.php/en/" target="_blank">
                            <Avatar alt="DHA Suffa University" src="images/education/dsu.jpg"/>
                            <ListItemText primary="DHA Suffa University" secondary="2016 – 2020" />
                            </ListItem>
                            <ListItem component="a" href="https://www.ncr-cet.com/" target="_blank">
                            <Avatar alt="NCR - College of Emerging Technologies" src="images/education/ncr.jpg"/>
                            <ListItemText primary="NCR - College of Emerging Technologies" secondary="2014 – 2016" />
                            </ListItem>
                            <ListItem component="a" href="https://www.beaconhouse.net/" target="_blank">
                            <Avatar alt="Beaconhouse School System - Steel Town Branch" src="images/education/bss.png"/>
                            <ListItemText primary="Beaconhouse School System - Steel Town Branch" secondary="2012 – 2014" />
                            </ListItem>
                        </List>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <ExpansionPanel>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography variant="subheading">Honors & Awards</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                        <List>
                            <ListItem>
                            <ListItemText primary="DSU Merit Scholarship" secondary="2017" />
                            </ListItem>
                            <ListItem>
                            <ListItemText primary="DSU Dean's Honor List x3" secondary="2016 – 2017" />
                            </ListItem>
                        </List>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <ExpansionPanel>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography variant="subheading">Courses & Certifications</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                        <List>
                            <ListItem>
                            <ListItemText primary="Andrew Ng's Machine Learning, Coursera" secondary="2017" />
                            </ListItem>
                            <ListItem>
                            <ListItemText primary="HarvardX Introduction to Computer Science (CS50x)" secondary="2017" />
                            </ListItem>
                        </List>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                </Paper>
            </Grow>
        )
    }
}

export default withStyles(styles)(About);