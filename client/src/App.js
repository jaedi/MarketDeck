
import './App.css';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Header from './Header';
import HLink from './HLink'

function App() {
  return (
    <Grid container direction = "column">
      <Grid item xs={0} sm={2}></Grid>
    <Grid item xs={12} sm={12}> 
      <HLink />
      </Grid>
      <Grid item xs={0} sm={2}></Grid>
    <Grid item>
      <Header />
    </Grid>
    <Grid item container spacing={3}>
        <Grid item xs={0} sm={2}></Grid>
        <Grid  item xs={12} sm={8} >
          CarouselCarouselCarouselCarousel
          Carousel
          Carousel
          Carousel
          Carousel
          Carousel

        </Grid>
        <Grid item xs={0} sm={2}></Grid>
    </Grid>

    </Grid>
  );
}

export default App;
