interface ButtonTypes {
  primary: string;
  clear: string;
  icon: string;
}

interface ButtonProps {
  type: keyof ButtonTypes;
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
}
export const Button = ({ type, className, onClick, children }: ButtonProps) => {
  if (type === "primary") {
    return (
      <button
        className={`border border-1 border-black rounded p-2 hover:shadow-md bg-amber-400 h-min ${
          className || ""
        }`}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }

  if (type === "clear") {
    return (
      <button
        className={`border border-1 border-black rounded p-2 hover:shadow-md h-min ${
          className || ""
        }`}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }

  if (type === "icon") {
    return (
      <button
        className={`hover:scale-110 ${className || ""}`}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
};
