import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1} backgroundColor="#f3ceb6">
        <Grid item xs={2} md={2} color="brown" >
          <Item>Icon</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>Search</Item>
        </Grid>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Grid item xs={4}>
          <Item>SignUp/Login</Item>
        </Grid>

        <Grid item xs={12}>
          <Item>Navbar
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>Home</Item>
        </Grid> 
        <Grid item xs={4}>
          <Item>About</Item>
        </Grid> 
        <Grid item xs={4} spacing={1}>
          <Item>Contact Us</Item>
        </Grid>
        <Grid item xs={3}>
          <Item>News</Item>
        </Grid>
        <Grid item xs={6}>
          <Item><img src="https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg" width={150}></img></Item>
        </Grid>
        <Grid item xs={3}>
          <Item>You may like</Item>
        </Grid>
        <Grid item xs={12}>
          <Item>Footer</Item>
        </Grid>
      </Grid>
    </Box>
  );
}
