import React, { useState } from 'react';
import { Timer } from '../components/timer';
import styled from 'styled-components';
import TotalTimer from '../components/total-timer';

const TimerAppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

function TimerModule() {
  const [timerOneTime, setTimerOneTime] = useState(0);
  const [timerTwoTime, setTimerTwoTime] = useState(0);
  const [timerThreeTime, setTimerThreeTime] = useState(0);

  return (
    <div className='App'>
      <TimerAppContainer>
        <TotalTimer time={timerOneTime + timerTwoTime + timerThreeTime} />
        <div>
          <Timer
            interval={10 * 1000}
            name='Timer 1'
            updateTotalTime={setTimerOneTime}
          />
          <Timer
            interval={1 * 1000}
            name='Timer 2'
            updateTotalTime={setTimerTwoTime}
          />
          <Timer
            interval={0.1 * 1000}
            name='Timer 3'
            updateTotalTime={setTimerThreeTime}
          />
        </div>
      </TimerAppContainer>
    </div>
  );
}

export default TimerModule;
