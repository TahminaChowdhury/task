import React, { useState } from 'react';
import './Home.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Rating from '@mui/material/Rating';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import img from '../../images/g835SLOHDG-F-1-removebg-preview 1.png';
import Products from './Products/Products';

const Home = () => {
  const [value, setValue] = useState(5);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container>
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={12} md={9}>
              <Box className="pd-card">
                <img src={img} alt="" />
                <Box>
                  <h2 className="pd-title">Beats Studio3 Wireless Headphone</h2>
                  <Box className="ratings">
                    <Rating name="read-only" value={value} readOnly />
                    <span style={{ marginLeft: '10px' }}>( 200+ Reviews )</span>
                  </Box>
                  <p className="description">
                    Ergonomic or cupe with on-oor controls up to 22 hours of
                    tening time. Apple Wi crip & Closs{' '}
                  </p>
                  <p className="price">Price $ 450.55</p>
                  <Box className="btns" style={{marginBottom: '10px'}}>
                    <span>Color :</span>
                    <button className='greent-btn'></button>
                    <button className='paste-btn'></button>
                    <button className='blue-btn'></button>
                    <button className='purple-btn'></button>
                  </Box>
                  <Box className='btns'>
                    <button className='wishlist-btn'><FavoriteBorderIcon/></button>
                    <button className="add-btn">Add to cart</button>
                    <button className="buy-btn">Buy Now</button>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={3}></Grid>
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
