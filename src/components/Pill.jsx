const Pill = ({ children }) => {
  return (
    <span className="px-4 py-2 border bg-black text-white mb-1 border-gray-200 rounded-full text-sm">
      {children}
    </span>
  );
};

export default Pill;