// This file is shared across the demos.

import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/Face';
import StarIcon from '@material-ui/icons/Star';
import SendIcon from '@material-ui/icons/ViewModule';
import MailIcon from '@material-ui/icons/Mail';
import { Link } from 'react-router-dom';

export const mailFolderListItems = (
  <div>
    
    <Link to="/" style={{textDecoration: 'none'}}>
      <ListItem button>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="About" />
      </ListItem>
    </Link>
    <Link to="/skills" style={{textDecoration: 'none'}}>
      <ListItem button>
        <ListItemIcon>
          <StarIcon />
        </ListItemIcon>
        <ListItemText primary="Skills" />
      </ListItem>
    </Link>
    <Link to="/projects" style={{textDecoration: 'none'}}>
      <ListItem button>
        <ListItemIcon>
          <SendIcon />
        </ListItemIcon>
        <ListItemText primary="Projects" />
      </ListItem>
    </Link>
    <Link to="/contact" style={{textDecoration: 'none'}}>
      <ListItem button>
        <ListItemIcon>
          <MailIcon />
        </ListItemIcon>
        <ListItemText primary="Contact" />
      </ListItem>
    </Link>
  </div>
);
