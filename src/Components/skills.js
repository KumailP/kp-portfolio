import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Grow from '@material-ui/core/Grow';

const styles = theme => ({
    avatar: {
      width: '200px',
      height: '200px',
      margin: '0 auto',
      borderRadius: 0
    }
  });

class Skills extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            mounted: false
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
    render(){
        
        const { classes } = this.props;
        return(
            <Grow in={this.state.mounted} timeout={500}>
                <Paper className={classes.root} elevation={4}>
                    <Typography align="center" variant="title">Skills Page</Typography>
                </Paper>
            </Grow>
        )
    }
}

export default withStyles(styles)(Skills);