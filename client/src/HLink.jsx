import React from 'react';
import {Link, AppBar, Container } from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import 'fontsource-roboto';


const useStyles = makeStyles(() => ({
    abRoot: {
      backgroundColor: "#E44E07",
      boxShadow: "none",
      height: "35px",

    },

   
    topHeaderLinks: {
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center"
    },
    topHeaderLink: {
        marginLeft: "15px",
        color: "#fff"
    },
    flexAndCenter: {
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        marginLeft: "30px"
    },
    headerIcon: {
        height: "20px",
        color: "#fff"
        
    },
    link: {
        color: "#FFFFFF",
        "&:hover": {
            color: "#D0D0D0"
        },
       padding: "8px"
    },
  
    
  }));


const HLink = () => {
    const classes = useStyles();
    return (
        <AppBar position="static"  classes={{ 
            root: classes.abRoot }}> 

            <Container display="flex" direction="row" justify="flex-end" alignItems="center" className={classes.topHeaderLinks}>
                <div className={classes.flexAndCenter}>
                    <label className={classes.label}>Follow Us on</label>
                    
                    <Link href="#" className={classes.topHeaderLink}>
                    <FacebookIcon className={classes.headerIcon} />
                    </Link>
                    <Link href="#" color="inherit" className={classes.topHeaderLink}>
                    <TwitterIcon className={classes.headerIcon} />
                    </Link>
                    <Link href="#" variant="body2" className={classes.topHeaderLink}>
                        <InstagramIcon className={classes.headerIcon} />
                    </Link>
                </div>
                <div className={classes.flexAndCenter}>
                    <Link underline="none" href="#" variant="body2" className={classes.link}>
                        {'SIGN UP'}   
                    </Link> 
                    
                    <Link underline="none" href="#" variant="body2" className={classes.link}>
                         {'LOGIN'}
                    </Link>
                </div>

            </Container>


        {/* <Grid container display="flex" direction="row" justify="flex-end" alignItems="center">    
           
        </Grid> */}


            


    </AppBar>
    
    );
};

export default HLink;