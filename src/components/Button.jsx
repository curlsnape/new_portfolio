import { NavLink } from "react-router";

const Button = ({ to, children, className = "" }) => {
  return (
    <NavLink
      to={to}
      className={`inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-black text-white font-medium ${className}`}
    >
      {children}
    </NavLink>
  );
};

export default Button;
