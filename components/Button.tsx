interface ButtonTypes {
  primary: string;
  clear: string;
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
        className={`border border-1 border-black rounded p-2 hover:shadow-md bg-amber-400 ${
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
        className={`border border-1 border-black rounded p-2 hover:shadow-md ${
          className || ""
        }`}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
};
