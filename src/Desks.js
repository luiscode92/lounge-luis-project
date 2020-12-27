import React,  { Component} from 'react';
import { 
    AppBar,
    Toolbar, 
    Grid,
    Card,
    CardContent,
    CardMedia,
    CardActions,
    CardHeader,
    CircularProgress,
    Typography,
    Zoom
    
} from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import './App.css'
import Modal from 'react-modal'






export default class Desks extends Component {
    constructor() {
        super();
        this.state = {
            desk: null,
            isShown: false
        }
    }
    openModal=(desk) => {
        this.setState({desk})
    }

    closeModal = () => {
        this.setState({desk:null})
    }
    handleBoxToggle = () => {
        this.setState({ isShown: !this.state.isShown })
        console.log("im hovered", this.state.isShown)
    
    };
    render () {
        
        const {desk} = this.state;     
 

        return (
            <>
            <div>
                <Typography variant="h4" className="title">Desks</Typography>
                <div className="desks-content">
                {this.props.desks.map(desk => (
                    <Grid container spacing={6}>
                        <Grid item >
                            <div
                             
                             >
                                <Card elevation={0}>
                                    <CardMedia
                                    className={desk.status === 'offline' ? "offlineMedia" : "media"}
                                    image={desk.image}
                                    onClick={()=>this.openModal(desk)}
                                    onMouseOver={this.handleBoxToggle}
                                    />
               
                                    <CardHeader
                                        avatar={
                                            <Avatar
                                                aria-label="recipe"
                                                src={desk.avatr}>
                                            </Avatar>
                                        }
                                        className={desk.status === 'offline' ? "offline" : ""}
                                        title={desk.name} 
                                        subheader={desk.status}
                                    />
        
                                </Card>
                                <div className={this.state.isShown ? "show" : "inner"} >
                                            <Button size="small" >chat</Button>
                                    </div>
                                </div>
                        </Grid>
                    </Grid>       
                ))}
                </div>
                {desk && (
                <Modal isOpen={true} onRequestClose={this.closeModal} className="modal">
                    <div >
                        <div className="modal-overlay" onClick={this.closeModal}/>
                            <span role="button" className="modal-close" aria-label="close" onClick={this.closeModal}>
                                    x
                            </span>
                            <div className="modal-body"><img src={desk.image}></img></div>
                    </div> 
                    
                </Modal>
                )}

                
            </div>
            </>
        )
    }
}