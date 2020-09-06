import React from 'react';
import styled from 'styled-components';
import { formatToTwoDigits } from '../helpers/format-to-two-digits';

interface Props {
  time: number;
}

const StyledTimeDisplay = styled.div`
  font-size: 2em;
  padding: 5px;
  color: #212121;
`;
const TimeDisplay: React.FC<Props> = ({ time }: Props) => {
  const milliseconds = time % 1000;
  const totalSeconds = (time - milliseconds) / 1000;
  const seconds = totalSeconds % 60;
  const totalMinutes = (totalSeconds - seconds) / 60;
  const minutes = totalMinutes % 60;

  return (
    <>
      <StyledTimeDisplay>{`${formatToTwoDigits(minutes)}:${formatToTwoDigits(
        seconds
      )}.${milliseconds || '000'}`}</StyledTimeDisplay>
    </>
  );
};

export default TimeDisplay;
