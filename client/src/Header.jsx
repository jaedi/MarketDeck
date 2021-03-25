import { AppBar, Link, Toolbar, Typography, Button, Container} from '@material-ui/core';
import React from 'react';
import {makeStyles } from '@material-ui/core/styles';
import MarketDeckLogo from './images/MarketDeckLogo.png';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
//import { SearchBar } from '@material-ui/core';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';



const useStyles = makeStyles((theme) => ({
    abRoot: {
      backgroundColor: "#F35D08",
      boxShadow: "none"
    },
    logo: {
        position: 'relative',
        maxWidth: 150,
        marginRight: '10px',
        width: 'auto'
    },
    // search: {
    //     // position: 'relative',
    //     backgroundColor: "#F3F3F3",
    //     marginRight: theme.spacing(2),
    //     marginLeft: 0,
    //     //width: '100%',
    //     [theme.breakpoints.up('sm')]: {
    //       marginLeft: theme.spacing(3),
    //       width: 'auto'
    //     },
        
          
    // },
    searchInput: {
      height: '100%',
      width: '500px',
      backgroundColor:'#F3F3F3',

    },
    searchIcon: {
        height: '100%',
        // position: 'absolute',
        width:'5px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#C4C4C4',
        borderRadius: '0',
        border: 'none'
      },
      flexAndCenter: {
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        marginLeft: "30px"
    },
    cartButton: {
      color: "#fff"
    }
    
  }));



const Header = () => {
    const classes = useStyles();
    
    return (
       
    <AppBar position="static" classes={{ 
        root: classes.abRoot }}>
        {/* <Toolbar>
            <Typography><Link href="#"><img src={MarketDeckLogo} alt="MarketDeckLogo" className={classes.logo} /></Link></Typography>
            <div className={classes.search}>
            <div className={classes.searchIcon}>
              <Button><SearchIcon /> </Button>
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'arial-label': 'search' }}
            />
          </div>
        </Toolbar> */}
        {/* <Container display="flex" direction="row" justify="flex-end" alignItems="center" className={classes.topHeaderLinks}>
        </Container> */}

    <Container>
    <Toolbar variant="dense">
      <Typography>
        <Link href="#">
          <img src={MarketDeckLogo} alt="MarketDeckLogo" className={classes.logo} />
        </Link>
        </Typography>
      <div className={classes.flexAndCenter} style={{marginLeft: '10px'}}>
       
        
  
        <InputBase
                placeholder="Search…"
                className={
                  classes.searchInput
                }
                inputProps={{ 'arial-label': 'search' }}
              />
        <Button className={classes.searchIcon}><SearchIcon /> </Button>
        
        <Button href="#" className={classes.cartButton}>
          <ShoppingCartOutlinedIcon></ShoppingCartOutlinedIcon>
        </Button>
        
        <Link variant="h6" color="inherit">
          Sell On MarketDeck
        </Link>
      </div>
    </Toolbar>
    </Container>
    </AppBar>
    );
};

export default Header;