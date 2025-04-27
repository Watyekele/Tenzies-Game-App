import { useRef, useState } from "react";

import { useEffect } from "react";
import DieComp from "./DieComp";
import ReactConfetti from "react-confetti";
import { useWindowSize } from "@react-hook/window-size";

export default function Main() {
  function generateDice(id) {
    return {
      id: id,
      value: Math.floor(Math.random() * 6 + 1),
      isHeld: false,
    };
  }

  function allNewDice() {
    const Dice = [];

    for (let i = 0; i < 10; i++) {
      Dice.push(generateDice(i));
    }

    return Dice;
  }

  const [Dice, setDice] = useState(() => allNewDice());
  const [time, setTime] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  const playButton = useRef(null);
  const timerRef = useRef(null);

  const gameWon =
    Dice.every((Die) => Die.isHeld) &&
    Dice.every((Die) => Die.value === Dice[0].value);

  useEffect(() => {
    if (gameWon) {
      playButton.current.focus();
    }
  }, [gameWon]);

  useEffect(() => {
    if (hasStarted && !gameWon) {
      timerRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(timerRef.current);
    }

    return () => clearInterval(timerRef.current);
  }, [hasStarted, gameWon]);

  const diceElements = Dice.map((Die, id) => (
    <DieComp
      key={Die.id}
      value={Die.value}
      status={Die.isHeld}
      hold={Hold}
      id={Die.id}
    />
  ));

  function Hold(id) {
    setDice((prevDice) =>
      prevDice.map((Die) =>
        Die.id === id ? { ...Die, isHeld: !Die.isHeld } : Die
      )
    );

    if (!hasStarted) {
      setHasStarted(true);
    }
  }

  function rollDice() {
    if (!gameWon) {
      setDice((prevDice) =>
        prevDice.map((Die) =>
          Die.isHeld
            ? Die
            : { ...Die, value: Math.floor(Math.random() * 6 + 1) }
        )
      );
    } else {
      setDice(allNewDice());
      setTime(0);
    }
  }
  function newGame() {
    setDice(allNewDice());
  }
  return (
    <div
      className="border-16 border-black 
      bg-gray-200 text-black mt-4 max-w-50 min-w-80 min-h-80 
    "
    >
      {gameWon && (
        <ReactConfetti numberOfPieces={1000} recycle={false} gravity={1.5} />
      )}
      <div
        className="border-2 border-white w-full h-80
       rounded-md flex flex-col items-center place-content-evenly  gap-2 flex-nowrap  "
      >
        <div className="header flex flex-col gap-2">
          {" "}
          <h1 className="text-center   font-bold ">Tenzies</h1>
          <span className="border border-dashed  p-1 text-sm rounded">
            {" "}
            <h2 className="font-semibold">Time: {time} seconds </h2>
          </span>
        </div>

        <span className="block text-center px-2 ">
          Roll untill all the dice are the same. Click each dice to freeze it at
          its current value between the rolls.{" "}
        </span>
        <section className="grid grid-cols-5 grid-rows-2 gap-4 ">
          {diceElements}
        </section>

        <button
          onClick={rollDice}
          ref={playButton}
          className={`border border-none
            min-w-20 rounded-md bg-blue-700 text-white
            font-medium p-1 hover:opacity-50
            cursor-pointer shadow-[4px_6px_10px_rgba(0,0,0,0.5)]
            transition-all duration-500 ease-out 
            ${
              gameWon
                ? "scale-110 opacity-100 animate-pulse "
                : "scale-100 opacity-90"
            }
          `}
        >
          {gameWon ? <p>New Game</p> : <p> Roll</p>}
        </button>
      </div>
    </div>
  );
}
