import React, { useState, useEffect } from 'react';

import Pixel from './Pixel';

type Props = {
  data: number[][][];
  size: 'small' | 'medium' | 'large';
};

const SIZE = {
  small: 64,
  medium: 128,
  large: 256,
};

const Pixels = ({ data, size }: Props) => {
  const [animation, setAnimation] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setAnimation(prevState => (prevState === 0 ? 1 : 0));
    }, 500);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div>
      {data[animation].map((row, rowIndex) => (
        <div key={rowIndex} style={{ display: 'flex' }}>
          {row.map((column, columnIndex) => (
            <Pixel
              key={columnIndex}
              value={data[animation][rowIndex][columnIndex]}
              size={SIZE[size] / 16}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Pixels;
