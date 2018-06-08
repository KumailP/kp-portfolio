import React from 'react';
import Paper from '@material-ui/core/Paper';
// import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Typography from '@material-ui/core/Typography';
import tileData from './data/projectsData';
import Grow from '@material-ui/core/Grow';

const styles = theme => ({
    textPad: {
        paddingBottom: '10px'
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
            <div>
            <Typography align="center" variant="title" className={classes.textPad}>Some of my projects</Typography>
                <Paper className={classes.root} elevation={4}>
                <GridList cellHeight={180} className={classes.gridList}>
                    <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                    
                    </GridListTile>
                    {tileData.map(function(tile, i){
                   return <Grow in={true} timeout={i ? (i*500) : (200)}>
                    <GridListTile key={tile.img}>
                        <img src={tile.img} alt={tile.title} />
                        <GridListTileBar
                        title={tile.title}
                        subtitle={<span>{tile.desc}</span>} cols={tile.cols || 1}
                        
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