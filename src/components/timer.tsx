import React, { useState } from 'react';
import styled from 'styled-components';
import TimeDisplay from './time-display';
import Button from './button';

const TimerFrame = styled.div`
  display: inline-block;
  display: flex;
  width: 500px;
  flex-direction: column;

  margin: 20px;
  box-shadow: 0px 0px 11px 2px #cecece;
  border-radius: 13px;
  align-items: center;
`;

interface Props {
  interval?: number;
  name?: string;
  updateTotalTime: Function;
}

export const Timer: React.FC<Props> = ({
  interval = 10,
  name = 'Timer',
  updateTotalTime,
}: Props) => {
  const [intervalId, setIntervalId]: [any, Function] = useState(null);
  const [time, setTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const addTime = (add: any) => {
    setTime((prevTime) => {
      const newTime = prevTime + add;
      updateTotalTime(newTime);
      return newTime;
    });
  };

  const play = () => {
    setIntervalId(setInterval(() => addTime(interval), interval));
    setIsPlaying(true);
  };

  const pause = () => {
    clearInterval(intervalId);
    setIsPlaying(false);
  };

  const reset = () => {
    setTime(0);
    updateTotalTime(0);
  };

  return (
    <TimerFrame>
      <h2>{name}</h2>
      <TimeDisplay time={time} />
      <div>
        {isPlaying ? (
          <Button onClick={() => pause()}>Pause</Button>
        ) : (
          <Button onClick={() => play()}>Play</Button>
        )}
        <Button onClick={() => reset()}>Reset</Button>
      </div>
    </TimerFrame>
  );
};
