import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Grow from '@material-ui/core/Grow';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import List from '@material-ui/core/List';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { languagesData, frameworkLibraryData, devToolsData, otherData, basicViewData } from './data/skillsData';
import '../App.css';

const iconMargin = {
    margin: '4px'
}

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
    },
    paperTitle: {
        fontFamily: 'Rancho, cursive',
        fontSize: '35px'
    }
  });

const tooltipRender = (data) => {
    return <div>
    {data.map(function(item, i){
        let link = "images/skills/" + item.trim() + ".png";
        return <Tooltip title={item} key={i}>
                    <IconButton aria-label={item} style={iconMargin}>
                        <Avatar alt={item} src={link}/>
                    </IconButton>
                </Tooltip>
    })}
    </div>
}

const basicViewRender = (data) => {
    return <div>
             {data.map(function(item, i){
             return <ListItem>
            <ListItemIcon>
                {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.name} />
            </ListItem>
             })}
            </div>
}

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
                    <Typography align="center" variant="title" className={classes.paperTitle}>I know a little about the following</Typography>
                    
                    

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
                       
              
            <List component="nav">
                {basicViewRender(basicViewData)}

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
                        {tooltipRender(languagesData)}
                    </Paper>
                    </Grow>


                    <Grow in={this.state.mounted} timeout={800}>
                    <Paper className={classes.paperStyle} elevation={4}>
                        <Typography variant="headline" component="h3">
                        Frameworks & Libraries
                        </Typography>
                        <div className={classes.hiddenStyle}>
                        
                        {tooltipRender(frameworkLibraryData)}

                        </div>
                    </Paper>
                    </Grow>

            <Grow in={this.state.mounted} timeout={1100}>
                    <Paper className={classes.paperStyle} elevation={4}>
                        <Typography variant="headline" component="h3">
                        Dev Tools
                        </Typography>
                        {tooltipRender(devToolsData)}
                    </Paper>
                    </Grow>

                    <Grow in={this.state.mounted} timeout={1400}>
                    <Paper className={classes.paperStyle} elevation={4}>
                        <Typography variant="headline" component="h3">
                        Other
                        </Typography>
                        {tooltipRender(otherData)}
                    </Paper>
                    </Grow>



                    </div>}
                </div>
        )
    }
}

export default withStyles(styles)(Skills);