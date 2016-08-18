import React from 'react';
import { Link } from 'react-router';
import classes from './HomeView.scss';

export const HomeView = () => (
  <div className={classes.homeView}>
    <h1>React Project Boilerplate</h1>
    <Link to="/create-demo">Create new demo</Link>
  </div>
);

export default HomeView;
