import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Grid, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const HomePage: React.FC = () => {
    const navigate = useNavigate();
    const handleNavigate = (url: string)=>{
        navigate(url)
    }
  return (
    <div>
      {/* Navbar */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
          </Typography>
          <Button color="inherit" onClick={()=> handleNavigate("/signup")}>Sign Up</Button>
          <Button color="inherit" onClick={()=> handleNavigate("/login")}>Login</Button>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Box
        sx={{
          backgroundColor: '#3f51b5',
          color: 'white',
          padding: '100px 0',
          textAlign: 'center',
        }}
      >
        <Container>
          <Typography variant="h2" gutterBottom>
            Welcome to Financial Freedom
          </Typography>
          <Typography variant="h5" paragraph>
            Get expert advice to manage your finances and secure your future.
          </Typography>
          <Button variant="contained" color="secondary" size="large" onClick={()=> handleNavigate("/signup")}>
            Get Started
          </Button>
        </Container>
      </Box>

      {/* Features Section */}
      <Container sx={{ marginTop: '50px' }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: 'center', padding: '20px' }}>
              <Typography variant="h5" gutterBottom>
                Investment Planning
              </Typography>
              <Typography variant="body1">
                Grow your wealth with personalized investment strategies.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: 'center', padding: '20px' }}>
              <Typography variant="h5" gutterBottom>
                Risk Management
              </Typography>
              <Typography variant="body1">
                Protect your assets with smart financial risk management.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: 'center', padding: '20px' }}>
              <Typography variant="h5" gutterBottom>
                Tax Optimization
              </Typography>
              <Typography variant="body1">
                Maximize your savings with efficient tax planning.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Footer */}
      <Box
        sx={{

          padding: '20px 0',
          marginTop: '50px',
          textAlign: 'center',
        }}
      >
        <Container>
          <Typography variant="body2" color="textSecondary">
            © 2024 Financial Advisor App. All rights reserved.
          </Typography>
        </Container>
      </Box>
    </div>
  );
};
