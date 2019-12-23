import React from 'react';
import styled, { css } from 'styled-components';

type Props = {
  value: number;
  size: number;
};

const Pixel = ({ value, size }: Props) => {
  return <Wrapper value={value} size={size} />;
};

const Wrapper = styled.div<Props>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  margin: ${({ size }) => size / 4}px;
  border-radius: 50%;
  ${({ value, size }) =>
    value === 1 &&
    css`
      background-color: #fff;
      box-shadow: 0 0 ${(size / 3) * 2}px #fff, 0 0 ${size}px #f00,
        inset 0 0 ${(size / 3) * 2}px #fff, inset 0 0 ${size / 3}px #f00;
    `}
`;

export default Pixel;
