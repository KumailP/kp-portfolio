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
        this.originalTitle = document.title;
        document.title = this.originalTitle + " - About";
        this.setState({mounted: true})
    }
    componentWillUnmount(){
        document.title = this.originalTitle;
    }
    render(){
        
        const { classes } = this.props;
        return(
            <Grow in={this.state.mounted} timeout={500}>
                <Paper elevation={4} className={classes.paperStyle}>
                    <Avatar alt="Kumail Pirzada" src="self.jpg" className={classes.avatar} />
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
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                            sit amet blandit leo lobortis eget.
                        </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <ExpansionPanel>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography variant="subheading">Honors & Awards</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                            sit amet blandit leo lobortis eget.
                        </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <ExpansionPanel>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography variant="subheading">Education</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                            sit amet blandit leo lobortis eget.
                        </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                </Paper>
            </Grow>
        )
    }
}

export default withStyles(styles)(About);