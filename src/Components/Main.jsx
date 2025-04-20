export default function Main() {
  return (
    <div
      className="border-16 border-black 
      bg-gray-500 text-black mt-4 w-80 min-h-80 
    "
    >
      <div
        className="border border-white w-full h-80
       rounded-md flex flex-col items-center  "
      >
        <h1 className="text-center mt-4 p-2 font-bold ">Tenzies</h1>
        <span className="block text-center p-2 ">
          Roll untill all the dice are the same.Click each dice to freeze it at
          its crrent value between the rolls{" "}
        </span>
        <section
          className="flex items-center justify-center mt-2
           flex-wrap gap-2"
        >
          <button className="border border-black w-8 mt-2 rounded-md">1</button>
          <button className="border border-black w-8 mt-2 rounded-md">1</button>
          <button className="border border-black w-8 mt-2 rounded-md">1</button>
          <button className="border border-black w-8 mt-2 rounded-md">1</button>
          <button className="border border-black w-8 mt-2 rounded-md">1</button>
          <button className="border border-black w-8 mt-2 rounded-md">1</button>
          <button className="border border-black w-8 mt-2 rounded-md">1</button>
          <button className="border border-black w-8 mt-2 rounded-md">1</button>
          <button className="border border-black w-8 mt-2 rounded-md">1</button>
          <button className="border border-black w-8 mt-2 rounded-md">1</button>
          <button className="border border-black w-8 mt-2 rounded-md">1</button>
          <button className="border border-black w-8 mt-2 rounded-md">1</button>
          <button className="border border-black w-8 mt-2 rounded-md">1</button>
          <button className="border border-black w-8 mt-2 rounded-md">1</button>
        </section>
        <button className="border border-black w-20 mt-6 rounded-md">
          Roll
        </button>
      </div>
    </div>
  );
}
