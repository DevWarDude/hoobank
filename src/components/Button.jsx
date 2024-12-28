function Button(prop) {
  return (
    <button
      className={` text-black font-bold rounded-md mt-6 bg-gradient-to-b from-cyan-200 p-3 px-5  to-cyan-500 outline-none sm:px-7 sm:text-xl sm:py-4 tracking-wide sm:tracking-wider ${prop.className} w-fit`}
    >
      {prop.children ? prop.children : "Get Started"}
    </button>
  );
}

export default Button;
