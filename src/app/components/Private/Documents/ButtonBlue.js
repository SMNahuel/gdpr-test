function ButtonBlue() {
  return (
    <div
      className="flex flex-col rounded text-center h-full w-full text-[1.8rem] min-h-[64px] justify-center bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-600 text-white font-bold"
      style={{
        backgroundImage:
          "linear-gradient(45deg, rgb(63, 81, 181), rgb(96, 116, 203), rgb(63, 81, 181))",
      }}
    >
      See Documents
    </div>
  );
}

export default ButtonBlue;
