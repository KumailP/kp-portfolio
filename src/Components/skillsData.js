import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import LanguageIcon from '@material-ui/icons/Language';
import EditIcon from '@material-ui/icons/Edit';
import PhotoSizeIcon from '@material-ui/icons/PhotoSizeSelectActual';

const iconMargin = {
    margin: '4px'
}


export const languages = (
    <div>
    <Tooltip id="tooltip-icon" title="HTML">
        <IconButton aria-label="Twitter" style={iconMargin}>
            <Avatar alt="HTML" src="http://icons.iconarchive.com/icons/cornmanthe3rd/plex/256/Other-html-5-icon.png"/>
        </IconButton>
    </Tooltip>

    <Tooltip id="tooltip-icon" title="CSS">
        <IconButton aria-label="CSS" style={iconMargin}>
            <Avatar alt="CSS" src="https://image.ibb.co/mDL4ck/css3.png" />
        </IconButton>
    </Tooltip>

    <Tooltip id="tooltip-icon" title="JavaScript">
        <IconButton aria-label="JavaScript" style={iconMargin}>
            <Avatar alt="JavaScript" src="https://preview.ibb.co/fMieA5/javascript.png" />
        </IconButton>
    </Tooltip>
    <Tooltip id="tooltip-icon" title="C">
        <IconButton aria-label="C" style={iconMargin}>
            <Avatar alt="C" src="https://thumb.ibb.co/nr9aiQ/C_language_sh_600x600.png"/>
        </IconButton>
    </Tooltip>

    <Tooltip id="tooltip-icon" title="C++">
        <IconButton aria-label="C++" style={iconMargin}>
            <Avatar alt="C++" src="https://image.ibb.co/dhNmOQ/cpp.png" />
        </IconButton>
    </Tooltip>


    <Tooltip id="tooltip-icon" title="C#">
        <IconButton aria-label="C#" style={iconMargin}>
            <Avatar alt="C#" src="http://innovativeteams.net/wp-content/uploads/2017/12/csharp.png" />
        </IconButton>
    </Tooltip>

    </div>
)



export const frameworkLibrary = (
    <div>

    <Tooltip id="tooltip-icon" title="ExpressJS">
        <IconButton aria-label="ExpressJS" style={iconMargin}>
            <Avatar alt="ExpressJS" src="https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/359/landscape/expressjslogo.png" />
        </IconButton>
    </Tooltip>  

    <Tooltip id="tooltip-icon" title="ReactJS">
        <IconButton aria-label="ReactJS" style={iconMargin}>
            <Avatar alt="ReactJS" src="data:image/png;base64,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" />
        </IconButton>
    </Tooltip>  


    

    <Tooltip id="tooltip-icon" title="NodeJS">
        <IconButton aria-label="NodeJS" style={iconMargin}>
            <Avatar alt="NodeJS" src="https://image.ibb.co/gAAFiQ/nodejs.png" />
        </IconButton>
    </Tooltip>

    
    <Tooltip id="tooltip-icon" title="jQuery">
        <IconButton aria-label="jQuery" style={iconMargin}>
            <Avatar alt="jQuery" src="https://image.ibb.co/m9YCV5/jquery.png" />
        </IconButton>
    </Tooltip>

    </div>
)


export const devTools = (
    <div>
    <Tooltip title="Github">
        <IconButton aria-label="Github" style={iconMargin}>
            <Avatar alt="Github" src="https://image.ibb.co/kxxjck/github.png" />
        </IconButton>
    </Tooltip>

    
    <Tooltip title="NPM">
        <IconButton aria-label="NPM" style={iconMargin}>
            <Avatar alt="NPM" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF6m4oGLOX6fwd26f018WRjUm4HXYGJEcGe20xkPKDDWPTdlOx" />
        </IconButton>
    </Tooltip>

    <Tooltip title="Sass">
        <IconButton aria-label="Sass" style={iconMargin}>
            <Avatar alt="Sass" src="https://image.ibb.co/k5Wcxk/sass.png" />
        </IconButton>
    </Tooltip>
    
    <Tooltip title="Babel">
        <IconButton aria-label="Babel" style={iconMargin}>
            <Avatar alt="Babel" src="https://cdn-images-1.medium.com/max/2000/1*XmHUL5DeySv_dGmvbPqdDQ.png" />
        </IconButton>
    </Tooltip>
    <Tooltip title="Webpack">
        <IconButton aria-label="Webpack" style={iconMargin}>
            <Avatar alt="Webpack" src="https://raw.githubusercontent.com/webpack/media/master/logo/icon-square-big.png" />
        </IconButton>
    </Tooltip>
    </div>
)
  
export const other = (
    <div>
    
    <Tooltip id="tooltip-icon" title="MySQL">
        <IconButton aria-label="MySQL" style={iconMargin}>
            <Avatar alt="MySQL" src="https://i.pinimg.com/originals/96/b6/6f/96b66fc862b74edd5ad9e89cc7ccdbb0.png" />
        </IconButton>
    </Tooltip>

    <Tooltip id="tooltip-icon" title="MongoDB">
        <IconButton aria-label="MongoDB" style={iconMargin}>
            <Avatar alt="MongoDB" src="https://image.ibb.co/eioeA5/mongodb.png" />
        </IconButton>
    </Tooltip>

    <Tooltip id="tooltip-icon" title="Photoshop">
        <IconButton aria-label="Photoshop" style={iconMargin}>
            <Avatar alt="Photoshop" src="https://image.ibb.co/b04mq5/photoshop.png" />
        </IconButton>
    </Tooltip>
    </div>
)

export const basicView = (
    <div>
    <ListItem>
                <ListItemIcon>
                    <LanguageIcon />
                </ListItemIcon>
                <ListItemText primary="Web Development" />
                </ListItem>
                
                
                <ListItem>
                <ListItemIcon>
                    <PhotoSizeIcon />
                </ListItemIcon>
                <ListItemText primary="Graphic Design" />
                </ListItem>
                
                <ListItem>
                <ListItemIcon>
                    <EditIcon />
                </ListItemIcon>
                <ListItemText primary="Content Writing" />
                </ListItem>

    </div>
)
  