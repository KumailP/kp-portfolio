import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Grow from '@material-ui/core/Grow';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import List from '@material-ui/core/List';
import { frameworkLibrary, languages, devTools, basicView, other } from './skillsData';

const styles = theme => ({
    paperStyle: {
        padding: '20px',
        margin: '10px'
    },
    appBar: {
      backgroundColor: 'white',
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      })
    }
  });

class Skills extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            mounted: false,
            checkedA: false
        }
    }
    componentDidMount(){
        this.originalTitle = document.title;
        document.title = this.originalTitle + " - Skills";
        this.setState({mounted: true})
    }
    componentWillUnmount(){
        document.title = this.originalTitle;
    }

    handleChange = name => event => {
        this.setState({ [name]: event.target.checked });
      };

    render(){
        
        const { classes } = this.props;
        return(
                <div className={classes.root}>
                    <Typography align="center" variant="title">I know a little about the following</Typography>
                    
                    

        <FormGroup row >
        <FormControlLabel
          control={
            <Switch
              checked={this.state.checkedA}
              onChange={this.handleChange('checkedA')}
              value="checkedA"/>
          }
          label="Technical"
          style={{margin: '0 auto'}}
        />
        </FormGroup>

            {this.state.checkedA === false && <div>
            <Grow in={this.state.mounted} timeout={500}>
                    <Paper className={classes.paperStyle} elevation={4}>
                        <div className={classes.hiddenStyle}>
                        {/* <Typography variant="title" className={classes.title}>
              Web Development
            </Typography> */}
              
            <List component="nav">
                {basicView}

            </List>

                        </div>
                    </Paper>
                    </Grow>

                    </div>}



                    {this.state.checkedA === true && <div>
            

            <Grow in={this.state.mounted} timeout={500}>
                    <Paper className={classes.paperStyle} elevation={4}>
                        <Typography variant="headline" component="h3">
                        Languages
                        </Typography>
                        {languages}
                    </Paper>
                    </Grow>


                    <Grow in={this.state.mounted} timeout={800}>
                    <Paper className={classes.paperStyle} elevation={4}>
                        <Typography variant="headline" component="h3">
                        Frameworks & Libraries
                        </Typography>
                        <div className={classes.hiddenStyle}>
                        
                        {frameworkLibrary}

                        </div>
                    </Paper>
                    </Grow>

            <Grow in={this.state.mounted} timeout={1100}>
                    <Paper className={classes.paperStyle} elevation={4}>
                        <Typography variant="headline" component="h3">
                        Dev Tools
                        </Typography>
                        {devTools}
                    </Paper>
                    </Grow>

                    <Grow in={this.state.mounted} timeout={1400}>
                    <Paper className={classes.paperStyle} elevation={4}>
                        <Typography variant="headline" component="h3">
                        Other
                        </Typography>
                        {other}
                    </Paper>
                    </Grow>



                    </div>}
                </div>
        )
    }
}

export default withStyles(styles)(Skills);