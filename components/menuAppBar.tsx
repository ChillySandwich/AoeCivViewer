import React from 'react';
import { Box, Toolbar, IconButton, Typography } from '@mui/material'
import AppBar from '@mui/material/AppBar';

export const MenuAppBar = () => {
    return (
      <Box sx={{ flexGrow: 1, pb: 5 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Age of Empires II Civilizations
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    );
  }