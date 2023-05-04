import React, { useState, useEffect } from 'react';

function Counter({ initialValue, value }) {
  const [count, setCount] = useState(initialValue);

  const increment = () => {
    if (count >= value) {
      clearInterval(interval);
      return;
    }
    setCount(count + 1);
  };

  const interval = setInterval(increment, 20);

  useEffect(() => {
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>{count}</div>
  );
}

export default Counter;