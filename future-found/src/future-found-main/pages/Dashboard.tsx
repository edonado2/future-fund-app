import React from 'react';
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
} from '@mui/material';
import { Pie } from 'react-chartjs-2';
import { Home, AccountBalance, TrendingUp, Info } from '@mui/icons-material';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
// Registering Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

// Sidebar navigation items
const sidebarItems = [
  { text: 'Home', icon: <Home /> },
  { text: 'Portfolio', icon: <AccountBalance /> },
  { text: 'Trends', icon: <TrendingUp /> },
  { text: 'Advice', icon: <Info /> },
];

const drawerWidth = 240;

// Sample Pie chart data (replace with real data)
const pieData = {
  labels: ['Stocks', 'Bonds', 'Real Estate', 'Cash'],
  datasets: [
    {
      label: 'Asset Allocation',
      data: [40, 20, 25, 15],
      backgroundColor: ['#42A5F5', '#66BB6A', '#FFA726', '#FF7043'],
    },
  ],
};

export const Dashboard: React.FC = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      {/* Sidebar */}
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <List>
          {sidebarItems.map((item, index) => (
            <ListItem key={index}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>

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
            <Card>
              <CardContent>
                <Typography variant="h6">Portfolio Asset Allocation</Typography>
                <Box sx={{ width: '100%', height: '300px' }}>
                  <Pie data={pieData} />
                </Box>
              </CardContent>
            </Card>
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
