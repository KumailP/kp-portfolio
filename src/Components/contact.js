import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Grow from '@material-ui/core/Grow';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    root: {
        padding: '5%'
    },
    formStyle: {
        width: '100%'
    }
  });

class Contact extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            mounted: false,
            name: '',
            email: '',
            multiline: 'Controlled',
        }
    }
    handleChange = name => event => {
        this.setState({
          [name]: event.target.value,
        });
      };
    componentDidMount(){
        this.originalTitle = document.title;
        document.title = this.originalTitle + " - Contact";
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
                
                <Typography variant="title">Hit me up</Typography>
                <form className={classes.formStyle} noValidate autoComplete="off">
                <TextField
                id="name"
                label="Name"
                className={classes.textField}
                value={this.state.name}
                onChange={this.handleChange('name')}
                margin="normal"
                />
                <br/>
                <TextField
                id="email"
                label="Email Address"
                className={classes.textField}
                value={this.state.email}
                onChange={this.handleChange('email')}
                margin="normal"
                />

                <br/>
                <TextField
                id="textarea"
                label="Message"
                placeholder="Message"
                multiline
                className={classes.textField}
                margin="normal"
                fullWidth
                />

                <Button variant="outlined" className={classes.button}>
        Send
      </Button>
                </form>
                
                <Typography variant="body2">or contact me directly at kumailpirzada@gmail.com</Typography>
                </Paper>
            </Grow>
        )
    }
}

export default withStyles(styles)(Contact);