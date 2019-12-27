import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import cloneDeep from 'lodash.clonedeep';

import Pixel from './Pixel';

type Props = {
  onSave: (dataArray: number[][][][]) => void;
};

const SIZE = {
  small: 64,
  medium: 128,
  large: 256,
};

const INITIAL_DATA = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

const DATA = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

const Editor = ({ onSave }: Props) => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const listener = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', listener);
    return () => {
      window.removeEventListener('resize', listener);
    };
  }, []);

  const [data, setData] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]);
  console.log(JSON.stringify(data));
  return (
    <>
      <Wrapper width={width}>
        {data.map((row, rowIndex) => (
          <div key={rowIndex} style={{ display: 'flex' }}>
            {row.map((column, columnIndex) => (
              <PixelWrapper
                key={columnIndex}
                onClick={() =>
                  setData(prevData => {
                    const newData = [...prevData];
                    newData[rowIndex][columnIndex] =
                      prevData[rowIndex][columnIndex] === 1 ? 0 : 1;
                    console.log(
                      prevData[rowIndex][columnIndex],
                      newData[rowIndex][columnIndex]
                    );

                    return newData;
                  })
                }
              >
                <Pixel
                  value={data[rowIndex][columnIndex]}
                  size={(width - 20) / 24}
                />
              </PixelWrapper>
            ))}
          </div>
        ))}
      </Wrapper>
      {/* <button
        onClick={() =>
          onSave((prevDataArray: number[][][][]) => cloneDeep(prevDataArray))
        }
      >
        Save
      </button> */}
      <Buttons>
        <Reset onClick={() => setData(cloneDeep(INITIAL_DATA))}>
          <div></div>
        </Reset>
        <Reset onClick={() => setData(cloneDeep(DATA))}>
          <div></div>
        </Reset>
        <Reset onClick={() => setData(cloneDeep(DATA))}>
          <div></div>
        </Reset>
      </Buttons>
    </>
  );
};

const Wrapper = styled.div<{ width: number }>`
  border: 1px solid #fff;
  width: ${({ width }) => width - 20}px;
  /* width: 386px; */
  /* width: ${({ width }) => width}px; */
  margin: 10px;
`;

const PixelWrapper = styled.div`
  cursor: pointer;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: center;
  margin: 30px;

  button {
    margin: 0 10px;
  }
`;

const Reset = styled.button`
  box-shadow: inset 0px 1px 0px 0px #cf866c;
  background: linear-gradient(to bottom, #d0451b 5%, #bc3315 100%);
  background-color: #d0451b;
  border-radius: 50%;
  border: 1px solid #942911;
  display: flex;
  align-items: flex-end;
  cursor: pointer;
  padding: 4px;
  position: relative;

  div {
    content: '';
    display: block;
    box-shadow: inset 0px 1px 0px 0px #cf866c, 0px 1px 0px 0px #000;
    background: linear-gradient(to bottom, #d0451b 5%, #bc3315 100%);
    background-color: #d0451b;
    border-radius: 50%;
    border: 1px solid #942911;
    display: inline-block;
    width: 32px;
    height: 32px;
    text-decoration: none;

    &:active {
      box-shadow: inset 0px 1px 0px 0px #cf866c, 0px 1px 0px 0px #000,
        inset 0px 1px 0px 0px #000;
    }

    &:hover {
      background: linear-gradient(to bottom, #bc3315 5%, #d0451b 100%);
      background-color: #bc3315;
    }
  }
`;

export default Editor;
