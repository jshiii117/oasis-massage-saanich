import React from 'react';
import { AppBar, Typography, Toolbar, Box, Grid, List, ListItem, ListItemText, ListItemIcon, Button, Card, CardActionArea, CardMedia, CardContent } from '@mui/material';
import styled from 'styled-components';
import theme from './theme';

const OptimaFont = styled('p')({
    fontFamily: 'OptimaLight',
    lineHeight: 1,
    margin: 0
});

const OptimaTypography = styled(Typography)({
    fontFamily: theme.typography.fontFamily.title,
    lineHeight: 1,
    margin: 0,

})

export { OptimaTypography }
