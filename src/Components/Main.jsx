import { useState } from "react";

import Die from "./Die";

export default function Main() {
  function generateDice(id) {
    return {
      id: id,
      randomNum: Math.floor(Math.random() * 6 + 1),
      isHeld: false,
    };
  }

  function allNewDice() {
    const numbers = [];

    for (let i = 0; i < 10; i++) {
      numbers.push(generateDice(i));
    }

    return numbers;
  }

  const [numbers, setNumbers] = useState(allNewDice());

  const diceElements = numbers.map((number, id) => (
    <Die
      key={number.id}
      value={number.randomNum}
      status={number.isHeld}
      hold={Hold}
      id={number.id}
    />
  ));

  function Hold(id) {
    setNumbers((prevNumbers) =>
      prevNumbers.map((number) =>
        number.id === id ? { ...number, isHeld: !number.isHeld } : number
      )
    );
  }

  function rollDice() {
    setNumbers((prevNumbers) =>
      prevNumbers.map((number) =>
        number.isHeld
          ? number
          : { ...number, randomNum: Math.floor(Math.random() * 6 + 1) }
      )
    );
  }

  return (
    <div
      className="border-16 border-black 
      bg-gray-200 text-black mt-4 w-80 min-h-80 
    "
    >
      <div
        className="border-2 border-white w-full h-80
       rounded-md flex flex-col items-center gap-2  "
      >
        <h1 className="text-center mt-4 p-2 font-bold ">Tenzies</h1>
        <span className="block text-center p-2 ">
          Roll untill all the dice are the same. Click each dice to freeze it at
          its crrent value between the rolls{" "}
        </span>
        <section className="grid grid-cols-5 grid-rows-2 gap-4">
          {diceElements}
        </section>

        <button
          onClick={rollDice}
          className="border border-none
         w-20 mt-6 rounded-md bg-blue-700 text-white
          font-bold hover:opacity-[50%]
           cursor-pointer shadow-[4px_6px_10px_rgba(0,0,0,0.5)]"
        >
          Roll
        </button>
      </div>
    </div>
  );
}
