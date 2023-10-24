import { FC, useState } from 'react';
import classes from './Counter.module.scss'

export const Counter: FC = () => {
  const [count, setCount] = useState(0)


  return (
    <div>
      <h1>{count}</h1>
      <button className={classes.button} onClick={() => setCount(count + 1)}>увеличить</button>
    </div>
  );
};
