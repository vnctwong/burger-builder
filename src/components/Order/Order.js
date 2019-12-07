import React from 'react';

import classes from './Order.css';

const order = (props) => (
  <div className={classes.order}>
    <p>Ingredients: Salad (1) </p>
    <p>Price: <strong>5.55</strong> </p>
  </div>
);

export default order;
