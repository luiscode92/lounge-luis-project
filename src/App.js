import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import data from './mockData.json'
import Desks from './Desks'
import Rooms from './Rooms'
import { 
  AppBar,
  Toolbar, 
  TextField,
  Paper,
  InputBase,
  
} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from "@material-ui/icons/Search";
import { makeStyles } from "@material-ui/core/styles";

class App extends Component {
  constructor() {
    super();
    this.state = {
      desks: data.desks,
      rooms: data.rooms,
      filter: null
    }
  }
  render() {
    const handleSearchChange = (e) => {
      this.setState({filter : e.target.value});
    };

    const classes = makeStyles({
      searchContainer: {
        display: "flex",
        paddingLeft: "20px",
        paddingRight: "20px",
        marginTop: "5px",
        marginBottom: "5px",
        borderRadius: 25
      },
      searchIcon: {
        alignSelf: "flex-end",
        marginBottom: "5px",
      },
      searchInput: {
        width: "200px",
        margin: "5px",
      },
    })
  return (
    <>
      <AppBar position="static" color="transparent" elevation={0} className="appbar">
        <Toolbar>
        <div className={classes.searchContainer}>
          <Paper component="form" className={classes.root} variant="outlined" square={false} >
            <IconButton type="submit" className={classes.iconButton} aria-label="search">
              <SearchIcon />
            </IconButton>
            <InputBase
              className={classes.searchInput}
              placeholder="Search "
              inputProps={{ 'aria-label': 'search google maps' }}
            />
          </Paper>
        </div>
        </Toolbar>
      </AppBar>

      <div className="main">
        <Desks desks={this.state.desks}></Desks>
        <Rooms rooms={this.state.rooms}></Rooms>
      </div>
    </>
  );
}
}

export default App;
