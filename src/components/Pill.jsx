const Pill = ({ children }) => {
  return (
    <span className="px-4 py-2 border border-gray-200 rounded-full text-sm">
      {children}
    </span>
  );
};

export default Pill;