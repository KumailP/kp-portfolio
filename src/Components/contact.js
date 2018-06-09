import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Grow from '@material-ui/core/Grow';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import emailValidator from 'email-validator';
import '../App.css';

const styles = theme => ({
    root: {
        padding: '5%'
    },
    formStyle: {
        width: '100%'
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      
    },
    button: {
        marginTop: 10
    },
    paperTitle: {
        fontFamily: 'Rancho, cursive',
        fontSize: '35px',
        marginBottom: '10px'
    }
  });

class Contact extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            mounted: false,
            name: '',
            email: '',
            disabled: false
        }
    }
    handleChange = name => event => {
        this.setState({
          [name]: event.target.value,
        });
        if(emailValidator.validate(this.state.email)){
            this.setState({disabled: false, emailErrorMsg: null})
        }
      };
    componentDidMount(){
        this.originalTitle = document.title;
        document.title = this.originalTitle + " - Contact";
        this.setState({mounted: true})
    }
    componentWillUnmount(){
        document.title = this.originalTitle;
    }
    isDisabled(){
        if(this.state.email.length > 0 && !emailValidator.validate(this.state.email)){
            this.setState({disabled: true, emailErrorMsg: "Invalid email"});
        }
    }
    render(){
        
        const { classes } = this.props;
        return(
            <div>
            <Typography align="center" variant="title" className={classes.paperTitle}>Get in touch!</Typography>
            <Grow in={this.state.mounted} timeout={500}>
                <Paper className={classes.root} elevation={4}>
                
                <form className={classes.formStyle} autoComplete="off" action="/sendMail" method="POST">
                
                <TextField
                    id="name"
                    label="Name"
                    className={classes.textField}
                    value={this.state.name}
                    onChange={this.handleChange('name')}
                    margin="normal"
                    required
                    />
                <br/>
                <TextField
                id="email"
                label="Email Address"
                className={classes.textField}
                value={this.state.email}
                onChange={this.handleChange('email')}
                margin="normal"
                required
                onBlur={this.isDisabled.bind(this)}
                error={this.state.disabled}
                helperText={this.state.emailErrorMsg}
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
                required
                />

                <br/>
                <Button variant="outlined" className={classes.button} type="submit" disabled={this.state.disabled}>
        Send
      </Button>
                </form>
                <br/>
                <Typography variant="body2">or send me an email at kumailpirzada@gmail.com</Typography>
                </Paper>
            </Grow>
            </div>
        )
    }
}

export default withStyles(styles)(Contact);