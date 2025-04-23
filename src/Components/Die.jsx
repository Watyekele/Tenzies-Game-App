export default function Die(props) {
  return (
    <button
      className={`border border-none text-lg
        w-8 mt-2 rounded-md font-bold ${
          props.status ? "bg-green-500" : "bg-white-100"
        } 
        shadow-[2px_3px_3px_rgba(0,0,0,0.5)] cursor-pointer `}
      onClick={() => props.hold(props.id)}
    >
      {props.value}
    </button>
  );
}
