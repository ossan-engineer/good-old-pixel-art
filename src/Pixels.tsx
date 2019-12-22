import React from 'react';

import Pixel from './Pixel';

interface Props {
  data: number[][];
  size: 'small' | 'medium' | 'large';
}

const SIZE = {
  small: 64,
  medium: 128,
  large: 256,
};

const Pixels = ({ data, size }: Props) => {
  return (
    <div>
      {data.map((row, rowIndex) => (
        <div style={{ display: 'flex' }}>
          {row.map((column, columnIndex) => (
            <Pixel value={data[rowIndex][columnIndex]} size={SIZE[size] / 16} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Pixels;
