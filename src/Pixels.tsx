import React from 'react';
import styled from 'styled-components';

import Pixel from './Pixel';

interface Props {
  data: number[][];
  size: number;
}

const Pixels = ({ data, size }: Props) => {
  return (
    <Wrapper>
      {data.map((row, rowIndex) => (
        <div style={{ display: 'flex' }}>
          {row.map((column, columnIndex) => (
            <Pixel value={data[rowIndex][columnIndex]} size={size / 16} />
          ))}
        </div>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* transform: scale(0.2, 0.2); */
`;

export default Pixels;
