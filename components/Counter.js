// src/Counter.js
import React from 'react';
import { observer } from 'mobx-react-lite';
import store from '../store/store';

const Counter = observer(() => {
  return (
    <div>
      <h2>Counter: {store.count}</h2>
      <button onClick={store.increment}>Increment</button>
      <button onClick={store.decrement}>Decrement</button>
    </div>
  );
});

export default Counter;
