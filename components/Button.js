export default function Button(props) {
  const { onClick, text, onHover } = props;
  return (
    <>
      <button
        className="bg-red text-white py-3 px-8 diag-corners-tl-br hover:bg-slate-500 duration-300"
        onClick={onClick}
      >
        {text}
      </button>
    </>
  );
}
