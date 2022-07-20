import React from 'react';
import { Box, Toolbar, IconButton, Typography } from '@mui/material'
import AppBar from '@mui/material/AppBar';
import { IMenuAppBarProps } from '../interfaces/dataInterfaces';

export const MenuAppBar = (props: IMenuAppBarProps) => {
  const { name } = props
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
              {name}
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    );
  }