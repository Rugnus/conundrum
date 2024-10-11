export { FC } from "react";
import { Descriptions } from "antd";
import { FC } from "react";

interface IUserStats {
  correctLetters: number;
  userMistakes: number;
  correctPercentage: string;
  lettersPerSecond?: number;
}

export const UserStats: FC<IUserStats> = ({
  correctLetters,
  userMistakes,
  correctPercentage,
  lettersPerSecond,
}) => {
  return (
    <>
      <Descriptions title="Статистика" bordered>
        <Descriptions.Item label="Correct: ">
          {correctLetters}
        </Descriptions.Item>
        <Descriptions.Item label="Mistakes">{userMistakes}</Descriptions.Item>
        <Descriptions.Item label="Percentage of correct entries">
          {correctPercentage}
        </Descriptions.Item>
        <Descriptions.Item label="Letters per second">
          {lettersPerSecond}
        </Descriptions.Item>
      </Descriptions>
    </>
  );
};
