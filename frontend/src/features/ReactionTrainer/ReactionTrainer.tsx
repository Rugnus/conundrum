import { FC, useRef } from "react";
import { ReactionGameWrapper } from "./styled/SReaction";

export const ReactionTrainer: FC = () => {
  const gameRef = useRef<HTMLDivElement>();
  let startTime: number | null = null;
  const timeoutIdRef = useRef<number | null>(null);

  const startGameHandler = () => {
    if (
      gameRef.current.style.backgroundColor === "red" ||
      !gameRef.current.style.backgroundColor
    ) {
      gameRef.current.style.backgroundColor = "red";
      gameRef.current.innerHTML = `When color turns green click on it`;
      const delay = Math.floor(Math.random() * (6000 - 2000 + 2000)) + 2000;

      timeoutIdRef.current = setTimeout(() => {
        gameRef.current.style.backgroundColor = "green";
        startTime = Date.now();
        gameRef.current.onclick = () => {
          const clickTime = Date.now();
          const reactionTime = clickTime - startTime;
          if (gameRef.current.style.backgroundColor === "green") {
            gameRef.current.innerHTML = `Reaction time: ${reactionTime}ms`;
            timeoutIdRef.current = null;
            startTime = null;
            gameRef.current.onclick = () => {
              gameRef.current.style.backgroundColor = "red";
              startGameHandler();
            };
          }
        };
      }, delay);
    }
  };

  return (
    <ReactionGameWrapper onClick={startGameHandler} ref={gameRef}>
      Press on the screen to train reaction
    </ReactionGameWrapper>
  );
};
