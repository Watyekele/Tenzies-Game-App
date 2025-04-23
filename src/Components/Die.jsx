export default function Die(props) {
  return (
    <>
      <button
        className="border border-none text-lg
        w-8 mt-2 rounded-md font-medium bg-white-100
        shadow-[2px_3px_3px_rgba(0,0,0,0.5)]"
      >
        {props.value}
      </button>
    </>
  );
}
