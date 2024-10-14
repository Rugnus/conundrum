import { Button, pxToRem, Timer } from "@conundrum/ui-kit";
import { Input } from "antd";
import { FC, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addGameStats } from "src/store/statSlice";
import { RootState } from "src/store/store";
import styled from "styled-components";
import { UserStats } from "./UserStats";

const SBlindTypeTraining = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: ${pxToRem(15)};
  align-items: center;
  margin: ${pxToRem(30)} auto;
`;

const SInputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  input {
    text-align: center;
    font-size: ${pxToRem(24)};
    width: 100%;
    height: ${pxToRem(70)};
    letter-spacing: ${pxToRem(2)};
  }
`;

export const BlindTypeTraining: FC = () => {
  const dispatch = useDispatch();

  const correctLettersRef = useRef<number>(0);
  const userMistakesRef = useRef<number>(0);
  const lettersPerSecondRef = useRef<number>(0.0);
  const correctPercentageRef = useRef<string>("0%");

  const stats = useSelector((state: RootState) => state.statSlice.gameStats);

  const gameStats =
    stats.length > 0 &&
    stats?.find((item) => item.gameName === "Blind Type Training").stats;

  const [userInput, setUserInput] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);
  const [isInputDisabled, setIsInputDisabled] = useState<boolean>(true);
  const [correctLetters, setCorrectLetters] = useState<number>(0);
  const [userMistakes, setUserMistakes] = useState<number>(0);
  const [correctPercentage, setCorrectPercentage] = useState<string>("0%");
  const [lettersPerSecond, setLettersPerSecond] = useState<number>(0.0);

  const [duration, setDuration] = useState<number>(60000);
  const minutes = Math.floor(duration / 60000);
  const seconds = Math.floor((duration % 60000) / 1000);
  const [timeRange, setTimeRange] = useState<string>(
    `${minutes}:${seconds.toString().padStart(2, "0")}`
  );

  useEffect(() => {
    const minutes = Math.floor(duration / 60000);
    const seconds = Math.floor((duration % 60000) / 1000);
    setTimeRange(`${minutes}:${seconds.toString().padStart(2, "0")}`);
  }, [duration]);

  useEffect(() => {
    inputRef?.current?.focus();
  }, []);

  useEffect(() => {
    setCorrectPercentage(
      `${((correctLetters / (correctLetters + userMistakes)) * 100).toFixed(
        2
      )}%`
    );

    correctLettersRef.current = correctLetters;
    userMistakesRef.current = userMistakes;
    correctPercentageRef.current = correctPercentage;
  }, [correctLetters, userMistakes]);

  const fetchRandomSentence = async () => {
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();

    return data.content;
  };

  const handleRandomSentence = async () => {
    const newSentence = await fetchRandomSentence();

    setUserInput(newSentence);
  };

  const handleStart = () => {
    setIsInputDisabled(false);

    const startTime = new Date().getTime();

    handleRandomSentence()
      .then(() => inputRef.current?.focus())
      .catch((e) => console.log(e))
      .finally(() => {
        const intervalId = setInterval(() => {
          const currentTime = new Date().getTime();
          const remainingTime = duration - (currentTime - startTime);
          const minutes = Math.floor(remainingTime / 60000);
          const seconds = Math.floor((remainingTime % 60000) / 1000);
          setTimeRange(`${minutes}:${seconds.toString().padStart(2, "0")}`);

          if (remainingTime <= 0) {
            const elapsedTime = duration / 1000; // Время в секундах
            const averageLPS = correctLettersRef.current / elapsedTime;

            setLettersPerSecond(parseFloat(averageLPS.toFixed(2)));
            lettersPerSecondRef.current = parseFloat(averageLPS.toFixed(2));

            dispatch(
              addGameStats({
                gameName: "Blind Type Training",
                stats: {
                  correctLetters: correctLettersRef.current,
                  mistakes: userMistakesRef.current,
                  accuracy: correctPercentageRef.current,
                  lettersPerSecond: lettersPerSecondRef.current,
                  duration: timeRange,
                },
              })
            );

            inputRef.current.value = "";
            setIsInputDisabled(true);
            setTimeRange(`0:00`);
          }
        }, 1000);
        return () => clearInterval(intervalId); // Cleanup
      });
  };

  const handleKeyChange = (
    e: React.KeyboardEvent<HTMLInputElement> &
      React.ChangeEvent<HTMLInputElement>
  ) => {
    const keyPressed = e.key;

    if (keyPressed === userInput[0]) {
      setUserInput((prev) => prev.slice(1));
      setCorrectLetters(correctLetters + 1);

      if (userInput.length === 1) {
        handleRandomSentence();
      }
    } else {
      setUserMistakes(userMistakes + 1);
      e.preventDefault();
    }
  };

  const addTime = () => {
    setDuration((prevDuration) => prevDuration + 30000);
  };

  const reduceTime = () => {
    if (duration !== 0) {
      setDuration((prevDuration) => prevDuration - 30000);
    } else {
      return;
    }
  };

  return (
    <SBlindTypeTraining>
      <SInputWrapper>
        <Input
          value={userInput}
          onKeyDown={handleKeyChange}
          disabled={isInputDisabled}
          ref={inputRef}
          readOnly
        />
      </SInputWrapper>
      <Timer timeRange={timeRange} addTime={addTime} reduceTime={reduceTime} />
      <Button title="Начать тренировку" onClick={handleStart} />{" "}
      <>
        <UserStats
          correctLetters={gameStats.correctLetters ?? correctLetters}
          userMistakes={gameStats.mistakes ?? userMistakes}
          correctPercentage={gameStats.accuracy ?? correctPercentage}
          lettersPerSecond={gameStats.lettersPerSecond ?? lettersPerSecond}
          isStateStat={!!stats.length}
        />
      </>
    </SBlindTypeTraining>
  );
};
