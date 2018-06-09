import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { mailFolderListItems } from './data/tileData';
import Main from './main';
import Avatar from '@material-ui/core/Avatar';
import Collapse from '@material-ui/core/Collapse';
import FontAwesome from 'react-fontawesome';
import Tooltip from '@material-ui/core/Tooltip';
import Hidden from '@material-ui/core/Hidden';
import '../App.css';


const drawerWidth = 200;

const styles = theme => ({
  root: {
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex'
  },
  appBar: {
    backgroundColor: 'rgba(36,97,125,1)',
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawerPaper: {
    height: '100%',
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing.unit * 7,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
  },
  avatar: {
    marginRight: '10px'
  },
  navHeader: {
    flex: 1,
    fontFamily: 'Rancho, cursive',
    fontSize: '25px',
  },
  socialLinks: {
    color: 'white',
  },
  socialLinkA: {
    textDecoration: 'none'
  }
});

class MiniDrawer extends React.Component {
  state = {
    open: false,
    fadeIn: false,
    mobileOpen: false,
  };

  componentDidMount(){
    this.setState({fadeIn: true})
    
  }


  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes, theme } = this.props;

    const drawer = (
      <div>
        <div className={classes.toolbar}>
              <IconButton onClick={this.handleDrawerClose}>
                {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
              </IconButton>
            </div>
            <Divider />
            <List>{mailFolderListItems}</List>
            <Divider />
      </div>
    );

    

    return (
      
      <Collapse in={this.state.fadeIn} timeout={1000} collapsedHeight="60px">
      
      <div className={classes.root}>
        <AppBar
          position="absolute"
          className={classNames(classes.appBar, this.state.open && classes.appBarShift)}>
          <Toolbar disableGutters={!this.state.open}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(classes.menuButton, this.state.open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Hidden smDown>
            <Avatar alt="Kumail Pirzada" src="images/self.jpg" className={classes.avatar} />
            </Hidden>
            <Typography variant="title" color="inherit" noWrap className={classes.navHeader}>
              Kumail Pirzada
            </Typography>


            <Hidden xsDown>
        <Tooltip id="tooltip-icon" title="Twitter">
        <a target="_blank" href="https://twitter.com/akumailp" rel="noopener noreferrer" className={classes.socialLinkA}>
        <IconButton className={classNames(classes.button, classes.socialLinks)} aria-label="Twitter">
          <FontAwesome
          className='fab fa-twitter'
          name='Twitter'/>
          </IconButton>
        </a>
        </Tooltip>

        <Tooltip id="tooltip-icon" title="Github">
        <a target="_blank" href="https://github.com/KumailP" rel="noopener noreferrer" className={classes.socialLinkA}>
        <IconButton color="default" className={classNames(classes.button, classes.socialLinks)} aria-label="Github">
          <FontAwesome
              className='fab fa-github'
              name='Github'/>
          </IconButton>
        </a>
        </Tooltip>


        <Tooltip id="tooltip-icon" title="LinkedIn">
        <a target="_blank" href="https://www.linkedin.com/in/kumail-pirzada/" rel="noopener noreferrer" className={classes.socialLinkA}>
        <IconButton className={classNames(classes.button, classes.socialLinks)} aria-label="LinkedIn">
          <FontAwesome
          className='fab fa-linkedin'
          name='LinkedIn'/>
          </IconButton>
        </a>
        </Tooltip>
        </Hidden>

          </Toolbar>
        </AppBar>

        <Drawer 
          variant="permanent"
          classes={{
            paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
          }}
          open={this.state.open}
        >
          {drawer}
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          {/* <Typography noWrap>{'About Page'}</Typography> */}
          <Main/>
        </main>
      </div>
      </Collapse>
    );
  }
}

MiniDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(MiniDrawer);
