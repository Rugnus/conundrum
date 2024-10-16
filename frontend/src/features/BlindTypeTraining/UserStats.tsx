export { FC } from "react";
import { Button, Descriptions } from "antd";
import { FC } from "react";

interface IUserStats {
  correctLetters: number;
  userMistakes: number;
  correctPercentage: string;
  lettersPerSecond?: number;
  isStateStat?: boolean;
  onSave?: () => void;
}

export const UserStats: FC<IUserStats> = ({
  correctLetters,
  userMistakes,
  correctPercentage,
  lettersPerSecond,
  isStateStat,
  onSave,
}) => {
  return (
    <>
      <Descriptions
        title={isStateStat ? "Последний результат" : "Статистика"}
        bordered
      >
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

      {isStateStat && (
        <Button type="primary" onClick={onSave}>
          Сохранить результат
        </Button>
      )}
    </>
  );
};
