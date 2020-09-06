import React from 'react';
import styled from 'styled-components';
import TimeDisplay from './time-display';

const TimerFrame = styled.div`
  display: inline-block;
  display: flex;
  width: 500px;
  flex-direction: column;
  margin: 20px;
  box-shadow: 0px 0px 11px 2px #cecece;
  border-radius: 13px;
  padding: 40px 10px;
  align-items: center;
`;

interface Props {
  time: number;
}

const TotalTimer: React.FC<Props> = ({ time }: Props) => {
  return (
    <TimerFrame>
      <h2>Total Timer</h2>
      <TimeDisplay time={time} />
    </TimerFrame>
  );
};

export default TotalTimer;
