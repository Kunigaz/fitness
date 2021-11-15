import React, { FunctionComponent } from 'react';
import { Button, Grid } from '@mui/material';
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { BodyFatCalculator } from './body-fat-calculator/BodyFatCalculator';

export const App = () => {
  return (
    <Grid container justifyContent={'center'}>
      <div>fitness app</div>
      <Link to='/fitness/body-fat-calculator'><Button>Body Fat Calculator</Button></Link>
      
    </Grid>
  )
};