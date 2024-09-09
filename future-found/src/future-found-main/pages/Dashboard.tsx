import React, { useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  IconButton,
} from '@mui/material';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Menu } from '@mui/icons-material';
import { SidebarDashboard, SidearMobile, Graph } from '../components';

// Registering Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);
export const Dashboard: React.FC = () => {
  const [open, setOpen] = useState(false);
  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      {/* Hamburger menu button */}
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={handleDrawerToggle}
        sx={{ ml: 2, display: { sm: 'none' } }}
      >
        <Menu />
      </IconButton>

      {/* Sidebar for desktop */}
      <SidebarDashboard open={open} handleDrawerToggle={handleDrawerToggle} />
      {/* Sidebar for mobile */}
      <SidearMobile open={open} handleDrawerToggle={handleDrawerToggle} />
      
      {/* Main content area */}
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Financial Advisor Dashboard
        </Typography>

        <Grid container spacing={3}>
          {/* Financial Advice Cards */}
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">AI Financial Advice</Typography>
                <Typography variant="body2" color="textSecondary">
                  "Invest in low-cost index funds to maximize long-term returns with minimal fees."
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">AI Financial Advice</Typography>
                <Typography variant="body2" color="textSecondary">
                  "Diversify your portfolio across different asset classes to reduce risk."
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">AI Financial Advice</Typography>
                <Typography variant="body2" color="textSecondary">
                  "Rebalance your portfolio quarterly to maintain your desired risk level."
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Graph section */}
          <Grid item xs={12} md={8}>
            <Graph/>
          </Grid>
          {/* Action Button */}
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent sx={{ textAlign: 'center' }}>
                <Typography variant="h6">Ready for More Advice?</Typography>
                <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                  Get New Advice
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
