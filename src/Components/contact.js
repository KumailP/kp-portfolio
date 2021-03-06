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
            disabled: false,
            sent: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
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
    handleSubmit(e){
        e.preventDefault();
        document.getElementById("contactform").submit();
        if(this.state.disabled === false)
            this.setState({sent: true});
    }
    render(){
        
        const { classes } = this.props;
        return(
            <div>
            <Typography align="center" variant="title" className={classes.paperTitle}>Get in touch! {this.state.message}</Typography>
            <Grow in={this.state.mounted} timeout={1000}>
                <Paper className={classes.root} elevation={4}>
                
                {this.state.sent ? <Grow in timeout={500}><Typography align="center" variant="display1">Message sent :)</Typography></Grow> : 
                <div><form className={classes.formStyle} id="contactform" onSubmit={this.handleSubmit} autoComplete="off" method="POST" action="/contact/submit">
                
                <TextField
                    id="name"
                    label="Name"
                    name="name"
                    className={classes.textField}
                    value={this.state.name}
                    onChange={this.handleChange('name')}
                    margin="normal"
                    required
                    />
                <br/>
                <TextField
                id="email"
                name="email"
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
                id="msg"
                name="msg"
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
        </div>}
                </Paper>
            </Grow>
            </div>
        )
    }
}

export default withStyles(styles)(Contact);