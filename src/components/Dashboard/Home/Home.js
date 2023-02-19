import React, { useState } from 'react';
import './Home.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Rating from '@mui/material/Rating';
import img from '../../../images/g835SLOHDG-F-1-removebg-preview 1.png';
import Products from './Products/Products';

const Home = () => {
  const [value, setValue] = useState(5);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={8}>
              <Box className="pd-card">
                <img src={img} alt="" />
                <Box>
                  <h2>Beats Studio3 Wireless Headphone</h2>
                  <Box className="flex-item">
                    <Rating name="read-only" value={value} readOnly />
                    <span>( 200+ Reviews )</span>
                  </Box>
                  <p>
                    Ergonomic or cupe with on-oor controls up to 22 hours of
                    tening time. Apple Wi crip & Closs{' '}
                  </p>
                  <p>Price $ 450.55</p>
                  <Box className="flex-item"></Box>
                  <Box>
                    <button></button>
                    <button className="add-btn">Add to cart</button>
                    <button className='buy-btn'>Buy Now</button>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}></Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} style={{ margin: '50px 0px' }}>
          <Grid container spacing={2}>
            {/* products */}
            <Grid item xs={12} md={8}>
              <Products />
            </Grid>
            {/* Daily Deals */}
            <Grid item xs={12} md={4}></Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
