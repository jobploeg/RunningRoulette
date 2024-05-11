interface ButtonTypes {
  primary: string;
  clear: string;
}

interface ButtonProps {
  type: keyof ButtonTypes;
  className?: string;
  children: React.ReactNode;
}
export const Button = ({ type, className, children }: ButtonProps) => {
  if (type === "primary") {
    return (
      <button
        className={`border border-1 border-black rounded p-2 hover:shadow-md bg-amber-400 ${className}`}
      >
        {children}
      </button>
    );
  }

  if (type === "clear") {
    return (
      <button
        className={`border border-1 border-black rounded p-2 hover:shadow-md ${className}`}
      >
        {children}
      </button>
    );
  }
};
