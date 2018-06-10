import React from 'react';
import Paper from '@material-ui/core/Paper';
// import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Typography from '@material-ui/core/Typography';
import projectData from './data/projectsData';
import Grow from '@material-ui/core/Grow';

const styles = theme => ({
    paperTitle: {
        paddingBottom: '10px',
        fontFamily: 'Rancho, cursive',
        fontSize: '35px'
    },
    gridList: {
      // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
      transform: 'translateZ(0)'
    }
  });

class Projects extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            mounted: false
        }
    }
    componentDidMount(){
        this.originalTitle = document.title;
        document.title = this.originalTitle + " - Portfolio";
        this.setState({mounted: true})
    }
    componentWillUnmount(){
        document.title = this.originalTitle;
    }
    render(){
        
        const { classes } = this.props;
        
        return(
            <div className={classes.root}>
            <Typography align="center" variant="title" className={classes.paperTitle}>Some of my projects</Typography>
                <Paper className={classes.root} elevation={4}>
                <GridList cellHeight={220} spacing={0} className={classes.gridList} cols={2}>
                    {projectData.map(function(tile, i){
                    let img = "images/projects/" + tile.title.trim().replace(/[^a-zA-Z0-9]/g,'_').toLowerCase(); + ".png";
                    return <Grow in={true} timeout={i ? (i*500) : (200)} key={tile.img} >
                                <GridListTile>
                                    <img src="images/projects/{tile.img}" alt={tile.title} />
                                    <GridListTileBar
                                    title={tile.title}
                                    subtitle={<span>{tile.desc}</span>}
                                    />
                                </GridListTile>
                        </Grow>
                    })}
                </GridList>
                </Paper>
            </div>
        )
    }
}

export default withStyles(styles)(Projects);