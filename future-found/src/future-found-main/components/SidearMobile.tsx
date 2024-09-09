import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { sidebarItems } from '../data/sidebarItems';


interface SidearMobileProps {
  open: boolean;
  handleDrawerToggle: () => void;
}

export const SidearMobile: React.FC<SidearMobileProps> = ({ open, handleDrawerToggle }) => {
  const drawerWidth = 240;

  return (
    <>
      {/* Temporary drawer for mobile */}
      <Drawer
        variant="temporary"
        open={open}
        onClose={handleDrawerToggle}
        sx={{
          display: { xs: 'block', sm: 'none' },
          [`& .MuiDrawer-paper`]: { width: drawerWidth },
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
