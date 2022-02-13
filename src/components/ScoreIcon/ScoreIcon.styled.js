import styled from 'styled-components';

export const ScoreIconStyled = styled.svg`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;

  min-height: ${({ size }) => size}px;
  min-width: ${({ size }) => size}px;

  padding: 4px;

  border-radius: 50%;
  background-color: #fefefe;
`;

export const Group = styled.g`
  transform: rotate(-90deg);
  transform-origin: center;
`;

export const TrackCircle = styled.circle`
  r: 50%;
  cx: 50%;
  cy: 50%;
  fill: transparent;
  background-color: transparent;
  stroke: lightgrey;
  stroke-width: 6px;
  stroke-dasharray: ${({ r }) => Math.PI * r}px;
`;

export const ScoreCircle = styled(TrackCircle)`
  stroke: ${({ score }) =>
    score < 3.5 ? 'red' : score < 6.5 ? 'yellow' : 'green'};

  stroke-dashoffset: ${({ r, score }) =>
    score ? ((100 - score * 10) * Math.PI * r) / 100 : 0}px;
`;

export const ScoreText = styled.text`
  x: 50%;
  y: 50%;
  dominant-baseline: central;
  text-anchor: middle;
  font-size: 0.8rem;
`;
