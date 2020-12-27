import React,  { Component} from 'react';
import { 
    AppBar,
    Toolbar, 
    Grid,
    Card,
    CardContent,
    CardMedia,
    CardHeader,
    CircularProgress,
    Typography,
    Zoom
    
} from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import './App.css'




export default class Rooms extends Component {
    
    render () {
        
        return (
            <>
            <div>
                <Typography variant="h4" className="title">Rooms</Typography>
                <div className="rooms-content">
                {this.props.rooms.map(room => (
                    <Grid container xs>
                        <Grid item>
                            <Card elevation={0}>
                                <CardMedia
                                    className="media"
                                    image={room.image}
                                />
                                <CardContent>
                                    <Typography variant="subtitle1" className="title">{room.room_name}</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>       
                ))}
                </div>
            </div>
            </>
        )
    }
}