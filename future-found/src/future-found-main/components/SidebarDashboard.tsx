import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { sidebarItems } from '../data/sidebarItems';

interface SidebarDashboardProps {
  open: boolean;
  handleDrawerToggle: () => void;
}

export const SidebarDashboard: React.FC<SidebarDashboardProps> = ({ open, handleDrawerToggle }) => {
  const drawerWidth = 240;

  return (
    <>
      {/* Sidebar */}
      <Drawer
        variant="permanent"
        open={open}
        onClose={handleDrawerToggle}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box', padding: 3},
          display: { xs: 'none', sm: 'block' },
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
    </>
  );
};
