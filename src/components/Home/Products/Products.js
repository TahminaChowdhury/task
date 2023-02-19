import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import './Products.css';
import img from '../../../images/g835SLOHDG-F-1-removebg-preview 1.png';

const Products = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Box className="card">
            <Box>
              <img src={img} alt="" />
            </Box>
            <Box>
              <p>Original Beats Pro </p>
              <p className="price">Price $33.38</p>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Products;
