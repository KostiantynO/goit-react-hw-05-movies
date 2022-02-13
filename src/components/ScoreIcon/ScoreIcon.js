import {
  ScoreIconStyled,
  Group,
  TrackCircle,
  ScoreCircle,
  ScoreText,
} from './ScoreIcon.styled';

export const ScoreIcon = ({ size, score }) => {
  return (
    <ScoreIconStyled score={score} size={size}>
      <Group>
        <TrackCircle r={size} />
        <ScoreCircle r={size} score={score} />
      </Group>

      <ScoreText
        x="50%"
        y="50%"
        dominant-baseline="central"
        text-anchor="middle"
      >
        {score * 10}%
      </ScoreText>
    </ScoreIconStyled>
  );
};
