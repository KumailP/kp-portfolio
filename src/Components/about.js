import "../App.css";
import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Grow from "@material-ui/core/Grow";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typed from "typed.js";
import { Link } from "react-router-dom";
import Hidden from "@material-ui/core/Hidden";
import FontAwesome from "react-fontawesome";
import IconButton from "@material-ui/core/IconButton";
import classNames from "classnames";

var options = {
  strings: [
    "{ <strong>JavaScript Developer</strong> }",
    "computer science junior",
    "machine learning enthusiast",
    "CS:GO player"
  ],
  typeSpeed: 35,
  backSpeed: 20,
  loop: true
};
// var typed = new Typed("#typedcontent", options);

const styles = theme => ({
  avatar: {
    width: "200px",
    height: "200px",
    margin: "0 auto"
  },
  paperStyle: {
    paddingTop: "20px"
  },
  socialLinks: {
    color: "rgba(36,97,125,1)"
  },
  hiddenStyle: {
    width: "100%",
    textAlign: "center"
  },
  socialLinkA: {
    textAlign: "center",
    textDecoration: "none"
  }
});

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mounted: false
    };
  }
  componentDidMount() {
    this.setState({ mounted: true });

    this.typed = new Typed("#typedcontent", options);
    if (document.body.offsetWidth > 657)
      document.getElementById("newlineHidden").style.display = "none";
    else document.getElementById("mainTyped").style.fontSize = "18px";
  }
  componentWillUnmount() {
    if (typeof this.typed !== undefined) {
      this.typed.destroy();
    }
  }
  render() {
    const { classes } = this.props;
    return (
      <Grow in={this.state.mounted} timeout={500}>
        <Paper elevation={4} className={classes.paperStyle}>
          <Avatar
            alt="Kumail Pirzada"
            src="/images/self.png"
            className={classes.avatar}
          />
          <br />
          <Typography align="center" variant="title">
            Ahmed Kumail Pirzada
          </Typography>
          <br />
          <Typography align="center" variant="headline" id="mainTyped">
            I am a <br id="newlineHidden" />
            <span id="typedcontent" />
          </Typography>
          <br />
          <Typography align="center" variant="body1" style={{ margin: "10px" }}>
            Hello! I'm Kumail. I make websites and stuff.<br />Is there
            something I can do for you? <Link to="/contact">Let me know.</Link>
          </Typography>
          <br />
          <Hidden smUp>
            <div className={classes.hiddenStyle}>
              <a
                target="_blank"
                href="https://twitter.com/akumailp"
                rel="noopener noreferrer"
                className={classes.socialLinkA}
              >
                <IconButton
                  className={classNames(classes.button, classes.socialLinks)}
                  aria-label="Twitter"
                >
                  <FontAwesome className="fab fa-twitter" name="Twitter" />
                </IconButton>
              </a>

              <a
                target="_blank"
                href="https://github.com/KumailP"
                rel="noopener noreferrer"
                className={classes.socialLinkA}
              >
                <IconButton
                  color="default"
                  className={classNames(classes.button, classes.socialLinks)}
                  aria-label="Github"
                >
                  <FontAwesome className="fab fa-github" name="Github" />
                </IconButton>
              </a>

              <a
                target="_blank"
                href="https://www.linkedin.com/in/kumail-pirzada/"
                rel="noopener noreferrer"
                className={classes.socialLinkA}
              >
                <IconButton
                  className={classNames(classes.button, classes.socialLinks)}
                  aria-label="LinkedIn"
                >
                  <FontAwesome className="fab fa-linkedin" name="LinkedIn" />
                </IconButton>
              </a>
            </div>
          </Hidden>

          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="subheading">Education</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <List>
                <ListItem
                  button
                  component="a"
                  href="http://www.dsu.edu.pk/index.php/en/"
                  target="_blank"
                >
                  <Avatar
                    alt="DHA Suffa University"
                    src="images/education/dsu.jpg"
                  />
                  <ListItemText
                    primary="DHA Suffa University"
                    secondary="2016 – 2020 (BS Computer Science)"
                  />
                </ListItem>
                <ListItem
                  button
                  component="a"
                  href="https://www.ncr-cet.com/"
                  target="_blank"
                >
                  <Avatar
                    alt="NCR - College of Emerging Technologies"
                    src="images/education/ncr.jpg"
                  />
                  <ListItemText
                    primary="NCR - College of Emerging Technologies"
                    secondary="2014 – 2016 (Intermediate)"
                  />
                </ListItem>
                <ListItem
                  button
                  component="a"
                  href="https://www.beaconhouse.net/"
                  target="_blank"
                >
                  <Avatar
                    alt="Beaconhouse School System - Steel Town Branch"
                    src="images/education/bss.png"
                  />
                  <ListItemText
                    primary="Beaconhouse School System - Steel Town Branch"
                    secondary="2012 – 2014 (Matriculation)"
                  />
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
                  <ListItemText
                    primary="DSU Merit Scholarship"
                    secondary="2017"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="DSU Dean's Honor List x3"
                    secondary="2016 – 2017"
                  />
                </ListItem>
              </List>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="subheading">
                Courses & Certifications
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <List>
                <ListItem>
                  <ListItemText
                    primary="Andrew Ng's Machine Learning, Coursera"
                    secondary="2017"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="HarvardX Introduction to Computer Science (CS50x)"
                    secondary="2017"
                  />
                </ListItem>
              </List>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </Paper>
      </Grow>
    );
  }
}

export default withStyles(styles)(About);
